import { defineComponent, PropType, provide } from 'vue';
import { FORMCONTEXT, FORMITEMCONTEXT, FORMKEY, FtFormRules, validateCb } from './types';
import './index.scss';
import { useExpose } from '@/uses';
import { ErrorList } from 'async-validator';

export default defineComponent({
  name: 'FtForm',
  props :{
    model: {
      type: Object,
      required: true,
    },
    rules: Object as PropType<FtFormRules>
  },
  emits: ['validate'],
  setup(props, {emit, slots}) {
    // const instance = getCurrentInstance();
    // console.log('instance', instance);
    // console.log('default', slots.default!());
  
    // const instance = getCurrentInstance();
    // console.log(instance);
    // if (instance) {
    //   Object.assign(instance.proxy, {
    //     validate:() => {}
    //   })
    // }
    const formItems : FORMITEMCONTEXT[] = [];
    const addItem = (item: FORMITEMCONTEXT) => {
      formItems.push(item);
      console.log(formItems, 'formItems');
    }
    const removeItem = (id: string) => {
      if(formItems.length) {
        const index = formItems.findIndex(item => item.id === id);
        if(index > -1) {
          formItems.splice(index);
        }
      }
    }
    provide<Partial<FORMCONTEXT>>(FORMKEY, {
      model: props.model,
      rules: props.rules,
      addItem,
      removeItem,
    })
    const validate = (callback?: (valid: boolean) => void): Promise<boolean | ErrorList> => {
      return Promise.all(
        formItems
        .filter(item => item.prop)
        .map(item => item.validate(props.model[item.prop]))
      ).then(() => {
        if(callback) {
          callback(true);
        }
        emit('validate', true);
        return Promise.resolve(true);
      }).catch(errors => {
        if(callback) {
          callback(false)
        }
        emit('validate', errors);
        return Promise.reject(errors);
      })
    }
    useExpose<{validate: validateCb}>({ validate });
    // return () => {
    //   return (
    //     <div class="ft-form">
    //       { slots.default!() }
    //     </div>
    //   )
    // }
    const onSubmit = (event: Event) => {
      event.preventDefault();
      validate();
    }
    return () => {
      return (
        <form class="ft-form" onSubmit={ onSubmit }>
          { slots.default!() }
        </form>
      )
    }
  },
  // methods: {
  //   validate() {
  //     console.log('validate');
  //   }
  // }
});
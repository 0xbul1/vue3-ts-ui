import { defineComponent, PropType, provide } from 'vue';
import { FORMCONTEXT, FORMKEY, FtFormRules, validateCb } from './types';
import './index.scss';
import { useExpose } from '@/uses';
import { ErrorList } from 'async-validator';

export default defineComponent({
  name: 'FtForm',
  props :{
    model: Object,
    rules: Object as PropType<FtFormRules>
  },
  setup(props, {emit, slots}) {
    provide<Partial<FORMCONTEXT>>(FORMKEY, {
      model: props.model,
      rules: props.rules,
    })
    // const instance = getCurrentInstance();
    // console.log(instance);
    // if (instance) {
    //   Object.assign(instance.proxy, {
    //     validate:() => {}
    //   })
    // }
    const validate = (callback?: (valid: boolean) => void): Promise<boolean | ErrorList> => {
      console.log('form-valid');
      if(callback) {
        callback(true);
      }
      return Promise.resolve(true);
    }
    useExpose<{validate: validateCb}>({ validate });
    return () => {
      return (
        <div class="ft-form">
          { slots.default!() }
        </div>
      )
    }
  },
  // methods: {
  //   validate() {
  //     console.log('validate');
  //   }
  // }
});
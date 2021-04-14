import { useExpose } from '@/uses';
import Schema, { ErrorList } from 'async-validator';
import { defineComponent, PropType, provide, ref, inject, onMounted, onBeforeUnmount } from 'vue';
import { FORMCONTEXT, FORMITEMCONTEXT, FORMITEMKEY, FORMKEY, FtRuleItem , ValidTrigger} from './types';
let id = 0;
function generateId():string {
  return 'form-item' + id++;
} 

export default defineComponent({
  name: 'FtFormItem',
  props:{
    label:{
      type: String,
      default: '',
    },
    prop: {
      type: String,
      default: '',
    },
    rules: {
      type: [Object, Array] as PropType<FtRuleItem | FtRuleItem[]>,
      // default: () => ({})
    }
  },
  setup(props, { emit, slots }) {
    const currentId = generateId();
    const errMsg = ref('');
    const parent = inject<FORMCONTEXT>(FORMKEY);
    onMounted(() =>{
      parent?.addItem({
        id: currentId,
        prop: props.prop,
        validate,
      })
    });
    onBeforeUnmount(() => {
      parent?.removeItem(currentId);
    });
    const getRules = (trigger?: ValidTrigger):FtRuleItem[] => {
      const rules = props.rules || parent?.rules[props.prop];
      if(rules) {
        const ruleArr = Array.isArray(rules) ? rules : [rules];
        if(trigger) {
          return ruleArr.filter(item => item.trigger === trigger);;
        }
        return ruleArr;
      }
      return [];
    }
    // const validTrigger = computed(() => getRules()?.trigger || 'change');
    const validate = (value: string, rules?: FtRuleItem[]):Promise<boolean | ErrorList> => {
      const trueRules = rules || getRules();
      if(trueRules.length && props.prop) {
        const schema = new Schema({[props.prop]: trueRules});
        return schema.validate({[props.prop]: value}).then(() => {
          errMsg.value = '';
          return true;
        }).catch(({ errors }) => {
          errMsg.value = errors[0].message;
          return Promise.reject(errors);
        })
      }
      return Promise.resolve(true);
    }
    const handlerControlChange = (value: string) => {
      const trueRules = getRules('change');
      if(trueRules.length) {
        validate(value, trueRules);
      }
    }
    const handlerControlBlur = (value: string) => {
      const trueRules = getRules('blur');
      if(trueRules.length) {
        validate(value, trueRules).catch(error => {
          console.error(error);
        });
      }
    }
    provide<Partial<FORMITEMCONTEXT>>(FORMITEMKEY, {
      handlerControlChange,
      handlerControlBlur,
    });
    const renderLabel = () => {
      return slots.label? slots.label() : <label class='item-label'>{ props.label }</label>
    };
    // useExpose({validate});
    return () => {
      return (
        <div class='ft-form-item'>
          { renderLabel() }
          <div class='item-content'>
            <div class='item-content-wrap'>
            { slots.default!() }
            </div>
            <p class='item-error' v-show={errMsg.value}>
              {errMsg.value}
            </p>
          </div>
        </div>
      )
    }
  }
})
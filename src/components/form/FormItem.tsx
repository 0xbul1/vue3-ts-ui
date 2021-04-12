import Schema from 'async-validator';
import { defineComponent, PropType, provide, ref, computed } from 'vue';
import './index.scss';
import { FORMITEMKEY, FtRuleItem , ValidTrigger} from './types';

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
      default: () => ({})
    }
  },
  setup(props, { emit, slots }) {
    const errMsg = ref('');
    const getRules = (trigger: ValidTrigger):FtRuleItem[] => {
      const rules = props.rules;
      const ruleArr = Array.isArray(rules) ? rules : [rules];
      return ruleArr.filter(item => {
        const itemTrigger = item?.trigger || 'change';
        return itemTrigger === trigger;
      });;
    }
    // const validTrigger = computed(() => getRules()?.trigger || 'change');
    const validate = (value: string, rules: FtRuleItem[]):Promise<any> => {
      // const rules = getRules();
      if(rules && props.prop) {
        const schema = new Schema({[props.prop]: rules});
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
    provide(FORMITEMKEY, {
      handlerControlChange,
      handlerControlBlur,
    });
    const renderLabel = () => {
      return slots.label? slots.label() : <label class='item-label'>{ props.label }</label>
    };
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
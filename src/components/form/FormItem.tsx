import Schema, { RuleItem } from 'async-validator';
import { defineComponent, PropType, provide, ref, computed } from 'vue';
import './index.scss';
import { FORMITEMKEY, FtRuleItem } from './types';

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
    rules: [Object, Array] as PropType<RuleItem | RuleItem[]>
  },
  setup(props, { emit, slots }) {
    const errMsg = ref('');
    const getRules = ():FtRuleItem |FtRuleItem[] | undefined => {
      return props.rules;
    }
    const validTrigger = computed(() => getRules()?.trigger || 'change');
    const validate = (value: string):Promise<any> => {
      const rules = getRules();
      if(rules && props.prop) {
        const schema = new Schema({[props.prop]: rules});
        return schema.validate({[props.prop]: value}).then(() => {
          errMsg.value = '';
          return true;
        }).catch(({ errors }) => {
          errMsg.value = errors[0].message;
          return errors;
        })
      }
      return Promise.resolve(true);
    }
    const handlerControlChange = (value: string) => {
      validate(value);
    }
    const handlerControlBlur = (value: string) => {
      validate(value);
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
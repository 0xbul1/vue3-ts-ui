import { defineComponent, PropType, provide } from 'vue';
import { FORMCONTEXT, FORMKEY, FtFormRules } from './types';
import './index.scss';

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
    return () => {
      return (
        <div class="ft-form">
          { slots.default!() }
        </div>
      )
    }
  }
});
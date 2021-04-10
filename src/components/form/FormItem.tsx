import { defineComponent, ref } from 'vue';
import './index.scss';

export default defineComponent({
  name: 'FtFormItem',
  props:{
    label:{
      type: String,
      default: '',
    }
  },
  setup(props, { emit, slots }) {
    const errMsg = ref('');
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
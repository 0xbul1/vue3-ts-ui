import { defineComponent } from 'vue';
import './index.scss';

export default defineComponent ({
  name: 'FtInput',
  inheritAttrs: false,
  props:{
    modelValue: {
      type: String,
      default: '',
    }
  },
  emits: ['update:modelValue'],
  setup(props, {emit, attrs}) {
    console.log(attrs, 'attrs');
    console.log(attrs.readonly, 'attrs');
    console.log(typeof attrs.readonly, 'attrs');
    const onInput = (event: Event) => {
      const value = (event.target as HTMLInputElement).value;
      if (value !== props.modelValue) {
        emit('update:modelValue', value);
      }
    }
    return () => {
      return(
        <div class='ft-field-wrap'>
          <input
            placeholder={attrs.placeholder as string}
            class='ft-field'
            type="text"
            onInput={onInput}
            value={props.modelValue}
          />
        </div>
      );
    }
  }
})

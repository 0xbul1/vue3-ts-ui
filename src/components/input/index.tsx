import { defineComponent, inject } from 'vue';
import { FORMITEMCONTEXT, FORMITEMKEY } from '../form/types';
import './index.scss';

export default defineComponent ({
  name: 'FtInput',
  inheritAttrs: false,
  props:{
    modelValue: {
      type: String,
      default: '',
    },
    type: {
      validator: (value: string) => {
        return ['text', 'password', 'number', 'tel', 'textarea', 'time'].includes(value);
      },
      default: 'text',
    }
  },
  emits: ['update:modelValue'],
  setup(props, {emit, attrs}) {
    console.log(attrs, 'attrs');
    console.log(attrs.readonly, 'attrs');
    console.log(typeof attrs.readonly, 'attrs');
    const formItemContext = inject<FORMITEMCONTEXT>(FORMITEMKEY);
    const onInput = (event: Event) => {
      const value = (event.target as HTMLInputElement).value;
      if (value !== props.modelValue) {
        emit('update:modelValue', value);
        formItemContext?.handlerControlChange(value);
      }
    }
    const onBlur = () => {
      formItemContext?.handlerControlBlur(props.modelValue);
    }
    return () => {
      return(
        <div class='ft-field-wrap'>
          <input
            placeholder={attrs.placeholder as string}
            class='ft-field'
            type={props.type}
            onInput={onInput}
            onBlur={onBlur}
            value={props.modelValue}
            autocomplete="off"
          />
        </div>
      );
    }
  }
})

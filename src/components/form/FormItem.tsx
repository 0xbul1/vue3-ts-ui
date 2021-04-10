import { defineComponent } from 'vue';
import './index.scss';

export default defineComponent({
  name: 'FtFormItem',
  setup(props, { emit }) {
    return () => {
      return (
        <div class='fr-form-item'>
          <label class='item-label'>
            name:
          </label>
          <div class='item-content'>
            <div class='item-content-wrap'>
            <ftInput type='text'/>
            </div>
            <p class='item-error'>请输入姓名</p>
          </div>
        </div>
      )
    }
  }
})
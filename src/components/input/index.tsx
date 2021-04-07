import { defineComponent } from 'vue';
import './index.scss';

export default defineComponent ({
  name: 'FtInput',
  setup(props, {emit}) {
    return ()=> {
      return(
        <div class='ft-field-wrap'>
          <input class='ft-field' type="text"/>
        </div>
      )
    }
  }
})
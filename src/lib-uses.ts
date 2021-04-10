import { App } from 'vue';
import Input from  './components/input/index';
import FormItem from  './components/form/FormItem';

const components = [
    Input,
    FormItem,
]

export default function (app: App) {
    // 相当于直接调用install方法
    components.forEach(item => app.component(item.name, item));
}

// export default {
//     install(){
//
//     },
//     ...
// }

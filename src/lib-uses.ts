import Input from  './components/input/index';
import { App } from 'vue';

const components = [
    Input,
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

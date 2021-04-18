import { App } from 'vue';
import Input from  './components/input/index';
import Form from  './components/form/Form';
import FormItem from  './components/form/FormItem';
import Tabs from  './components/tabs/index';
import TabPane from "@/components/tabs/TabPane";

const components = [
    Input,
    Form,
    FormItem,
    Tabs,
    TabPane,
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

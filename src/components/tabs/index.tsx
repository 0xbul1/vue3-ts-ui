import { defineComponent, provide, ref, onMounted, watch } from 'vue';
import './index.scss'
import {TabContext, TabPaneContext, TabsKey} from "@/components/tabs/types";

export default defineComponent({
    name: 'FtTabs',
    props: {
        modelValue: {
            type: String,
            default: '',
        },
    },
    emits: ['update:modelValue'],
    setup(props, {emit, slots}) {
        const panels = ref<TabPaneContext[]>([]);
        const currentTabName = ref(props.modelValue);
        const addPane = (pane: TabPaneContext) => {
            panels.value.push(pane);
        }
        const removePane = (name: string) => {
            if(panels.value.length){
                const index = panels.value.findIndex(item => item.name === name);
                if (index > -1) {
                    panels.value.splice(index, 1);
                }
            }
        }
        const updatePaneVisible = () => {
            if(panels.value.length) {
                panels.value.forEach(item => {
                    item.changeShow(item.name === currentTabName.value);
                })
            }
        }
        onMounted(() => {
            if(!currentTabName.value && panels.value.length) {
                // currentTabName.value = panels.value[0].name;
                emit('update:modelValue', panels.value[0].name);
            }
            // 在mounted里面update，才能保证panels存在
            updatePaneVisible();
        })
        watch(() => props.modelValue, newVal => {
            currentTabName.value = newVal;
        })
        provide<TabContext>(TabsKey, {
            addPane,
            removePane,
        })
        const tabClick = (name: string) => {
            if(name !== currentTabName.value) {
                emit('update:modelValue', name);
            }
        }
        const renderNavs = () => {
            return panels.value.map(item => {
                const extraClass = item.name === currentTabName.value ? 'active' : '';
                return <div class={"ft-tab-pane " + extraClass} onClick={tabClick.bind(null, item.name)}>{item.name}</div>
            })
        }
        return () => {
            return (
                <div class="ft-tabs">
                    <div class="navs">
                        {/*<div class="ft-tab-pane">Tab1</div>*/}
                        {/*<div class="ft-tab-pane active">Tab2</div>*/}
                        {/*<div class="ft-tab-pane">Tab3</div>*/}
                        { renderNavs() }
                    </div>
                    {slots.default!()}
                </div>
            )
        }
    }
})

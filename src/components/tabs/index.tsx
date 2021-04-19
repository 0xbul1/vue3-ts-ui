import { defineComponent, provide } from 'vue';
import './index.scss'
import {TabContext, TabPaneContext, TabsKey} from "@/components/tabs/types";

export default defineComponent({
    name: 'FtTabs',
    setup(props, {emit, slots}) {
        const panels: TabPaneContext[] = [];
        const addPane = (pane: TabPaneContext) => {
            panels.push(pane);
        }
        const removePane = (name: string) => {
            if(panels.length){
                const index = panels.findIndex(item => item.name === name);
                if (index> -1) {
                    panels.splice(index, 1);
                }
            }
        }
        provide<TabContext>(TabsKey, {
            addPane,
            removePane,
        })
        const renderNavs = () => {
            console.log(panels, 'panels');
            return panels.map(item => {
                return <div class="ft-tab-pane">{item.name}</div>
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

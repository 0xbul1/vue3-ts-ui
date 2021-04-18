import { defineComponent } from 'vue';
import './index.scss'

export default defineComponent({
    name: 'FtTabs',
    setup(props, {emit, slots}) {
        return () => {
            return (
                <div class="ft-tabs">
                    <div class="navs">
                        <div class="ft-tab-pane">Tab1</div>
                        <div class="ft-tab-pane active">Tab2</div>
                        <div class="ft-tab-pane">Tab3</div>
                    </div>
                    {slots.default!()}
                </div>
            )
        }
    }
})

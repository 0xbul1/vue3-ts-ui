import { defineComponent } from 'vue';

export default defineComponent({
    name: 'FtTabPane',
    setup(props,{emit, slots}) {
        return ()=> {
            return (
                <div class="pane">
                    { slots.default!() }
                </div>
            )
        }
    }
})

import { defineComponent, inject, onMounted, onBeforeUnmount } from 'vue';
import {TabContext, TabsKey} from "@/components/tabs/types";

export default defineComponent({
    name: 'FtTabPane',
    props: {
        name: {
            type: String,
            required: true,
        }
    },
    setup(props,{emit, slots}) {
        const parent = inject<TabContext>(TabsKey);
        onMounted(()=> {
            parent?.addPane({
                name: props.name,
            })
        }),
        onBeforeUnmount(() => {
            parent?.removePane(props.name);
        })
        return ()=> {
            return (
                <div class="pane">
                    { slots.default!() }
                </div>
            )
        }
    }
})

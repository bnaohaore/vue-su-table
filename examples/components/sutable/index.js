
import suTable  from  './suTable.vue';
import suTableColumn  from './suTableColumn';
import suTableEdit  from './suTableEdit.vue';
import suSelect  from './suSelect.vue';
import suOption  from './suOption.vue';
import suTableSync  from './suTableSync';
import  Popover  from  'element-ui/lib/popover'
suTable.install=(Vue)=>{
        /**
         * 表格可编辑功能组件
         * 使用参考test.vue
         * author 应进兵
         * */

        Vue.component('suPopover',Popover);
        Vue.component(suTable.name,suTable);
        Vue.component(suTableColumn.name,suTableColumn);
        Vue.component(suTableEdit.name,suTableEdit);
        Vue.component(suSelect.name,suSelect);
        Vue.component(suOption.name,suOption);
        Vue.component(suTableSync.name,suTableSync);
    };

// 导出组件
export default suTable;
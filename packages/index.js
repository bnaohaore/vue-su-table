// 导入单个组件


import suTable  from  './suTable.vue';
import suTableColumn  from './suTableColumn';
import suTableEdit  from './suTableEdit.vue';
import suTableSync  from './suTableSync';
import suSelect  from './suSelect';
import suOption  from './suOption';
import suPopover   from  './suPopover'
import suCheckbox   from  './suCheckbox.js'
import suTableMenban   from  './suTableMenban.vue'
// 以数组的结构保存组件，便于遍历
const components = [
    suPopover,
    suOption,
    suTable,
    suTableColumn,
    suTableEdit,
    suTableSync,
    suSelect,
    suCheckbox,
    suTableMenban
];
// 定义 install 方法
let install = function (Vue) {
    if (install.installed) return;
    install.installed = true;
    // 遍历并注册全局组件
    /**
     * 表格可编辑功能组件
     * 使用参考test.vue
     * author 应进兵
     * */
    components.map(arr=>{
        Vue.component(arr.name,arr);
    })

};

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}

export default {
    install,
    suPopover,
    suOption,
    suTable,
    suTableColumn,
    suTableEdit,
    suTableSync,
    suSelect,
    suCheckbox
}
/*export { suTable }*/

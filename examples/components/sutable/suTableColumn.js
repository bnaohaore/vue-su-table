
    export default {
        name:'suTableColumn',
        created(){
            this.customRender = this.$options.render;
            this.$options.render = h => h('div', this.$slots.default);
        },

        mounted(){
            this.$parent.set_headerdata({
                $scopedSlots:this.$scopedSlots,
                fixed:this.fixed,
                width:this.width,
                prop:this.prop,
                label:this.label
            });
        },
        props:{
            //浮动标识
            fixed:{
                default: false,
                type:Boolean
            },   //是否左浮动
            //col宽度
            width:{
                default: 160,
                type:Number
            },
            //字段名称
            prop:null,
            //头部 text
            label:{
                default:''
            }
        },
        methods: {

        },
        watch: {},
        components: {}
    }



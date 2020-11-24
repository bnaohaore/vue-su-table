
    export default {
        name:'suTableColumn',
        created(){
            this.customRender = this.$options.render;
            this.$options.render = h => h('div', this.$slots.default);
        },
        beforeDestroy(){
            for(var sd in this.data){
                this.data[sd]=null
            }
        },
        mounted(){
            this.$parent.set_headerdata({
                align:this.align == 'right' ? 'su_align_right' : this.align=='center'?  'su_align_center' : 'su_align_left',
                $scopedSlots:this.$scopedSlots,
                fixed:this.fixed,
                width:this.width,
                prop:this.prop,
                label:this.label,
                type:this.type
            });
          /*  if(this.type=='checkbox'){
                this.$parent.
            }*/

        },
        props:{
            align:{
                default: 'left',
                type:String
            },
            //默认空 checkbox为开启复选框
            type:{
                default: '',
                type:String
            },
            //浮动标识
            fixed:{
                default: false,
                type:Boolean
            },   //是否左浮动
            //col宽度
            width:{
                default: 160,
                type:[Number,String]
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



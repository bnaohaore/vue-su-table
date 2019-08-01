<template>
    <div  class="su-table-out su-table-out-edit-class"   ref="tableout" style="display: flex;flex-direction: column;position: relative;height: 100%;width: 100%;">
        <!--渲染header虚拟dom并设置隐藏 没有实际意义但是 不渲染将找不到 this.$children 以及 column组件内的slot-->
        <div style="display: none"><slot></slot></div>
        <!--拖拽虚线-->
        <div class="su-table-xx" :style="{left: xx_data.left+'px'}" v-show="xx_data.show"></div>
        <!--header-->
        <template v-if="showbody">
            <div class="su-table-out-header" ref="suHeaderFef" style="display: flex;flex-direction: row;background: #cbdbe1;" >
                <su-table-header    :style="{transform:'translateX('+-bodyleft+'px)',width:bodyWidth+'px'}" ref="headerOut" :headerData="headerData"></su-table-header><div style="height: 100%;background: #cbdbe1;flex:1;"></div>
            </div>
            <div v-if="headerData[0].fixed" class="su-table-out-header-fixed-right" :class="{bodysleft1:bodyleft!=0}" :style="{width:leftFixedWidth+'px'}" style="display: flex;flex-direction: row;overflow: hidden">
                <su-table-header :isfixed="true" :style="{width:bodyWidth+'px'}" style="flex:1"  :headerData="headerData"></su-table-header><!--<div style="height: 100%;background: #cbdbe1;" :style="{width:scrollWidth+'px'}"></div>-->
            </div>
            <!--body-->
            <div class="su-table-out-bodys"   @scroll="setscroll" ref="bodyoutref" style="flex:1;overflow: auto;">
                <su-table-body ref='tablebody_ref'  :style="{width:bodyWidth+'px'}" @mousemove.native="bodymousemove"></su-table-body>
                <div :style="{ width: bodyWidth+'px' }" style="height: 100%;display: flex;align-items: center;justify-content: center" v-if="!tableData || tableData.length === 0">
                    <span class="el-table__empty-text">暂无数据</span>
                </div>
            </div>
            <div @mousewheel="fixed_set_body_scroll"  v-if="headerData[0].fixed"  :style="{ height:(bodyHeight-8)+'px',top:suHeaderHeight+'px',width:leftFixedWidth+'px'}" class="su-table-out-bodys-flexd-right" :class="{bodysleft0:bodyleft!=0}" style="height: 100%;overflow: hidden;">
                <su-table-body :isfixed="true" ref="tablebody_fixed_ref" @mousemove.native="bodymousemove" :style="{transform:'translateY('+-bodytop+'px)',width:bodyWidth+'px'}"></su-table-body>
            </div>
        </template>
    </div>
</template>
<script>
    import suTableHeader from './suTableHeader.js'
    import suTableBody from './suTableBody.js'
    import thottles from './thottles'
    let thottles_scroll=new thottles();
    export default {
        name:'suTable',
        data() {
            return {
                isEditRef:null,
                sync:false,
                xx_data:{
                    left:0,
                    show:false,
                },  //控制虚线

                showbody:false,
                mousmoveindex:null, //鼠标移入高亮行
                suHeaderHeight:0, //表头高度
                bodyHeight:0, //表格body高度
                bodyleft:0, //表格横向滚动距离
                bodytop:0, //表格纵向滚动高度
                headerData:[],  //用于渲染header节点 body节点
                scrollWidth:0, //header 内 填充table滚动条宽度

                durg_from:'',
                thTarget:null, //th对象
                durg_down:false, //拖拽中
                startdurgx:0, //拖拽起点
                startdurgx_s:0, //鼠标按下的位置
                isresize_move:false, //允许点击拖拽
            }
        },
        props:{
            tableData:{
                default:()=>[],
                type:Array
            }
        },
        created(){
            window.addEventListener('resize',this.set_init,false);
        },
        beforeDestroy(){

            for(var sd in this.data){
                this.data[sd]=null
            }

            window.removeEventListener('resize',this.set_init)
        },
        methods: {
            setEdit(edit){
                this.isEditRef=edit;
            },
            getNextEdit(row,col){
                let maxCol=this.headerData.length-1;
                let cols=col == maxCol ? 0 : parseFloat(col+1);
                let rows=col == maxCol ? parseFloat(row+1) : row;
                let editfixed=null;
                let edit=null;

                    editfixed=this.$refs.tablebody_fixed_ref.get_edit(rows,cols);

                    edit=this.$refs.tablebody_ref.get_edit(rows,cols);



                if(edit || editfixed){
                    let mmt=edit || editfixed;

                    if(mmt && !mmt.$parent.isfixed){
                       let hidex= (this.leftFixedWidth+this.$refs.tableout.getBoundingClientRect().x)-mmt.$el.getBoundingClientRect().x;
                       if(hidex>0){
                           this.$refs.bodyoutref.scrollLeft=this.$refs.bodyoutref.scrollLeft-hidex
                       }
                    };
                    return edit || editfixed
                } else {
                    if(rows>this.tableData.length-1){
                        console.log('终止查找 已到最后一个');
                        return false
                    }
                    return    this.getNextEdit(rows,cols);
                };
                //  return  this.$parent.get_edit(this.row,this.col);
            },
            set_durgData(val){
                this[val.key]=val['value']
            },
            set_durg_from(val){
              this.durg_from=val;
            },
            border_upclick(){
                this.$refs.headerOut.border_upclick()
            },
            //表格移入
            bodymousemove(){
              //  this.$refs.headerOut.headerMouseMove()
                //如果在拖拽中
                if(this.durg_down){
                    this.$refs.headerOut.headerMouseMove();
                    return
                }
            },
            //显示虚线状态
            set_xx_type(data){
              Object.assign(this.xx_data,data)
            },
            //获取所有可编辑格
            get_editArrs(){
                console.log(this)
            },
            //滚轮 js控制表格滚动
            fixed_set_body_scroll(){
                if(event.wheelDelta<0){
                    this.$refs.bodyoutref.scrollTop+=10
                }else {
                    this.$refs.bodyoutref.scrollTop-=10
                }
            },
            set_mousmoveindex(index){
                this.mousmoveindex=index
            },
            //body滚动触发
            setscroll(){
               this.$refs.tablebody_ref.$el.style.pointerEvents='none';
                thottles_scroll.timeEnd(()=>{
                    this.$refs.tablebody_ref.$el.style.pointerEvents='auto';
                },100);
                this.$nextTick(()=>{
                        this.bodytop=this.$refs.bodyoutref.scrollTop;
                        this.bodyleft=this.$refs.bodyoutref.scrollLeft;
                });
              //  this.$refs.headerOut.$el.setAttribute('style','transform: translateX(-20px);-webkit-transform: translateX(-20px)')
            },
            set_headerdata(data){
                this.headerData.push(data)
            },
            //设置初始化数据
           set_init(){
                  // this.scrollWidth=(this.$refs.tableout.offsetWidth-this.$refs.bodyoutref.offsetWidth);
                   this.bodyHeight=this.$refs.bodyoutref.offsetHeight;
                   this.suHeaderHeight=this.$refs.suHeaderFef.offsetHeight;
                   this.scrollWidth=(this.$refs.bodyoutref.offsetWidth-this.$refs.bodyoutref.clientWidth);
                //   let slotcol=this.$scopedSlots.default();

           }
        },
        mounted(){
            this.showbody=true;
            if(this.$parent.$options.name=='suTableSync'){
                this.sync=true
            }
            console.log(this.headerData);
            this.$nextTick(()=>{
                this.set_init();
            });

        },
        computed:{
            //设置浮动表格宽度
            leftFixedWidth(){

                let leftFixedWidth=0;
                if(this.headerData[0].fixed){
                    for(let sdgf=0;sdgf<this.headerData.length;sdgf++){
                        if(this.headerData[sdgf].fixed){
                            leftFixedWidth+=this.headerData[sdgf].width || 160
                        }else {
                            break;
                        }
                    }
                }
                return leftFixedWidth
            },
            bodyWidth(){
                let allwidth=0;
                this.headerData.forEach((arr)=>{
                    allwidth+=arr.width
                });
                console.log(allwidth);
                return  allwidth
            } //表格body宽度
        },
        watch: {},
        components: {
            suTableHeader,
            suTableBody
        }
    }
</script>

<style lang="scss">

        .su-table-sync-out{
            ::-webkit-scrollbar{
                width: 8px;
                height: 8px;
            }
            ::-webkit-scrollbar-track-piece {
                background-color: #eaeaea;
                -webkit-border-radius: 0;
            }
            ::-webkit-scrollbar-thumb {
                background-color: #d8d8d8;
                height: 50px;
                outline-offset: -2px;
                outline: 2px solid #fff;
                -webkit-border-radius: 5px;
                border: 0px solid #fff;
            }
            position: relative;
            height: 100%;
            display: flex;
            flex-direction: column;
            width: 100%;
            overflow: hidden;
        }
        .su-table-out-edit-class{
            ::-webkit-scrollbar{
                width: 8px;
                height: 8px;
            }
            ::-webkit-scrollbar-track-piece {
                background-color: #eaeaea;
                -webkit-border-radius: 0;
            }
            ::-webkit-scrollbar-thumb {
                background-color: #d8d8d8;
                height: 50px;
                outline-offset: -2px;
                outline: 2px solid #fff;
                -webkit-border-radius: 5px;
                border: 0px solid #fff;
            }

            table{

                td>div,td{
                    height: 26px;
                    padding: 0;
                    overflow: hidden;
                    box-sizing: border-box;
                }


               }
        }
        .su-table-out{
            box-sizing: border-box;
            width:100%;
            height: 100%;
            overflow: hidden;
            border: 1px solid #dee9eb;
            font-size: 14px;
            position: relative;
            .su-table-xx{
                width: 0;
                height: 100%;
                position: absolute;
                border-left:1px dashed darkgrey;
                left: 100px;
                top: 0;
                z-index: 9989;
            }
            .su_hover_tr{
                >span{
                    color: white;
                }
                background: #32c081;
            }
            .su-table-out-header td,th , .su-table-out-header-fixed-right td,th{
                background: #cbdbe1;
                font-weight:bold;
                border-top: 1px solid #dee9eb;
            }
            .su-table-out-header-fixed-right{
                position: absolute;
                top: 0;
                left: 0;
            }
            table{
                 td,th {
                    box-sizing: border-box;
                    border-bottom: 1px solid #dee9eb;
                    border-right: 1px solid #dee9eb;
                }


                font-size: 14px;
                table-layout: fixed;
               /* width:100%*/
            }
            .su-table-out-bodys-flexd-right{
                background: white;
                position: absolute;
                top: 0;
                left: 0;
                overflow: hidden;
            }
            .bodysleft0{
                box-shadow: 10px 1px 10px -10px  #888888;
            }
            .bodysleft1{
                box-shadow:  2px 10px 10px  #888888;
            }
            .su-table-edit{
               // border: 1px solid #dee9eb;
            }
            td ,.su-table-edit{
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
            }
        }
</style>

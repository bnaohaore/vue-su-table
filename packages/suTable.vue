<template>
    <div  class="su-table-out su-table-out-edit-class"   ref="tableout" style="display: flex;flex-direction: column;position: relative;height: 100%;width: 100%;">
        <!--渲染header虚拟dom并设置隐藏 没有实际意义但是 不渲染将找不到 this.$children 以及 column组件内的slot-->
        <div style="display: none"><slot></slot></div>
        <!--拖拽虚线-->
        <div class="su-table-xx" :style="{left: xx_data.left+'px'}" v-show="xx_data.show"></div>
        <!--header-->
        <template v-if="showbody">
            <div class="su-table-out-header" ref="suHeaderFef" style="display: flex;flex-direction: row;background: #eef1f7;color: #606266;" >
                <su-table-header :style="{transform:'translateX('+-bodyleft+'px)',width:bodyWidth+'px'}" ref="headerOut" :headerData="headerData"></su-table-header><div style="height: 100%;background: #eef1f7;flex:1;"></div>
            </div>
            <div v-if="headerData[0].fixed" class="su-table-out-header-fixed-right" :class="{bodysleft1:bodyleft!=0}" :style="{width:leftFixedWidth+'px'}" style="display: flex;flex-direction: row;overflow: hidden">
                <su-table-header :isfixed="true" :style="{width:bodyWidth+'px'}" style="flex:1"  :headerData="headerData"></su-table-header><!--<div style="height: 100%;background: #cbdbe1;" :style="{width:scrollWidth+'px'}"></div>-->
            </div>
            <!--body-->
            <div class="su-table-out-bodys"   @scroll="setscroll" ref="bodyoutref" style="flex:1;overflow: auto;">
                <su-table-body  ref='tablebody_ref'   :style="{width:bodyWidth+'px'}" @mousemove.native="bodymousemove"></su-table-body>
                <div :style="{ width: bodyWidth+'px' }" style="height: 100%;display: flex;align-items: center;justify-content: center" v-if="!tableData || tableData.length === 0">
                    <span class="el-table__empty-text">暂无数据</span>
                </div>
            </div>
            <div @mousewheel="fixed_set_body_scroll"  v-if="headerData[0].fixed"  :style="{ height:(bodyHeight-8)+'px',top:suHeaderHeight+'px',width:leftFixedWidth+'px'}" class="su-table-out-bodys-flexd-right" :class="{bodysleft0:bodyleft!=0}" style="height: 100%;overflow: hidden;">
                <su-table-body :isfixed="true" ref="tablebody_fixed_ref"  @mousemove.native="bodymousemove" :style="{transform:'translateY('+-bodytop+'px)',width:bodyWidth+'px'}"></su-table-body>
            </div>
        </template>
        <su-popover v-model="showHidePopover"  ref="showHidePopover">
            <div class="su-table-popover-cont-class" ref='su_popover_cont_ref'>
                {{showHidePopover_cont}}
            </div>
        </su-popover>
    </div>
</template>
<script>
    import suTableHeader from './suTableHeader.js'
    import suTableBody from './suTableBody.js'
    import thottles from './thottles'
    let thottles_scroll=new thottles();
    let thottles_popover=new thottles();
    let thottles_checked_init=new thottles();
    let thottles_checked_change=new thottles();
    export default {
        name:'suTable',
        data() {
            return {
                myDefData:['suChecked', 'suActive', '$copyIndex'],
                initCheckedisld:true, //拦截
                isIndeterminate:false,
                checkedArr:[],
                suChecked:false,
                haveCheckbox:false,
                showHidePopover_cont:'',
                showHidePopover:false,
                isEditRef:null,
                sync:false,
                xx_data:{
                    left:0,
                    show:false,
                },  //控制虚线
                showbody:false,
                activeindex:'', //点击选中行
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
            colClass:'',
            rowClass:'',
            tableData:{
                default:()=>[],
                type:Array
            }
        },
        created(){
            window.addEventListener('resize',this.set_init,false);
            this.headerData.forEach((arr=>{
                if(arr.type=='checkbox'){
                    this.haveCheckbox=true
                }
            }))
        },
        beforeDestroy(){
            window.removeEventListener('resize',this.set_init);
            for(var sd in this.data){
                this.data[sd]=null
            }
        },
        methods: {
            set_val_all(vals){
                this.initCheckedisld=false;
                if(this.$parent.$options.name=='suTableSync'){
                    this.$parent.tableData.forEach((val,index)=>{
                        if(vals){
                            this.$parent.tableData[index].suChecked=true
                        }
                        if(!vals){
                            this.$parent.tableData[index].suChecked=false
                        }
                    });
                }
                this.tableData.forEach((arr,ind)=>{
                    if(vals){
                        this.tableData[ind].suChecked=true
                    }
                    if(!vals){
                        this.tableData[ind].suChecked=false
                    }
                });
                this.isIndeterminate=false;
                this.$nextTick(()=>{
                    this.initCheckedisld=true;
                });
                this.checkedChange()
            },
            set_checked(index,val){
              //  if(!this.initCheckedisld){return}
                if(this.$parent.$options.name=='suTableSync'){
                    this.$parent.tableData[this.$parent.datas[index].$copyIndex].suChecked=val;
                    this.initChecked();
                }else {
                    this.tableData[index].suChecked=val;
                    this.initChecked();
                }
                this.checkedChange()
            },
            checkedChange(){
                this.checkedArr=this.get_checked();
              //  this.$emit('checkedChange',this.get_checked())
            },
            get_checked(){
                let arrs=[];
                if(this.$parent.$options.name=='suTableSync'){
                    this.$parent.tableData.forEach(val=>{
                        if(val.suChecked){
                            arrs.push(val)
                        }
                    });

                }else {
                    this.tableData.forEach(val=>{
                        if(val.suChecked){
                            arrs.push(val)
                        }
                    });
                }
                return arrs
            },
            //初始化表头checked
            initChecked(){
                thottles_checked_init.timeEnd(()=>{
                    let have_select=false;
                    let have_noselect=false;
                    if(this.$parent.$options.name=='suTableSync'){
                            this.$parent.tableData.forEach(val=>{
                                if(val.suChecked){
                                    have_select=true
                                }
                                if(!val.suChecked){
                                    have_noselect=true
                                }
                            });
                        if(this.$parent.tableData.length==0){
                            this.isIndeterminate=false;
                            this.suChecked=false;
                        }
                    }
                    if(have_select && have_noselect){
                        this.isIndeterminate=true;
                        return
                    }
                    if(have_select && !have_noselect){
                        this.isIndeterminate=false;
                        this.suChecked=true;
                        return
                    }
                    if(!have_select && have_noselect){
                        this.isIndeterminate=false;
                        this.suChecked=false;
                        return
                    }
                },100)
            },
            showPopover(cont='',color='black'){
                //自动关闭
                thottles_popover.timeEnd(()=>{
                    this.showHidePopover=false
                },3000);
                if(this.showHidePopover){
                    this.showHidePopover=false
                }
                this.$refs.showHidePopover.referenceElm=this.isEditRef.$el;
                this.$nextTick(()=>{
                    this.showHidePopover_cont=cont;
                    this.$refs.su_popover_cont_ref.style.color=color;
                    this.$refs.showHidePopover.doDestroy();
                    this.showHidePopover=true
                });
               // console.log(this.$refs.showHidePopover);
            },
            setEdit(edit){
                this.isEditRef=edit;
            },
            set_scroll_left(edit){
                if(this.headerData[0].fixed){
                    setTimeout(()=>{
                        let hidex= (this.leftFixedWidth+this.$refs.tableout.getBoundingClientRect().x)-edit.getBoundingClientRect().x;
                        if(hidex>0){
                            this.$refs.bodyoutref.scrollLeft=this.$refs.bodyoutref.scrollLeft-hidex
                        }
                    },100)
                }
            },
            getRowEdit(row){
                let editfixed=[];
                let edit=[];
                edit=this.$refs.tablebody_ref.get_row_edit(row);
                if(this.headerData[0].fixed && this.$refs.tablebody_fixed_ref){
                    editfixed=this.$refs.tablebody_fixed_ref.get_row_edit(row) ;
                }

                return {editArr:edit,fixedEditArr:editfixed};
               /* console.log(edit);
                console.log(editfixed);*/
            },
            getNextEdit(row,col,types){
                //console.log(row);
                let maxCol=this.headerData.length-1;
                let cols=col == maxCol ? 0 : parseFloat(col+1);
                let rows=col == maxCol ? parseFloat(row+1) : row;
                if(types=='to_pre'){
                     cols=col == 0 ? maxCol : parseFloat(col-1);
                     rows=col == 0 ?  parseFloat(row-1) : row ;
                }

                let editfixed=null;
                let edit=null;
                    edit=this.$refs.tablebody_ref.get_edit(rows,cols,types);
                if(!edit){
                    editfixed=this.$refs.tablebody_fixed_ref ? this.$refs.tablebody_fixed_ref.get_edit(rows,cols,types) : null;
                }
                if(edit || editfixed){
                    return edit || editfixed
                } else {
                    if(rows>this.tableData.length-1){
                      // console.log('终止查找 已到最后一个');
                        return false
                    }
                    if(rows<0 || cols <0){

                        return false
                    }
                    return    this.getNextEdit(rows,cols,types);
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
            change_activeindex(type='next'){
                let aind= typeof this.activeIndex =='number'  ? this.activeIndex : -1;
                let ins=type=='next' ? parseFloat(aind+1) : parseFloat(aind-1);

                if(type=='next' && ins==this.tableData.length){
                    ins=0
                }
                if(type=='pre' && ins<0){
                    ins=this.tableData.length-1
                }
                    this.$refs.bodyoutref.scrollTop=ins*33;
                    this.set_activeindex(ins)
            },
            setdefdata(data){
                let datas={...data};
                this.myDefData.forEach((arr,index)=>{
                     delete datas[arr]
                });
                return  datas
            },
            get_active_row(){
                return this.setdefdata(this.tableData[this.activeIndex])
            },
            clear_activeindex(){
                this.activeIndex='';
                if(this.$parent.$options.name!=='suTableSync'){

                    this.tableData.forEach((arr,ind)=>{
                        if( arr.suActive){
                            this.tableData.splice(ind,1,{...this.tableData[ind],...{suActive:false}});
                        }
                    });
                }

                if(this.$parent.$options.name=='suTableSync'){
                    this.$parent.tableData.forEach((arr,ind)=>{
                        if(arr.suActive){
                            this.$parent.setData(ind,{suActive:false})
                        }
                    });
                    //this.$parent.setTableData()
                }
            },
            set_activeindex(index){
                this.activeIndex=index;
                if(this.$parent.$options.name!=='suTableSync' && this.tableData[index]){

                    this.tableData.forEach((arr,ind)=>{
                        if(ind!=index && arr.suActive){
                            this.tableData.splice(ind,1,{...this.tableData[ind],...{suActive:false}});
                        }
                    });
                    this.tableData.splice(index,1,{...this.tableData[index],...{suActive:true}});
                }

                if(this.$parent.$options.name=='suTableSync' && this.$parent.tableData[index]){
                    this.$parent.tableData.forEach((arr,ind)=>{
                        if(ind!=index && arr.suActive){
                            this.$parent.setData(ind,{suActive:false})
                        }
                    });
                    this.$parent.setData(index,{suActive:true});
                    //this.$parent.setTableData()
                }
            },
            set_checkboxindex(index,type=true){
                if(this.$parent.$options.name!=='suTableSync'){
                    this.tableData.splice(index,1,{...this.tableData[index],...{suChecked:type}});
                }
                if(this.$parent.$options.name=='suTableSync'){
                    this.$parent.setData(index,{suChecked:type});
                    this.initChecked();
                    //this.$parent.setTableData()
                }
                this.checkedChange()
            },
            //body滚动触发
            setscroll(){

               this.$refs.tablebody_ref.$el.style.pointerEvents='none';
                thottles_scroll.timeEnd(()=>{
                    this.$refs.tablebody_ref.$el.style.pointerEvents='auto';
                    if((this.$refs.bodyoutref.clientHeight+this.$refs.bodyoutref.scrollTop)>=this.$refs.tablebody_ref.$el.offsetHeight){
                       this.$emit('tableBottom')
                    }
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
           },
            set_row_class(rowdata){
                if(this.rowClass){
                    if(typeof this.rowClass == 'function'){
                        return this.rowClass(rowdata)
                    }else {
                        return this.rowClass
                    }
                }else {
                    return ''
                }

            },
            set_col_class(coldata,rowData){
                if(this.rowClass){
                    if(typeof this.colClass == 'function'){
                        return this.colClass(coldata,rowData)
                    }else {
                        return this.colClass
                    }
                }else {
                    return ''
                }

            }
        },
        mounted(){
            this.showbody=true;
            if(this.$parent.$options.name=='suTableSync'){
                this.sync=true
            }
            this.$nextTick(()=>{
                this.set_init();
                this.initChecked();
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
                return  allwidth
            } //表格body宽度
        },
        watch: {
            'checkedArr'(val,old){
                thottles_checked_change.timeEnd(()=>{
                    if(JSON.stringify(val) != JSON.stringify(old)){
                        this.$emit('checkedChange',val);
                    }
                    },100)

            },
            'tableData.length'(){
                if(!this.$parent.$options.name=='suTableSync'){
                    this.$nextTick(()=>{
                        this.initChecked();
                    });
                }

            }
        },
        components: {
            suTableHeader,
            suTableBody
        }
    }
</script>

<style lang="scss">
    .su-popover {
        position: absolute;
        background: #fff;
        border-radius: 4px;
        border: 1px solid #ebeef5;
        z-index: 2000;
        color: #606266;
        line-height: 1.4;
        text-align: justify;
        font-size: 14px;
        box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
        word-break: break-all;
    }
    .su-popover{
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
        .active_hovers{
            background: #00c081 !important;
            color: white !important;
        }
    }
    .suSelectOut{
        outline: none;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        background: white;
        // border: 1px solid #dee9eb;
        //  border-radius: 4px;
        box-sizing: border-box;
        line-height: 28px;
        height: 28px;
        font-size: 14px;

        .rotate180{
            transform:rotate(180deg);
        }
    }
    .suSelectMenban{

        .suOptionOut_active{
            background: #dee9eb;
        }
        .suOptionOut{
            cursor: pointer;
            padding:2px 12px;
            height: 24px;
            box-sizing: border-box;
            text-align: center;
            line-height: 22px;
            font-size: 14px;
            white-space:nowrap;
        }
        padding: 6px;
        box-sizing: border-box;
        background: white;
        z-index: 998;
        display: inline-block;
        max-height: 180px;
        overflow-y:auto;

    }


        .su-table-popover-cont-class{
            padding: 6px;
            max-width: 200px;
        }


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

                td{
                    padding: 2px;
                    overflow: hidden;
                    box-sizing: border-box;
                    >div{
                        line-height: 28px;
                        min-height: 28px;
                        width: 100%;
                    }
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
                background: #e1f6ec;
               // opacity: 0.5;
            }
            .su_active_tr{

                background: #00c081 ;

            }
            .su-table-out-header td,th , .su-table-out-header-fixed-right td,th{
                background: #eef1f7;
                font-weight:bold;
                border-top: 1px solid #ebeef5;
            }
            .su-table-out-header-fixed-right{
                position: absolute;
                top: 0;
                left: 0;
            }
            table{
                 td,th {
                    box-sizing: border-box;
                    border-bottom: 1px solid #ebeef5;
                    border-right: 1px solid #ebeef5;
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

            td ,.su-table-edit{
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
            }


            .su-checkbox{
                    box-sizing: initial;
                    background: white;
                    border: 1px solid darkgrey;
                    border-radius: 3px;
                    width: 14px;
                    height: 14px;
                    display: inline-block;
                    position: relative;
                    white-space: nowrap;
                    color: #5a5e66;
                    font-size: 14px;
                    cursor: pointer;
                    user-select: none;
            }
            .su-checkbox-is-checkbox.su-checkbox,.su-checkbox-indeterminate.su-checkbox{
                background: #32c081;
                border-color: #32c081;
            }

            .su-checkbox-indeterminate:before{
                position: absolute;
                left: 2px;
                top: 5px;
                content: '';
                width: 10px;
                height: 1px;
                border-bottom: 2px solid white;
            }
            .su-checkbox-is-checkbox:after{
                transform: rotate(-45deg);
                position: absolute;
                left: 1px;
                top: 3px;
                content: '';
                width: 10px;
                height: 4px;
                border-left: 2px solid white;
                border-bottom: 2px solid white;
            }
            .su-table-checkbox{
                min-height: 28px;
                display: flex;
                align-items: center;
                justify-content: center;
            }

            table th{
                padding:5px 2px;
            }
            .su_align_right{
                text-align: right;
            }
            .su_align_center{
                text-align: center;
            }
            .su_align_left{
                text-align: left;
            }
        }



</style>

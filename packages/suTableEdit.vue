
<template>
    <div class="su-table-edit" ref='su_table_edit_out_div' :class="{focusClass:focusClass, inEdit_class:inEdit,disabled_class:disabled}" :title="showText()"  @dblclick="showEdit" >
        <template v-if="!inEdit">
            {{layer=='input' || layer=='auto' ? value : layer=='select' || layer=='selectSearch' ? dflabel : ''}}
        </template>
        <template v-else>
            <template v-if="layer=='input'">
                <input style="height: 27px;line-height: 27px;width: 100%"  :type="type"  @keydown="input_keydown"  @keyup="input_keyup" ref="editInput"  @blur="editInputBlur" v-model="inputValue" />
            </template>
            <template v-if="layer=='auto'">
                <input style="height: 27px;line-height: 27px; width: 100%" @click.stop='' :type="type"  @keydown="auto_keydown"  @keyup="auto_keyup" ref="editAuto"  @blur="editAutoBlur" v-model="inputAutoValue" />
            </template>
            <template v-if="layer=='select'">
                <su-select :minWidth='$refs.su_table_edit_out_div.clientWidth' style="height: 100%;width: 100%" ref="suselectref"   @keyup.native="select_keyup"  @empty_enter="tabFn"  @tab="tabFn"   @onActive="set_select" @close="hideEdit" v-model="selectValue">
                    <su-option v-for="item,index in  selectData"  :key="index" :label="item[select_label]" :value="item[select_value]"></su-option>
                </su-select>
            </template>
            <template v-if="layer=='selectSearch'">
                <su-select :minWidth='$refs.su_table_edit_out_div.clientWidth' @valueSearch="selectSearch_valueSearch" searchType="search" style="height: 100%;width: 100%" ref="suselectref"   @keyup.native="select_keyup"   @empty_enter="tabFn" @tab="tabFn"   @onActive="set_select" @close="hideEdit" v-model="selectValue">
                    <su-option v-for="item,index in  selectData"  :key="item[select_value]" :label="item[select_label]" :value="item[select_value]"></su-option>
                </su-select>
            </template>
        </template>
    </div>
</template>
<script>
import thottles from './thottles'

export default {
    name:'suTableEdit',
    data(){
        return {
            thottles_inputValue:new thottles(),
            thottles_autoKeyCode:new thottles(),
            focusClass:false,
            $copyIndex:null,
            $copyRow:null,
            rangindex:'',
            inEdit:false,
            inputAutoValue:'',
            inputValue:'',
            selectValue:'',
            selectText:'', //select 显示值
        }
    },
    created(){
        /*if(this.$parent.$parent.$parent.$options._componentTag=='su-table-sync'){
           console.log(this.$parent.$parent.tableData)
        }*/
      //  this.$copyIndex=this.$parent.$parent.tableData[this.row].$copyIndex

    },

    mounted(){
        if(this.layer=='select' || this.layer=='selectSearch'){
            this.selectText=this.dflabel;
        }
    },
    props:{
        //自定义弹层内的table
        tableRef:null,
        //自定义弹层
        autoRef:null,
        disabled:{
            default: false,
            type:Boolean
        },
        skip:{
            default: false,
            type:Boolean
        },
        selectData:{
            default:()=>{return []},
            type:Array
        }, //单选下拉数据
        select_label:'', //
        select_value:'', //
        dflabel:'',
        type:'',

        //当前列
        col:null,
        //当前行
        row:null,
        layer:{
            default: 'input',
            type:String
        },
        fixed:{
            default: false,
            type:Boolean
        },
        value:null
    },
    beforeDestroy(){

        for(var sd in this.data){
            this.data[sd]=null
        }
    },
    methods: {
        //可搜索下拉
        selectSearch_valueSearch(val,update){
            this.$emit('selectSearch',val,update)
        },
        select_keyup(){
            if(event.keyCode===37 && event.ctrlKey ){
                event.stopPropagation();
                event.preventDefault();
                this.showNextEdit('to_pre')
            }
        },
        //input 赋值
        input_keyup(){
            if(event.keyCode==13){
                if(this.confirm()){return}
                this.$emit('input',this.inputValue);
                //纯数据渲染模式需要映射到最外层
                if(this.$parent.$parent.sync){
                    this.$parent.$parent.$parent.setDataByRow(this.$parent.$parent.tableData[this.row].$copyIndex,this.$parent.$parent.tableData[this.row]);
                }
            }
            if(event.keyCode===9 || event.keyCode===13){
                event.stopPropagation();
                event.preventDefault();
                this.showNextEdit()
            }

            if(event.keyCode===37 && event.ctrlKey ){
                event.stopPropagation();
                event.preventDefault();
                this.showNextEdit('to_pre')
            }
        },
        input_keydown(){
            if(event.keyCode===9){
                event.stopPropagation();
                event.preventDefault();
            }
        },
        auto_keyup(){

            if(this.tableRef && this.autoRef){
                if(event.keyCode===40){
                    this.tableRef.change_activeindex('next')
                    return
                }
                if(event.keyCode===38){
                    this.tableRef.change_activeindex('pre')
                    return
                }
            }

            if(event.keyCode===37 && event.ctrlKey ){
                event.stopPropagation();
                event.preventDefault();
                this.showNextEdit('to_pre');
                return
            }
            if(event.keyCode===9 || event.keyCode===13){
                event.stopPropagation();
                event.preventDefault();
                this.showNextEdit();
                return
            }

            if(this.inEdit && event.keyCode!==9 && event.keyCode!==13){
                let codess=event.keyCode;
                if(this.$listeners.hasOwnProperty('autoKeyup')){
                    this.thottles_autoKeyCode.timeEnd(()=>{
                        this.$emit('autoKeyup',{value:this.inputAutoValue, row:this.$parent.$parent.sync ? this.$parent.$parent.tableData[this.row]['$copyIndex'] : this.row,keyCode:codess},this.showNextEdit);
                    },200);
                }
            }




         /*   if(event.keyCode=='40'){
                this.autoRef.change_activeindex('next')
            }
            if(event.keyCode=='38'){
                this.autoRef.change_activeindex('pre')
            }*/


        },
        auto_keydown(){

            if(event.keyCode===9){
                event.stopPropagation();
                event.preventDefault();
            }
        },
        //tab切换
        tabFn(){
            if(event.keyCode==13 && this.layer=='select' || event.keyCode==13 && this.layer=='selectSearch'){
                this.showNextEdit()
            }
            if(event.keyCode==9){
                this.showNextEdit()
            }
        },
        showNextEdit(types=''){
            if(this.layer=='auto'){
                this.autoRef.hideMenban();
            }
           this.hideEdit().then(()=>{
               let edit= this.$parent.$parent.getNextEdit(this.row,this.col,types);

               if(edit){
                   if(edit.skip){
                       edit.showNextEdit(types)
                   }else {
                       edit.showEdit();
                   }

                   // edit=null;
               }else {
                  // this.hideEdit();
                   if(this.$parent.$parent.sync){
                       //数据模式到底跳转下一行
                       this.$parent.$parent.$parent.add_scroll(this.row,(type=true)=>{
                           if(!type ){
                                if( !types){
                                    this.$parent.$parent.$emit('lastEntry',this.$parent.$parent.tableData[this.row]['$copyIndex']);
                                }

                           } else {
                               let nextedt=this.$parent.$parent.getNextEdit(this.row,types=='to_pre'? this.$parent.$parent.headerData.length-1 : 0,types);
                               if(nextedt){
                                   nextedt.showEdit();
                                   //  nextedt=null;
                               }
                           }
                       },types)
                   }else {
                       this.$parent.$parent.$emit('lastEntry',this.row);
                   }
                   //this.lastEntry()
               }

           });



        },
/*        getNextEdit(row,col){
         let maxCol=this.$parent.$parent.headerData.length-1;
         let cols=col == maxCol ? 0 : parseFloat(col+1);
         let rows=col == maxCol ? parseFloat(row+1) : row;

         let edit=this.$parent.get_edit(rows,cols);
         if(edit){
             console.log('找到了');
             return edit
         } else {
             if(rows>this.$parent.$parent.tableData.length-1){
                 this.hideEdit();
                 console.log('终止查找 已到最后一个');
                 return false
             }
             return    this.$parent.$parent.getNextEdit(rows,cols);
         };
        //  return  this.$parent.get_edit(this.row,this.col);
        },*/
        //title 显示的值
        showText(){
            if(this.layer=='input'){
                return this.value
            }
        },
        editInputBlur(){
            this.hideEdit()
        },
        editAutoBlur(){
          //  this.inEdit=false;
        },
        hideEdit(){
           // if(!this.inEdit){return}
            return new Promise((success,err)=>{
                this.inEdit=false;
                this.set_focus_class(false);
                if(this.layer=='auto'){
                    if(this.tableRef && this.autoRef){
                        this.tableRef.clear_activeindex()
                    }
                }
                if(this.layer=='input'){

                }
                if(this.layer=='select'){
                }

                this.$parent.$parent.setEdit(null);
                this.$nextTick(()=>{
                    success(true)
                })
            })


        },
     /*   syncHideEdit(){
            setTimeout(()=>{
                console.log(this)
                this.inEdit=false;
            },100)
        },*/
        showEdit(types='',next=''){

            if(this.disabled){return}
           /* if(this.skip && next=='next'){
                this.showNextEdit(types) ;
                return
            }*/
             this.inEdit=true;
             this.$copyIndex= this.$parent.$parent.tableData[this.row].$copyIndex  ;

             //回到当前编辑框位置
              this.$nextTick(()=>{
                  if(!this.$parent.isfixed){
                     this.$parent.$parent.set_scroll_left(this.$el)
                  }
              });
             //设置当前编辑对象
              this.$parent.$parent.setEdit(this);

              if(this.layer=='input'){
                  this.inputValue=this.value;
                      this.$nextTick(()=>{
                          this.$refs.editInput.focus();
                      })
              }

              if(this.layer=='select' || this.layer=='selectSearch'){
                  this.selectValue=this.value;
                  this.$nextTick(()=>{
                      this.$refs.suselectref.showMenban()
                     // this.$refs.editSelect
                  })
              }

              if(this.layer=='auto'){
                  this.tableRef.setscroll();
                  this.autoRef.showMenban(this.$el,this);
                  this.inputAutoValue=this.value;
                  this.$nextTick(()=>{
                      this.$refs.editAuto.focus();
                  })

              }

                //触发开启编辑钩子
              if(this.$listeners.hasOwnProperty('openEdit')){
                  this.$nextTick(()=>{
                      this.$emit('openEdit',this.get_this_data())
                  })
              }
                this.set_focus_class(true)
        },
        set_focus_class(types=false){
            //设置当前行的可编辑td高亮
            let rowDatas= this.$parent.$parent.getRowEdit(this.row);
            rowDatas.editArr.forEach((ars)=>{

                if(types){
                    ars.showFocusClass()
                }else {
                    ars.hideFocusClass()
                }

            });
            rowDatas.fixedEditArr.forEach((ars)=>{
                if(types){
                    ars.showFocusClass()
                }else {
                    ars.hideFocusClass()
                }
            });
        },
        showFocusClass(){
            this.focusClass=true
        },
        hideFocusClass(){
            this.focusClass=false
        },
        get_this_data(){
            let data={
                 row:this.$parent.$parent.sync ? this.$parent.$parent.tableData[this.row]['$copyIndex'] : this.row,
                 col:this.col,
                 label: this.layer=='input' || this.layer=='auto' ? this.value : this.layer=='select' || this.layer=='selectSearch' ? this.dflabel : '',
                 value:this.layer=='select' || this.layer=='selectSearch' ? this.selectValue : '',
            };
            return data
        },
        //select 外部赋值 反写label

        //select 单选/多选下拉赋值
        set_select(data){
            //data.value
            this.$emit('update:dflabel',data.label);
            this.$emit('input',data.value);
            this.$emit('editValueChange',{label:data.label,value:data.value,col:this.col,row:this.$parent.$parent.sync ? this.$parent.$parent.tableData[this.row]['$copyIndex'] : this.row});

            //纯数据渲染模式需要映射到最外层
            if(this.$parent.$parent.sync){
                this.$parent.$parent.$parent.setDataByRow(this.$parent.$parent.tableData[this.row].$copyIndex,this.$parent.$parent.tableData[this.row]);
            }
            this.showNextEdit();
        },
        //提交
        confirm(data={}){
            if(this.$listeners.hasOwnProperty('confirm')){
                var senddata={
                    row:this.$parent.$parent.sync ? this.$parent.$parent.tableData[this.row]['$copyIndex'] : this.row,
                    col:this.col,
                    value:this.layer=='input' ? this.inputValue : this.layer=='select' || this.layer=='selectSearch' ? data.value : '',
                    label:this.layer=='select' || this.layer=='selectSearch' ? data.label : ''
                };
                this.$emit('confirm',senddata,this.showNextEdit);
                return true
            }else {
                return false
            }
        }
    },
    watch: {
        'value'(val){
            if(this.layer=='select' || this.layer=='selectSearch'){
                this.selectValue=val
            }
        },
        'inputAutoValue'(val){
            if(this.inEdit){
                this.thottles_inputValue.timeEnd(()=>{
                    if(this.$listeners.hasOwnProperty('editValueChange')){
                        this.$emit('editValueChange',{value:val,col:this.col,row:this.$parent.$parent.sync ? this.$parent.$parent.tableData[this.row]['$copyIndex'] : this.row})
                    }
                },200)
            }
        },
        /*'selectValue'(val){
            if(this.inEdit){
                this.$emit('editValueChange',{label:this.dflabel,value:this.selectValue,col:this.col,row:this.$parent.$parent.sync ? this.$parent.$parent.tableData[this.row]['$copyIndex'] : this.row});
            }
        },*/
        'inputValue'(val){
            if(this.inEdit){
                this.thottles_inputValue.timeEnd(()=>{
                    if(this.$listeners.hasOwnProperty('editValueChange')){
                        this.$emit('editValueChange',{value:val,col:this.col,row:this.$parent.$parent.sync ? this.$parent.$parent.tableData[this.row]['$copyIndex'] : this.row})
                    }
                },200)
            }

          // this.$emit('input',val);
        },
    },
    components: {}
}



</script>
<style lang="scss" >
   
    .focusClass{
        border: 1px solid #a6c7ff;
        border-radius: 4px;
    }
    .su_active_tr .focusClass{
        border: 1px solid white ;
    }
     .inEdit_class{
        border: 0 !important;
        border-radius:0 !important
     }
    .su-select-out{
        outline: none ;
    }
    .su-table-edit{
        input{ border: 0;border-radius:4px;outline:none;box-shadow: 0px 0px 1px blue inset;}
        box-sizing: border-box;
        max-height: 28px;
        line-height: 28px;
        overflow: hidden;
        height: 28px;
       /* height: 100%;*/
        min-height: 28px;
        width: 100%;
    }
    .disabled_class{
       color: #8c939d;
        border-color: #dee9eb;

    }
</style>
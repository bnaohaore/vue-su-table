
<template>
    <div class="su-table-edit" ref='su_table_edit_out_div' :class="{focusClass:focusClass, inEdit_class:inEdit,disabled_class:disabled}" :title="showText()"  @dblclick="showEdit" >
        <template v-if="!inEdit">
            {{layer=='date' || layer=='input' || layer=='auto' ? value : layer=='select' || layer=='selectSearch'  ? dflabel : layer=='suElSelect' || layer=='suElSelectSearch'  ? suElSelectLabel : ''}}
        </template>
        <template v-else>
            <template v-if="layer=='input'">
                <input style="height: 27px;line-height: 27px;width: 100%" @input="setmaxlength('inputValue')"  :type="type"    @keydown="input_keydown" ref="editInput"  @blur="editInputBlur" v-model="inputValue" />
            </template>
            <template v-if="layer=='date'">
                <su-date-picker
                        @visibleClose="visibleClose"
                        @changeClick="set_date"
                        clear-icon="clear_class"
                        @keyup.native="date_keyup"
                        @keydown.native="date_keydown"
                        :clearable='true'
                        style="height: 27px;line-height: 27px;width: 100%"
                        ref="editSuDatePicker"
                        v-model="dateValue"
                        :value-format='format'
                        :format='format'
                        :type="type"
                        :editable="true"
                        placeholder="选择日期时间">
                </su-date-picker>
            </template>
            <template v-if="layer=='auto'">
                <input style="height: 27px;line-height: 27px; width: 100%" @click.stop='' @input="setmaxlength('inputAutoValue')" :type="type"    @keydown="auto_keydown" ref="editAuto"  @blur="editAutoBlur" v-model="inputAutoValue" />
            </template>
            <template v-if="layer=='select'">
                <su-select :minWidth='$refs.su_table_edit_out_div.clientWidth' style="height: 100%;width: 100%" ref="suselectref"   @keydown.native="select_keydown"  @empty_enter="tabFn"  @tab="tabFn"   @onActive="set_select" @close="hideEdit" v-model="selectValue">
                    <su-option v-for="item,index in  selectData"  :key="index" :label="item[select_label]" :value="item[select_value]"></su-option>
                </su-select>
            </template>
            <template v-if="layer=='selectSearch'">
                <su-select :minWidth='$refs.su_table_edit_out_div.clientWidth' @valueSearch="selectSearch_valueSearch" searchType="search" style="height: 100%;width: 100%" ref="suselectref"   @keydown.native="select_keydown"   @empty_enter="tabFn" @tab="tabFn"   @onActive="set_select" @close="hideEdit" v-model="selectValue">
                    <su-option v-for="item,index in  selectData"  :key="item[select_value]" :label="item[select_label]" :value="item[select_value]"></su-option>
                </su-select>
            </template>
            <template v-if="layer=='suElSelect'"><!--@change="suElSelectChange"-->
                <su-el-select @visible-change="visibleClose" clearable @keydown.native="select_keydown"  @enter_no_selectOption="showNextEdit"  style="height:28px;"  @blur.stop="" ref="suselectref"  v-model="selectValue">
                    <su-el-option  v-for="item,index in  selectData"  :key="item[select_value]" :label="item[select_label]" :value="item[select_value]"></su-el-option>
                </su-el-select>
            </template>
            <template v-if="layer=='suElSelectSearch'">
                <su-select-search-val
                        @keydown.native="select_keydown"
                        @change="set_suElSelectSearch_data"
                        @visible-change="visibleClose"
                        :hoverItem="hoverItem"
                        @enter_no_selectOption="showNextEdit"
                        :sendData="sendData"
                        ref="suselectref"
                        :difaultlabel="suElSelectLabel"
                        :arrName="arrName"
                        size="small"
                        :label="select_label"
                        :values="select_value"
                        :apiPath="apiPath"
                        v-model="selectValue">
                    <template slot-scope="scope">
                        <slot :row="scope.row"></slot>
                    </template>
                </su-select-search-val>
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
            thottles_showEdit:new thottles(),
            focusClass:false,
            $copyIndex:null,
            $copyRow:null,
            rangindex:'',
            inEdit:false,
            inputAutoValue:'',
            dateValue:'',
            inputValue:'',
            selectValue:'',
            suElSelectLabel:'',
            suElSelectSearch_data:{},
            upwatch_inputAutoValue:()=>{},
            upwatch_inputValue:()=>{},

        }
    },
    created(){

    },
    mounted(){
        if(this.layer=='suElSelect'){
         let label= this.selectData.filter(item=>{
                return item[this.select_value]==this.value
            })[0];
         if(label){
             this.suElSelectLabel=label[this.select_label]
         }
        }

        if(this.layer=='suElSelectSearch' ){
            this.suElSelectLabel=this.dflabel;
        }




    },
    props:{
        maxlength:{
            default: -1,
        },
        apiPath:'',
        arrName:'',
        sendData:{},
        hoverItem:{
            default:-1,
            type:Number
        },
        format:{
            default: 'yyyy-MM-dd HH:mm:ss',
            type:String
        },
        //自定义弹层内的table
        tableRef:{ default:()=>{return null}},
        //自定义弹层
        autoRef:null,
        disabled:{
            default: false,

        },
        skip:{
            default: false,
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
        value:''
    },
    beforeDestroy(){
        this.upwatch_inputAutoValue();
        this.upwatch_inputValue();
        for(var sd in this.data){
            this.data[sd]=null
        }
    },
    methods: {
        setmaxlength(type='inputValue'){
            if(this.maxlength>=0 && (this[type].length> this.maxlength)){this[type]=this[[type]].slice(0,this.maxlength)}
        },
        /*suElSelectChange(){
            if(this.layer=='suElSelect'){
                if(this.confirm()){

                }else {
                    this.$emit('input',this.selectValue);
                    let label=this.selectData.filter(item=>{
                        return item[this.select_value]==this.selectValue
                    })[0][this.select_label];
                    this.suElSelectLabel=label;
                    //纯数据渲染模式需要映射到最外层
                    if(this.$parent.$parent.sync){
                        this.$parent.$parent.$parent.setDataByRow(this.$parent.$parent.tableData[this.row].$copyIndex,this.$parent.$parent.tableData[this.row]);
                    }
                    this.showNextEdit();
                }
            }
        },*/
        set_suElSelectSearch_data(val,data){

            if(data){
                this.suElSelectSearch_data={...data};
            }else {
                this.suElSelectSearch_data={};
            }

        },
        visibleClose(value){

            if(this.layer=='suElSelect' && value || this.layer=='suElSelectSearch' && value){
                return
            }
            event ? event.stopPropagation() :'';
            event ? event.preventDefault():'';
            if(this.layer=="date" ){
                if(this.confirm()){

                }else {
                    this.$emit('input',this.dateValue);
                    //纯数据渲染模式需要映射到最外层
                    if(this.$parent.$parent.sync){
                        this.$parent.$parent.$parent.setDataByRow(this.$parent.$parent.tableData[this.row].$copyIndex,this.$parent.$parent.tableData[this.row]);
                    }

                    if(event && event.keyCode==13 || event && event.keyCode==9){
                        this.showNextEdit();
                    }
                }
            }
            if(this.layer=='suElSelect'){
                if((event && event.keyCode!=13 && event.keyCode!=9 && this.selectValue == this.value)){

                } else if(this.confirm()){

                }else {
                    if(this.selectValue != this.value){
                        this.$emit('input',this.selectValue);
                        let label=this.selectValue ? this.selectData.filter(item=>{
                            return item[this.select_value]==this.selectValue
                        })[0][this.select_label] : '';
                        this.suElSelectLabel=label;
                        //纯数据渲染模式需要映射到最外层
                        if(this.$parent.$parent.sync){
                            this.$parent.$parent.$parent.setDataByRow(this.$parent.$parent.tableData[this.row].$copyIndex,this.$parent.$parent.tableData[this.row]);
                        }
                        this.showNextEdit();
                    }else {
                        if(event && event.keyCode==13 || event && event.keyCode==9){
                            this.showNextEdit();
                        }
                    }
                }
            }

            if(this.layer=='suElSelectSearch' ){
                if((event && event.keyCode!=13 && event.keyCode!=9 && this.selectValue == this.value)){

                } else if(this.confirm()){

                }else {
                    if(this.selectValue != this.value){
                        this.$emit('input',this.selectValue);
                        this.suElSelectLabel=this.suElSelectSearch_data[this.select_label] || '';
                        this.$emit('update:dflabel', this.suElSelectLabel);

                        //纯数据渲染模式需要映射到最外层
                        if(this.$parent.$parent.sync){
                            this.$parent.$parent.$parent.setDataByRow(this.$parent.$parent.tableData[this.row].$copyIndex,this.$parent.$parent.tableData[this.row]);
                        }
                        this.showNextEdit();
                    }else {
                          if(event && event.keyCode==13 || event && event.keyCode==9){
                                 this.showNextEdit();
                          }
                    }

                }
            }

           setTimeout(()=>{
                if(this.inEdit){
                    this.hideEdit();
                }
           },300)
        },
        //可搜索下拉
        selectSearch_valueSearch(val,update){
            this.$emit('selectSearch',val,update)
        },
        select_keydown(){
            if(event.keyCode===37 && event.ctrlKey ){
                event.stopPropagation();
                event.preventDefault();
                this.showNextEdit('to_pre')
            }
        },
        date_keyup(){
            event.stopPropagation();
            event.preventDefault();
        },
        date_keydown(){
            if(event.keyCode===9 ){
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
        //input 赋值
        input_keydown(){
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
        auto_keydown(){
            console.log(123)
            console.log(this.tableRef)
            if(this.tableRef && this.autoRef){
                if(event.keyCode===40){
                    console.log(123123)
                    console.log(this.tableRef)
                    this.tableRef.change_activeindex('next');
                    return
                }
                if(event.keyCode===38){
                    this.tableRef.change_activeindex('pre');
                    return
                }
            }

            if(event.keyCode===37 && event.ctrlKey ){
                event.stopPropagation();
                event.preventDefault();
                this.showNextEdit('to_pre');
                return
            }
            if(event.keyCode===9){
                event.stopPropagation();
                event.preventDefault();
                this.showNextEdit();
                return
            }

            if(this.inEdit){
                let codess=event.keyCode,ctrlKey=event.ctrlKey;
                if(codess=='114'){
                    event.stopPropagation();
                    event.preventDefault();
                }
                if(this.$listeners.hasOwnProperty('autoKeyup')){
                    this.thottles_autoKeyCode.timeEnd(()=>{
                        this.$emit('autoKeyup',{activeData:this.tableRef ? this.tableRef.get_active_row() : '',  value:this.inputAutoValue,row:this.$parent.$parent.sync ? this.$parent.$parent.tableData[this.row]['$copyIndex'] : this.row,keyCode:codess,ctrlKey:ctrlKey},this.showNextEdit);
                    },300);
                }
            }

        },
        //tab切换
        tabFn(){
            event.stopPropagation();
            event.preventDefault();
            if(event.keyCode==13 && this.layer=='select' || event.keyCode==13 && this.layer=='selectSearch'){
                this.showNextEdit()
            }
            if(event.keyCode==9){
                this.showNextEdit()
            }
        },
        showNextEdit(types=''){
            if(this.layer=='auto'){
                this.autoRef.hideMenban(false);
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
            if(this.layer=='input' || this.layer=='date' || this.layer=='auto'){
                return this.value
            }
            if(this.layer=='suElSelect' || this.layer=='suElSelectSearch'){
                return this.suElSelectLabel
            }
        },
        editInputBlur(){
                this.hideEdit()
        },
        editAutoBlur(){
          //  this.inEdit=false;
        },
        hideEdit(){

            this.upwatch_inputAutoValue();
            this.upwatch_inputValue();
           // if(!this.inEdit){return}
            return new Promise((success,err)=>{
                if(!this.inEdit){return   success(true);}
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
               /* if(this.$parent.$parent.isEditRef==this){
                    this.$parent.$parent.setEdit(null);
                }*/
                this.$nextTick(()=>{
                    success(true);
                    if(this.$listeners.hasOwnProperty('hideEdit')){
                        setTimeout(()=>{
                            this.$emit('hideEdit',this.get_this_data());
                        },250)
                    }
                })
            })


        },
        showEdit(types='',next=''){
            if(this.disabled || this.inEdit){return}
            this.thottles_showEdit.timeEnd(()=>{
                this.inEdit=true;
                this.$copyIndex= this.$parent.$parent.tableData[this.row].$copyIndex  ;
                //回到当前编辑框位置
                this.$nextTick(()=>{
                    if(!this.$parent.isfixed){
                        this.$parent.$parent.set_scroll_left(this.$el)
                    }
                });
                //设置当前编辑对象常用数据到table组件
                this.$parent.$parent.setEdit(this);
                if(this.layer=='input' ){
                    this.inputValue=this.value || '';
                    this.upwatch_inputValue= this.$watch('inputValue',(val, oldVal)=> {
                        if(this.inEdit){
                            this.thottles_inputValue.timeEnd(()=>{
                                if(this.$listeners.hasOwnProperty('editValueChange')){
                                    this.$emit('editValueChange',this.get_this_data())
                                }
                            },200)
                        }
                    });
                    this.$nextTick(()=>{
                        this.$refs.editInput.focus();
                        this.$refs.editInput.select();
                    })
                }
                if(this.layer=='date'){
                    this.dateValue=this.value || '';
                    this.$nextTick(()=>{
                        let doms=this.$refs.editSuDatePicker.$el.querySelectorAll('.el-input__inner')[0];
                        doms.focus();
                        // 选中一段文字
                            doms.select()
                    })
                }
                if(this.layer=='select' || this.layer=='selectSearch'){
                    this.selectValue=this.value || '';
                    this.$nextTick(()=>{
                        this.$refs.suselectref.showMenban()
                        // this.$refs.editSelect
                    })
                }

                if(this.layer=='suElSelect'){
                    this.selectValue=this.value || '';
                    this.$nextTick(()=>{
                        this.$refs.suselectref.focus();
                        this.$refs.suselectref.visible=true;
                        this.$refs.suselectref.navigateOptions('next');
                    });

                }
                if(this.layer=='suElSelectSearch'){
                    this.selectValue=this.value || '';
                    this.$nextTick(()=>{
                        this.$refs.suselectref.$refs.costCatalogue_select.focus();
                        this.$refs.suselectref.$refs.costCatalogue_select.visible=true
                    });

                }
                if(this.layer=='auto'){
                    this.tableRef ? this.tableRef.setscroll() : '';
                    this.inputAutoValue= this.value || '';
                    this.upwatch_inputAutoValue= this.$watch('inputAutoValue',(val, oldVal)=> {
                        if(this.inEdit){
                            this.thottles_inputValue.timeEnd(()=>{
                                if(this.$listeners.hasOwnProperty('editValueChange')){
                                    this.$emit('editValueChange',{value:val,col:this.col,row:this.$parent.$parent.sync ? this.$parent.$parent.tableData[this.row]['$copyIndex'] : this.row})
                                }
                            },200)
                        }
                    });
                    this.autoRef.showMenban(this.$el,this);

                    this.$nextTick(()=>{
                        this.$refs.editAuto.focus();
                        this.$refs.editAuto.select();
                    })
                }

                //触发开启编辑钩子
                if(this.$listeners.hasOwnProperty('openEdit')){
                    this.$nextTick(()=>{
                        this.$emit('openEdit',this.get_this_data())
                    })
                }
                this.set_focus_class(true)
            },100)

        },
        set_focus_class(types=false){
            //设置当前行的可编辑td高亮
            let rowDatas= this.$parent.$parent.getRowEdit(this.row);
            rowDatas.editArr.forEach((ars)=>{
                if(types){
                ars.disabled ? '' :  ars.showFocusClass()
                }else {
                    ars.hideFocusClass()
                }

            });
            rowDatas.fixedEditArr.forEach((ars)=>{
                if(types){
                    ars.disabled ? '' :  ars.showFocusClass()
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
                 el:this.$refs.su_table_edit_out_div,
                 row:this.$parent.$parent.sync ? this.$parent.$parent.tableData[this.row]['$copyIndex'] : this.row,
                 col:this.col,
                 label:  (this.layer=='select' || this.layer=='selectSearch' ? this.dflabel : (this.layer=='suElSelect' || this.layer=='suElSelectSearch'  ? this.suElSelectLabel : '')),
                 value:(this.layer=='select' || this.layer=='selectSearch'|| this.layer=='suElSelect' || this.layer=='suElSelectSearch') ? this.selectValue : (this.layer=='date' ? this.dateValue : this.layer=='input' ? this.inputValue :  this.layer=='auto' ? this.inputAutoValue : ''),
            };
            return data
        },
        //select 外部赋值 反写label
        //date 选择值的时候触发 赋值
        set_date(date){

            event.preventDefault();
            event.stopPropagation();
            if(this.confirm()){

            }else {

                this.$emit('input',this.dateValue);
                //纯数据渲染模式需要映射到最外层
                if(this.$parent.$parent.sync){
                    this.$parent.$parent.$parent.setDataByRow(this.$parent.$parent.tableData[this.row].$copyIndex,this.$parent.$parent.tableData[this.row]);
                }

                this.showNextEdit();

            }
        },
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
                    value:this.layer=='input'   ? this.inputValue : this.layer=='auto' ? this.inputAutoValue :  this.layer=='date' ? this.dateValue : (this.layer=='select' || this.layer=='selectSearch' || this.layer=='suElSelectSearch' || this.layer=='suElSelect') ? this.selectValue : '',
                    label:this.layer=='select' || this.layer=='selectSearch' ? data.label : '',
                    item_data:this.suElSelectSearch_data
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
            if(this.layer=='auto'){
                this.inputAutoValue=val
            }
            if(this.layer=='select' || this.layer=='selectSearch'){
                this.selectValue=val
            }
            if(this.layer=='suElSelect' || this.layer=='suElSelectSearch'){
                this.selectValue=val;
                this.suElSelectLabel=this.dflabel || '';
            }
            if(this.layer=='suElSelect'){
                let label= this.selectData.filter(item=>{
                    return item[this.select_value]==val
                })[0];
                if(label){
                    this.suElSelectLabel=label[this.select_label]
                }
            }
            if(this.layer=='input' ){
                this.inputValue=val
            }

            if(this.layer=='date' ){
                this.dateValue=val
            }

        },
/*        'dateValue'(val,oldval){
            console.log(val+'+'+oldval);
            if(!val && oldval && this.inEdit){
                this.set_date();
            }
        },*/
     /*   'inputAutoValue'(val,oldva){
            if(this.inEdit){
                this.thottles_inputValue.timeEnd(()=>{
                    if(this.$listeners.hasOwnProperty('editValueChange')){
                        this.$emit('editValueChange',{value:val,col:this.col,row:this.$parent.$parent.sync ? this.$parent.$parent.tableData[this.row]['$copyIndex'] : this.row})
                    }
                },200)
            }
        },*/
       /* 'inputValue'(val){
            if(this.inEdit){
                this.thottles_inputValue.timeEnd(()=>{
                    if(this.$listeners.hasOwnProperty('editValueChange')){
                        this.$emit('editValueChange',{value:val,col:this.col,row:this.$parent.$parent.sync ? this.$parent.$parent.tableData[this.row]['$copyIndex'] : this.row})
                    }
                },200)
            }
        },*/
    },
    components: {}
}
</script>

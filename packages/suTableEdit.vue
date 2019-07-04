
<template>
    <div class="su-table-edit" :class="{inEdit_class:inEdit}" :title=showText()  @dblclick="showEdit" >
        <template v-if="!inEdit">
            {{layer=='input' ? value : layer=='select' ? dflabel : ''}}
        </template>
        <template v-else>
            <template v-if="layer=='input'">
                <input style="height: 100%;width: 100%" :type="type"  @keydown="input_keydown"  @keyup="input_keyup" ref="editInput"  @blur="editInputBlur" v-model="inputValue" />
            </template>
            <template v-if="layer=='select'">
                <su-select style="height: 100%;width: 100%" ref="suselectref" @empty_enter="tabFn" @tab="tabFn" @onActive="set_select" @close="syncHideEdit" v-model="selectValue">
                    <su-option v-for="item,index in  selectData"  :key="index" :label="item[select_label]" :value="item[select_value]"></su-option>
                </su-select>
            </template>
        </template>
    </div>
</template>
<script>

export default {
    name:'suTableEdit',
    data(){
        return {
            inEdit:false,
            inputValue:'',
            selectValue:'',
            selectText:'', //select 显示值
        }
    },
    created(){
        if(this.layer=='select'){
            this.selectText=this.dflabel
        }
    },

    mounted(){

    },
    props:{

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
    methods: {
        input_keyup(){
            if(event.keyCode==13){
                if(this.$parent.$parent.sync){
                    //镜像参数赋值
                    this.$emit('input',this.inputValue);
                  //  this.$parent.$parent.$parent.setDataByRow()
                    this.$parent.$parent.$parent.setDataByRow(this.$parent.$parent.tableData[this.row].$copyIndex,this.$parent.$parent.tableData[this.row]);
                    //this.$parent.$parent.tableData
                }else {
                    this.$emit('input',this.inputValue);
                }
            }
            if(event.keyCode==9 || event.keyCode==13){
                event.stopPropagation();
                event.preventDefault();
                this.showNextEdit()
            }

        },
        input_keydown(){
            if(event.keyCode==9){
                event.stopPropagation();
                event.preventDefault();
            }
        },
        //tab切换
        tabFn(){
            if(event.keyCode==13 && this.layer=='select'){
                this.showNextEdit()
            }
            if(event.keyCode==9){
                this.showNextEdit()
            }
        },
        showNextEdit(){
           let edit= this.$parent.$parent.getNextEdit(this.row,this.col);
               this.hideEdit();
           if(edit){
               edit.showEdit();
               edit=null;
           }else {
               this.hideEdit();
               if(this.$parent.$parent.sync){
                   //数据模式到底跳转下一行
                    this.$parent.$parent.$parent.add_scroll(this.row,(type=true)=>{
                        if(!type){
                            this.$parent.$parent.$emit('lastEntry',this.$parent.$parent.tableData[this.row]['$copyIndex']);
                        }else {
                            let nextedt=this.$parent.$parent.getNextEdit(this.row,0);
                            if(nextedt){
                                nextedt.showEdit();
                                nextedt=null;
                            }
                        }
                    })
               }else {
                   this.$parent.$parent.$emit('lastEntry',this.row);
               }
               //this.lastEntry()
           }
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
            this.inEdit=false;
        },
        hideEdit(){
            this.inEdit=false;
            if(this.layer=='input'){

            }
            if(this.layer=='select'){

            }
        },
        syncHideEdit(){
            setTimeout(()=>{
                this.inEdit=false;
            },100)
        },
        showEdit(){
              this.inEdit=true;
              if(this.layer=='input'){
                  this.inputValue=this.value;
                      this.$nextTick(()=>{
                          this.$refs.editInput.focus();
                      })
              }
              if(this.layer=='select'){
                  this.selectValue=this.value;
                  this.$nextTick(()=>{
                      this.$refs.suselectref.showMenban()
                     // this.$refs.editSelect
                  })
              }
              this.$parent.$parent.setEdit(this)
        },
        set_select(data){
            this.$emit('editValueChange',{label:data.label,value:this.selectValue,col:this.col,row:this.row});
            //data.value
            this.$emit('input',data.value);
            this.$emit('update:dflabel',data.label);
            this.$parent.$parent.$parent.setDataByRow(this.$parent.$parent.tableData[this.row].$copyIndex,this.$parent.$parent.tableData[this.row]);
            this.showNextEdit();
        }
    },
    watch: {
        'inputValue'(val){
            this.$emit('editValueChange',{value:val,col:this.col,row:this.row})
          // this.$emit('input',val);
        },
    },
    components: {}
}



</script>
<style lang="scss" >
    .inEdit_class{
        border: 1px solid #cbdbe1;
    }
    .su-table-edit{

        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        width: 100%;
    }
</style>
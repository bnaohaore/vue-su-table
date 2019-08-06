


    export default {
        data() {
            return {

            }
        },
        props:{
            isfixed:{
                default:false,
                type:Boolean
            }
        },
        created(){

        },
        beforeDestroy(){
            for(var sd in this.data){
                this.data[sd]=null
            }
        },
        mounted(){

        },

        render(h){
            return (<table  cellspacing="0" cellpadding="0" border="0">
                <colgroup>
                    {
                        this.$parent.headerData.map((rowh,index)=>{
                            return <col width={rowh.width || 160}></col>
                        })
                    }
                </colgroup>
                <tbody>
                    {
                        this.$parent.tableData.map((arrrow,rowindex)=>{
                        // arrrow.$index=rowindex; //设置行标识
                         return   (<tr data-index={rowindex} on-click={()=>this.rowClick(arrrow,rowindex)} on-mouseleave={()=>this.$parent.set_mousmoveindex(null)} on-mouseenter={()=>this.tr_mousmove(rowindex)}  class={  (rowindex==this.$parent.mousmoveindex ? 'su_hover_tr ' : '') + (arrrow.suActive ? ' su_active_tr' : '')+' '+ this.set_row_class(arrrow) }>{
                             this.$parent.headerData.map((arr,colindex)=>{
                             return this.isfixed ?
                                 ( arr.fixed ?
                                         arr.$scopedSlots.hasOwnProperty('default') ?
                                         <td class={this.set_col_class(arr.prop,arrrow)}>
                                             { arr.$scopedSlots.default({row:arrrow,$rowIndex: rowindex,$colIndex:colindex})   }
                                         </td> :
                                          arr.type=='checkbox' ? <td class={this.set_col_class(arr.prop,arrrow)}><su-checkbox  row={rowindex} types="column"  v-model={arrrow['suChecked']}></su-checkbox></td> :
                                          <td  title={ arrrow[arr.prop]} class={this.set_col_class(arr.prop,arrrow)}>
                                              <span>{  arrrow[arr.prop]  }</span>
                                          </td> : ''
                                 ) :
                                 arr.fixed ? <td></td> : arr.type=='checkbox' ? <td class={this.set_col_class(arr.prop,arrrow)}><su-checkbox  row={rowindex} types="column"  v-model={arrrow['suChecked']}></su-checkbox></td> : arr.$scopedSlots.hasOwnProperty('default') ? <td class={this.set_col_class(arr.prop,arrrow)}>{ arr.$scopedSlots.default({row:arrrow,$rowIndex: rowindex,$colIndex:colindex}) }</td> : <td class={this.set_col_class(arr.prop,arrrow)} title={ arrrow[arr.prop]}><span>{ arrrow[arr.prop]  }</span></td>
                         })}
                         </tr>)
                        })
                    }
                </tbody>
            </table>)
        },
        methods: {
            set_row_class(rowData){
                return this.$parent.set_row_class(rowData)
            },
            set_col_class(colData,rowData){

                return this.$parent.set_col_class(colData,rowData)
            },
            rowClick(row,index){
                if(this.$parent.$listeners.hasOwnProperty('rowClick')){
                    let intdex='';
                    if(this.$parent.$parent.$options.name=='suTableSync'){
                        intdex=row.$copyIndex
                    }else {
                        intdex=index
                    }

                    this.$parent.set_activeindex(intdex);
                    this.$parent.$emit('rowClick',this.$parent.setdefdata(row),index);
                }
            },
            get_edit(row=null,col=null,types=''){
                if(row<0 || col <0){return false}
                return this.$children.find(arr=>{
                    return arr.row==row && arr.col == col && !arr.disabled
                })
            },
            //tr鼠标移入
            tr_mousmove(index){
                    this.$parent.set_mousmoveindex(index);
            }
        },
        watch: {},
        components: {

        }
    }




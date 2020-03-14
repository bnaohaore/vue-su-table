


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
                         return   (<tr data-index={rowindex} on-dblclick={()=>this.rowDblclick(arrrow,rowindex)} on-click={()=>this.rowClick(arrrow,rowindex)} on-mouseleave={()=>this.$parent.set_mousmoveindex(null)} on-mouseenter={()=>this.tr_mousmove(rowindex)}  class={  (rowindex==this.$parent.mousmoveindex ? 'su_hover_tr ' : '') + (arrrow.suActive ? ' su_active_tr' : '')+' '+ this.set_row_class(arrrow) }>{
                             this.$parent.headerData.map((arr,colindex)=>{
                             return this.isfixed ?
                                 ( arr.fixed ?
                                         arr.$scopedSlots.hasOwnProperty('default') ?
                                         <td class={this.set_col_class(arr,arrrow)}>
                                             <div class={'su_td_out'}>  { arr.$scopedSlots.default({row:arrrow,$rowIndex: rowindex,$colIndex:colindex})   }</div>
                                         </td> :
                                          arr.type=='checkbox' ? <td class={this.set_col_class(arr,arrrow)}><div class={'su_td_out'}><su-checkbox  row={rowindex} types="column"  v-model={arrrow['suChecked']}></su-checkbox></div> </td> :
                                          <td  title={ arrrow[arr.prop]} class={this.set_col_class(arr,arrrow)}>
                                              <div class={'su_td_out'}><span>{ arrrow[arr.prop]  }</span></div>
                                          </td> : ''
                                 ) :
                                 arr.fixed ? <td ><div class={'su_td_out'}></div></td> : arr.type=='checkbox' ? <td class={this.set_col_class(arr,arrrow)}><div class={'su_td_out'}><su-checkbox  row={rowindex} types="column"  v-model={arrrow['suChecked']}></su-checkbox></div></td> : arr.$scopedSlots.hasOwnProperty('default') ? <td class={this.set_col_class(arr,arrrow)}><div class={'su_td_out'}>{ arr.$scopedSlots.default({row:arrrow,$rowIndex: rowindex,$colIndex:colindex}) }</div></td> : <td class={this.set_col_class(arr,arrrow)} title={ arrrow[arr.prop]}><div class={'su_td_out'}><span>{ arrrow[arr.prop]  }</span></div></td>
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
                return colData.align+' '+(this.$parent.set_col_class(colData.prop,rowData)||'')
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
            rowDblclick(row,index){
                if(this.$parent.$listeners.hasOwnProperty('rowDblclick')){
                    let intdex='';
                    if(this.$parent.$parent.$options.name=='suTableSync'){
                        intdex=row.$copyIndex
                    }else {
                        intdex=index
                    }

                    this.$parent.set_activeindex(intdex);
                    this.$parent.$emit('rowDblclick',this.$parent.setdefdata(row),index);
                }
            },
            get_row_edit(row){
                if(row<0 ){return false}
                return this.$children.filter(arr=>{
                    return arr.row==row && arr.$options._componentTag==='su-table-edit'
                })
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




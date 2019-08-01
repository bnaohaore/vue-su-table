
import thottles from './thottles'

    export default {
        data() {
            return {
                thottles_scroll:new thottles()
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
                         return   (<tr data-index={rowindex} on-mouseleave={()=>this.$parent.set_mousmoveindex(null)} on-mouseenter={()=>this.tr_mousmove(rowindex)}  class={{'su_hover_tr':rowindex==this.$parent.mousmoveindex}}>{
                             this.$parent.headerData.map((arr,colindex)=>{
                             return this.isfixed ?
                                 ( arr.fixed ?
                                         arr.$scopedSlots.hasOwnProperty('default') ?
                                         <td>
                                             { arr.$scopedSlots.default({row:arrrow,$rowIndex: rowindex,$colIndex:colindex})   }
                                         </td> :
                                          arr.type=='checkbox' ? <td><su-checkbox row={rowindex} types="column"  v-model={arrrow['suChecked']}></su-checkbox></td> :
                                          <td title={ arrrow[arr.prop]}>
                                              <span>{  arrrow[arr.prop]  }</span>
                                         </td> : ''
                                 ) :
                                 arr.fixed ? <td></td> : arr.type=='checkbox' ? <td><su-checkbox row={rowindex} types="column"  v-model={arrrow['suChecked']}></su-checkbox></td> : arr.$scopedSlots.hasOwnProperty('default') ? <td >{ arr.$scopedSlots.default({row:arrrow,$rowIndex: rowindex,$colIndex:colindex}) }</td> : <td title={ arrrow[arr.prop]}><span>{ arrrow[arr.prop]  }</span></td>
                         })}
                         </tr>)
                        })
                    }
                </tbody>
            </table>)
        },
        methods: {
            get_edit(row=null,col=null,types=''){
                if(row<0 || col <0){return false}
                return this.$children.find(arr=>{
                    return arr.row==row && arr.col == col
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




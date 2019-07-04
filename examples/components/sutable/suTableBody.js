
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
        mounted(){
            //如果是浮动table不执行
           /* if(this.isfixed){return}*/
            //初始化添加headerdata
           /* this.$children.map(arr=>{
                this.$parent.set_headerdata({...arr.$props,$scopedSlots:arr.$scopedSlots.hasOwnProperty('header') ? arr.$scopedSlots.header() : null });
            });*/
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
                            arrrow.$index=rowindex; //设置行标识
                         return   (<tr data-index={rowindex} on-mouseleave={()=>this.$parent.set_mousmoveindex(null)} on-mouseenter={()=>this.tr_mousmove(rowindex)}  class={{'su_hover_tr':rowindex==this.$parent.mousmoveindex}}>{
                             this.$parent.headerData.map((arr,colindex)=>{
                             return this.isfixed ?
                                 ( arr.fixed ?
                                         arr.$scopedSlots.hasOwnProperty('default') ?
                                         <td>
                                             { arr.$scopedSlots.default({row:arrrow,$rowIndex:rowindex,$colIndex:colindex})   }
                                         </td> :
                                          <td title={ arrrow[arr.prop]}>
                                              <span>{  arrrow[arr.prop]  }</span>
                                         </td> : ''
                                 ) :
                                 arr.fixed ? <td></td> : arr.$scopedSlots.hasOwnProperty('default') ? <td >{ arr.$scopedSlots.default({row:arrrow,$rowIndex:rowindex,$colIndex:colindex}) }</td> : <td title={ arrrow[arr.prop]}><span>{ arrrow[arr.prop]  }</span></td>
                         })}
                         </tr>)
                        })
                    }
                </tbody>
            </table>)
        },
        methods: {
            get_edit(row=null,col=null){
               /* if(row>=this.$parent.tableData.length-1 && col>=this.$parent.headerData.length-1){
                    return 'over'
                }*/
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




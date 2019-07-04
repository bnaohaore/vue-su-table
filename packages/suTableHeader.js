


    export default {
        name:'suTableHeader',
        data() {
            return {
           /*   thTarget:null, //th对象
                durg_down:false, //拖拽中
                startdurgx:0, //拖拽起点
                startdurgx_s:0, //鼠标按下的位置
                isresize_move:false, //允许点击拖拽*/
            }
        },
        props:{
            isfixed:{
                type: Boolean,
                default: false
            },
            headerData: {
                type: Array,
                default: () => []
            }
        },
        created(){

        },
        /**/
        render(h,context){
          return  (

                <table  cellspacing="0" cellpadding="0" border="0">
                    <colgroup>
                        {
                            this.headerData.map((arr,index)=>{
                                return <col width={arr.width || 160}></col>
                            })
                        }
                    </colgroup>

                  <thead>
                    <tr >
                      {
                     this.headerData.map((arr,index)=>{
                        return  this.isfixed ?
                            (arr.fixed ? <th  title={arr.label} data-col={index} on-mouseenter={()=>this.get_su_header_th('fixed')}  on-mousedown={()=>this.border_downclick('fixed')} on-mousemove={this.headerMouseMove} on-mouseout={this.headerMouseOut} >
                            {
                                arr.$scopedSlots.hasOwnProperty('header') ? arr.$scopedSlots.header() :  arr.label
                            }
                            </th> : '') :
                            <th class="su-header-th" title={arr.label} data-col={index} on-mouseenter={this.get_su_header_th}  on-mousedown={this.border_downclick} on-mousemove={this.headerMouseMove}  on-mouseout={this.headerMouseOut}>
                            {
                                arr.$scopedSlots.hasOwnProperty('header') ? arr.$scopedSlots.header() :  arr.label
                            }
                            </th>
                      })
                      }
                    </tr>
                  </thead>
                </table>
        )
        },
        mounted(){
            window.addEventListener('mouseup',this.border_upclick)
        },
        beforeDestroy(){
            window.removeEventListener('mouseup',this.border_upclick)
        },
        methods: {
            //鼠标按下
            border_downclick(types=''){
                this.$parent.set_durg_from(types);
                if(this.$parent.isresize_move  && this.$parent.thTarget){
                    event.stopPropagation();
                    event.preventDefault();
                    this.$parent.set_durgData({key:'startdurgx_s',value:event.pageX});
                    this.$parent.set_durgData({key:'durg_down',value:true});
                    this.$parent.set_xx_type({show:true,left:this.$parent.startdurgx })
                }
            },
            border_upclick(){
                if(this.$parent.durg_down && this.$parent.thTarget || this.$parent.isresize_move && this.$parent.thTarget){
                    document.body.style.cursor = '';
                    this.$parent.set_durgData({key:'durg_down',value:false});
                    this.$parent.set_xx_type({show:false});
                    this.$parent.headerData[this.$parent.thTarget.getAttribute('data-col')].width=parseFloat(this.$parent.headerData[this.$parent.thTarget.getAttribute('data-col')].width+(this.$parent.xx_data.left-this.$parent.startdurgx));
                    this.$parent.set_durgData({key:'thTarget',value:null})
                }
            },
            get_su_header_th(val=''){
                this.$parent.set_durgData({key:'durg_from',value:val});
                if(!this.$parent.isresize_move && event.target.getAttribute('data-col')==this.$parent.headerData.length-1){
                    this.$parent.set_durgData({key:'thTarget',value:null});
                    return
                }
                if(this.$parent.isresize_move && this.$parent.thTarget){return}
                this.$parent.set_durgData({key:'thTarget',value:event.target})
            },
            headerMouseMove(){
                event.stopPropagation();
                event.preventDefault();
                //如果在拖拽中
                const bodyStyle = document.body.style;
                if(this.$parent.durg_down){
                    bodyStyle.cursor = '';
                    let addx=event.pageX-this.$parent.startdurgx_s;
                    if((event.pageX-this.$parent.thTarget.getBoundingClientRect().x)<=36){
                        return
                    }
                    this.$parent.set_xx_type({show:true,left:this.$parent.startdurgx+addx});
                    return
                }
                if(!this.$parent.thTarget){
                    return
                }

                let zuobiao = this.$parent.thTarget.getBoundingClientRect();
                if( (this.$parent.thTarget.offsetWidth+zuobiao.x)-8 < event.pageX){
                    let vals=this.$parent.durg_from=='fixed' ? this.$parent.thTarget.offsetWidth+this.$parent.thTarget.offsetLeft : this.$parent.thTarget.offsetWidth+this.$parent.thTarget.offsetLeft-this.$parent.bodyleft;
                    this.$parent.set_durgData({key:'startdurgx',value:vals});
                    bodyStyle.cursor = 'col-resize';
                    this.$parent.set_durgData({key:'isresize_move',value:true})
                } else {
                    bodyStyle.cursor = '';
                    this.$parent.set_durgData({key:'isresize_move',value:false})
                }
            },

            headerMouseOut(){
                if(this.$parent.durg_down){

                }else {
                    document.body.style.cursor = '';
                    this.$parent.set_durgData({key:'isresize_move',value:false})
                }
            }
        },
        watch: {},
        components: {}
    }


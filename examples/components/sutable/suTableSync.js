

import thottles from './thottles'
let thottles_set_tableData=new thottles();
export default {
    name:'suTableSync',
    data() {
        return {
            is_copy:false,
            cbfn:()=>{},
            bdclientHeight:0,
            mgt:0,
            datas:[],
            tableBody:{},
        }
    },
    props:{
        tableData: {
            type: Array,
            default: () => []
        }
    },
    created(){

    },
    /**/
    render(h,context){
        return  (
            <div class={"su-table-sync-out"}>
                <div   style={{marginTop:this.mgt+'px',height:this.bdclientHeight+'px',boxSizing: 'border-box', position: 'absolute',top: 0,right:0,width: '10px',background: 'rgba(0,0,0,0)',zIndex: 998}} >
                    <div ref="scrolland" style="height: 100%;width: 100%;overflow-y: auto;">
                        <div style={{'height':27*this.tableData.length+'px','width': '100%'}} ></div>
                    </div>
                </div>
                { this.$scopedSlots.default({data:this.datas})}
            </div>
        )
    },
    mounted(){
        /*;*/
        this.$nextTick(()=>{
            console.log(this.$children)
            console.log(123)
            this.$on('updateEnd',this.updateEndFn);
            this.tableBody=this.$children[0].$el.querySelector('.su-table-out-bodys');

            this.$refs.scrolland.addEventListener('scroll',this.setTableData,false);
            window.addEventListener('resize',this.init,false);
            this.tableBody.addEventListener('mousewheel',this.set_bodyscroll,false);
            this.init();
        });


       // this.datas.push(this.tableData[0])
    },
    beforeDestroy(){
        this.$off('updateEnd',this.updateEndFn);
        this.$refs.scrolland.removeEventListener('scroll',this.setTableData);
        window.removeEventListener('resize',this.init,false);
        this.tableBody.removeEventListener('mousewheel',this.set_bodyscroll,false);
        for(var sd in this.data){
            this.data[sd]=null
        }
    },
    methods: {
        //反写外部参数
        setDataByRow(row,data){
            this.tableData.splice(row,1,{...this.tableData[row],...data});
        },
        showEdit(row,col){
            if(row>this.tableData.length){return}
            this.$refs.scrolland.scrollTop=(row*27);
            if((27*this.tableData.length)==(this.$refs.scrolland.scrollTop+this.tableBody.clientHeight) || this.$refs.scrolland.scrollTop==0){
                this.setTableData()
            }
            this.cbfn=()=>{
                this.datas.forEach((arr,index)=>{
                    if(row==arr.$copyIndex){
                      let editref=this.$children[0].getNextEdit(index,col);
                      if(editref){
                          editref.showEdit()
                      }
                      editref=null;
                   //     this.getNextEdit(this.row,this.col)
                        /*if(this.get_table_edit_arr()[index] &&  this.get_table_edit_arr()[index][indexs]){
                            this.get_table_edit_arr()[index][indexs].show_comp('click_d');
                        }*/

                    }
                });

            };
            /*
            * this.zxsetinex= ()=> {
              let rows=row ,indexs=index;
               this.tableData.forEach((arr,index)=>{
                   if(rows==arr.$copyIndex){
                     if(this.get_table_edit_arr()[index] &&  this.get_table_edit_arr()[index][indexs]){
                       this.get_table_edit_arr()[index][indexs].show_comp('click_d');
                     }
                   }
               });
            };*/
        },
        updateEndFn(){
            this.cbfn();
            this.cbfn=()=>{};
        },
        //向下滚动一行
        add_scroll(index,cb){

            if(this.datas[index].$copyIndex+1==this.tableData.length){
                cb(false);
                return
            };
            /* if((33*this.data.length)==(this.$refs.scrolland.scrollTop+this.tableBody.clientHeight)){
               return false
             }*/
            this.cbfn=cb;
            this.$refs.scrolland.scrollTop=(this.$refs.scrolland.scrollTop || 0) + 27 ;
           // cb(true);
        },
        //body滚轮滚动
        set_bodyscroll(){
            if((this.tableData.length*27)<this.tableBody.clientHeight){return}
            /*if(this.keyCode==39 && !event.wheelDelta  || this.keyCode==37 && !event.wheelDelta || !this.keyCode && !event.wheelDelta){
                return
            }*/
            let fx=true;
            /* console.log('高度'+this.$refs.scrolland.scrollTop+this.tableBody.scrollTop);
             console.log(this.tableBody.scrollTop);*/
            event.stopPropagation();
            event.preventDefault();
            if( event.wheelDelta>0){
                fx=false;
            }
            if( event.wheelDelta<0){
                fx=true;
            }
            this.$refs.scrolland.scrollTop=(this.$refs.scrolland.scrollTop || 0) + (fx ? 27 : -27);
            this.setTableData()
        },
        //初始化
        init(){
                this.mgt=this.$children[0].$el.querySelectorAll('.su-table-out-header')[0].clientHeight;
                this.bdclientHeight=this.$children[0].$el.querySelector('.su-table-out-bodys').clientHeight;
                this.setTableData();
                this.$children[0].$el.querySelector('.su-table-out-bodys').scrollTop=0;
        },
        //对应数据
        setTableData(){
            this.is_copy=true;
            thottles_set_tableData.timeEnd(()=>{
                let isedit=this.$children[0].isEditRef;
                if(isedit){
                    isedit.hideEdit();
                }
            let nums=Math.floor(this.bdclientHeight/27)-1;
            let start=Math.ceil(this.$refs.scrolland.scrollTop/27);

            this.$nextTick(()=>{

                for(let nnp=0;nnp<=nums;nnp++){
                    let ins=parseFloat(start+nnp);
                   /* console.log(ins);
                    console.log(this.tableData[ins])*/
                    if(this.tableData[ins]){
                        console.log(!this.datas[nnp]);
                        if(!this.datas[nnp]){
                            this.datas.push({})
                        }
                        this.datas.splice(nnp,1,{...this.tableData[ins]});
                    } else {
                        this.datas.splice(nnp,1);
                    }
                }
                for(var indss=this.datas.length;indss>=0;indss--){
                    if(indss>nums){
                        this.datas.splice(indss,1);
                    }
                };
                this.$nextTick(()=>{
                    this.$emit('updateEnd');
                    this.is_copy=false;

                });

            })
            },16)
        }
    },
    watch: {
        'tableData.length'(){
            this.$nextTick(()=>{
                this.is_copy=true;
                this.tableData.forEach((arr,index)=>{
                    this.tableData[index].$copyIndex=index
                });
                this.setTableData()
            })

           // this.datas.push(this.tableData[0])
        },
   /*     datas: {
            handler(newName, oldName) {
                if(this.is_copy){return}
                //反写数据回data
                this.datas.forEach(arr=>{
                    this.tableData.splice(arr.$copyIndex,1,{...arr})
                });

            },
            deep: true
        },*/
    },
    components: {}
}

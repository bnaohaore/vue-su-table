

import thottles from './thottles'
let thottles_set_tableData=new thottles();
let thottles_refish=new thottles();
export default {
    name:'suTableSync',
    data() {
        return {
            suTable:null,
            shownext:false,
            flexBody:null,
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

        this.tableData.forEach((arr,index)=>{
            if(!this.tableData[index].hasOwnProperty('suChecked')){
                this.tableData[index].suChecked=false
            }
            if(!this.tableData[index].hasOwnProperty('suActive')){
                this.tableData[index].suActive=false
            }
            this.tableData[index].$copyIndex=index
        });
    },
    /**/
    render(h,context){
        return  (
            <div class={"su-table-sync-out"}>
                <div   style={{marginTop:this.mgt+'px',height:this.bdclientHeight+'px',boxSizing: 'border-box', position: 'absolute',top: 0,right:0,width: '10px',background: 'rgba(0,0,0,0)',zIndex: 998}} >
                    <div ref="scrolland" style="height: 100%;width: 100%;overflow-y: auto;">
                        <div style={{'height':33*this.tableData.length+'px','width': '100%'}} ></div>
                    </div>
                </div>
                { this.$scopedSlots.default({data:this.datas}) }
            </div>
        )
    },
    mounted(){
        this.suTable=this.$children.find(arr=>{
            return arr.$options._componentTag=='su-table'
        }) ;
        this.$nextTick(()=>{
            this.$on('updateEnd',this.updateEndFn);
            this.tableBody=this.suTable.$el.querySelector('.su-table-out-bodys');
            this.flexBody=this.suTable.$el.querySelector('.su-table-out-bodys-flexd-right');
            if(this.flexBody){
                this.flexBody.addEventListener('mousewheel',this.set_bodyscroll,false);
            }
            this.$refs.scrolland.addEventListener('scroll',this.setTableData,false);
            window.addEventListener('resize',this.init,false);
            this.tableBody.addEventListener('mousewheel',this.set_bodyscroll,false);
            this.init();
        });
       // this.datas.push(this.tableData[0])
    },
    beforeDestroy(){
        if(this.flexBody){
            this.flexBody.removeEventListener('mousewheel',this.set_bodyscroll,false);
        }
        this.$refs.scrolland.removeEventListener('scroll',this.setTableData,false);
        window.removeEventListener('resize',this.init,false);
        this.tableBody.removeEventListener('mousewheel',this.set_bodyscroll,false);
        this.$off('updateEnd');
            for(var sd in this.data){
                this.data[sd]=null
            }

    },
    methods: {
        //反写外部参数
        setDataByRow(row,data){
            this.tableData.splice(row,1,{...this.tableData[row],...data});
        },
        //用于外部调用  写入内部 外部 参数
        setData(row,data){
            this.tableData.splice(row,1,{...this.tableData[row],...data});
            this.datas.forEach((arr,index)=>{
                if(arr.$copyIndex==row){
                    this.datas.splice(index,1,{...this.datas[index],...data});
                }
            });
            /*if(data.hasOwnProperty('suChecked')){
                this.suTable.initChecked();
            }*/
        },
        init_end(cb){
            this.cbfn=cb
        },
        showEdit(row,col){
            if(row>this.tableData.length){return}
            let topisdeng=false;
            if(this.$refs.scrolland.scrollTop==(row*33)){
                topisdeng=true;
            }
            this.$refs.scrolland.scrollTop=(row*33);
            if((33*this.tableData.length)==(this.$refs.scrolland.scrollTop+this.tableBody.clientHeight) || this.$refs.scrolland.scrollTop==0 || topisdeng){
                this.setTableData()
            }
            this.cbfn=()=>{
                this.datas.forEach((arr,index)=>{
                    if(row==arr.$copyIndex){
                      let editref=this.suTable.getNextEdit(index,col);
                      if(editref){
                          editref.showEdit()
                      }
                      editref=null;
                    }
                });
            };

        },
        updateEndFn(){
            this.cbfn();
            this.cbfn=()=>{};
        },
        //向下滚动一行 或者向上滚动一行
        add_scroll(index,cb,types=''){
            if(this.datas[index].$copyIndex+1==this.tableData.length && !types){
                cb(false);
                return
            };
            if(this.datas[index].$copyIndex==0 && types=='to_pre'){
                cb(false);
                return
            };
            /* if((33*this.data.length)==(this.$refs.scrolland.scrollTop+this.tableBody.clientHeight)){
               return false
             }*/
            this.cbfn=cb;

            let add_top=types=='to_pre' ? -33 : 33;
            this.$refs.scrolland.scrollTop=(this.$refs.scrolland.scrollTop || 0) + add_top ;
           // cb(true);
        },
        //body滚轮滚动
        set_bodyscroll(){
            if((this.tableData.length*33)<this.tableBody.clientHeight){return}

            let fx=true;

            event.stopPropagation();
            event.preventDefault();
            if( event.wheelDelta>0){
                fx=false;
            }
            if( event.wheelDelta<0){
                fx=true;
            }
            this.$refs.scrolland.scrollTop=(this.$refs.scrolland.scrollTop || 0) + (fx ? 33 : -33);
            this.setTableData()
        },
        //初始化
        init(){
                this.mgt=this.suTable.$el.querySelectorAll('.su-table-out-header')[0].clientHeight;
                this.bdclientHeight=this.suTable.$el.querySelector('.su-table-out-bodys').clientHeight;
                this.setTableData();
                this.suTable.$el.querySelector('.su-table-out-bodys').scrollTop=0;
        },
        //对应数据
        setTableData(){

            this.is_copy=true;
            thottles_set_tableData.timeEnd(()=>{
                if(!this.$refs.scrolland){return}

                let isedit=this.suTable.isEditRef;
                if(isedit && isedit.layer){
                    if(isedit.layer=='auto' && isedit.autoRef){
                        isedit.autoRef.hideMenban()
                    }else {
                        isedit.hideEdit();
                    }
                }
            let nums=Math.floor(this.bdclientHeight/33)-1;
            let start=Math.ceil(this.$refs.scrolland.scrollTop/33);

            this.$nextTick(()=>{
                if(this.datas.length>this.tableData.length){
                    var rems=this.datas.length-this.tableData.length;
                    for(var remst=this.datas.length-1;remst>this.tableData.length-1;remst--){
                        this.datas.splice(remst,1)
                    }
                }
                for(let nnp=0;nnp<=nums;nnp++){
                    let ins=parseFloat(start+nnp);
                   /* console.log(ins);
                    console.log(this.tableData[ins])*/
                    if(this.tableData[ins]){
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
            },30)
        }
    },
    watch: {
        'tableData.length'(){

                this.$nextTick(()=>{
                    this.is_copy=true;
                    this.tableData.forEach((arr,index)=>{
                        if(!this.tableData[index].hasOwnProperty('suChecked')){
                            this.tableData[index].suChecked=false
                        }
                        if(!this.tableData[index].hasOwnProperty('suActive')){
                            this.tableData[index].suActive=false
                        }
                        this.tableData[index].$copyIndex=index
                    });
                    thottles_refish.timeEnd(()=>{
                        if(this.suTable){
                            this.suTable.initChecked();
                            this.suTable.checkedChange()
                        }
                    },100);
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

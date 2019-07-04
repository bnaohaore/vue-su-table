
<template>
    <div @click.stop=""  style="position: relative;display: inline-block"  ref="suselectref" >
        <su-popover
                v-model="su_select_menban_show"
                ref="popover"
        >
            <div  class="suSelectMenban" ref="suSelectMenban_ref">
                <slot></slot>
                <div v-show="noVnode" class="suOptionOut">暂无数据</div>
            </div>
            <div slot="reference" @click.stop="" ref="reference" @keyup="stopstab" @keydown="keydownHide">
                <div  class="suSelectOut" >
                    <span >{{this.activeName}}</span><!--<span class="biaoshi" style="display: inline-block" :class="{rotate180 : su_select_menban_show}">v</span>-->
                </div>
            </div>
        </su-popover>
     <!--   <div class="suSelectMenban" :style="{left:lefts+'px',top:tops+'px'}" v-show="su_select_menban_show" ref="suselectmenbanref">-->

        <!--</div>-->
    </div>
</template>
<script>
export default {
    name:'suSelect',
    data(){
        return {
            lefts:0,
            tops:0,
            noVnode:false,
            activeName:'',
            hover_index_val:'',
            hover_index:-1,
            su_select_menban_show:false
        }
    },
    created(){
        window.addEventListener('click',this.hideMenban)
    },
    beforeDestroy(){
        window.removeEventListener('click',this.hideMenban)
    },
    computed:{
      /*  activeName(){
            return  this.findtext(this.value)
        },*/
    },
    mounted(){
        if(this.$scopedSlots.default().length<=0){
            this.noVnode=true
        }
    },
    props:{
        value:null
    },
    methods: {
        set_hover_index_val(val){
          var indes=  this.$children[0].$children.findIndex((arr)=>{
                 return arr.value==val
            });
            this.hover_index=indes;
            this.hover_index_val=val
        },
        stopstab(){
            if(event.keyCode==9 || event.keyCode==40 || event.keyCode==38){
                event.preventDefault();
                event.stopPropagation();
            }
            if(event.keyCode==9){
                this.$emit('tab');
            }

            if(event.keyCode==40){ //下
                if(this.hover_index>=(this.$scopedSlots.default().length-1)){this.hover_index=-1}
                this.hover_index+=1;
                this.hover_index_val=this.$children[0].$children[this.hover_index].value;

            }
            if(event.keyCode==38){ //上
                if(this.hover_index==0 || this.hover_index==-1){this.hover_index=this.$scopedSlots.default().length}
                this.hover_index-=1;

                this.hover_index_val=this.$children[0].$children[this.hover_index].value
            }

            if(event.keyCode==13){ //enter
                if(this.hover_index_val){
                    this.set_active(this.hover_index_val,this.$children[0].$children[this.hover_index].label);
                }else {
                    this.$emit('empty_enter');
                }

            }
            if(event.keyCode==38 || event.keyCode==40){
                this.$refs.suSelectMenban_ref.scrollTop=parseInt(24*this.hover_index)
            }
        },
        keydownHide(){
            if(event.keyCode==9 || event.keyCode==40 || event.keyCode==38){
                event.preventDefault();
                event.stopPropagation();
            }
        },
        set_active_hover(val){

        },
        set_active(val,label){
            this.$emit('onActive',{value:val,label:label});
            this.$emit('input',val);
            this.hideMenban();
        },
        set_text(text){
            this.activeName=text
        },

        //隐藏menban
        hideMenban(){
            this.su_select_menban_show=false
        },
        showMenban(){
            this.$refs.reference.focus();
            this.su_select_menban_show=true
        }
    },
    watch: {
        su_select_menban_show(val){
            if(val){
                this.lefts=this.$refs.suselectref.offsetLeft;
                this.tops=this.$refs.suselectref.offsetTop;
                this.$emit('open');

            }else {
                this.$emit('close');
            }
        },
        value(val){
            /*console.log('lalal')
            this.$emit('change',{value:val})*/
        }

    },
    components: {

    }
}
</script>
<style lang="scss" >
    .el-popover {
        position: absolute;
        background: #fff;
        border-radius: 4px;
        border: 1px solid #ebeef5;
        z-index: 2000;
        color: #606266;
        line-height: 1.4;
        text-align: justify;
        font-size: 14px;
        box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
        word-break: break-all;
    }
    .el-popover{
        ::-webkit-scrollbar{
            width: 8px;
            height: 8px;
        }
        ::-webkit-scrollbar-track-piece {
            background-color: #eaeaea;
            -webkit-border-radius: 0;
        }
        ::-webkit-scrollbar-thumb {
            background-color: #d8d8d8;
            height: 50px;
            outline-offset: -2px;
            outline: 2px solid #fff;
            -webkit-border-radius: 5px;
            border: 0px solid #fff;
        }
        .active_hovers{
            background: #00c081 !important;
            color: white !important;
        }
    }
    .suSelectOut{
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        background: white;
       // border: 1px solid #dee9eb;
       //  border-radius: 4px;
        box-sizing: border-box;
        height: 26px;
        font-size: 14px;

        .rotate180{
            transform:rotate(180deg);
        }
    }
    .suSelectMenban{

        .suOptionOut_active{
            background: #dee9eb;
        }
        .suOptionOut{
            cursor: pointer;
            padding:2px 12px;
            height: 24px;
            box-sizing: border-box;
            text-align: center;
            line-height: 22px;
            font-size: 14px;
            white-space:nowrap;
        }
            width: 100%;
            padding: 6px;
            box-sizing: border-box;
            background: white;
            z-index: 998;
            display: inline-block;
            max-height: 180px;
            overflow-y:auto;

    }
</style>
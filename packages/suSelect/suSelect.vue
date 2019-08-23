
<template>
    <div @click.stop="" class="su-select-out" style="position: relative;display: inline-block;color: #5a5e66"  ref="suselectref" >
        <su-popover
                v-model="su_select_menban_show"
                :visible-arrow="false"
                ref="spopovers"
        >
            <div  class="suSelectMenban" ref="suSelectMenban_ref">
                <slot></slot>
                <div v-show="!$scopedSlots.default" class="suOptionOut">暂无数据</div>
            </div>
            <div  v-if="searchType=='input'" slot="reference"  ref="reference" @keyup="stopstab" @keydown="keydownHide">
                <div @click.stop="" class="suSelectOut" style="height: 28px;line-height: 28px">
                    {{activeName}}<!--<span class="biaoshi" style="display: inline-block" :class="{rotate180 : su_select_menban_show}">v</span>-->
                </div>
            </div>
            <div   v-if="searchType=='search'"  slot="reference">
                <div  class="suSelectOut">
                    <input @click.stop="" style="height: 28px;line-height:28px;width: 100%;border: 0"  ref="reference" @keyup="stopstab" @keydown="keydownHide" v-model="activeName"/>
                </div>
            </div>

        </su-popover>
     <!--   <div class="suSelectMenban" :style="{left:lefts+'px',top:tops+'px'}" v-show="su_select_menban_show" ref="suselectmenbanref">-->

        <!--</div>-->
    </div>
</template>
<script>
    import thottles from '../thottles'
    let thottles_valueSrarch=new thottles();
    let thottles_refish=new thottles();
export default {
    name:'suSelect',
    data(){
        return {
            inpoppers:true,
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
        this.inpoppers=false;
        window.removeEventListener('click',this.hideMenban);
        for(var sd in this.data){
            this.data[sd]=null
        }
    },
    computed:{

    },
    mounted(){
        if(!this.$scopedSlots.default || this.$scopedSlots.default && this.$scopedSlots.default().length<=0){
            this.noVnode=true
        }
        if(this.value && this.$parent.dflabel){
            this.activeName=this.$parent.dflabel;

        }
        if(!this.value){
            this.$emit('valueSearch','')
        }
    },
    props:{
        searchType:{
            default:'input',
            type:String
        },
        value:null
    },
    methods: {
        set_hover_index_val(val){
          var indes=this.$children[0].$children.findIndex((arr)=>{
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

            if(event.keyCode==40 && this.$scopedSlots.default){ //下
                if(this.hover_index>=(this.$scopedSlots.default().length-1)){this.hover_index=-1}
                this.hover_index+=1;
                this.hover_index_val=this.$scopedSlots.default()[this.hover_index].componentOptions.propsData.value;

               /* console.log();
                console.log(this.hover_index_val);
                console.log(this.hover_index)*/
            }
            if(event.keyCode==38 && this.$scopedSlots.default){ //上

                if(this.hover_index==0 || this.hover_index==-1){ this.hover_index=this.$scopedSlots.default().length }
                this.hover_index-=1;
                this.hover_index_val=this.$scopedSlots.default()[this.hover_index].componentOptions.propsData.value;
            }

            if(event.keyCode==13){ //enter
                if(this.hover_index_val && this.$scopedSlots.default && this.$scopedSlots.default()[this.hover_index]){
                    this.set_active(this.hover_index_val,this.$scopedSlots.default()[this.hover_index].componentOptions.propsData.label);
                }else {
                    this.$emit('empty_enter');
                }
            }
            if(event.keyCode==38 || event.keyCode==40){
                this.$refs.suSelectMenban_ref.scrollTop=parseInt(24*(this.hover_index-1))
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

            //confirm 拦截
            if(this.$parent.confirm({value:val,label:label})){return}
            this.$emit('onActive',{value:val,label:label});
            this.$emit('input',val);

            this.$nextTick(()=>{
                this.hideMenban();
            })
        },
        set_text(text){
            this.activeName=text;

        },
        //隐藏menban
        hideMenban(){
            this.su_select_menban_show=false
        },
        showMenban(){
            this.$refs.reference.focus();
            this.su_select_menban_show=true;
        /*    if(this.searchType=='search'){
                this.$emit('valueSearch',this.activeName)
            }*/
        }
    },
    watch: {
        '$parent.selectData'(){
            //注意更新popper弹窗
            this.$nextTick(()=>{
                this.$refs.spopovers.updatePopper()
            })
        },
        activeName(val,old){

            if(this.searchType=='search'){

                    if(this.$refs.spopovers){
                        thottles_valueSrarch.timeEnd(()=>{
                            this.$emit('valueSearch',val)
                        },100)
                    }
            }
        },
        su_select_menban_show(val){
            if(val){
                this.lefts=this.$refs.suselectref.offsetLeft;
                this.tops=this.$refs.suselectref.offsetTop;

                this.$emit('open');
            }else {
                this.$emit('close');
            }
        },



    },
    components: {

    }
}
</script>
<style lang="scss" >

</style>
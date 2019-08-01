
<template>
    <div @click.stop="set_active"  class="suOptionOut" @mouseenter="set_hover_index_val" :class="{suOptionOut_active : isactive,active_hovers: $parent.$parent.hover_index_val==this.value}">
        {{label}}
    </div>
</template>
<script>
export default {
    name:'suOption',
    data(){
        return {
            isactive:false,
        }
    },
    created(){

    },
    computed:{

    },
    mounted(){
        if(this.$parent.$parent.value==this.value){
            this.isactive=true;
         /*   console.log(this.$parent.$parent.value);
            console.log(this.label);
            console.log(this.value)*/
          //  this.$parent.$parent.set_text(this.label)
        }else {
            this.isactive=false;
        }
    },
    props:{
        label:null,
        value:null
    },
    methods: {
        set_hover_index_val(){
            this.$parent.$parent.set_hover_index_val(this.value)
        },
        set_active(){
            console.log('点击22')
            this.$parent.$parent.set_active(this.value,this.label)
        },
    },
    watch: {
        '$parent.$parent.value'(value){
            if(value==this.value){
                this.isactive=true;
                this.$parent.$parent.set_text(this.label);
                this.$parent.$parent.$emit('valueChange',{value:value,label:this.label})
            }else {
                this.isactive=false;
            }
        }
    },
    beforeDestroy(){
        for(var sd in this.data){
            this.data[sd]=null
        }
    },
    components: {

    }
}
</script>
<style lang="scss" >


</style>
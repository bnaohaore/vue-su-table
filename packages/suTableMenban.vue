<template>
        <div @click.stop="">
            <su-popover
                    transition="falsss"
                    :offset="offset"
                    :placement="placement"
                    v-model="su_menban_show"
                    :visible-arrow="false"
                    ref="su_menban"
            >
                    <div @click.stop=''  class="su-menbanout " :style="{width:width+'px',height:height+'px'}">
                        <slot></slot>
                    </div>
            </su-popover>
        </div>
</template>

<script>

    export default {
        name:'suTableMenban',
        data(){
            return {
                keys:1,
                edit:null,
                su_menban_show:false
            }
        },
        props:{
            offset:{
                default:0
            },
            placement:{
                default:'bottom'
            },
            width:{
                default:600
            },
            height:{
                default:300
            }
        },
        created(){

        },
        mounted(){
            window.addEventListener('click',this.hideMenban)
        },
        beforeDestroy(){
            window.removeEventListener('click',this.hideMenban);
            for(var sdf in this.data){
                this.data[sdf]=null
            }
        },
        methods: {
            showMenban(el,edit){
                this.edit=edit;
                if(this.su_menban_show){
                    this.su_menban_show=false
                }

                this.$refs.su_menban.referenceElm=el;
                this.$nextTick(()=>{
                    this.$refs.su_menban.doDestroy();
                    this.su_menban_show=true;
                });

            },
            hideMenban(hed=true){
                this.su_menban_show=false;
                if (hed){
                    if(this.edit && this.edit.inEdit){
                        this.edit.hideEdit();
                    }
                }
            }
        },

        created(){

        },

        watch: {

        },
        components: {}
    }
</script>
<style lang="scss">
    .table_change_moban > .issolota{

        /*表头浮动*/
        .el-table {
            overflow: auto;
            position: relative;
            height: 100%;
            display: flex;
            flex-direction: column;
        }

        .el-table__body-wrapper {
            box-sizing: border-box;
            padding-top: 0;
            height: 100%;
        }
        table{
            width: 100%;
        }

    }
    .su-menbanout{
        display: flex;
        flex-direction: column;
        overflow: hidden;
        .su-table-out-bodys{
            td>span{height: 26px;display: inline-block;}
        }
    }

</style>
<style lang="scss" scoped>

    .su-menbanout>div{
        width: 100%;
        height: 100%;
    }
</style>

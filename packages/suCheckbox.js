


export default {
    name:'suCheckbox',
    data() {
        return {
            nowChecked:false,
            over:false,
        }
    },
    props:{
        types:'',
        row:null,
        //是否为不确定状态
        indeterminate: {
            type: Boolean,
            default: false
        },
        //勾选状态
        value: {
            type: Boolean,
            default: false
        }
    },
    created(){
        this.nowChecked=this.value;
        this.over=true;
    },
    /**/
    render(h,context){
        return  (
            <div class={"su-table-checkbox"}>
                <label  role="checkbox"  class={{'su-checkbox':true,'su-checkbox-is-checkbox':this.nowChecked && !this.indeterminate,'su-checkbox-indeterminate':this.indeterminate}}>
                    <input onClick={this.clickssss} type="checkbox" style="display:none;" v-model={this.nowChecked}  />
                </label>
            </div>
        )
    },
    mounted(){
        this.$watch("nowChecked",(val)=>{

            //  this.$parent.set_checked(this.row,val);
            this.$emit('input',val);
            this.$emit('change',val)
        })
    },
    beforeDestroy(){
        for(var sd in this.data){
            this.data[sd]=null
        }
    },
    methods: {
        clickssss(){
            if(this.types=='header'){
                this.$parent.$parent.set_val_all(!this.nowChecked);
            }
            if(this.types=='column'){
                this.$parent.$parent.set_checked(this.row,!this.nowChecked);
            }

        }
    },
    watch: {
        'value'(val){
            this.nowChecked=val;
        }
    },
    components: {

    }
}

<template>
  <div class="ui-select-search">
    <su-el-select
      @enter_no_selectOption="set_enter_no_selectOption"
      :disabled="disabled"
      clearable
      @visible-change="change_lable"
      @have_value_enter="change"
      v-if="search_type=='input'"
      ref="costCatalogue_select"
      v-model="code"
      :placeholder="placeholder"
      filterable
      remote
      @focus="get_first_list"
      size="small"
      @blur="inputBlur"
      @select_value_change="selectValueChange"
      :multiple="multiple"
      :collapseTags="collapseTags"
      :remote-method="remoteMethod"

      :collapseTagsLine="collapseTagsLine"
      @is_bottom="handleTo_bottom"
      :bt_loading="'loading...'"
      :bt_loading-over="'没有更多了'"
    >
      <su-el-option
        v-for="item,index in costCatalogueList"
        :item_data="item"
        :key="item.index"
        :label="item.label"
        :value="item.val">
          <slot :row="item "></slot>
      </su-el-option>
    </su-el-select>
    <!--        <el-select
                    :disabled="disabled"
                    @focus="wo_focus"
                    @change="change"
                    v-if="search_type=='click'"
                    ref="costCatalogue_select"
                    v-model="code"
                    :placeholder="placeholder"
                    :multipleLimit="multipleLimit"
                    size="small"
                    :multiple="multiple"
                    :collapseTags="collapseTags"
                    :collapseTagsLine="collapseTagsLine"
                    @is_bottom="handleTo_bottom"
                    :bt_loading="'loading...'"
                    :bt_loading-over="'没有更多了'"
            >
                <input ref="click_input_2" :placeholder="placeholder_click_input" class="click_input ui-input-f" slot="input_slot_click" v-model="click_input_value" >
                <el-option
                        v-for="item,index in costCatalogueList"
                        :key="item.index"
                        :label="item.label"
                        :value="item.val">
                </el-option>
            </el-select>-->


  </div>
</template>

<script>
  export default {
    name:'suSelectSearchVal',
    data() {
      return {
        is_change:false,
        click_input_value: "",
        costCatalogueList: [],
        data: {
          code: "",
          regTypeCode: "", //挂号种类编码
          costItemCode: "", //费用项目编码
          chargeMode: "", //收费方式1-多次收费 2-一次性收费
          tstatus: ""
        },
        code: "",
        currentPage: 0,
        pageSize: 30,
        keyword: ""
      };
    },
    props: {
      hoverItem:'',
      sendData:{ },
      difaultlabel:{default:''},
      defaultCode:null,
      disabled:{default:false},
      value: { default: null },
      arrName: { default: null },
      apiPath: { default: null },
      values: { default: null },
      label: { default: null },
      multiple: { default: false },
      multipleLimit: { default: 99 },
      collapseTagsLine: { default: false },
      collapseTags: { default: false },
      placeholder: { default: "请选择" },
      search_type: { default: "input" },
      placeholder_click_input: { default: "请输入" }
    },
    computed: {},
    beforeDestroy(){

      for(var nts in this.data){
        this.data[nts]=null
      }

    },
    created() {
      if(this.value){
        this.code=this.value;
      }
    },
    mounted() {
      if(!this.difaultlabel || !this.value){return}
      this.$refs.costCatalogue_select.selected={currentLabel:this.difaultlabel,value:this.value};
      this.$refs.costCatalogue_select.$refs.reference.$emit('input',this.difaultlabel);
      this.$refs.costCatalogue_select.debouncedOnInputChange();
    },
    methods: {
      set_enter_no_selectOption(){
        this.$emit('enter_no_selectOption')
      },
      //初始化
      getlist_empty(){
        this.currentPage = 0;
        this.costCatalogueList = [];

        if(this.difaultlabel){
          this.$refs.costCatalogue_select.selected={currentLabel:this.difaultlabel,value:this.value};
          this.$refs.costCatalogue_select.$refs.reference.$emit('input',this.difaultlabel);
          this.remoteMethod(this.difaultlabel)
        }else {
          this.remoteMethod('');
        }
      },
      get_first_list(){
        this.$emit('focus');
        if(!this.value){
          this.getlist_empty()
        }
      },
      stopkeyup(to_pre){
        this.$emit('ui_stopkeyup',to_pre)
      },
      inputBlur(e) {

          if(event.keyCode==13){

          }
        // 如果上一次没有选择节点那么本次需要重新请求
        this.$emit('blur');

      },
      clearVal() {
        this.remoteMethod("");
      },
      selectValueChange(val) {
        this.$refs.costCatalogue_select.query = val;
        if (!val || !val.length) {
          this.$refs.costCatalogue_select.previousQuery = "";
        }
        this.$emit("select_value_change", val);
      },
      clear_select() {
        this.code = this.search_type == "click" ? [] : "";
      },
      wo_focus() {
        setTimeout(()=> {
          this.$refs.click_input_2.focus();
        }, 200);
      },
      change_lable(fsd){

        if(!fsd){
          this.$parent.selectedLabel=this.$refs.costCatalogue_select.selected.currentLabel;
          this.$parent.difaultlabels=this.$refs.costCatalogue_select.selected.currentLabel;
          this.$parent.$emit('update:difaultlabel', this.$refs.costCatalogue_select.selected.currentLabel)
        }
        this.$emit('visible-change',fsd)
      },
      change(val,data) {

        this.is_change=true;
        this.$emit("change",val,data);

      },
      handleTo_bottom() {

        this.remoteMethod(this.search_type == "click" ? this.click_input_value : this.keyword);
      },
      remoteMethod(keyword) {
        if(Object.prototype.toString.call(keyword)=='[object Null]'){return};

        //重置搜索框
        if (this.keyword != keyword) {
          this.currentPage = 0;
          this.costCatalogueList = [];
          this.$refs.costCatalogue_select.bt_is_loading_over = false; //修改状态为未完结
          this.$refs.costCatalogue_select.bottom_is_back = false; //锁定滚动事件
          this.$refs.costCatalogue_select.refishScrollbar(); //重置滚动高度
          this.keyword = keyword;
        }


        this.currentPage += 1;
        this.$nextTick(() => {
          var api=null;
          if(typeof this.apiPath=="string"){
            api=this.$api.post(this.apiPath, { keyword: keyword,keyWord: keyword,currentPage: this.currentPage, pageNumber: this.currentPage, pageSize: this.pageSize,...this.sendData})
          }else{
            api=this.apiPath({ keyword: keyword,keyWord: keyword,currentPage: this.currentPage, pageNumber: this.currentPage, pageSize: this.pageSize,...this.sendData})
          }
          api.then(
            data => {

              let data_arr = data[this.arrName] || data.result || data.content || data;

              if (data_arr && data_arr.length > 0) {

                data_arr.forEach((item)=> {

                  let obj = item;
                  obj.label =item[this.label] ? item[this.label].toString() : '';
                  obj.val = item[this.values] ? item[this.values].toString() : '';

                  this.costCatalogueList.push(obj);

                });



                this.$nextTick(()=>{
                  this.$refs.costCatalogue_select.$refs.popper.$emit('updatePopper');
                    this.$refs.costCatalogue_select.navigateOptions('next');
                });


                if (this.costCatalogueList.length < this.pageSize) {
                  this.$refs.costCatalogue_select.to_bottom_cb("over"); //解锁并修改状态为完结
                } else {
                  this.$refs.costCatalogue_select.to_bottom_cb(); //解锁
                }
              } else {
                this.$refs.costCatalogue_select.to_bottom_cb("over"); //解锁并修改状态为完结
              }
            },data => {
              this.$refs.costCatalogue_select.refishScrollbar(); //重置滚动高度
              this.$refs.costCatalogue_select.to_bottom_cb(); //解锁
            }
          );
        });


      }
    },
    watch: {
      value(val){
        this.code=val;
      },
      //添加默认label
      difaultlabel(val,bef){
        this.$refs.costCatalogue_select.selected={currentLabel:this.difaultlabel,value:this.value};
        this.$refs.costCatalogue_select.$refs.reference.$emit('input',this.difaultlabel);
        this.costCatalogueList.push({label:this.difaultlabel, val:this.value}) ;
      },
      currentPage(val) {},
      code(val) {
        this.$emit("input", val);
      },
      click_input_value(val) {
        this.remoteMethod(val);
      }
    },
    components: {}
  };
</script>

<style lang="scss" scoped>
  .click_input {
    width: 80%;
    border-radius: 5px;
    box-sizing: border-box;
    padding: 0 10px;
    border: solid 1px #dee9eb;
    height: 28px;
    line-height: 28px;
    margin: 6px auto;
    display: block;
  }
</style>

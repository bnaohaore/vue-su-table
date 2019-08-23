main.js<br>




数据渲染模式 支持大量数据的操作<br>
template

<br><br><br>


```html
		<template>
            <div class="home" style="max-width: 100%">
                    <div style="text-align: left;padding: 30px">
                        ctrl+小键盘左键退格 tab键进格
                        <p style="color: red;margin-bottom: 20px">修改下拉 或者 初始化下拉数据的值的时候 必须 同时给 到或者拥有 code 和 str(编号和名称) 必须要求后端给到  <br>如：this.$refs.suTableSyncFef.setData(0,{sucai:'3',sucaiStr:'菠菜头头'});</p>
                        <p style="color: red;margin-bottom: 20px">修改行数据请使用setData方法 <br>如: 修改第一行的数据 this.$refs.suTableSyncFef.setData(0,{suChecked:true}</p>
                        <p style="color: red;margin-bottom: 20px">增删 等 操作必须使用 push unshift splice 等 原生方法 首次赋值之后禁止直接对数组进行赋值操作 赋值空数组除外 </p>
                        <!--<p style="color: red;margin-bottom: 20px">
                            使第一行复选框勾选
                            <br>如: this.$refs.suTableSyncFef.setData(0,{suChecked:true}
                            <br> 获取勾选状态的数据请  循环 判断 suChecked 为 true 的
                        </p>-->

                        <p style="margin-bottom: 20px">组件 su-table-sync 用于开启大量数据渲染模式 具体使用见示例</p>
                        <p style="margin-bottom: 20px">
                            组件 su-table-menban 用于编写自定义下拉弹窗 具体使用见示例
                        </p>
                        <p style="margin-bottom: 20px">
                            组件 su-table 用于渲染表格
                            <br>
                            参数<br>
                            :rowClass //自定义行的class 可以绑定 string function
                            :colClass //自定义列的class 可以绑定 string function
                            <br>
                            方法<br>
                            @rowClick //单机触发
                            @rowDblclick //双击触发
                            @checkedChange //复选框改变时触发 <br>
                            @lastEntry //最后一行切换后执行<br>
                            @tableBottom //普通模式启用 滚动到最后一行执行<br>
                            $refs.suTable.set_activeindex(0) //单选第一行  <br>
                            $refs.suTableRef.set_checkboxindex(1,true)  //修改第二行复选选框状态 为选中<br>


                        </p>
                        <p>
                            组件 su-table-column 用于渲染列
                            <br>
                            参数  :fixed="true" (设置当前列浮动)  type='checkbox'  (设置列为复选框列)  label='名字'(表头文字) prop="name"(字段名)
                            <br>
                            自定义 列 详情见示列  <br>
                            自定义 表头 详情见示列
                        </p>
                        <p><br>
                            <br>
                            组件 su-table-edit 用于td编辑<br>
                            <br>
                            参数<br>
                            disabled // true/false 可编辑/不可编辑<br>
                            layer="select" //单选下拉  layer="selectSrarch" //搜索下拉  layer="input" //普通input输入  layer="auto" //自定义内容下拉弹窗<br>
                            type="date" //日期选择 和 layer="input"同时使用生效<br>
                            type="time"//时间选择 和 layer="input"同时使用生效 :col="scope.$colIndex"(必填) :row="scope.$rowIndex"(必填)<br>
                            :dflabel.sync //用于layer="selectSrarch" layer="select"绑定默认中文<br>
                            select_label //用于单选多选指定 name字段名<br>
                            select_value //用于单选多选指定 code字段名<br>
                            <br>
                            方法<br>
                            @openEdit //打开编辑时触发<br>
                            @autoKeyup //layer="auto" 自定义弹窗打开同时 按键盘 触发<br>
                            @confirm //enter键触发 选中下拉时触发<br>
                            @editValueChange //input框输入时触发<br>
                            @selectSearch //layer="selectSrarch" input框输入时触发 打开时会默认触发一次<br>
                        </p>
                    </div>
                    <button @click="addata">新增尾行并选中</button>
                    <button @click="addataf">新增首行并选中</button>
                    <button @click="remove_select">删除选中行</button>
                    <button @click="changesddshucai">修改下拉值</button>
                    <button @click="sutableactive">单选第一行</button>
                    <button @click="sutablecheckbox">多选第二行</button>

                    <div style="height: 500px;overflow: hidden;margin: 10px;">
                        <su-table-sync ref="suTableSyncFef" :tableData.sync="su_tableData">
                            <template slot-scope="scope">
                                <su-table-menban ref="menban1">
                                    <su-table ref='menban1SuTableRef' @tableBottom='tableBottom' @rowClick='menban1_rowclick' :tableData="menban_table">
                                        <su-table-column  label='名字的' prop="name"></su-table-column>
                                        <su-table-column  label='自定义弹层' prop="name"></su-table-column>
                                        <su-table-column  label='自定义弹层' prop="name"></su-table-column>
                                        <su-table-column  label='岁数' prop="old"></su-table-column>
                                        <su-table-column  label='名称3' prop="sucaiStr"></su-table-column>
                                    </su-table>
                                </su-table-menban>
                                <su-table
                                          @checkedChange="checkedChange"
                                          ref="suTableRef"
                                          @rowDblclick='rowDblclick'
                                          @rowClick='rowClick'
                                          :tableData="scope.data"
                                          @lastEntry="lastEntry"
                                          :rowClass="rowClass"
                                          :colClass="colClass"
                                >
                                    <su-table-column  type='checkbox' :fixed="true"></su-table-column>
                                    <su-table-column  label='自定义弹层'>
                                        <template slot-scope="scope">
                                            <su-table-edit @openEdit="openEdit" :tableRef='$refs.menban1SuTableRef' :autoRef="$refs.menban1" @autoKeyup="autoKeyup"  :col="scope.$colIndex" :row="scope.$rowIndex" layer="auto" v-model="scope.row.orderText" ></su-table-edit>
                                        </template>
                                    </su-table-column>
                                    <su-table-column >
                                        <!--自定义头部-->
                                        <template slot-scope="scope"  slot="header">
                                            <div>
                                                <div>自定义头部+自定义内容</div>
                                                <div style="display: flex;width: 100%"><div  style="flex:1;">姓名</div><div  style="flex:1;">年龄</div></div>
                                            </div>
                                        </template>
                                        <!--自定义td内容-->
                                        <template slot-scope="scope">
                                            <div style="display: flex;width: 100%"><div style="flex:1;">{{scope.row.old}}{{scope.row.name}}</div><div  style="flex:1;">{{scope.row.year}}</div></div>
                                        </template>
                                    </su-table-column>
                                    <su-table-column  label='普通input' >
                                        <template slot-scope="scope">
                                            <su-table-edit :disabled='scope.row.name ? true : false' @openEdit="openEdit" @confirm="inputConfirm" @editValueChange="inputchanges" :col="scope.$colIndex" :row="scope.$rowIndex" layer="input" v-model="scope.row.name" ></su-table-edit>
                                        </template>
                                    </su-table-column>
                                    <su-table-column prop='$copyIndex'  label='序号'>
                                    </su-table-column>
                                    <!--   <su-table-column  label='普通input'>
                                         <template slot-scope="scope">
                                           <su-table-edit @confirm="inputConfirm" @editValueChange="valuechangefn" :col="scope.$colIndex" :row="scope.$rowIndex" layer="input" v-model="scope.row.name" ></su-table-edit>
                                         </template>
                                       </su-table-column>-->
                                    <su-table-column  label='单选下拉'>
                                        <template slot-scope="scope">
                                            <su-table-edit
                                                    @openEdit="openEdit"
                                                    @confirm="selectConfirm"
                                                    @editValueChange="valuechangefn"
                                                    :col="scope.$colIndex"
                                                    :row="scope.$rowIndex"
                                                    layer="select"
                                                    :dflabel.sync="scope.row.sucaiStr"
                                                    select_label="label"
                                                    select_value="value"
                                                    :selectData="selectData"
                                                    v-model="scope.row.sucai">
                                            </su-table-edit>
                                        </template>
                                    </su-table-column>
                                    <su-table-column  label='筛选下拉'>
                                        <template slot-scope="scope">
                                            <su-table-edit
                                                    @openEdit="openEdit"
                                                    @confirm="selectSearchConfirm"
                                                    @editValueChange="valuechangefn"
                                                    :col="scope.$colIndex" :row="scope.$rowIndex"
                                                    layer="selectSearch"
                                                    @selectSearch="selectSearch_selectSearch"
                                                    :dflabel.sync="scope.row.sucai2Str"
                                                    select_label="label"
                                                    select_value="value"
                                                    :selectData="selectSearchDatatwo"
                                                    v-model="scope.row.sucai2">
                                            </su-table-edit>
                                        </template>
                                    </su-table-column>
                                    <!--    <su-table-column  label='自定义下拉'>
                                          <template slot-scope="scope">
                                            <su-table-edit
                                                    :col="scope.$colIndex" :row="scope.$rowIndex"
                                                    layer="selectSearch"
                                                    select_label="label"
                                                    select_value="value"
                                                    :selectData="selectSearchDatatwo"
                                                    v-model="scope.row.sucai2">
                                            </su-table-edit>
                                          </template>
                                        </su-table-column>-->
                                    <su-table-column :width="200"  prop="date" label='年月日'>
                                        <template slot-scope="scope">
                                            <su-table-edit :col="scope.$colIndex" :row="scope.$rowIndex"  type="date" layer="input"  v-model="scope.row.date" ></su-table-edit>
                                        </template>
                                    </su-table-column>
                                    <su-table-column prop="time" label='时间'>
                                        <template slot-scope="scope">
                                            <su-table-edit :col="scope.$colIndex" :row="scope.$rowIndex" layer="input" type="time" v-model="scope.row.time" ></su-table-edit>
                                        </template>
                                    </su-table-column>


                                    <su-table-column  label='职业'>

                                    </su-table-column>

                                    <su-table-column  label='静态展示' prop="name"></su-table-column>
                                </su-table>
                            </template>
                        </su-table-sync>
                    </div>
                    <!--{{su_tableData}}-->
                </div>
        </template>
```
<br>

js<br>
```javascript
   export default {

           data(){
               return {
                   su_menban_1:false,
                   actives:'1',
                   selectData:[
                       {value:'1',label:'白菜'},
                       {value:'2',label:'花菜'},
                       {value:'3',label:'菠菜头头'},
                       {value:'4',label:'白菜1'},
                       {value:'5',label:'花菜2'},
                       {value:'6',label:'菠菜头头3'},
                       {value:'7',label:'白菜4'},
                       {value:'8',label:'花菜5'},
                       {value:'9',label:'菠菜头sdfsdfsfdsfsdf头6'},
                   ],
                   selectSearchData:[
                       {value:'51',label:'51白菜'},
                       {value:'52',label:'52花菜'},
                       {value:'53',label:'53菠菜头头'},
                       {value:'54',label:'54西蓝花1'},
                       {value:'55',label:'55户罗布2'},
                       {value:'56',label:'56青椒3'},
                       {value:'57',label:'57冰块4'},
                       {value:'58',label:'58黄瓜5'},
                       {value:'59',label:'59油条大油条大大的油条'},
                   ],
                   selectSearchDatatwo:[],
                   su_tableData:[{name:'莞',old:'213',index:11111,sucai2:'57',sucai2Str:'57冰块4',sucai:'2',sucaiStr:'花菜',date:'2011-11-11',time:'15:10',orderText:'12dsfsdfsdfsdfsdfsdfsdfsdfsdf3'}],
                   menban_table:[
                       {name:'莞1',old:'213',index:1,sucai2:'57',sucai2Str:'57冰块4',sucai:'2',sucaiStr:'花菜',date:'2011-11-11',time:'15:10'},
                       {name:'莞2',old:'213',index:2,sucai2:'57',sucai2Str:'57冰块4',sucai:'2',sucaiStr:'花菜',date:'2011-11-11',time:'15:10'},
                       {name:'莞3',old:'213',index:1,sucai2:'57',sucai2Str:'57冰块4',sucai:'2',sucaiStr:'花菜',date:'2011-11-11',time:'15:10'},
                       {name:'莞4',old:'213',index:1,sucai2:'57',sucai2Str:'57冰块4',sucai:'2',sucaiStr:'花菜',date:'2011-11-11',time:'15:10'},
                       {name:'莞5',old:'213',index:1,sucai2:'57',sucai2Str:'57冰块4',sucai:'2',sucaiStr:'花菜',date:'2011-11-11',time:'15:10'},
                       {name:'莞6',old:'213',index:1,sucai2:'57',sucai2Str:'57冰块4',sucai:'2',sucaiStr:'花菜',date:'2011-11-11',time:'15:10'},
                       {name:'莞7',old:'213',index:1,sucai2:'57',sucai2Str:'57冰块4',sucai:'2',sucaiStr:'花菜',date:'2011-11-11',time:'15:10'},
                       {name:'莞8',old:'213',index:1,sucai2:'57',sucai2Str:'57冰块4',sucai:'2',sucaiStr:'花菜',date:'2011-11-11',time:'15:10'},
                       {name:'莞9',old:'213',index:1,sucai2:'57',sucai2Str:'57冰块4',sucai:'2',sucaiStr:'花菜',date:'2011-11-11',time:'15:10'},
                       {name:'莞10',old:'213',index:1,sucai2:'57',sucai2Str:'57冰块4',sucai:'2',sucaiStr:'花菜',date:'2011-11-11',time:'15:10'},
                       {name:'莞11',old:'213',index:1,sucai2:'57',sucai2Str:'57冰块4',sucai:'2',sucaiStr:'花菜',date:'2011-11-11',time:'15:10'},
                       {name:'莞12',old:'213',index:1,sucai2:'57',sucai2Str:'57冰块4',sucai:'2',sucaiStr:'花菜',date:'2011-11-11',time:'15:10'},
                   ]
               }
           },
           //props:['su_tableData'],
           name: 'home',
           mounted(){
               for(var lsd=0;lsd<1000;lsd++){
                     this.su_tableData.push({name:'莞',old:'213',index:lsd,sucai2:'57',sucai2Str:'57冰块4',sucai:'2',sucaiStr:'花菜',date:'2011-11-11',time:'15:10',orderText:'莞1'})
                   //  this.su_tableData.push({checked:true})
               }


               //在表格初始化完毕后 修改第1 5 15行选中状态为true
               /*  this.$refs.suTableSyncFef.init_end(()=>{
                     this.$refs.suTableSyncFef.setData(0,{suChecked:true});
                     this.$refs.suTableSyncFef.setData(5,{suChecked:true});
                     this.$refs.suTableSyncFef.setData(15,{suChecked:true});
                 });*/
           },
           methods:{
               //复选框改变
               checkedChange(val){
                   console.log(val)
               },
               //表格滚动到底部 触发 只有 非数据渲染的表格有效
               tableBottom(){
                   for(var sdfg=0;sdfg<20;sdfg++){
                       this.menban_table.push({name:'莞5',old:'213',index:sdfg,sucai2:'57',sucai2Str:'57冰块4',sucai:'2',sucaiStr:'花菜',date:'2011-11-11',time:'15:10'},)
                   }
               },
               //td进入编辑状态时触发
               openEdit(data){
                   console.log(data)
               },
               //点击自定义弹窗内的表格将 点击行的 参数 赋值到 表格中 并且跳转到下一格
               menban1_rowclick(row){
                   console.log(this.$refs.suTableRef.isEditRef);
                   this.$refs.suTableSyncFef.setData(this.$refs.suTableRef.isEditRef.$copyIndex,{orderText:row.name});
                   this.$refs.suTableRef.isEditRef.showNextEdit();
               },
               //单选第一行
               sutableactive(){
                   this.$refs.suTableRef.set_activeindex(0);
                   //this.su_tableData[0].suActive=true
               },
               //多选第二行
               sutablecheckbox(){
                   this.$refs.suTableRef.set_checkboxindex(1,true);
                   //this.su_tableData[0].suActive=true
               },
               //行双击
               rowDblclick(val){
                   console.log(val)
               },
               //行点击
               rowClick(val,index){
                  // console.log(val)
               },
               //自定义弹层 任意按键操作后触发 用于控制弹层  调用next进入下一格
               autoKeyup(data,next){
                   console.log(data);
                  // this.$refs.suTableSyncFef.setData(data.row,{orderText:data.value});
                   if(data.keyCode=='13'){
                      let select_row=this.$refs.menban1SuTableRef.get_active_row();
                       this.$refs.suTableSyncFef.setData(data.row,{orderText:select_row.name});
                       next()
                   }
                   if(data.keyCode=='9'){
                       next()
                   }
               },
               //修改第一行的下拉值
               changesddshucai(){
                   this.$refs.suTableSyncFef.setData(0,{sucai:'3',sucaiStr:'菠菜头头'});
               },
               //删除选中行
               remove_select(){

                   for(var mmp=this.su_tableData.length-1;mmp>=0;mmp--){
                       if(this.su_tableData[mmp].suChecked){
                           this.su_tableData.splice(mmp,1)
                       }
                   }


                   /*    if(arr.suChecked){
                           this.su_tableData.splice(index,1)
                       }*/

                   //splice
               },
               //新增一行到首行
               addataf(){
                   this.su_tableData.unshift({});
                   this.$nextTick(()=>{
                       this.$refs.suTableSyncFef.showEdit(0,0)  // 选中 第一行 第一个
                   })
               },
               //新增一行到最后
               addata(){
                   this.su_tableData.push({});
                   this.$nextTick(()=>{
                       this.$refs.suTableSyncFef.showEdit(this.su_tableData.length-1,0)  // 选中 最后一行 第1个
                   })
               },
               //可选函数 最后一行切换自动添加一行
               lastEntry(val){
                   console.log('执行最后');
                   this.su_tableData.push({});
                   this.$nextTick(()=>{
                       this.$refs.suTableSyncFef.showEdit(this.su_tableData.length-1,0)  // 选中 最后一行 第1个
                   })
               },
               //可选函数 值改变触发
               valuechangefn(data){
                   console.log(data)
               },
               //input输入的同时赋值
               inputchanges(val){
                   this.$refs.suTableSyncFef.setData(val.row,{name:val.value});
               },
               //搜索下拉 提交触发
               selectSearchConfirm(val,next){
                   //需要手动赋值
                   this.$refs.suTableSyncFef.setData(val.row,{sucai2:val.value,sucai2Str:val.label});
                   //调用next 跳转到下一格
                   next()
               },
               //搜索下拉 搜索时触发  默认节流防抖200毫秒
               selectSearch_selectSearch(val,update){
                   console.log(val);
                   // 300毫秒从后台获得数据 然后赋值
                   setTimeout(()=>{
                       let filt= this.selectSearchData.filter((arr,index)=>{
                           return   JSON.stringify(arr).indexOf(val)!=-1
                       });
                       this.selectSearchDatatwo=filt;
                   },300)

               },
               //可选函数  对单元格赋值时触发
               selectConfirm(val,next){
                   console.log(val); //{row: 12, col: 2, value: "莞123123", label: ""}
                   //在此添加拦截
                   if(val.label=='白菜'){
                       this.$refs.suTableRef.showPopover('白菜不能选请换一个！！','red');
                       return
                   }
                   this.$refs.suTableRef.showPopover('你选择了 '+val.label);
                   //需要手动赋值
                   this.$refs.suTableSyncFef.setData(val.row,{sucai:val.value,sucaiStr:val.label});

                   //调用next 跳转到下一格
                   next()
               },
               inputConfirm(val,next){
                   console.log(val); //{row: 12, col: 2, value: "莞123123", label: ""}
                   if(typeof parseInt(val.value) == 'number' && parseInt(val.value)<999){
                       this.$refs.suTableRef.showPopover('数字不能小于999','green');
                       return
                   }
                   this.$refs.suTableRef.showPopover('你按了enter','red');
                   //需要手动赋值
                   this.$refs.suTableSyncFef.setData(val.row,{name:val.value});
                   //调用next 跳转到下一格
                   next()
               },
               //行自定义class函数
               rowClass(data){
                   if(data.$copyIndex==3){
                       return 'zdy_row_class'
                   }else {
                       return ''
                   }
               },
               //列自定义class函数
               colClass(data,rowData){

                   if(data=='date' && rowData.$copyIndex==7){
                       return 'zdy_col_class'
                   }

               },
           }
       }

   </script>
```
<br><br><br><br>

     
```javascript


```
# 普通模式 支持大约100行以内的数据操作

template<br>
```html
		<template>
          <div class="home" style="height: 100%;display: flex;flex-direction: column;overflow: hidden">
            <div style="flex:1;overflow: hidden;margin: 60px;">
              <su-table :tableData="su_tableData" >
                <su-table-column :fixed="true">
                  <!--自定义头部-->
                  <template slot-scope="scope" slot="header" >
                    <div>
                      <div>自定义头部+自定义内容</div>
                      <div style="display: flex;width: 100%"><div  style="flex:1;">姓名</div><div  style="flex:1;">年龄</div></div>
                    </div>
                  </template>
                  <!--自定义td内容-->
                  <template slot-scope="scope">
                    <div style="display: flex;width: 100%"><div style="flex:1;">{{scope.row.old}}{{scope.row.name}}</div><div  style="flex:1;">{{scope.row.year}}</div></div>
                  </template>
                </su-table-column>
                <su-table-column prop='$index' :fixed="true" label='序号'>
                </su-table-column>
                <su-table-column  label='普通input'>
                  <template slot-scope="scope">
                    <su-table-edit @editValueChange="valuechangefn" :col="scope.row.$colIndex" :row="scope.row.$index" layer="input" v-model="scope.row.name" ></su-table-edit>
                  </template>
                </su-table-column>
                <su-table-column :width="250"  prop="old" label='年月日'>
                  <template slot-scope="scope">
                    <su-table-edit :col="scope.row.$colIndex" :row="scope.row.$index" type="date" layer="input"  v-model="scope.row.date" ></su-table-edit>
                  </template>
                </su-table-column>
                <su-table-column prop="year" label='时间'>
                  <template slot-scope="scope">
                    <su-table-edit :col="scope.row.$colIndex" :row="scope.row.$index" layer="input" type="time" v-model="scope.row.time" ></su-table-edit>
                  </template>
                </su-table-column>
                <su-table-column  label='单选下拉'>
                  <template slot-scope="scope">
                    <su-table-edit
                            :col="scope.row.$colIndex"
                            :row="scope.row.$index"
                            layer="select"
                            :dflabel.sync="scope.row.sucaiStr"
                            select_label="label"
                            select_value="value"
                            :selectData="selectData"
                            v-model="scope.row.sucai">
                    </su-table-edit>
                  </template>
                </su-table-column>

                <su-table-column  label='职业'>

                </su-table-column>
                <su-table-column  label='职业'>

                </su-table-column>
              </su-table>
            </div>
          </div>
        </template>
  ```
<br>

js<br>
```javascript
   export default {
     data(){
         return {
             actives:'1',
             selectData:[
                 {value:'1',label:'白菜'},
                 {value:'2',label:'花菜'},
                 {value:'3',label:'菠菜头头'},
                 {value:'4',label:'白菜1'},
                 {value:'5',label:'花菜2'},
                 {value:'6',label:'菠菜头头3'},
                 {value:'7',label:'白菜4'},
                 {value:'8',label:'花菜5'},
                 {value:'9',label:'菠菜头sdfsdfsfdsfsdf头6'},

             ],
             su_tableData:[

                 ]
         }
     },
     name: 'home',
     mounted(){
         for(var lsd=0;lsd<100;lsd++){
             this.su_tableData.push({name:'莞',old:'213',index:lsd,sucai:'2',sucaiStr:'花菜',date:'2011-11-11',time:'15:10'})
         }
     },
     methods:{
         //值改变触发
         valuechangefn(data){
             console.log(data)
         }
     }
   }

```
<br>

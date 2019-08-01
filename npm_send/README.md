main.js<br>




数据渲染模式 支持大量数据的操作<br>
template

<br><br><br>


```html
		<template>
          <div class="home" style="height: 100%;display: flex;flex-direction: column;overflow: hidden;max-width: 100%">
              <div>
                  ctrl+小键盘左键退格<br>
                  tab键进格
              </div>
            <button @click="addata">新增尾行并选中</button>
            <button @click="addataf">新增首行并选中</button>
            <button @click="changesddshucai">修改下拉值</button>
            <div style="flex:1;overflow: hidden;margin: 10px;">
              <su-table-sync ref="suTableSyncFef" :tableData.sync="su_tableData">
                <template slot-scope="scope">
                    <su-table-menban ref="menban1">
                            <su-table  :tableData="menban_table"  >
                                <su-table-column  label='名字的' prop="name"></su-table-column>
                                <su-table-column  label='自定义弹层' prop="name"></su-table-column>
                                <su-table-column  label='自定义弹层' prop="name"></su-table-column>
                                <su-table-column  label='岁数' prop="old"></su-table-column>
                                <su-table-column  label='名称3' prop="sucaiStr"></su-table-column>
                            </su-table>
                    </su-table-menban>
                    <su-table ref="suTableRef" :tableData="scope.data" @lastEntry="lastEntry">
                    <su-table-column  type='checkbox' :fixed="true"></su-table-column>
                    <su-table-column  label='自定义弹层'>
                        <template slot-scope="scope">
                            <su-table-edit :autoRef="$refs.menban1" @autoKeyup="autoKeyup"  :col="scope.$colIndex" :row="scope.$rowIndex" layer="auto" v-model="scope.row.orderText" ></su-table-edit>
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
                        <su-table-edit @confirm="inputConfirm" @editValueChange="valuechangefn" :col="scope.$colIndex" :row="scope.$rowIndex" layer="input" v-model="scope.row.name" ></su-table-edit>
                      </template>
                    </su-table-column>
                    <su-table-column prop='$copyIndex'  label='序号'>
                    </su-table-column>
                    <su-table-column  label='普通input'>
                      <template slot-scope="scope">
                        <su-table-edit @confirm="inputConfirm" @editValueChange="valuechangefn" :col="scope.$colIndex" :row="scope.$rowIndex" layer="input" v-model="scope.row.name" ></su-table-edit>
                      </template>
                    </su-table-column>
                    <su-table-column  label='单选下拉'>
                      <template slot-scope="scope">
                        <su-table-edit
                                @confirm="selectConfirm"
                                @editValueChange="valuechangefn"
                                :col="scope.$colIndex" :row="scope.$rowIndex"
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
                    <su-table-column :width="200"   prop="old" label='年月日'>
                      <template slot-scope="scope">
                        <su-table-edit :col="scope.$colIndex" :row="scope.$rowIndex" type="date" layer="input"  v-model="scope.row.date" ></su-table-edit>
                      </template>
                    </su-table-column>
                    <su-table-column prop="year" label='时间'>
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
          </div>
        </template>
```
<br>

js<br>
```javascript
   <script>
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
             su_tableData:[],
             menban_table:[
                 {name:'莞',old:'213',index:1,sucai2:'57',sucai2Str:'57冰块4',sucai:'2',sucaiStr:'花菜',date:'2011-11-11',time:'15:10'},
                 {name:'莞',old:'213',index:2,sucai2:'57',sucai2Str:'57冰块4',sucai:'2',sucaiStr:'花菜',date:'2011-11-11',time:'15:10'},
                 {name:'莞',old:'213',index:1,sucai2:'57',sucai2Str:'57冰块4',sucai:'2',sucaiStr:'花菜',date:'2011-11-11',time:'15:10'},
                 {name:'莞',old:'213',index:1,sucai2:'57',sucai2Str:'57冰块4',sucai:'2',sucaiStr:'花菜',date:'2011-11-11',time:'15:10'},
                 {name:'莞',old:'213',index:1,sucai2:'57',sucai2Str:'57冰块4',sucai:'2',sucaiStr:'花菜',date:'2011-11-11',time:'15:10'},
                 {name:'莞',old:'213',index:1,sucai2:'57',sucai2Str:'57冰块4',sucai:'2',sucaiStr:'花菜',date:'2011-11-11',time:'15:10'},
                 {name:'莞',old:'213',index:1,sucai2:'57',sucai2Str:'57冰块4',sucai:'2',sucaiStr:'花菜',date:'2011-11-11',time:'15:10'},
                 {name:'莞',old:'213',index:1,sucai2:'57',sucai2Str:'57冰块4',sucai:'2',sucaiStr:'花菜',date:'2011-11-11',time:'15:10'},
                 {name:'莞',old:'213',index:1,sucai2:'57',sucai2Str:'57冰块4',sucai:'2',sucaiStr:'花菜',date:'2011-11-11',time:'15:10'},
                 {name:'莞',old:'213',index:1,sucai2:'57',sucai2Str:'57冰块4',sucai:'2',sucaiStr:'花菜',date:'2011-11-11',time:'15:10'},
                 {name:'莞',old:'213',index:1,sucai2:'57',sucai2Str:'57冰块4',sucai:'2',sucaiStr:'花菜',date:'2011-11-11',time:'15:10'},
                 {name:'莞',old:'213',index:1,sucai2:'57',sucai2Str:'57冰块4',sucai:'2',sucaiStr:'花菜',date:'2011-11-11',time:'15:10'},
                 ]
         }
     },
     name: 'home',
     mounted(){
         for(var lsd=0;lsd<10000;lsd++){
             this.su_tableData.push({name:'莞',old:'213',index:lsd,sucai2:'57',sucai2Str:'57冰块4',sucai:'2',sucaiStr:'花菜',date:'2011-11-11',time:'15:10',orderText:'123'})
           //  this.su_tableData.push({checked:true})
         }
          //在表格初始化完毕后 修改第1 5 15行选中状态为true
         this.$refs.suTableSyncFef.init_end(()=>{
             this.$refs.suTableSyncFef.setData(0,{suChecked:true});
             this.$refs.suTableSyncFef.setData(5,{suChecked:true});
             this.$refs.suTableSyncFef.setData(15,{suChecked:true});
         });
     },
     methods:{
         //自定义弹层 任意按键操作后触发 用于控制弹层  调用next进入下一格
         autoKeyup(data,next){
             console.log(data);
             if(data.keyCode=='13'){
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
         //删除某一行

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
             //从后台获得数据 然后赋值
             setTimeout(()=>{
                 let filt= this.selectSearchData.filter((arr,index)=>{
                     return   JSON.stringify(arr).indexOf(val)!=-1
                 });
                 this.selectSearchDatatwo=filt;
             },1000)

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

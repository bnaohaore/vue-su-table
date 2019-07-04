<template>
  <div class="home" style="height: 100%;display: flex;flex-direction: column;overflow: hidden">
    <button @click="addata">新增尾行并选中</button>
    <button @click="addataf">新增首行并选中</button>
    <div style="flex:1;overflow: hidden;margin: 60px;">
      <su-table-sync ref="suTableSyncFef" :tableData.sync="su_tableData">
        <template slot-scope="scope">
          <su-table :tableData="scope.data" @lastEntry="lastEntry">
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
            <su-table-column prop='$copyIndex' :fixed="true" label='序号'>
            </su-table-column>
            <su-table-column :fixed="true"  label='普通input'>
              <template slot-scope="scope">
                <su-table-edit @editValueChange="valuechangefn" :col="scope.$colIndex" :row="scope.$rowIndex" layer="input" v-model="scope.row.name" ></su-table-edit>
              </template>
            </su-table-column>
            <su-table-column :width="200" :fixed="true"  prop="old" label='年月日'>
              <template slot-scope="scope">
                <su-table-edit :col="scope.$colIndex" :row="scope.$rowIndex" type="date" layer="input"  v-model="scope.row.date" ></su-table-edit>
              </template>
            </su-table-column>
            <su-table-column prop="year" label='时间'>
              <template slot-scope="scope">
                <su-table-edit :col="scope.$colIndex" :row="scope.$rowIndex" layer="input" type="time" v-model="scope.row.time" ></su-table-edit>
              </template>
            </su-table-column>
            <su-table-column  label='单选下拉'>
              <template slot-scope="scope">
                <su-table-edit
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

            <su-table-column  label='职业'>

            </su-table-column>
            <su-table-column  label='职业'>

            </su-table-column>
            <su-table-column prop="year" label='时间2'>
              <template slot-scope="scope">
                <su-table-edit :col="scope.$colIndex" :row="scope.$rowIndex" layer="input" type="time" v-model="scope.row.time" ></su-table-edit>
              </template>
            </su-table-column>
          </su-table>
        </template>
      </su-table-sync>
    </div>
    <div style="height: 150px;overflow-y: auto">
      <!--{{su_tableData}}-->
    </div>

  </div>
</template>

<script>
// @ is an alias to /src

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
      for(var lsd=0;lsd<10000;lsd++){
          this.su_tableData.push({name:'莞',old:'213',index:lsd,sucai:'2',sucaiStr:'花菜',date:'2011-11-11',time:'15:10'})
      }
  },
  methods:{
      addataf(){
          this.su_tableData.unshift({});
          this.$nextTick(()=>{
              this.$refs.suTableSyncFef.showEdit(0,0)  // 选中 第一行 第一个
          })
      },
      addata(){
          this.su_tableData.push({});
          this.$nextTick(()=>{
              this.$refs.suTableSyncFef.showEdit(this.su_tableData.length-1,0)  // 选中 最后一行 第1个
          })
      },
      //最后一行切换自动添加一行
      lastEntry(val){
          this.su_tableData.push({});
          this.$nextTick(()=>{
              this.$refs.suTableSyncFef.showEdit(this.su_tableData.length-1,0)  // 选中 最后一行 第1个
          })
      },
      //值改变触发
      valuechangefn(data){
          console.log(data)
      }
  }
}
</script>

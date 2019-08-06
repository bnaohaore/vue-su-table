<template>
  <div class="home" style="max-width: 100%">

          <tables :su_tableData='su_tableData'></tables>

      <!--{{su_tableData}}-->
  </div>
</template>

<script>
// @ is an alias to /src

import tables from './table.vue'

export default {

    data(){
      return {
          show_table:false,
          su_tableData:[],
      }
  },
    components:{
        tables
    },
  name: 'home',
  mounted(){
     /* for(var lsd=0;lsd<10;lsd++){
          this.su_tableData.push({name:'莞',old:'213',index:lsd,sucai2:'57',sucai2Str:'57冰块4',sucai:'2',sucaiStr:'花菜',date:'2011-11-11',time:'15:10',orderText:'123'})
      }*/


       //在表格初始化完毕后 修改第1 5 15行选中状态为true
    /*  this.$refs.suTableSyncFef.init_end(()=>{
          this.$refs.suTableSyncFef.setData(0,{suChecked:true});
          this.$refs.suTableSyncFef.setData(5,{suChecked:true});
          this.$refs.suTableSyncFef.setData(15,{suChecked:true});
      });*/
  },
  methods:{
      set_table_data(){
          this.su_tableData=[{name:'莞',old:'213',index:'',sucai2:'57',sucai2Str:'57冰块4',sucai:'2',sucaiStr:'花菜',date:'2011-11-11',time:'15:10',orderText:'123'}]
      }
  }
}
</script>

<template>
    <div >
        <su-table-sync height='320' ref="suTableSyncFef" :tableData.sync="tableDatas">
            <template slot-scope="scope">
                <su-table
                        ref="suTableRef"
                        :tableData="scope.data"

                >
                    <su-table-column :width="200" v-for='item,index in cols'  :prop="item" :label='"名字"+index'></su-table-column>
                </su-table>
            </template>
        </su-table-sync>
    </div>
</template>

<script>

    export default {
        data() {
            return {}
        },
        props:['tableDatas','cols'],
        methods: {},
        watch: {},
        components: {}
    }
</script>

<style lang="scss">

</style>

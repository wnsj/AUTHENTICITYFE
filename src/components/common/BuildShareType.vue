<template>
<!--    <select class="form-control" v-model="btId" v-on:change="bstChange()">-->
<!--        <option value="0">&#45;&#45;未选择&#45;&#45;</option>-->
<!--        <option v-for="(item,index) in buildTypeList" :key="index" v-bind:value="item.btId">{{item.btName}}</option>-->
<!--    </select>-->
<!--    <el-select size="medium"-->
<!--               multiple-->
<!--               collapse-tags-->
<!--               v-model="btList"-->
<!--               v-on:change="bstChange()"-->
<!--               clearable-->
<!--               placeholder="&#45;&#45;未选择&#45;&#45;">-->
<!--        <el-option-->
<!--            v-for="item in buildTypeList"-->
<!--            :key="item.btId"-->
<!--            :label="item.btName"-->
<!--            :value="item.btId">-->
<!--        </el-option>-->
<!--    </el-select>-->


    <el-select v-model="btList" multiple
               collapse-tags style="height: 9px" v-on:change="bstChange()" placeholder="--未选择--">
        <el-option v-for="item in buildTypeList"
                   :key="item.btId"
                   :label="item.btName"
                   :value="item.btId">

        </el-option>
    </el-select>
</template>

<script>
    export default {
        data() {
            return {
                btList: [],
                buildTypeList: [],
            };
        },
        methods: {

            bstChange: function () {
                for (var i = 0; i < this.buildTypeList.length; i++) {
                    if (this.btList === []) {
                        this.$emit('bstChange', null);
                        return
                    } else {
                        this.$emit('bstChange', this.btList)
                        return
                    }
                }
            },
            setBstIdList: function (btIdList) {
                this.btList = btIdList
            },
            async queryData() {
                var url = this.url + '/buildingTypeBean/getAllBuildingType?type=' + 1
                this.$ajax({
                    method: 'GET',
                    url: url,
                    headers: {
                        'Access-Token': this.accessToken
                    },
                    data: {},
                }).then((response) => {
                    var res = response.data
                    if (res.retCode === '0000') {
                        this.buildTypeList = res.retData
                    } else {
                        alert(res.retMsg)
                    }
                }).catch((error) => {
                    console.log('数据请求失败处理')
                });
            },
        },
        created() {
            // this.queryData()
        },
    }
</script>

<style>

</style>

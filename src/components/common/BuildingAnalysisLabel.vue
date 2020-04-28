<template>
    <el-select v-model="balIdList" multiple
               collapse-tags style="height: 9px" v-on:change="balChange()" placeholder="--未选择--">
        <el-option v-for="item in balList"
                   :key="item.balId"
                   :label="item.balContent"
                   :value="item.balId">

        </el-option>
    </el-select>
</template>

<script>
    export default {
        data() {
            return {
                balIdList: [],
                balList: []
            };
        },
        methods: {

            balChange: function () {
                    if (this.balIdList === []) {
                        this.$emit('balChange', null)
                        return
                    } else {
                        this.$emit('balChange', this.balIdList)
                        return
                    }
            },
            setBalId: function (balId) {
                this.balId = balId
                this.queryData()
            },
            async queryData() {
                var url = this.url + '/buildingAnalysisLabelBean/getALabel'
                this.$ajax({
                    method: 'GET',
                    url: url,
                    headers: {
                        'Content-Type': this.contentType,
                        'Access-Token': this.accessToken
                    },
                    data: {},
                    dataType: 'json',
                }).then((response) => {
                    var res = response.data
                    if (res.retCode === '0000') {
                        this.balList = res.retData
                    } else {
                        alert(res.retMsg)
                    }
                }).catch((error) => {
                    console.log('数据请求失败处理' + error)
                });
            },
        },
        created() {
            this.queryData()
        },
    }
</script>

<style scoped>

</style>

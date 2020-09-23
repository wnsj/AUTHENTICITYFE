<template>
    <el-select v-model="baseServiceList" multiple
               collapse-tags style="height: 9px" v-on:change="baseServiceChange()" placeholder="--未选择--">
        <el-option v-for="item in baseService"
                   :key="item.id"
                   :label="item.label"
                   :value="item.id">

        </el-option>
    </el-select>
</template>

<script>
    export default {
        data() {
            return {
                baseServiceList: [],
                baseService: []
            };
        },
        methods: {

            baseServiceChange: function () {
                for (var i = 0; i < this.baseService.length; i++) {
                    if (this.baseServiceList === []) {
                        this.$emit('baseServiceChange', null);
                        return
                    } else {
                        this.$emit('baseServiceChange', this.baseServiceList)
                        return
                    }
                }
            },
            setBaseServiceList: function (baseServiceList) {
                this.baseServiceList = baseServiceList
                this.queryData()
            },
            async queryData() {
                var url = this.url + '/baseServiceBean/getAllBaseService'
                this.$ajax({
                    method: 'POST',
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
                        this.baseService = res.retData
                    } else {
                        alert(res.retMsg)
                    }
                }).catch((error) => {
                    console.log('数据请求失败处理' + error)
                });
            },
        },
        created() {
            // this.queryData()
        },
    }
</script>

<style scoped>

</style>

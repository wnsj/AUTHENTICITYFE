<template>
    <el-select v-model="clIdList" multiple
               collapse-tags style="height: 9px" v-on:change="couClChange()" placeholder="--未选择--">
        <el-option v-for="item in couClList"
                   :key="item.clId"
                   :label="item.clContent"
                   :value="item.clId">

        </el-option>
    </el-select>
</template>

<script>
    export default {
        data() {
            return {
                clIdList: [],
                couClList: []
            };
        },
        methods: {

            couClChange: function () {
                for (var i = 0; i < this.couClList.length; i++) {
                    if (this.clId === []) {
                        this.$emit('couClChange', null);
                        return
                    } else {
                        this.$emit('couClChange', this.clIdList)
                        return
                    }
                }
            },
            setClId: function (clId) {
                this.clIdList = clId
                this.queryData()
            },
            async queryData() {
                var url = this.url + '/counselorLabelBean/getAllCouLabel'
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
                        this.couClList = res.retData
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

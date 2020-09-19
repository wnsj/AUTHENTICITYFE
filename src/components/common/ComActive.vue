<template>
    <el-select v-model="comActiveList" multiple
               collapse-tags style="height: 9px" v-on:change="comActiveChange()" placeholder="--未选择--">
        <el-option v-for="item in comActive"
                   :key="item.caId"
                   :label="item.cacName"
                   :value="item.caId">

        </el-option>
    </el-select>
</template>

<script>
    export default {
        data() {
            return {
                comActiveList: [],
                comActive: []
            };
        },
        methods: {

            comActiveChange: function () {
                for (var i = 0; i < this.comActive.length; i++) {
                    if (this.comActiveList === []) {
                        this.$emit('comActiveChange', null);
                        return
                    } else {
                        this.$emit('comActiveChange', this.comActiveList)
                        return
                    }
                }
            },
            setCharaList: function (comActiveList) {
                this.comActiveList = comActiveList
                this.queryData()
            },
            async queryData() {
                var url = this.url + '/commercialActivitieBean/getAllComAc'
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
                        this.comActive = res.retData
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

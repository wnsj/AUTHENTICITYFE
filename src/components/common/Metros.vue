<template>
    <el-select v-model="metroIdList" multiple
               collapse-tags style="height: 9px" v-on:change="metrosChange()" placeholder="--未选择--">
        <el-option v-for="item in metroList"
                   :key="item.id"
                   :label="item.metroName"
                   :value="item.id">

        </el-option>
    </el-select>
</template>

<script>
    export default {
        data() {
            return {
                metroIdList: [],
                metroList: []
            };
        },
        methods: {

            metrosChange: function() {
                for (var i = 0; i < this.metroList.length; i++) {
                    if (this.metroIdList === []) {
                        this.$emit('metrosChange', null);
                        return
                    } else {
                        this.$emit('metrosChange', this.metroIdList)
                        return
                    }
                }
            },
            setMetroIdList: function(metroIdList) {
                this.metroIdList = metroIdList
                this.queryData()
            },
            async queryData() {
                var url = this.url + '/metroBean/getAllMetro'
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
                        this.metroList = res.retData
                    } else {
                        alert(res.retMsg)
                    }
                }).catch((error) => {
                    console.log('数据请求失败处理'+ error)
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

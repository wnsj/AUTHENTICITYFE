<template>
    <el-select v-model="idList" multiple
               collapse-tags style="height: 9px" v-on:change="comChange()" placeholder="--未选择--">
        <el-option v-for="item in comList"
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
                idList: [],
                comList: []
            };
        },
        methods: {

            comChange: function() {
                for (var i = 0; i < this.comList.length; i++) {
                    if (this.idList === []) {
                        this.$emit('comChange', null);
                        return
                    } else {
                        this.$emit('comChange', this.idList)
                        return
                    }
                }
            },
            setIdList: function(idList) {
                this.idList = idList
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
                        this.comList = res.retData
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

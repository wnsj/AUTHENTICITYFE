<template>
    <el-select v-model="idList" multiple v-on:change="proChange()"
               collapse-tags style="height: 9px"  placeholder="--未选择--">
        <el-option v-for="item in proList"
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
                proList: []
            };
        },
        methods: {

            proChange: function() {
                for (var i = 0; i < this.proList.length; i++) {
                    if (this.idList === []) {
                        this.$emit('proChange', null);
                        return
                    } else {
                        this.$emit('proChange', this.idList)
                        return
                    }
                }
            },
            setIdList: function(idList) {
                this.idList = idList
                this.queryData()
            },
            async queryData() {
                var url = this.url + '/propertyInfoBean/getAllPInfo'
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
                        this.proList = res.retData
                    } else {
                        alert(res.retMsg)
                    }
                }).catch((error) => {
                    console.log('数据请求失败处理')
                });
            },
        },
        created() {
            this.queryData()
        },
    }
</script>

<style>

</style>

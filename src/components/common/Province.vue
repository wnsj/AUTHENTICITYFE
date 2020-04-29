<template>
    <select class="form-control" v-model="proId" v-on:change="proChange()">
        <option value="0">--未选择--</option>
        <option v-for="(item,index) in proIdList" :key="index" v-bind:value="item.proId">{{item.proName}}</option>
    </select>
</template>

<script>
    export default {
        data() {
            return {
                proId: '0',
                proIdList: []
            };
        },
        methods: {

            proChange: function() {
                for (var i = 0; i < this.proIdList.length; i++) {
                    if(this.proId === '0'){
                        this.$emit('proChange', null)
                        return
                    }else{
                        if (this.proIdList[i].proId === this.proId) {

                            this.$emit('proChange', this.proIdList[i].proId)
                            return
                        }
                    }
                }
            },
            setProId: function(proId) {
                this.proId = proId
                this.queryData()
            },
            async queryData() {
                var url = this.url + '/provinceBean/getAllProvince'
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
                        this.proIdList = res.retData
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

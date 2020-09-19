<template>
    <select class="form-control" v-model="totalId" v-on:change="totalChange()">
        <option value="0">--未选择--</option>
        <option v-for="(item,index) in totalIdList" :key="index" v-bind:value="item.tpId">{{item.begPrice}}-{{item.endPrice}}</option>
    </select>
</template>

<script>
    export default {
        data() {
            return {
                totalId: '0',
                type:'',
                totalIdList: []
            };
        },
        methods: {

            totalChange: function() {
                for (var i = 0; i < this.totalIdList.length; i++) {
                    if(this.totalId === '0'){
                        this.$emit('totalChange', null)
                        return
                    }else{
                        if (this.totalIdList[i].tpId === this.totalId) {

                            this.$emit('totalChange', this.totalIdList[i])
                            return
                        }
                    }
                }
            },
            setTpId: function(tpId) {
                this.totalId = tpId
                this.queryData()
            },
            setType: function(type) {
                this.type = type
                this.queryData()
            },
            async queryData() {
                var url = this.url + '/totlePriceTypeBean/getAllTotalPrice?type=' + this.type
                this.$ajax({
                    method: 'GET',
                    url: url,
                    headers: {
                        'Content-Type': this.contentType,
                        'Access-Token': this.accessToken
                    },
                    data: {
                        type:this.type
                    },
                    dataType: 'json',
                }).then((response) => {
                    var res = response.data
                    if (res.retCode === '0000') {
                        this.totalIdList = res.retData
                    } else {
                        alert(res.retMsg)
                    }
                }).catch((error) => {
                    console.log('数据请求失败处理'+ error)
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

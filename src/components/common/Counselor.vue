<template>
    <select class="form-control" v-model="couId" v-on:change="couChange()">
        <option value="0">--未选择--</option>
        <option v-for="(item,index) in couIdList" :key="index" v-bind:value="item.couId">{{item.couName}}</option>
    </select>
</template>

<script>
    export default {
        data() {
            return {
                couId: '0',
                couIdList: []
            };
        },
        methods: {

            couChange: function() {
                for (var i = 0; i < this.couIdList.length; i++) {
                    if(this.couId === 0){
                        this.$emit('couChange', null)
                        return
                    }else{
                        if (this.couIdList[i].couId === this.couId) {

                            this.$emit('couChange', this.couIdList[i].couId)
                            return
                        }
                    }
                }
            },
            setBtId: function(couId) {
                this.couId = couId
                this.queryData()
            },
            async queryData() {
                var url = this.url + '/counselorBean/getAllCouselor'
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
                        this.couIdList = res.retData
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

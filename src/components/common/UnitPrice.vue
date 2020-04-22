<template>
    <select class="form-control" v-model="unitId" v-on:change="unitChange()">
        <option value="0">--未选择--</option>
        <option v-for="(item,index) in unitIdList" :key="index" v-bind:value="item.upId">{{item.begPrice}}-{{item.endPrice}}</option>
    </select>
</template>

<script>
    export default {
        data() {
            return {
                unitId: '0',
                unitIdList: []
            };
        },
        methods: {

            unitChange: function() {
                for (var i = 0; i < this.unitIdList.length; i++) {
                    if(this.unitId === '0'){
                        this.$emit('unitChange', null)
                        return
                    }else{
                        if (this.unitIdList[i].upId === this.unitId) {

                            this.$emit('unitChange', this.unitIdList[i])
                            return
                        }
                    }
                }
            },
            setBtId: function(upId) {
                this.upId = upId
                this.queryData()
            },
            async queryData() {
                var url = this.url + '/unitPriceTypeBean/getAllUnitPrice'
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
                        this.unitIdList = res.retData
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

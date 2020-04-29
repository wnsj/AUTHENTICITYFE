<template>
    <select class="form-control" v-model="isSale" v-on:change="isSaleChange()">
        <option value="0">--未选择--</option>
        <option v-for="(item,index) in isSaleList" :key="index" v-bind:value="item.stId">{{item.stName}}</option>
    </select>
</template>

<script>
    export default {
        data() {
            return {
                isSale: '0',
                isSaleList: []
            };
        },
        methods: {

            isSaleChange: function() {
                for (var i = 0; i < this.isSaleList.length; i++) {
                    if(this.isSale === '0'){
                        this.$emit('isSaleChange', null)
                        return
                    }else{
                        if (this.isSaleList[i].stId === this.isSale) {

                            this.$emit('isSaleChange', this.isSaleList[i].stId)
                            return
                        }
                    }
                }
            },
            setIsSale: function(isSale) {
                this.isSale = isSale
                this.queryData()
            },
            async queryData() {
                var url = this.url + '/saleTypeBean/getAllSaleType'
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
                        this.isSaleList = res.retData
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

<style scoped>

</style>

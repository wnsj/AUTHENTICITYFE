<template>
    <select class="form-control" v-model="charaId" v-on:change="charaChange()">
        <option value="0">--未选择--</option>
        <option v-for="(item,index) in charaIdList" :key="index" v-bind:value="item.chaId">{{item.chaName}}</option>
    </select>
</template>

<script>
    export default {
        data() {
            return {
                charaId: '0',
                charaIdList: []
            };
        },
        methods: {

            charaChange: function() {
                for (var i = 0; i < this.charaIdList.length; i++) {
                    if(this.charaId === 0){
                        this.$emit('charaChange', null)
                        return
                    }else{
                        if (this.charaIdList[i].chaId === this.charaId) {

                            this.$emit('charaChange', this.charaIdList[i].chaId)
                            return
                        }
                    }
                }
            },
            setBtId: function(charaId) {
                this.charaId = charaId
                this.queryData()
            },
            async queryData() {
                var url = this.url + '/characteristicBean/getAllChara'
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
                        this.charaIdList = res.retData
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

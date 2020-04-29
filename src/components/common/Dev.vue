<template>
    <select class="form-control" v-model="devId" v-on:change="devChange()">
        <option value="0">--未选择--</option>
        <option v-for="(item,index) in devIdList" :key="index" v-bind:value="item.devId">{{item.devsName}}</option>
    </select>
</template>

<script>
    export default {
        data() {
            return {
                devId: '0',
                devIdList: []
            };
        },
        methods: {

            devChange: function() {
                for (var i = 0; i < this.devIdList.length; i++) {
                    if(this.devId === '0'){
                        this.$emit('devChange', null)
                        return
                    }else{
                        if (this.devIdList[i].devId === this.devId) {

                            this.$emit('devChange', this.devIdList[i].devId)
                            return
                        }
                    }
                }
            },
            setDevId: function(devId) {
                this.devId = devId
                this.queryData()
            },
            async queryData() {
                var url = this.url + '/develogerBean/getAllChara'
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
                        this.devIdList = res.retData
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

<template>
    <select class="form-control" v-model="htId" v-on:change="htChange()">
        <option value="0">--未选择--</option>
        <option v-for="(item,index) in htList" :key="index" v-bind:value="item.htId">{{item.caName}}</option>
    </select>
</template>

<script>
    export default {
        data() {
            return {
                htId: '0',
                htList: []
            };
        },
        methods: {

            htChange: function() {
                for (var i = 0; i < this.htList.length; i++) {
                    if(this.htId === 0){
                        this.$emit('htChange', null)
                        return
                    }else{
                        if (this.htList[i].htId === this.htId) {

                            this.$emit('htChange', this.htList[i].htId)
                            return
                        }
                    }
                }
            },
            setHtId: function(htId) {
                this.htId = htId
                this.queryData()
            },
            async queryData() {
                var url = this.url + '/horseTypeBean/getHorseType'
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
                        this.htList = res.retData
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

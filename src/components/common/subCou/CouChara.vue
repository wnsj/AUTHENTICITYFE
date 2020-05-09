<template>
    <select class="form-control" v-model="charaName" v-on:change="couCharaChange()">
        <option value="0">--未选择--</option>
        <option v-for="(item,index) in couCharaList" :key="index" v-bind:value="item.charaName">{{item.charaName}}</option>
    </select>
</template>

<script>
    export default {
        data() {
            return {
                charaName: '0',
                couCharaList: []
            };
        },
        methods: {

            couCharaChange: function() {
                for (var i = 0; i < this.couCharaList.length; i++) {
                    if(this.charaName === '0'){
                        this.$emit('couCharaChange', null)
                        return
                    }else{
                        if (this.couCharaList[i].charaName === this.charaName) {

                            this.$emit('couCharaChange', this.couCharaList[i].charaName)
                            return
                        }
                    }
                }
            },
            setCcId: function(charaName) {
                this.charaName = charaName
                this.queryData()
            },
            async queryData() {
                var url = this.url + '/counselorBean/getAllCharaName'
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
                        this.couCharaList = res.retData
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

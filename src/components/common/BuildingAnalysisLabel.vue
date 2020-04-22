<template>
    <select class="form-control" v-model="balId" v-on:change="balChange()">
        <option value="0">--未选择--</option>
        <option v-for="(item,index) in balList" :key="index" v-bind:value="item.balId">{{item.balContent}}</option>
    </select>
</template>

<script>
    export default {
        data() {
            return {
                balId: '0',
                balList: []
            };
        },
        methods: {

            balChange: function() {
                for (var i = 0; i < this.balList.length; i++) {
                    if(this.balId === 0){
                        this.$emit('balChange', null)
                        return
                    }else{
                        if (this.balList[i].balId === this.balId) {

                            this.$emit('balChange', this.balList[i].balId)
                            return
                        }
                    }
                }
            },
            setBalId: function(balId) {
                this.balId = balId
                this.queryData()
            },
            async queryData() {
                var url = this.url + '/buildingAnalysisLabelBean/getALabel'
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
                        this.balList = res.retData
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

<template>
    <select class="form-control" v-model="bid" v-on:change="buildChange()">
        <option value="0">--未选择--</option>
        <option v-for="(item,index) in buildList" :key="index" v-bind:value="item.bid">{{item.htName}}</option>
    </select>
</template>

<script>
    export default {
        data() {
            return {
                bid: '0',
                buildList: []
            };
        },
        methods: {

            buildChange: function() {
                for (var i = 0; i < this.buildList.length; i++) {
                    if(this.bid === 0){
                        this.$emit('buildChange', null)
                        return
                    }else{
                        if (this.buildList[i].bid === this.bid) {
                            this.$emit('buildChange',this.buildList[i].bid)
                            return
                        }
                    }
                }
            },
            async queryData() {
                var url = this.url + '/buildingBean/getAllBuild'
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
                        this.buildList = res.retData
                    } else {
                        alert(res.retMsg)
                    }
                }).catch((error) => {
                    console.log('数据请求失败处理')
                });
            },
            setBid: function(bId) {
                this.bid = bId
                this.queryData()
            },
        },
        created() {
            this.queryData()
        },
    }
</script>

<style>

</style>

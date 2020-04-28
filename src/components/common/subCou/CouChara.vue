<template>
    <select class="form-control" v-model="ccId" v-on:change="couCharaChange()">
        <option value="0">--未选择--</option>
        <option v-for="(item,index) in couCharaList" :key="index" v-bind:value="item.ccId">{{item.ccContent}}</option>
    </select>
</template>

<script>
    export default {
        data() {
            return {
                ccId: '0',
                couCharaList: []
            };
        },
        methods: {

            couCharaChange: function() {
                for (var i = 0; i < this.couCharaList.length; i++) {
                    if(this.ccId === '0'){
                        this.$emit('couCharaChange', null)
                        return
                    }else{
                        if (this.couCharaList[i].ccId === this.ccId) {

                            this.$emit('couCharaChange', this.couCharaList[i].ccId)
                            return
                        }
                    }
                }
            },
            setCcId: function(ccId) {
                this.ccId = ccId
                this.queryData()
            },
            async queryData() {
                var url = this.url + '/counselorCharacterBean/getAllCouChara'
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

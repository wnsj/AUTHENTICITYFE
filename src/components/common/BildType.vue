<template>
    <select class="form-control" v-model="btId" v-on:change="btChange()">
        <option value="0">--未选择--</option>
        <option v-for="(item,index) in buildTypeList" :key="index" v-bind:value="item.btId">{{item.btName}}</option>
    </select>
</template>

<script>
    export default {
        data() {
            return {
                btId: '0',
                buildTypeList: []
            };
        },
        methods: {

            btChange: function () {
                for (var i = 0; i < this.buildTypeList.length; i++) {
                    if (this.btId == 0) {
                        this.$emit('btChange', null)
                        return
                    } else {
                        if (this.buildTypeList[i].btId == this.btId) {
                            this.$emit('btChange', this.buildTypeList[i].btId)
                            return
                        }
                    }
                }
            },
            setBtId: function (btId) {
                this.btId = btId
                this.queryData()
            },
            async queryData() {
                var url = this.url + '/buildingTypeBean/getAllBuildingType?type=' + 1
                this.$ajax({
                    method: 'GET',
                    url: url,
                    headers: {
                        'Access-Token': this.accessToken
                    },
                    data: {},
                }).then((response) => {
                    var res = response.data
                    if (res.retCode === '0000') {
                        this.buildTypeList = res.retData
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

<style>

</style>

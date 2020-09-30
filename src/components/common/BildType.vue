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
                buildTypeList: [],
                type: ''
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
            setType: function (type) {
                this.btId = '0'
                this.type = type
                this.queryData()
            },
            async queryData() {
                var url = this.url + '/buildingTypeBean/getAllBuildingType?type=' + this.type
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
                        if (res.retData) {
                            this.buildTypeList = res.retData.filter(item => item.btName !== '共享办公')
                        } else {
                            this.buildTypeList = null;
                        }

                    } else {
                        alert(res.retMsg)
                    }
                }).catch((error) => {
                    console.log('数据请求失败处理')
                });
            },
        },
        created() {
            // this.queryData()
        },
    }
</script>

<style>

</style>

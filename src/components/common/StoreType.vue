<template>
    <select class="form-control" v-model="stId" v-on:change="stChange()">
        <option value="0">--未选择--</option>
        <option v-for="(item,index) in storeTypeList" :key="index" v-bind:value="item.stId">{{item.stName}}</option>
    </select>
</template>

<script>
    export default {
        data() {
            return {
                stId: '0',
                storeTypeList: [],
            };
        },
        methods: {

            stChange: function () {
                for (var i = 0; i < this.storeTypeList.length; i++) {
                    if (this.stId == 0) {
                        this.$emit('stChange', null)
                        return
                    } else {
                        if (this.storeTypeList[i].stId == this.stId) {
                            this.$emit('stChange', this.storeTypeList[i].stId)
                            return
                        }
                    }
                }
            },
            setStId: function (type) {
                console.log('1111111111111111111111'+type)
                if(type == 3){
                    this.queryData()
                }else{
                    this.storeTypeList = []
                }
                
            },
            async queryData() {
                var url = this.url + '/storeTypeBean/getAllStoreType'
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
                        this.storeTypeList = res.retData
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

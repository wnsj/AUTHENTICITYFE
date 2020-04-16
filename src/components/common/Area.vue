<template>
    <select class="form-control" v-model="areaId" v-on:change="areaChange()">
        <option value="0">--未选择--</option>
        <option v-for="(item,index) in areaList" :key="index" v-bind:value="item.arId" style="text-align:center">{{item.begArea}}-{{item.endArea}}</option>
    </select>
</template>

<script>
    export default {
        data() {
            return {
                areaId: '0',
                areaList: []
            };
        },
        methods: {

            areaChange: function() {
                for (var i = 0; i < this.areaList.length; i++) {
                    if(this.arId === 0){
                        this.$emit('areaChange', null)
                        return
                    }else{
                        if (this.areaList[i].arId === this.areaId) {

                            this.$emit('areaChange', this.areaList[i])
                            return
                        }
                    }
                }
            },
            setBtId: function(arId) {
                this.arId = arId
                this.queryData()
            },
            async queryData() {
                var url = this.url + '/areaBean/getAllArea'
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
                        this.areaList = res.retData
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

<style scoped>

</style>

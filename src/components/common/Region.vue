<template>
    <select class="form-control" v-model="id" v-on:change="regionChange()">
        <option value="0">--未选择--</option>
        <option v-for="(item,index) in regionList" :key="index" v-bind:value="item.id">{{item.regionName}}</option>
    </select>
</template>

<script>
    export default {
        data() {
            return {
                id: '0',
                regionList: []
            };
        },
        methods: {

            regionChange: function() {
                for (var i = 0; i < this.regionList.length; i++) {
                    if(this.id === '0'){
                        this.$emit('regionChange', null)
                        return
                    }else{
                        if (this.regionList[i].id === this.id) {

                            this.$emit('regionChange', this.regionList[i].id)
                            return
                        }
                    }
                }
            },
            setRegionId: function(id) {
                this.id = id
                this.queryData()
            },
            async queryData() {
                var url = this.url + '/regionBean/getAllRegion'
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
                        this.regionList = res.retData
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

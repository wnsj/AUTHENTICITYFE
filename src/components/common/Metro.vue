<template>
    <select class="form-control" v-model="metroId" v-on:change="metroChange()">
        <option value="0">--未选择--</option>
        <option v-for="(item,index) in metroList" :key="index" v-bind:value="item.id">{{item.metroName}}</option>
    </select>
</template>

<script>
    export default {
        data() {
            return {
                metroId: '0',
                metroList: []
            };
        },
        methods: {

            metroChange: function() {
                for (var i = 0; i < this.metroList.length; i++) {
                    if(this.metroId === '0'){
                        this.$emit('metroChange', null)
                        return
                    }else{
                        if (this.metroList[i].id === this.metroId) {

                            this.$emit('metroChange', this.metroList[i].id)
                            return
                        }
                    }
                }
            },
            setMetroId: function(metroId) {
                this.metroId = metroId
                this.queryData()
            },
            async queryData() {
                var url = this.url + '/metroBean/getAllMetro'
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
                        this.metroList = res.retData
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

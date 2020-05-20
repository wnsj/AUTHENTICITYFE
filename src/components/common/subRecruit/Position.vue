<template>
    <select class="form-control" v-model="id" v-on:change="pChange()">
        <option value="0">--未选择--</option>
        <option v-for="(item,index) in positionList" :key="index" v-bind:value="item.recruitName">{{item.recruitName}}</option>
    </select>
</template>

<script>
    export default {
        data() {
            return {
                id: '0',
                positionList: []
            };
        },
        methods: {

            pChange: function() {
                for (var i = 0; i < this.positionList.length; i++) {
                    if(this.id === '0'){
                        this.$emit('pChange', null)
                        return
                    }else{
                        if (this.positionList[i].recruitName === this.id) {

                            this.$emit('pChange', this.positionList[i].recruitName)
                            return
                        }
                    }
                }
            },
            setPId: function(id) {
                this.id = id
                this.queryData()
            },
            async queryData(typeId) {
                var url = this.url + '/recruitLabelBean/getReLabel'
                this.$ajax({
                    method: 'POST',
                    url: url,
                    headers: {
                        'Content-Type': this.contentType,
                        'Access-Token': this.accessToken
                    },
                    data: {typeId:typeId},
                    dataType: 'json',
                }).then((response) => {
                    var res = response.data
                    if (res.retCode === '0000') {
                        this.positionList = res.retData
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

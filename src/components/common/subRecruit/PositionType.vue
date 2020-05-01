<template>
    <select class="form-control" v-model="id" v-on:change="ptChange()">
        <option value="0">--未选择--</option>
        <option v-for="(item,index) in ptList" :key="index" v-bind:value="item.id">{{item.typeName}}</option>
    </select>
</template>

<script>
    export default {
        data() {
            return {
                id: '0',
                ptList: []
            };
        },
        methods: {

            ptChange: function() {
                for (var i = 0; i < this.ptList.length; i++) {
                    if(this.id === '0'){
                        this.$emit('ptChange', null)
                        return
                    }else{
                        if (this.ptList[i].id === this.id) {

                            this.$emit('ptChange', this.ptList[i].id)
                            return
                        }
                    }
                }
            },
            setPtId: function(id) {
                this.id = id
                this.queryData()
            },
            async queryData() {
                var url = this.url + '/recruitTypeBean/getAllRecruitType'
                this.$ajax({
                    method: 'POST',
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
                        this.ptList = res.retData
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

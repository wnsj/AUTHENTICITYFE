<template>
    <select class="form-control" v-model="id" v-on:change="commentChange()">
        <option value="0">--未选择--</option>
        <option v-for="(item,index) in commentList" :key="index" v-bind:value="item.id">{{item.couTypeName}}</option>
    </select>
</template>

<script>
    export default {
        data() {
            return {
                id: '0',
                commentList: []
            };
        },
        methods: {

            commentChange: function() {
                for (var i = 0; i < this.commentList.length; i++) {
                    if(this.id === '0'){
                        this.$emit('commentChange', null)
                        return
                    }else{
                        if (this.commentList[i].id === this.id) {

                            this.$emit('commentChange', this.commentList[i].id)
                            return
                        }
                    }
                }
            },
            setComId: function(id) {
                this.id = id
                this.queryData()
            },
            async queryData() {
                var url = this.url + '/couTypeBean/getAllCouType'
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
                        this.commentList = res.retData
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

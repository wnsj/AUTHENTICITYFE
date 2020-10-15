<template>
    <select class="form-control" v-model="id" v-on:change="buChange()">
        <option value="0">--未选择--</option>
        <option v-for="(item,index) in buList" :key="index" v-bind:value="item.id">{{item.buName}}</option>
    </select>
</template>

<script>
    export default {
        data() {
            return {
                id: '0',
                ldId:'',
                buList: []
            };
        },
        methods: {

            buChange: function() {
                for (var i = 0; i < this.buList.length; i++) {
                    if(this.id === '0'){
                        this.$emit('buChange', null)
                        return
                    }else{
                        if (this.buList[i].id === this.id) {

                            this.$emit('buChange', this.buList[i].id)
                            return
                        }
                    }
                }
            },
            setBuId: function(buId) {
                this.id = buId
                this.ldId = null
                this.queryData()
            },
            setLdId: function(ldId) {
                this.id = '0'
                this.ldId = ldId
                this.queryData()
            },
            setLdIds: function(ldId) {
                this.ldId = ldId
                setTimeout(res => {
                    this.queryData()
                })
            },
            async queryData() {
                var url = this.url + '/businessDistrictBean/getBusinessDistrict'
                this.$ajax({
                    method: 'POST',
                    url: url,
                    headers: {
                        'Content-Type': this.contentType,
                        'Access-Token': this.accessToken
                    },
                    data: {
                        ldId:this.ldId
                    },
                    dataType: 'json',
                }).then((response) => {
                    var res = response.data
                    if (res.retCode === '0000') {
                        this.buList = res.retData
                    } else {
                        alert(res.retMsg)
                    }
                }).catch((error) => {
                    console.log('数据请求失败处理'+ error)
                });
            },
        },
        created() {
            // this.queryData()
        },
    }
</script>

<style scoped>

</style>

<template>
    <div>
        <select class="form-control" v-model="ltId" v-on:change="ltChange()">
            <option value="0">--未选择--</option>
            <option v-for="(item,index) in locationTypeList" :key="index" v-bind:value="item.ltId">{{item.ltName}}</option>
        </select>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                ltId: '0',
                locationTypeList: [],
            };
        },
        methods: {
            setLtId: function(ltId) {
                this.ltId = ltId
                this.queryData()
            },
            ltChange() {
                for (var i = 0; i < this.locationTypeList.length; i++) {
                    if(this.ltId === '0'){
                        this.$emit('ltChange', null)
                        return
                    }else{
                        if (this.locationTypeList[i].ltId === this.ltId) {
                            this.$emit('ltChange', this.locationTypeList[i].ltId)
                            return
                        }
                    }
                }
            },
            async queryData() {
                var url = this.url + '/locationTypeBean/getAllLocation'
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
                        this.locationTypeList = res.retData
                    } else {
                        alert(res.retMsg)
                    }
                }).catch((error) => {
                    console.log('数据请求失败处理')
                });
            }
        },
        created() {
            this.queryData()
        },
    }
</script>

<style scoped>

</style>

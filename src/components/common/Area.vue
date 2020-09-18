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
                type: '',
                areaList: []
            };
        },
        methods: {

            areaChange: function() {
                for (var i = 0; i < this.areaList.length; i++) {
                    if(this.areaId == '0'){
                        this.$emit('areaChange', null)
                        return
                    }else{
                        if (this.areaList[i].arId == this.areaId) {

                            this.$emit('areaChange', this.areaList[i].areaId)
                            return
                        }
                    }
                }
            },
            setArId: function(arId) {
                this.areaId = arId
                this.queryData()
            },
            setType: function(type) {
                this.type = type
                this.queryData()
            },
            async queryData() {
                var url = this.url + '/areaBean/getAllArea?type=' + this.type
                this.$ajax({
                    method: 'GET',
                    url: url,
                    headers: {
                        'Content-Type': this.contentType,
                        'Access-Token': this.accessToken
                    },
                    data: {
                        type: this.type
                    },
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

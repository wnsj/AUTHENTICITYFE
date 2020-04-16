<template>
    <select class="form-control" v-model="bhtId" v-on:change="bhtChange()">
        <option value="0">--未选择--</option>
		<option v-for="(item,index) in bhtList" :key="index" v-bind:value="item.bhtId">{{item.bhtName}}</option>
    </select>
</template>

<script>
    export default {
        data() {
            return {
                bhtId: '0',
                bhtList: []
            };
        },
        methods: {
            
            bhtChange: function() {
                for (var i = 0; i < this.bhtList.length; i++) {
                    if(this.bhtId === 0){
                         this.$emit('bhtChange', null)
                         return
                    }else{
                        if (this.bhtList[i].bhtId === this.bhtId) {
                            this.$emit('bhtChange',this.bhtList[i].bhtId)
                            return
                        }
                    }
                }
            },
            async queryData() {
                var url = this.url + '/buildingHorseTypeBean/getAllHorseType'
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
                        this.bhtList = res.retData
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

<style>

</style>

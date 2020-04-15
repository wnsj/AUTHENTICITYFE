<template>
    <select class="form-control" v-model="bhtId" v-on:change="btChange()">
        <option value="0">--未选择--</option>
		<option v-for="(item,index) in bhtList" :key="index" v-bind:value="item.bhtId">{{item.btName}}</option>
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
                    if(this.bhtId == 0){
                         this.$emit('btChange', null)
                         return
                    }else{
                        if (this.bhtList[i].colId == this.bhtId) {
                            this.$emit('btChange', this.bhtList[i])
                            return
                        }
                    }
                }
            },
            setBhtId: function(bhtId) {
                this.bhtId = bhtId
                this.queryData()
            },
            async queryData() {
                var url = this.url + '/buildingHorseTypeBean/getAllHorseType'
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
                    if (res.retCode == '0000') {
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

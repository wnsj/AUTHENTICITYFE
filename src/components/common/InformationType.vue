

<template>
    <div>
        <select class="form-control" v-model="mtId" v-on:change="mtIdChange()">
            <option value="0">--未选择--</option>
            <option v-for="(item,index) in ldtList" :key="index" v-bind:value="item.mtId">{{item.mtName}}</option>
        </select>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                mtId:'0',
                proId: '',
                ldtList: [],
                mtName:'',
            };
        },
        methods: {

            locationTypeChange: function() {
                var url = this.url + '/messageTypeBean/getAllMessageType'
                this.$ajax({
                    method: 'GET',
                    url: url,
                    headers: {
                       // 'Content-Type': this.contentType,
                        'Access-Token': this.accessToken
                    },
                    data: {
                       
                    },
                    //dataType: 'json',
                }).then((response) => {
                    var res = response.data
                    if (res.retCode === '0000') {
                        this.ldtList = res.retData
                    } else {
                        alert(res.retMsg)
                    }
                }).catch((error) => {
                    console.log('数据请求失败处理')
                });
            },

            setmtId: function(mtId) {
                this.mtId = mtId
                this.locationTypeChange()
            },
            setProId: function(proId) {
                this.proId = proId
                this.locationTypeChange()
            },
            mtIdChange: function() {
                for (var i = 0; i < this.ldtList.length; i++) {
                    if(this.mtId === '0'){
                        this.$emit('mtIdChange', null)
                        return
                    }else{
                        if (this.ldtList[i].mtId === this.mtId) {
                            this.$emit('mtIdChange', this.ldtList[i].mtId)
                            return
                        }
                    }
                }
            }
        },
        created() {
            this.locationTypeChange()
        },
    }
</script>

<style scoped>

</style>

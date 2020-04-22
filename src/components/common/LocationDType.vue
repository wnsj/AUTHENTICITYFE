<template>
    <div>
        <select class="form-control" v-model="ldId" v-on:change="ldtChange()">
            <option value="0">--未选择--</option>
            <option v-for="(item,index) in ldtList" :key="index" v-bind:value="item.ldId">{{item.ldName}}</option>
        </select>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                ldId:'0',
                ldtList: [],
                locationType:''
            };
        },
        methods: {

            locationTypeChange: function(locationType) {
                var url = this.url + '/locationDistinguishBean/getAllDistinguish'
                this.$ajax({
                    method: 'POST',
                    url: url,
                    headers: {
                        'Content-Type': this.contentType,
                        'Access-Token': this.accessToken
                    },
                    data: {'ltId':locationType},
                    dataType: 'json',
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

            setLtId: function(ldId) {
                this.locationType = ldId
                this.queryData()
            },
            ldtChange: function() {
                for (var i = 0; i < this.ldtList.length; i++) {
                    if(this.ldId === 0){
                        this.$emit('ldtChange', null)
                        return
                    }else{
                        if (this.ldtList[i].ldId === this.ldId) {
                            this.$emit('ldtChange', this.ldtList[i].ldId)
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

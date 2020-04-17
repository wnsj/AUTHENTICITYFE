<template>
    <div>
        <select class="form-control" v-model="locationType" v-on:change="locationTypeChange()">
            <option value="0">--未选择--</option>
            <option v-for="(item,index) in locationTypeList" :key="index" v-bind:value="item.ltId">{{item.ltName}}</option>
        </select>
        <select class="form-control" v-model="ldtType" v-on:change="ldtChange()">
            <option value="0">--未选择--</option>
            <option v-for="(item,index) in ldtList" :key="index" v-bind:value="item.ldId">{{item.ldName}}</option>
        </select>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                locationType: '0',
                locationTypeList: [],
                ldtType:'0',
                ldtList: []
            };
        },
        methods: {

            locationTypeChange: function() {

                var url = this.url + '/locationDistinguishBean/getAllDistinguish'
                this.$ajax({
                    method: 'POST',
                    url: url,
                    headers: {
                        'Content-Type': this.contentType,
                        'Access-Token': this.accessToken
                    },
                    data: {'ltId':this.locationType},
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

            setBtId: function(locationType) {
                this.locationType = locationType
                this.queryData()
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
            },
            ldtChange: function() {
                for (var i = 0; i < this.ldtList.length; i++) {
                    if(this.ldtType === 0){
                        this.$emit('locationTypeChange', null)
                        return
                    }else{
                        if (this.ldtList[i].ldId === this.ldtType) {
                            this.$emit('locationTypeChange', this.ldtList[i].ldId)
                            return
                        }
                    }
                }
            }
        },
        created() {
            this.queryData()
            this.locationTypeChange()
        },
    }
</script>

<style scoped>

</style>

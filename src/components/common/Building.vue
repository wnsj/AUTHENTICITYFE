<template>
    <select class="form-control" v-model="buildId" v-on:change="buildChange()">
        <option value="0">--未选择--</option>
        <option v-for="(item,index) in buildList" :key="index" v-bind:value="item.buildId">{{item.htName}}</option>
    </select>
</template>

<script>
    export default {
        data() {
            return {
                buildId: '0',
                buildList: []
            };
        },
        methods: {

            buildChange: function() {
                for (var i = 0; i < this.buildList.length; i++) {
                    if(this.buildId === '0'){
                        this.$emit('buildChange', null)
                        return
                    }else{
                        if (this.buildList[i].buildId === this.buildId) {
                            this.$emit('buildChange',this.buildList[i])
                            return
                        }
                    }
                }
            },
			setBuildingId: function(buildId) {
			    this.buildId = buildId
			},
            async queryData() {
                var url = this.url + '/buildingBean/getAllBuild'
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
                        this.buildList = res.retData
                    } else {
                        alert(res.retMsg)
                    }
                }).catch((error) => {
                    console.log('数据请求失败处理')
                });
            },
            setBuildId: function(buildId) {
                this.buildId = buildId
                this.queryData()
            },
        },
        created() {
            this.queryData()
        },
    }
</script>

<style>

</style>

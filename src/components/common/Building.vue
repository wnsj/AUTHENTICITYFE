<template>
<!--    <select class="form-control" v-model="buildId" v-on:change="buildChange()">-->
<!--        <option value="">&#45;&#45;未选择&#45;&#45;</option>-->
<!--        <option v-for="(item,index) in buildList" :key="index" v-bind:value="item.buildId">{{item.htName}}</option>-->
<!--    </select>-->
        <el-select size="medium" v-model="buildId" v-on:change="buildChange()" clearable filterable placeholder="--未选择--">
            <el-option
                v-for="item in buildList"
                :key="item.buildId"
                :label="item.htName"
                :value="item.buildId">
            </el-option>
        </el-select>
</template>

<script>
    export default {
        data() {
            return {
                buildId: '',
                buildList: []
            };
        },
        methods: {

            buildChange: function() {
                for (var i = 0; i < this.buildList.length; i++) {
                    if(this.buildId === ''){
                        this.$emit('buildChange', null)
                        return
                    }else{
                        if (this.buildList[i].buildId === this.buildId) {
                            this.$emit('buildChange',this.buildList[i].buildId)
                            return
                        }
                    }
                }
            },
			setBuildingId: function(buildId) {
			    this.buildId = buildId
            },
            setBuildingList: function(buildList) {
                console.log('111111111111')
                this.buildList = buildList
                console.log('22222222222')
                this.queryData()
                
			},
            async queryData() {
                console.log('333333333333333')
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

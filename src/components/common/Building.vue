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
                buildType: '',
                buildList: [],
                ldId : '',
                bussId : ''
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
                this.queryData()
            },
            setBuildingList: function(buildList) {
                // this.buildList = []
                this.buildId = ''
                this.buildList = []
                this.buildType = 0
                // this.queryData()
			},

            setBuildType(type) {
                // if(type == 3){
                //     type = 1
                // }
                this.buildId = ''
                this.buildType = type
                this.queryData()
            },

            setLdId: function(ldId) {
                this.buildId = ''
                this.ldId = ldId
                this.queryData()
            },

            setBussId: function(bussId) {
                this.buildId = ''
                this.bussId = bussId
                this.queryData()
            },

            async queryData() {
                var url = this.url + '/buildingBean/getAllBuild'
                this.$ajax({
                    method: 'POST',
                    url: url,
                    headers: {
                        'Access-Token': this.accessToken
                    },
                    data: {
                        ldId:this.ldId,
                        businessId:this.bussId,
                        buildType:this.buildType
                    },
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
            // this.queryData()
        },
    }
</script>

<style>

</style>

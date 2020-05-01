<template>
    <el-select v-model="bhtIdList" multiple
               collapse-tags style="height: 9px" v-on:change="bhtsChange()" placeholder="--未选择--">
        <el-option v-for="item in bhtList"
                   :key="item.bhtId"
                   :label="item.bhtName"
                   :value="item.bhtId">

        </el-option>
    </el-select>
</template>

<script>
    export default {
        data() {
            return {
                bhtIdList: [],
                bhtList: []
            };
        },
        methods: {

            bhtsChange: function() {
                for (var i = 0; i < this.bhtList.length; i++) {
                    if (this.bhtIdList === []) {
                        this.$emit('bhtsChange', null);
                        return
                    } else {
                        this.$emit('bhtsChange', this.bhtIdList)
                        return
                    }
                }
            },
            setBhtIdList: function(bhtIdList) {
                this.bhtIdList = bhtIdList
                this.queryData()
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

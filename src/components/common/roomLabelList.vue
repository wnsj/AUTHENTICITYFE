<template>
    <el-select v-model="labelList" multiple size="mini"
               collapse-tags style="height: 9px" v-on:change="labelChange()" placeholder="--未选择--">
        <el-option v-for="item in labels"
                   :key="item.id"
                   :label="item.roomLabel"
                   :value="item.roomLabel">
        </el-option>
    </el-select>
</template>

<script>
    export default {
        data() {
            return {
                labelList: [],
                labels: []
            };
        },
        methods: {

            labelChange: function () {
                if (null != this.labelList && this.labelList.length > 3) {
                    alert("标签数目不可超过3个！")
                    this.labelList.splice(this.labelList.length - 1,1)
                    return;
                }
                for (var i = 0; i < this.labels.length; i++) {
                    if (this.labelList === []) {
                        this.$emit('labelChange', null);
                        return
                    } else {
                        this.$emit('labelChange', this.labelList)
                        return
                    }
                }
            },
            setLabelList: function (labelList) {
                this.labelList = labelList
                this.queryData()
            },
            async queryData() {
                var url = this.url + '/roomLabelListBean/getAllRlb'
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
                        this.labels = res.retData
                    } else {
                        alert(res.retMsg)
                    }
                }).catch((error) => {
                    console.log('数据请求失败处理' + error)
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

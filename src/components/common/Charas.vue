<template>
    <el-select v-model="charaList" multiple
               collapse-tags style="height: 9px" v-on:change="charsChange()" placeholder="--未选择--">
        <el-option v-for="item in chars"
                   :key="item.chaId"
                   :label="item.chaName"
                   :value="item.chaId">

        </el-option>
    </el-select>
</template>

<script>
    export default {
        data() {
            return {
                charaList: [],
                chars: []
            };
        },
        methods: {

            charsChange: function () {
                for (var i = 0; i < this.couClList.length; i++) {
                    if (this.charaList === []) {
                        this.$emit('charsChange', null);
                        return
                    } else {
                        this.$emit('charsChange', this.charaList)
                        return
                    }
                }
            },
            setCharaList: function (charaList) {
                this.charaList = charaList
                this.queryData()
            },
            async queryData() {
                var url = this.url + '/characteristicBean/getAllChara'
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
                        this.chars = res.retData
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

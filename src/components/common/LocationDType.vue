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
                proId: '',
                ldtList: []
            };
        },
        methods: {

            locationTypeChange: function() {
                var url = this.url + '/locationDistinguishBean/getAllDis'
                this.$ajax({
                    method: 'POST',
                    url: url,
                    headers: {
                        'Content-Type': this.contentType,
                        'Access-Token': this.accessToken
                    },
                    data: {
                        proId: this.proId
                    },
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

            setLdtId: function(ldId) {
                this.ldId = ldId
                this.locationTypeChange()
            },
            setProId: function(proId) {
                this.proId = proId
                this.locationTypeChange()
            },
            ldtChange: function() {
                for (var i = 0; i < this.ldtList.length; i++) {
                    if(this.ldId === '0'){
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

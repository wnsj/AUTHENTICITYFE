

<template>
    <div>
        <select class="form-control" v-model="roomId" v-on:change="roomIdChange()">
            <option value="0">--未选择--</option>
            <option v-for="(item,index) in ldtList" :key="index" v-bind:value="item.id">{{item.room}}</option>
        </select>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                roomId:'',
                proId: '',
                ldtList: [],
                mtName:'',
            };
        },
        methods: {

            locationTypeChange: function() {
                var url = this.url + '/roomMainBean/getRoomOffice'
                this.$ajax({
                    method: 'POST',
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

            setroomId: function(roomId) {
                this.roomId = roomId
                this.locationTypeChange()
            },
            setProId: function(proId) {
                this.proId = proId
                this.locationTypeChange()
            },
            roomIdChange: function() {
                
                for (var i = 0; i < this.ldtList.length; i++) {
                   // console.log(this.roomId)
                    if(this.roomId === '0'){
                        this.$emit('roomIdChange', null)
                        //console.log(this.roomId)
                        return
                    }else{
                       // console.log(this.roomId)
                        if (this.ldtList[i].id === this.roomId) {
                            //console.log(this.roomId)
                            this.$emit('roomIdChange', this.ldtList[i].id)
                            
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

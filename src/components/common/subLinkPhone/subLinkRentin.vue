<!-- add and modify position -->
<template>
    <div class="modal-content">
        <div class="modal-header">
            <h4 id="myModalLabel" class="modal-title">{{title}}反馈</h4>
        </div>
        <div class="modal-body  pos_r">
            <div class="tab-pane fade in active martop" id="basic">
                <div class="dialogInutBox clearfix">
                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">姓名</label><span class="sign-left">:</span>
                        <div class="col-md-8">
                            <label class="form-control" disabled="false">{{addParam.name}}</label>
                        </div>
                    </div>
                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">手机号</label><span class="sign-left">:</span>
                        <div class="col-md-8">
                            <input type="text" class="form-control" disabled="false" v-model="addParam.phone"/>
                        </div>
                    </div>
                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">座机号</label><span class="sign-left">:</span>
                        <div class="col-md-8">
                            <input type="text" class="form-control" disabled="false" v-model="addParam.tel"/>
                        </div>
                    </div>
                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">回访销售</label><span class="sign-left">:</span>
                        <div class="col-md-8">
                            <input type="text" class="form-control " v-model="addParam.returnSale" placeholder="必填"/>
                        </div>
                    </div>
                    <div class="col-md-12 form-group clearfix">
                        <div class="col-md-6  clearfix" style="padding: 0;">
                            <label class="col-md-3 control-label text-right nopad end-aline" style="padding:0;line-height:34px;">反馈</label><span class="sign-left">:</span>
                         </div>
                        <div class="col-md-12">
                            <textarea  class="form-control wdType03" v-model="addParam.remark" placeholder="反馈"></textarea>
                        </div>
                    </div>

                </div>
                <div class="dialogBtnBox form-group clearfix">
                    <div class="col-md-12">
                        <button type="button" class="btn btn-warning pull-right m_r_10" style="margin-right:1.5%;"
                                data-toggle="modal"
                                v-on:click="closeCurrentPage()">返回
                        </button>
                        <button type="button" :disabled="this.isDisable" class="btn btn-primary pull-right m_r_10" style="margin-right:1.5%;"
                                data-toggle="modal"
                                v-on:click="certainAction()">确认
                        </button>
                    </div>
                </div>
            </div>

        </div>

    </div>
</template>


<script>
    var that = null
    export default {
        data() {
            return {
                addParam: {
                    enId:'',
                    // 联系人姓名
                    lpName:'',
                    // 联系方式
                    phone:'',
                    // 备注
                    remark:'',
                    // 回访销售
                    returnSale:'',
                    tel:'',
                },
                title: '添加',
                isDisable:false
            };
        },
        methods: {
            // Initialization projcet’s content
            initPhoneRef(addParam) {
                console.log(addParam)
                $('#phoneDialog').modal({backdrop: 'static', keyboard: false});
                    console.log('Initialization evaluation’s content, which modifies evaluation')
                    Object.assign(this.addParam, addParam)
            },


            certainAction() {
                this.isDisable = true
                setTimeout(() => {
                    this.isDisable = false
                }, 1000)

                if (this.isBlank(this.addParam.returnSale)) {
                    alert("请添加回访销售")
                    return
                }
                if (this.isBlank(this.addParam.remark)) {
                    alert("请添加备注")
                    return
                }
                this.$ajax({
                    method: 'GET',
                    url: this.url + '/entrustRentBean/updateEntrustRent?enId='+this.addParam.enId+"&remark="+this.addParam.remark+"&returnSale="+this.addParam.returnSale,
                    headers: {
                        'Content-Type': this.contentType,
                        'Access-Token': this.accessToken
                    },
                    //data: this.addParam,
                    dataType: 'json',
                }).then((response) => {
                    const res = response.data
                    if (res.retCode === '0000') {
                        alert(res.retMsg)
                        this.$emit('certainAction')
                    }
                }).catch((error) => {
                    console.log('楼盘信息提交失败')
                });
            },
            closeCurrentPage() {
                $("#phoneDialog").modal("hide")
            },
        },
        computed: {
            editor() {
                return this.$refs.myQuillEditor.quill
            }
        }
    }
</script>

<style>
</style>

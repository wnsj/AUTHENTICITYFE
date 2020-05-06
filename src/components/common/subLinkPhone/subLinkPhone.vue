<!-- add and modify position -->
<template>
    <div class="modal-content">
        <div class="modal-header">
            <h4 id="myModalLabel" class="modal-title">{{title}}备注</h4>
        </div>
        <div class="modal-body  pos_r">
            <div class="tab-pane fade in active martop" id="basic">
                <form action="" class="clearfix">
                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">姓名</label><span class="sign-left">:</span>
                        <div class="col-md-8">
                            <input type="text" class="form-control" v-model="addParam.lpName"/>
                        </div>
                    </div>
                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">联系方式</label><span class="sign-left">:</span>
                        <div class="col-md-8">
                            <input type="text" class="form-control" v-model="addParam.phone"/>
                        </div>
                    </div>
                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">备注</label><span
                        class="sign-left">:</span>
                        <div class="col-md-8">
                            <textarea style="height: 300px;width: 400px;" v-model="addParam.form"
                                      placeholder="项目介绍"></textarea>
                        </div>
                    </div>
                    <div class="form-group clearfix">
                        <div class="col-md-12">
                            <button type="button" class="btn btn-warning pull-right m_r_10" style="margin-right:1.5%;"
                                    data-toggle="modal"
                                    v-on:click="closeCurrentPage()">返回
                            </button>
                            <button type="button" class="btn btn-primary pull-right m_r_10" style="margin-right:1.5%;"
                                    data-toggle="modal"
                                    v-on:click="certainAction()">确认
                            </button>
                        </div>
                    </div>
                </form>
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
                    // 联系人姓名
                    lpName:'',
                    // 联系方式
                    phone:'',
                    // 备注
                    form:''
                },
                title: '添加',
            };
        },
        methods: {
            // Initialization projcet’s content
            initPhoneRef(addParam) {
                $('#phoneDialog').modal({backdrop: 'static', keyboard: false});
                    console.log('Initialization evaluation’s content, which modifies evaluation')
                    Object.assign(this.addParam, addParam)
            },


            certainAction() {

                this.$ajax({
                    method: 'POST',
                    url: this.url + '/linkPhoneBean/patchFormById',
                    headers: {
                        'Content-Type': this.contentType,
                        'Access-Token': this.accessToken
                    },
                    data: this.addParam,
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

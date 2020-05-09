<!-- add and modify position -->
<template>
    <div class="modal-content">
        <div class="modal-header">
            <h4 id="myModalLabel" class="modal-title">{{title}}岗位类型</h4>
        </div>
        <div class="modal-body  pos_r">
            <div class="tab-pane fade in active martop" id="basic">
                <form action="" class="clearfix">
                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">类型名称</label><span class="sign-left">:</span>
                        <div class="col-md-8">
                            <input type="text" class="form-control" v-model="addParam.typeName"/>
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
                    typeName:''
                },
                title: '新增',
                // imgList: [],
                // imgFileList: [],
                // size: 0,
                // imgData: {
                //     accept: 'image/gif, image/jpeg, image/png, image/jpg',
                // }
            };
        },
        methods: {
            // Initialization projcet’s content
            initRef() {
                $('#addPt').modal({backdrop: 'static', keyboard: false});

                    this.addParam = {
                        typeName:this.addParam.typeName
                    }
            },


            certainAction() {
				if(this.isBlank(this.addParam.typeName)){
					alert('岗位类型不能为空')
					return
				}
                this.$ajax({
                    method: 'POST',
                    url: this.url + "/recruitTypeBean/addRecruitType",
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
                        this.$emit('certainAction',1)
                    } else {
                        this.$emit('certainAction',2)
                    }
                    this.addParam.typeName = ''
                }).catch((error) => {
                    console.log('楼盘信息提交失败')
                });
            },
            closeCurrentPage() {
                $("#addPt").modal("hide")
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

<!-- add and modify position -->
<template>
    <div class="modal-content">
        <div class="modal-header">
            <h4 id="myModalLabel" class="modal-title">{{title}}岗位</h4>
        </div>
        <div class="modal-body  pos_r">
            <div class="tab-pane fade in active martop" id="basic">
                <form action="" class="clearfix">
                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">类型</label><span class="sign-left">:</span>
                        <div class="col-md-8">
                            <position-type @ptChange="fatherPt" ref="ptRef"></position-type>
                        </div>
                    </div>

                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">岗位</label><span class="sign-left">:</span>
                        <div class="col-md-8">
                            <input type="text" class="form-control" v-model="addParam.recruitName"/>
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

    import PositionType from '../../common/subRecruit/PositionType.vue'
    var that = null
    export default {
        components: {
            PositionType,
        },
        data() {
            return {
                addParam: {
                    typeId:'',
                    recruitName:''
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
                $('#addP').modal({backdrop: 'static', keyboard: false});

            },

            fatherPt(data) {
                this.addParam.typeId = '';
                if (null !== data) {
                    this.addParam.typeId = data
                }
            },
            certainAction() {
				if(this.isBlank(this.addParam.recruitName)){
					alert('岗位不能为空')
					return
				}
				if(this.isBlank(this.addParam.typeId)){
					alert('岗位类型为空')
					return
				}
                this.$ajax({
                    method: 'POST',
                    url: this.url + "/recruitLabelBean/addRecruitLabel",
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
                    this.addParam.recruitName = ''
                    this.$refs.ptRef.setPtId('0')
                }).catch((error) => {
                    console.log('楼盘信息提交失败')
                });
            },
            closeCurrentPage() {
                $("#addP").modal("hide")
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

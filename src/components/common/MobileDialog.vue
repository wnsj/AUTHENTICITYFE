<!-- add and modify position -->
<template>
    <div class="modal-content">
        <div class="modal-header">
            <h4 id="myModalLabel" class="modal-title">移动端</h4>
        </div>
        <div class="modal-body  pos_r">
            <div class="tab-pane fade in active martop" id="basic">
                <div class="dialogInutBox clearfix">
                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">头部展示</label><span class="sign-left">:</span>
                        <div class="col-md-8">
                            <select class="form-control" v-model="addParam.mobileHead">
                                <option value=1>--是--</option>
                                <option value=2>--否--</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-2 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">排序值</label><span class="sign-left">:</span>
                        <div class="col-md-8">
                            <input type="text" class="form-control" v-model="addParam.sort">
                        </div>
                    </div>
                    <div class="col-md-12 form-group clearfix">
                        <label class="col-md-2 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">项目介绍</label><span
                        class="sign-left">:</span>
                    </div>
                    <div class="col-md-12 form-group clearfix">
                        <BuildNote ref="buildNoteRef"></BuildNote>
                    </div>

                </div>
                <div class="dialogBtnBox form-group clearfix">
                    <div class="col-md-12">
                        <button type="button" class="btn btn-warning pull-right m_r_10" style="margin-right:1.5%;"
                                data-toggle="modal"
                                v-on:click="closeCurrentPage()">返回
                        </button>
                        <button type="button" :disabled="this.isDisable" class="btn btn-primary pull-right m_r_10"
                                style="margin-right:1.5%;"
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
    import datePicker from 'vue2-datepicker'
    import BuildNote from '../common/BuildNote.vue'

    var that = null
    export default {
        components: {
            datePicker,
            BuildNote
        },
        data() {
            return {
                addParam: {
                    //  排序权重
                    sort: '',
                    // 是否移动端
                    isMobile: '',
                    // 是否在头部展示(1:是；2：否)
                    mobileHead: '',
                    // 移动端项目介绍
                    mobileIntroduction: ''
                },
                isDisable: false
            };
        },
        methods: {
            // Initialization projcet’s content
            initRef(addParam) {
                // console.log('通啦' + addParam.buildId);
                this.addParam = {
                    //  排序权重
                    sort: '',
                    // 是否移动端
                    isMobile: '',
                    // 是否在头部展示(1:是；2：否)
                    mobileHead: 2,
                    // 移动端项目介绍
                    mobileIntroduction: ''
                }
                this.$refs.buildNoteRef.setData(addParam.mobileIntroduction)
                Object.assign(this.addParam, addParam)
            },


            certainAction() {
                this.isDisable = true
                setTimeout(() => {
                    this.isDisable = false
                }, 1000)
                this.addParam.mobileIntroduction = this.$refs.buildNoteRef.getData()


                var url = this.url + '/buildingBean/patchMobileById'
                this.$ajax({
                    method: 'POST',
                    url: url,
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
                        $("#buildDialog").modal("hide")
                    }
                }).catch((error) => {
                    console.log(error + '楼盘信息提交失败')
                });
            },
            closeCurrentPage() {
                $("#mobileDialog").modal("hide")
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

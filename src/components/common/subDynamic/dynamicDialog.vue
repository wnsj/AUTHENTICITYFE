<!-- add and modify position -->
<template>
    <div class="modal-content">
        <div class="modal-header">
            <h4 id="myModalLabel" class="modal-title">{{title}}动态</h4>
        </div>
        <div class="modal-body  pos_r">
            <div class="tab-pane fade in active martop" id="basic">
                <div class="dialogInutBox clearfix">
                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">标题</label><span class="sign-left">:</span>
                        <div class="col-md-8">
                            <input type="text" class="form-control" v-model="addParam.bdName"/>
                        </div>
                    </div>
                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">楼盘</label><span class="sign-left">:</span>
                        <div class="col-md-8">
                            <Building @buildChange="fatherBuild" ref="buildRef"></Building>
                        </div>
                    </div>
                    <div class="col-md-6 form-group clearfix" style="width: 100%">

                    </div>
                    <div class="col-md-12 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline" style="padding:0;line-height:34px;">动态内容</label><span
                        class="sign-left">:</span>
                    </div>
                    <div class="col-md-12 form-group clearfix">
                        <RecruitNote ref="rn"></RecruitNote>
                    </div>

                </div>
                <div class="dialogBtnBox form-group clearfix">
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
            </div>

        </div>

    </div>
</template>


<script>
    import RecruitNote from '../subRecruit/RecruitNote.vue'
    import Building from '../Building.vue'
    var that = null
    export default {
        components: {
            RecruitNote,
            Building
        },
        data() {
            return {
                addParam: {
                    // 动态内容
                    bdContent:'',
                    // 标题
                    bdName:'',
                    // 楼盘id
                    buildId:''
                },
                title: '',
            };
        },
        methods: {
            // Initialization projcet’s content
            initDyRef(param, addParam) {
                $('#dyDialog').modal({backdrop: 'static', keyboard: false});
                if (param === 'add') {
                    this.$refs.rn.setData('')
                    this.$refs.buildRef.setBuildingId("")
                    this.title = '新增'
                    this.addParam = {
                        // 动态内容
                        bdContent:'',
                        // 标题
                        bdName:'',
                        // 楼盘id
                        buildId:''
                    }

                } else if (param === 'modify') {
                    console.log('Initialization evaluation’s content, which modifies evaluation')
                    this.title = '修改';
                    Object.assign(this.addParam, addParam)
					this.$refs.rn.setData(this.addParam.bdContent)
					this.$refs.buildRef.setBuildingId(this.addParam.buildId)
                }
            },

            fatherBuild(data) {
                this.addParam.buildId = ''
                if (null !== data) {
                    this.addParam.buildId = data.buildId
                }
            },

            certainAction() {
                this.addParam.bdContent = this.$refs.rn.getData()
                const fd = new FormData();

                fd.append("param", JSON.stringify(this.addParam));


                switch (this.title) {
                    case '新增':
                        var url = this.url + '/buildingDynamicBean/addDynamic'
                        break;
                    case '修改':
                        var url = this.url + '/buildingDynamicBean/patchDyById'
                        break;
                }

                this.$ajax({
                    method: 'POST',
                    url: url,
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        'Access-Token': this.accessToken
                    },
                    data: fd,
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
                $("#dyDialog").modal("hide")
            },

            formatFileSize: function (fileSize, idx) {
                var units = ["B", "KB", "MB", "GB"];
                idx = idx || 0;
                if (fileSize < 1024 || idx === units.length - 1) {
                    return fileSize.toFixed(1) + units[idx];
                }
                return this.formatFileSize(fileSize / 1024, ++idx);
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

<!-- add and modify position -->
<template>
    <div class="modal-content">
        <div class="modal-header">
            <h4 id="myModalLabel" class="modal-title">{{title}}资讯</h4>
        </div>
        <div class="modal-body  pos_r">
            <div class="tab-pane fade in active martop" id="basic">
                <div class="dialogInutBox clearfix">
                    <div class="col-md-12 form-group clearfix" style="padding-right:0">
                        <label class="col-md-2 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;width: 12%;">标题</label><span class="sign-left">:</span>
                        <div class="col-md-10" style="padding-right:6px">
                            <input type="text" class="form-control" v-model="addParam.bdName">
                            <!-- <textarea type="text" class="form-control" v-model="addParam.bdName" style="height:100px"></textarea> -->
                        </div>
                    </div>
                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">资讯类别</label><span class="sign-left">:</span>
                        <div class="col-md-8">
                             <mtI @mtIdChange='fathermtIReceive' ref="mtIRef"></mtI>
                        </div>
                    </div>


                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">图片</label><span class="sign-left">:</span>
                        <div class="col-md-8">
                            <input type="file" id="pic" @change="headImgChange" accept="image/*"/>
                            <p class="redtips">*注意：宽380px*高180px</p>

                            <div id="picOutDiv">
                                <div v-for="(item,index) of headImgList" :key="index" v-show="headImgList.length!==0">
                                    <img :src="item" style="width: 100%">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-12 form-group clearfix">
                        <div class="col-md-6  clearfix" style="padding: 0;">
                            <label class="col-md-3 control-label text-right nopad end-aline" style="padding:0;line-height:34px;">资讯描述</label><span class="sign-left">:</span>
                         </div>
                        <div class="col-md-12 form-group clearfix" style="padding-left: 0;">
                            <textarea class="form-control wdType03" v-model="addParam.bdLabel" placeholder="资讯描述" style="padding-right:0"></textarea>
                        </div>
                    </div>
                    <div class="col-md-12 form-group clearfix">
                        <div class="col-md-6  clearfix" style="padding: 0;">
                            <label class="col-md-3 control-label text-right nopad end-aline" style="padding:0;line-height:34px;">资讯内容</label><span class="sign-left">:</span>
                         </div>
                        <div class="col-md-12 form-group clearfix" style="padding-left: 0;">
                             <SummerNote ref="sn"></SummerNote>
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
    import datePicker from 'vue2-datepicker'
    import Building from '../Building.vue'
    import SummerNote from '../subArticle/SummerNote.vue'
    import mtI from '../../common/InformationType.vue'
    var that = null
    export default {
        components: {
            datePicker,
            Building,
            SummerNote,
            mtI
        },
        data() {
            return {
                addParam: {
                    bdName:'',  //资讯名称
                    bdContent:'',  // 动态内容
                    bdLabel:'',   // 描述
                    buildId:'',    // 资讯类型id
                    mtId:'',
                },
                bdPath:'',     // 图片路径
                headImgList: [],
                headImgFileList: [],
                title: '',
                isDisable:false,
                imgData: {
                    accept: 'image/gif, image/jpeg, image/png, image/jpg',
                }
            };
        },
        methods: {
            //  fathermtIReceive(data) {
            //      console.log(data)
            //     this.addParam.mtId = ''
            //     if (null != data) {
            //         this.addParam.mtId = data
            //     }
            //     //this.$refs.mtIRef.setmtId(data)
            // },
            // Initialization projcet’s content
            initDyRef(param, addParam) {
                this.headImgList = []
                this.headImgFileList = []
                $("#pic").val("");
                this.$refs.mtIRef.setmtId('0')
                $('#dyDialog').modal({backdrop: 'static', keyboard: false});
                if (param === 'add') {
                    // this.$refs.rn.setData('')
                   // this.$refs.buildRef.setBuildingId("")
                   this.$refs.sn.setData('')
                   this.title = '新增'
                   this.addParam = {
                        bdName:'',      // 资讯名称
                        bdContent:'',   // 动态内容
                        bdLabel:'',     // 描述
                        buildId:'',     // 资讯类型id
                        mtId:''
                    }

                } else if (param === 'modify') {
                    console.log('Initialization evaluation’s content, which modifies evaluation')
                     if (null != addParam && null != addParam.bdPath) {
                        var en = []
                        en.push(this.url + addParam.bdPath)
                        this.headImgList = en
                    }
                    this.title = '修改';
                    this.$refs.sn.setData(addParam.bdContent)
                    this.$refs.mtIRef.setmtId(addParam.buildId)
                    Object.assign(this.addParam, addParam)
					// this.$refs.rn.setData(this.addParam.bdContent)
					//this.$refs.buildRef.setBuildingId(this.addParam.buildId)
                }
            },

            fathermtIReceive(data) {
                this.addParam.buildId = ''
                if (null !== data) {
                    this.addParam.buildId = data
                }
            },
            //头图
            headImgChange() {

                var files = $("#pic")[0].files; //获取file对象
                if (null != files) {
                    this.headImgList = []
                }
                for (let i = 0; i < files.length; i++) {
                    var file = files[i]
                    this.fileAdd(file, i, 5)
                }
            },
            certainAction() {
                this.isDisable = true
                setTimeout(() => {
                    this.isDisable = false
                }, 1000)

                if (this.isBlank(this.addParam.bdName)) {
                    alert('标题必填')
                    return
                }
                if (this.isBlank(this.addParam.buildId)) {
                    alert('资讯类别必选')
                    return
                }
                if (this.isBlank(this.addParam.bdLabel)) {
                    alert('资讯描述必填')
                    return
                }

                this.addParam.bdContent = this.$refs.sn.getData()
                if (this.isBlank(this.addParam.bdContent)) {
                    alert('资讯内容必填')
                    return
                }

                if (null == this.headImgList || this.headImgList.length === 0) {
                    alert('请选择图片')
                    return
                }
                // this.addParam.bdContent = this.$refs.rn.getData()
//                 const fd = new FormData();
//                 fd.append("param", JSON.stringify(this.addParam));

                const fd = new FormData();
                // 头图
                for (let i = 0; i < this.headImgFileList.length; i++) {
                    fd.append("picture", this.headImgFileList[i]);
                }
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
             //预览图
            pictureChange() {

                var files = $("#picture")[0].files; //获取file对象

                if (null != files) {
                    this.buPath = []
                }
                for (let i = 0; i < files.length; i++) {
                    var file = files[i]
                    this.fileAdd(file)
                }

            },
            fileAdd(file) {
                let type = file.type;//文件的类型，判断是否是图片
                let size = file.size;//文件的大小，判断图片的大小
                if (this.imgData.accept.indexOf(type) === -1) {
                    alert('请选择我们支持的图片格式！');
                    return false;
                }
                if (size > 3145728) {
                    alert('请选择3M以内的图片！');
                    return false;
                }
                let that = this;
                // 总大小
                this.size = this.size + file.size;
                let reader = new FileReader();
                // 调用reader.readAsDataURL()方法，把图片转成base64
                reader.readAsDataURL(file);

                // 监听reader对象的onload事件，当图片加载完成时，把base64编码賦值给预览图片
                reader.onload = function () {
                    var dataUrl = reader.result;

                    file.src = this.result;
                    that.headImgFileList.push(file)
                    that.headImgList.push(dataUrl)

                }
            },
            fileDel(index) {
                this.headImgList.splice(index, 1)
                this.headImgFileList.splice(index, 1)
            }

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

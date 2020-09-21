<!-- add and modify position -->
<template>
    <div class="modal-content">
        <div class="modal-header">
            <h4 id="myModalLabel" class="modal-title">{{title}}资讯</h4>
        </div>
        <div class="modal-body  pos_r">
            <div class="tab-pane fade in active martop" id="basic">
                <div class="dialogInutBox clearfix">
                    <div class="col-md-12 form-group clearfix">
                        <label class="col-md-2 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">标题</label><span class="sign-left">:</span>
                        <div class="col-md-9">
                            <textarea type="text" class="form-control" v-model="addParam.bdName" style="height:100px"></textarea>
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
                               style="padding:0;line-height:34px;">头图</label><span class="sign-left">:</span>
                        <div class="col-md-8">
                            <input type="file" id="pic" @change="headImgChange" accept="image/*"/>
                            <p class="redtips">*注意：宽378px*高228px</p>

                            <div id="picOutDiv">
                                <div v-for="(item,index) of headImgList" :key="index" v-show="headImgList.length!==0">
                                    <div @click="fileDel(index,5,item)">x</div>
                                    <img :src="item" style="width: 100%">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-12 form-group clearfix">
                        <div class="col-md-6  clearfix" style="padding: 0;">
                            <label class="col-md-3 control-label text-right nopad end-aline" style="padding:0;line-height:34px;">资讯描述</label><span class="sign-left">:</span>
                         </div>
                        <div class="col-md-12 form-group clearfix">
                            <textarea class="form-control wdType03" v-model="addParam.bdLabel" placeholder="资讯描述"></textarea>
                        </div>
                    </div>
                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">视频</label><span
                        class="sign-left">:</span>
                        <div class="col-md-8">
                            <input type="file" id="video" @change="videoChange"
                            />
                            <div id="playAvOutDiv" v-if="playAvOutDivFlag">
                                <!--                                <PlayAV ref="playRef"></PlayAV>-->
                                <label class="col-md-3 control-label text-right nopad end-aline"
                                       style="padding:0;line-height:34px;">{{this.videoName}}</label>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">图片列表</label><span
                        class="sign-left">:</span>
                        <div class="col-md-8">
                            <input type="file" id="buildRealImg" @change="buildRealImgChange" accept="image/*"
                                   multiple="multiple"/>
                            <p class="redtips">*注意：宽620px*高380px</p>
                            <div id="buildRealImgOutDiv">
                                <div v-for="(item,index) of buildRealImgList" :key="index"
                                     v-show="buildRealImgList.length!==0">
                                    <div @click="fileDel(index,3,item)">x</div>
                                    <img :src="item" style="width: 100%">
                                </div>
                            </div>
                        </div>
                    </div>


                    <div class="col-md-12 form-group clearfix">
                        <div class="col-md-6  clearfix" style="padding: 0;">
                            <label class="col-md-3 control-label text-right nopad end-aline" style="padding:0;line-height:34px;">资讯内容</label><span class="sign-left">:</span>
                         </div>
                        <div class="col-md-12 form-group clearfix">
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
             mtI,
        },
        data() {
            return {
                addParam: {
                    bdName:'',  //资讯名称

                    bdContent:'',  // 动态内容

                    bdLabel:'',   // 描述

                    buildId:'',    // 资讯类型id
                    //mtId:'',

                },
                videoName:'',
                 bdPath:'',     // 图片路径

                headImgList:
                    [],
                buildRealImgList:[],
                buildRealImgFileList:
                    [],
                headImgFileList:
                    [],
                title: '',
                isDisable:false,
                playAvOutDivFlag: true,
                imgData: {
                    accept: 'image/gif, image/jpeg, image/png, image/jpg',
                }
            };
        },
        methods: {
            //  fathermtIReceive(data) {
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
                this.videoName = ''
                this.buildRealImgList = []
                $("#pic").val("");
                $('#dyDialog').modal({backdrop: 'static', keyboard: false});
                if (param === 'add') {
                    // this.$refs.rn.setData('')
                   // this.$refs.buildRef.setBuildingId("")
                   this.$refs.sn.setData('')
                    this.title = '新增'
                    this.addParam = {
                        bdName:'',  //资讯名称

                    bdContent:'',  // 动态内容

                    bdLabel:'',   // 描述

                    buildId:'',    // 资讯类型id
                    //mtId:'',

                    }

                } else if (param === 'modify') {
                    console.log('Initialization evaluation’s content, which modifies evaluation')
                     if (null != addParam && null != addParam.bdPath) {
                        var en = []
                        en.push(this.url + addParam.bdPath)
                        this.headImgList = en
                    }else if (this.isBlank(addParam.videoPath)) {
                        this.playAvOutDivFlag = false
                        $("#playAvOutDiv").modal("hide")
                    } else {
                        this.videoName = addParam.videoName
                        // this.$refs.playRef.initData(this.url + addParam.videoPath)
                    }
                    this.title = '修改';
                    if (null !== addParam.picturePath) {
                        var buildRea = []
                        for (var i = 0; i < addParam.picturePath.length; i++) {
                            buildRea.push(this.url + addParam.picturePath[i])
                        }
                        this.buildRealImgList = buildRea
                    }

                    this.$refs.sn.setData(addParam.bdContent)
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
                // this.addParam.bdContent = this.$refs.rn.getData()
//                 const fd = new FormData();
//
//                 fd.append("param", JSON.stringify(this.addParam));
                 this.addParam.bdContent = this.$refs.sn.getData()
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
                this.playAvOutDivFlag = true
                this.$emit('certainAction')
                $("#buildDialog").modal("hide")
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
             buildRealImgChange() {

                var files = $("#buildRealImg")[0].files; //获取file对象
                for (let i = 0; i < files.length; i++) {
                    var file = files[i]
                    this.fileAdd(file, i, 3)
                }
            },

            videoChange() {
                var files = $("#video")[0].files;
                if (null != files) {
                    this.videoName = ''
                }
            },
            fileAdd(file,i, pictureType) {
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
                     if (pictureType === 3) {
                        that.buildRealImgFileList.push(file)
                        that.buildRealImgList.push(dataUrl)
                    }else if (pictureType === 5) {
                        that.headImgFileList.push(file)
                        that.headImgList.push(dataUrl)
                    }
                }
            },
            fileDel(index, type, item) {
                if (this.title == '修改') {
                    if (!confirm("确定删除该图片？")) {
                        return;
                    }
                }
                
                if (type === 3) {
                    this.buildRealImgList.splice(index, 1)
                    this.buildRealImgFileList.splice(index, 1)
                } else if (type === 5) {
                    this.headImgList.splice(index, 1)
                    this.headImgFileList.splice(index, 1)
                }
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

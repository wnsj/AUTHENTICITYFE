<!-- add and modify position -->
<template>
    <div class="modal-content">
        <div class="modal-header">
            <h4 id="myModalLabel" class="modal-title">{{title}}点评</h4>
        </div>
        <div class="modal-body  pos_r">
            <div class="tab-pane fade in active martop" id="basic">
                <div class="dialogInutBox clearfix">
                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">点评类型</label><span class="sign-left">:</span>
                        <div class="col-md-8">
                            <CommentType @commentChange="fatherCouType" ref="couTypeRef"></CommentType>
                        </div>
                    </div>
                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">咨询师</label><span class="sign-left">:</span>
                        <div class="col-md-8">
                            <Counselor @couChange="fatherCou" ref="couRef"></Counselor>
                        </div>
                    </div>
                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">楼盘</label><span class="sign-left">:</span>
                        <div class="col-md-8">
                            <Building @buildChange="fatherBuild" ref="buildRef"></Building>
                        </div>
                    </div>
                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">图片</label><span
                        class="sign-left">:</span>
                        <div class="col-md-8">
                            <input type="file" id="picImg" @change="picChange" accept="image/*"
                                   multiple="multiple"/>
                            <div id="picImgOutDiv">
                                <div v-for="(item,index) of picList" :key="index"
                                     v-show="picList.length!==0">
                                    <div @click="fileDel(index)">x</div>
                                    <img :src="item" style="width: 100%">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-12 form-group clearfix">
                        <div class="col-md-6  clearfix" style="padding: 0;">
                            <label class="col-md-3 control-label text-right nopad end-aline" style="padding:0;line-height:34px;">评论内容</label><span class="sign-left">:</span>
                         </div>
                        <div class="col-md-12 form-group clearfix">
                        <!--                        <SummerNote ref="sn"></SummerNote>-->
                            <textarea class="form-control wdType03" v-model="addParam.comContent"  placeholder="点评"></textarea>
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
    // import SummerNote from '../subArticle/SummerNote.vue'
    import Counselor from '../subCou/Counselor.vue'
    import CommentType from '../subComment/CommentType.vue'
    import Building from '../Building.vue'

    var that = null
    export default {
        components: {
            // SummerNote,
            Counselor,
            CommentType,
            Building
        },
        data() {
            return {
                addParam: {
                    // 评论内容
                    comContent: '',
                    // 咨询师id
                    couId: '',
                    // 楼盘id
                    buildId: '',
                    // 评论类型
                    coucType: ''
                },
                title: '',
                picList: [],
                picFileList: [],
                isDisable:false,
                size:
                    0,
                imgData:
                    {
                        accept: 'image/gif, image/jpeg, image/png, image/jpg',
                    }
            };
        },
        methods: {
            // Initialization projcet’s content
            initCommentRef(param, addParam) {
                this.picList = []
                this.picFileList = []
                $("#picImg").val("");

                $('#commentDialog').modal({backdrop: 'static', keyboard: false});
                if (param === 'add') {
                    // this.$refs.sn.setData('')
                    this.$refs.couTypeRef.setComId('0')
                    this.$refs.couRef.setCouId('0');
                    this.$refs.buildRef.setBuildingId('0')
                    this.title = '新增'
                    this.addParam = {
                        // 评论内容
                        comContent: '',
                        // 咨询师id
                        couId: '',
                        // 楼盘id
                        buildId: '',
                        // 评论类型
                        coucType: ''
                    }
                } else if (param === 'modify') {
                    console.log('Initialization evaluation’s content, which modifies evaluation')

                    var en = []
                    en.push(this.url + addParam.imgPathList)
                    this.picList = en
                    this.title = '修改';
                    // this.$refs.sn.setData(addParam.comContent)
                    this.$refs.couTypeRef.setComId(addParam.coucType)
                    this.$refs.couRef.setCouId(addParam.couId);
                    this.$refs.buildRef.setBuildingId(addParam.buildId)
                    Object.assign(this.addParam, addParam)
                }
            },

            fatherCou(data) {
                this.addParam.couId = '';
                if (null !== data) {
                    this.addParam.couId = data
                }
            },
            fatherCouType(data) {
                this.addParam.coucType = ''
                if (null !== data) {
                    this.addParam.coucType = data
                }
            },

            fatherBuild(data) {
                this.addParam.buildId = ''
                if (null !== data) {
                    this.addParam.buildId = data.buildId
                }
            },

            //预览图
            picChange() {

                var files = $("#picImg")[0].files; //获取file对象
                for (let i = 0; i < files.length; i++) {
                    var file = files[i]
                    this.fileAdd(file, i)
                }
            },
            fileAdd(file, i) {
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
                    that.picFileList.push(file)
                    that.picList.push(dataUrl)

                }
            },
            fileDel(index) {
                this.picList.splice(index);
                this.picFileList.splice(index)
            },
            certainAction() {
                this.isDisable = true
                setTimeout(() => {
                    this.isDisable = false
                }, 1000)
                // this.addParam.comContent = this.$refs.sn.getData()
                const fd = new FormData();

                fd.append("param", JSON.stringify(this.addParam));

                for (let i = 0; i < this.picFileList.length; i++) {
                    fd.append("picImg", this.picFileList[i]);
                }
                switch (this.title) {
                    case '新增':
                        var url = this.url + '/counselorCommentBean/addCom'
                        break;
                    case '修改':
                        var url = this.url + '/counselorCommentBean/updateComById'
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
                $("#commentDialog").modal("hide")
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

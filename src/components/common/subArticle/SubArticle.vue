<!-- add and modify position -->
<template>
    <div class="modal-content">
        <div class="modal-header">
            <h4 id="myModalLabel" class="modal-title">{{title}}文章</h4>
        </div>
        <div class="modal-body  pos_r">
            <div class="tab-pane fade in active martop" id="basic">
                <form action="" class="clearfix">
                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">文章标题</label><span class="sign-left">:</span>
                        <div class="col-md-8">
                            <input type="text" class="form-control" v-model="addParam.title"/>
                        </div>
                    </div>
                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">文章类型</label><span class="sign-left">:</span>
                        <div class="col-md-8">
                            <select class="form-control" v-model="addParam.articleType">
                                <option value=0>--未选择--</option>
                                <option value=1>公司简介</option>
                                <option value=2>发展历程</option>
                                <option value=3>公司荣誉</option>
                                <option value=4>企业团队</option>
                                <option value=5>企业文化</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">时间</label><span class="sign-left">:</span>
                        <div class="col-md-8">
                            <datePicker v-model="addParam.aboutTime" type="date" value-type="format"
                            style="width: 97%"></datePicker>
                        </div>
                    </div>
                    <div class="col-md-6 form-group clearfix" style="width: 100%">

                    </div>
                    <div class="col-md-12 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline" style="padding:0;line-height:34px;">文章</label><span
                        class="sign-left">:</span>
                    </div>
                    <div class="col-md-12 form-group clearfix">
                        <SummerNote ref="sn"></SummerNote>
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
    import datePicker from 'vue2-datepicker'
    import SummerNote from '../subArticle/SummerNote.vue'
    var that = null
    export default {
        components: {
            datePicker,
            SummerNote
        },
        data() {
            return {
                addParam: {
                    articleType:'',
                    title:'',
                    articleContent:'',
                    aboutTime:''
                },
                title: '',
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
            initRef(param, addParam) {
                $('#subDialog').modal({backdrop: 'static', keyboard: false});
                if (param === 'add') {
                    this.title = '新增'
                    this.addParam = {
                        articleType:'',
                        title:'',
                        articleContent:'',
                        aboutTime:''
                    }
                } else if (param === 'modify') {
                    console.log('Initialization evaluation’s content, which modifies evaluation')
                    this.title = '修改';
                    this.$refs.sn.setData(addParam.articleContent)
                    Object.assign(this.addParam, addParam)
                }
            },


            certainAction() {
                this.addParam.articleContent = this.$refs.sn.getData()
                const fd = new FormData();
                // 效果图
                // const horseTypeImg = $("#horseTypeImg")[0].files;
                // for (let i = 0; i < this.imgFileList.length; i++) {
                //     fd.append("img", this.imgFileList[i]);
                // }
                fd.append("param", JSON.stringify(this.addParam));


                switch (this.title) {
                    case '新增':
                        var url = this.url + '/articleBean/insertArticle'
                        break;
                    case '修改':
                        var url = this.url + '/articleBean/updateArticle'
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
                $("#subDialog").modal("hide")
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
            // imgChange() {
            //
            //     var files = $("#img")[0].files; //获取file对象
            //     for (let i = 0; i < files.length; i++) {
            //         var file = files[i]
            //         this.fileAdd(file)
            //     }
            // },
            // fileAdd(file) {
            //     let type = file.type;//文件的类型，判断是否是图片
            //     let size = file.size;//文件的大小，判断图片的大小
            //     if (this.imgData.accept.indexOf(type) === -1) {
            //         alert('请选择我们支持的图片格式！');
            //         return false;
            //     }
            //     if (size > 3145728) {
            //         alert('请选择3M以内的图片！');
            //         return false;
            //     }
            //     let that = this;
            //     // 总大小
            //     this.size = this.size + file.size;
            //     let reader = new FileReader();
            //     // 调用reader.readAsDataURL()方法，把图片转成base64
            //     reader.readAsDataURL(file);
            //
            //     // 监听reader对象的onload事件，当图片加载完成时，把base64编码賦值给预览图片
            //     reader.onload = function () {
            //         var dataUrl = reader.result;
            //
            //         file.src = this.result;
            //
            //         that.imgFileList.push(file)
            //         that.imgList.push(dataUrl)
            //
            //     }
            // },
            // fileDel(index) {
            //     this.imgList.splice(index, 1);
            //     this.imgFileList.splice(index, 1)
            // }
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

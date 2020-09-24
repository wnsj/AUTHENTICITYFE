<!-- add and modify position -->
<template>
    <div class="modal-content">
        <div class="modal-header">
            <h4 id="myModalLabel" class="modal-title">{{title}}咨询师</h4>
        </div>
        <div class="modal-body  pos_r">
            <div class="tab-pane fade in active martop" id="basic">
                <div class="dialogInutBox clearfix">
                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">咨询师</label><span class="sign-left">:</span>
                        <div class="col-md-8">
                            <input type="text" class="form-control" v-model="addCou.couName"/>
                        </div>
                    </div>
                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">毕业院校</label><span class="sign-left">:</span>
                        <div class="col-md-8">
                            <input type="text" class="form-control" v-model="addCou.graduate"/>
                        </div>
                    </div>
                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">岗位名字</label><span class="sign-left">:</span>
                        <div class="col-md-8">
							<input type="text" class="form-control" placeholder="xxx专属顾问" v-model="addCou.charaName"/>
                            <!-- <cou-chara @couCharaChange="fatherCouChara" ref="couCharaRef"></cou-chara> -->
                        </div>
                    </div>
                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">联系方式</label><span class="sign-left">:</span>
                        <div class="col-md-8">
                            <input type="text" class="form-control" v-model="addCou.tel"/>
                        </div>
                    </div>

<!--                    <div class="col-md-6 form-group clearfix">-->
<!--                        <label class="col-md-3 control-label text-right nopad end-aline"-->
<!--                               style="padding:0;line-height:34px;">标签</label><span class="sign-left">:</span>-->
<!--                        <div class="col-md-8">-->
<!--                            <cou-label @couClChange="fatherCouLabel" ref="couLabel"></cou-label>-->
<!--                        </div>-->
<!--                    </div>-->

                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">照片</label><span
                        class="sign-left">:</span>
                        <div class="col-md-8">
                            <input type="file" id="picture" @change="pictureChange" accept="image/*" />
							<p class="redtips">*注意：宽82px*高82px</p>
                            <div id="pictureOutDiv">
                                <div v-for="(item,index) of picture" :key="index"
                                     v-show="picture.length!==0">
                                    <div @click="fileDel(index)">x</div>
                                    <img :src="item" style="width: 100%">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 form-group clearfix" style="width: 100%">

                    </div>
                    <div class="col-md-12 form-group clearfix">
                        <div class="col-md-6  clearfix" style="padding: 0;">
                            <label class="col-md-3 control-label text-right nopad end-aline" style="padding:0;line-height:34px;">自我介绍</label><span class="sign-left">:</span>
                         </div>
                        <div class="col-md-12">
                            <textarea class="form-control wdType03" v-model="addCou.introduce"  placeholder="自我介绍"></textarea>
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
    import couChara from '../subCou/CouChara.vue'
    import couLabel from '../subCou/CouLabel.vue'

    export default {
        components: {
            couChara,
            couLabel
        },
        data() {
            return {
                addCou: {
                    // 咨询师
                    couName: '',
                    //毕业院校
                    graduate: '',
                    // 特长
                    ccId: '',
					// 特长名
					charaName:'',
                    // 联系方式
                    tel: '',
                    // 标签
                    labelList: [],
                    // 介绍
                    introduce: ''
                },
                picture: [],
                pictureFile: [],
                title: '',
                size: 0,
                isDisable:false,
                imgData: {
                    accept: 'image/gif, image/jpeg, image/png, image/jpg',
                }
            };
        },
        methods: {
            // Initialization projcet’s content
            fatherCouChara(data) {
                this.addCou.ccId = '';
                if (null !== data) {
                    this.addCou.ccId = data
                }
            },
            fatherCouLabel(data) {
                this.addCou.labelList = [];
                if (null !== data) {
                    this.addCou.labelList = data
                }
            },
            initData(param, addCou) {
                this.picture = []
                this.pictureFile = []

                $("#picture").val("");

                $('#couDialog').modal({backdrop: 'static', keyboard: false});
                if (param === 'add') {
                    // this.$refs.couCharaRef.setCcId('0');
                    // this.$refs.couLabel.setClId([]);
                    this.title = '新增'
                    this.addCou = {
                        // 咨询师
                        couName: '',
                        //毕业院校
                        graduate: '',
                        // 特长
                        ccId: '',
						// 特长名
						charaName:'',
                        // 联系方式
                        tel: '',
                        // 标签
                        labelList: [],
                        // 介绍
                        introduce: ''
                    }
                } else if (param === 'modify') {
                    console.log('Initialization evaluation’s content, which modifies evaluation')

                    if (null != addCou && null != addCou.picturePath) {
                        var en = []
                        en.push(this.url + addCou.picturePath)
                        this.picture = en
                    }
                    this.title = '修改'
                    // this.$refs.couCharaRef.setCcId(addCou.ccId);
                    // this.$refs.couLabel.setClId(addCou.labelList);
                    Object.assign(this.addCou, addCou)
                }
            },


            certainAction() {
               if (this.isBlank(this.addCou.couName)) {
                   alert('咨询师名字必填')
                   return
               }

               // if (this.isBlank(this.addCou.graduate)) {
               //     alert('毕业院校必填')
               //     return
               // }

                if (!this.isBlank(this.addCou.tel)) {
                    if (!(/^1[3456789]\d{9}$/).test(this.addCou.tel)) {
                        alert('请输入正确的联系方式')
                        return;
                    }
                } else {
                    alert('请输入联系方式')
                    return;
                }

                if (this.isBlank(this.addCou.introduce)) {
                    alert('自我介绍必填')
                    return
                }

                this.isDisable = true
                setTimeout(() => {
                    this.isDisable = false
                }, 1000)

                const fd = new FormData();
                // 效果图
                // const horseTypeImg = $("#horseTypeImg")[0].files;
                for (let i = 0; i < this.pictureFile.length; i++) {
                    fd.append("picture", this.pictureFile[i]);
                }
                fd.append("param", JSON.stringify(this.addCou));


                switch (this.title) {
                    case '新增':
                        var url = this.url + '/counselorBean/insertCou'
                        break;
                    case '修改':
                        var url = this.url + '/counselorBean/patchCou'
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
                    console.log('信息提交失败')
                });
            },
            closeCurrentPage() {
                $("#couDialog").modal("hide")
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
                    this.picture = []
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

                    that.pictureFile.push(file)
                    that.picture.push(dataUrl)

                }
            },
            fileDel(index) {
                this.picture.splice(index, 1);
                this.pictureFile.splice(index, 1)
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

<!-- add and modify position -->
<template>
    <div class="modal-content">
        <div class="modal-header">
            <h4 id="myModalLabel" class="modal-title">{{title}}户型分析</h4>
        </div>
        <div class="modal-body  pos_r">
            <div class="tab-pane fade in active martop" id="basic">
                <div class="dialogInutBox clearfix">
                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">楼盘名称</label><span class="sign-left">:</span>
                        <div class="col-md-8">
                            <build ref="buildRef" @buildChange="fatherBuildReceive"></build>
                        </div>
                    </div>
                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">出售状态</label><span class="sign-left">:</span>
                        <div class="col-md-8">
                            <is-sale @isSaleChange='fatherIsSaleReceive' ref="sale"></is-sale>
                        </div>
                    </div>
                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">户型</label><span class="sign-left">:</span>
                        <div class="col-md-8">
                            <bht @bhtChange='fatherBhtReceive' ref="bht"></bht>
                        </div>
                    </div>
                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">类型</label><span class="sign-left">:</span>
                        <div class="col-md-8">
                            <input type="text" class="form-control" v-model="addParam.caName"  placeholder="例:平房"/>
                        </div>
                    </div>

                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">楼层</label><span class="sign-left">:</span>
                        <div class="col-md-8">
                            <input type="text" class="form-control" v-model="addParam.floor" placeholder="例: 30层"/>
                        </div>
                    </div>

                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">户型标签</label><span class="sign-left">:</span>
                        <div class="col-md-8">
                            <bad ref="bad" @balChange="fatherBalReceive"></bad>
                        </div>
                    </div>
                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">朝向</label><span class="sign-left">:</span>
                        <div class="col-md-8">
                            <input type="text" class="form-control" v-model="addParam.drection"/>
                        </div>
                    </div>
                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">建筑面积</label><span class="sign-left">:</span>
                        <div class="col-md-8">
                            <input type="text" class="form-control" v-model="addParam.buildArea" placeholder="例: 30"/>
                        </div>
                    </div>
                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">总价</label><span class="sign-left">:</span>
                        <div class="col-md-8">
                            <input type="text" class="form-control" v-model="addParam.totlePrice" placeholder="例: 30"/>
                        </div>
                    </div>
                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">首付</label><span class="sign-left">:</span>
                        <div class="col-md-8">
                            <input type="text" class="form-control" v-model="addParam.downPayment" placeholder="例: 30"/>
                        </div>
                    </div>
                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">居室</label><span class="sign-left">:</span>
                        <div class="col-md-8">
                            <input type="text" class="form-control" v-model="addParam.house" placeholder="例: 两居二室"/>
                        </div>
                    </div>
                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">类型图</label><span
                        class="sign-left">:</span>
                        <div class="col-md-8">
                            <input type="file" id="horseTypeImg" @change="horseTypeImgChange" accept="image/*"
                            />
                            <div id="horseTypeImgOutDiv">
                                <div v-for="(item,index) of horseTypeImgList" :key="index"
                                     v-show="horseTypeImgList.length!==0">
                                    <div @click="fileDel(index)">x</div>
                                    <img :src="item" style="width: 100%">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 form-group clearfix" style="width: 100%">

                    </div>
                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">点评内容</label><span
                        class="sign-left">:</span>
                        <div class="col-md-8">
                            <textarea style="height: 300px;width: 400px;" v-model="addParam.content"
                                      placeholder="点评内容"></textarea>
                        </div>
                    </div>

                </div>
                <div class="dialogBtnBox form-group clearfix">
                    <div class="col-md-12">
                        <button type="button" class="btn btn-warning pull-right m_r_10" style="margin-right:1.5%;"
                                data-toggle="modal"
                                v-on:click="closeCurrentPage()">返回
                        </button>
                        <button type="button"  :disabled="this.isDisable" class="btn btn-primary pull-right m_r_10" style="margin-right:1.5%;"
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
    import build from '../common/Building.vue'
    import bht from '../common/BuildHorseType.vue'
    import isSale from '../common/IsSale.vue'
    import ht from '../common/HorseType.vue'
    import bad from '../common/BuildingAnalysisLabel.vue'

    var that = null
    export default {
        components: {
            datePicker,
            bht,
            isSale,
            build,
            ht,
            bad
        },
        data() {
            return {
                addParam: {
                    // 楼盘名称
                    htName: '',
                    buildId: '',
                    // 户型
                    bhtId: '',
                    // 户型名字
                    imgName: '',
                    // 销售情况
                    isSale: '',
                    // 标签
                    balIdList: [],
                    // 类型
                    caName: '',
                    // 居室
                    house: '',
                    // 方向
                    drection: '',
                    buildArea: '',
                    totlePrice: '',
                    downPayment: '',
                    content: '',
                    floor: ''
                },
                title: '',
                horseTypeImgList: [],
                horseTypeImgFileList: [],
                size: 0,
                isDisable:false,
                imgData: {
                    accept: 'image/gif, image/jpeg, image/png, image/jpg',
                }
            };
        },
        methods: {
            // Initialization projcet’s content
            initData(param, addParam) {
                this.horseTypeImgList = []
                this.horseTypeImgFileList = []
                $("#horseTypeImg").val("");



                $('#balDialog').modal({backdrop: 'static', keyboard: false});
                if (param === 'add') {
                    this.$refs.buildRef.setBuildId('0')
                    this.$refs.sale.setIsSale(0)
                    this.$refs.bht.setBhtId('0')
                    this.$refs.bad.setBalIdList([])
                    this.title = '新增'
                    this.addParam = {
                        // 楼盘
                        buildId: '',
                        // 户型
                        bhtId: '',
                        // 销售情况
                        isSale: '',
                        // 标签
                        balIdList: [],
                        // 类型
                        caName: '',
                        // 方向
                        drection: '',
                        buildArea: '',
                        totlePrice: '',
                        downPayment: '',
                        content: '',
                        floor: ''
                    }
                } else if (param === 'modify') {
                    console.log('Initialization evaluation’s content, which modifies evaluation')
                    this.title = '修改'
                    this.$refs.buildRef.setBuildId(addParam.buildId)
                    this.$refs.sale.setIsSale(addParam.isSale)
                    this.$refs.bht.setBhtId(addParam.bhtId)
                    this.$refs.bad.setBalIdList(addParam.balIdList)
                    Object.assign(this.addParam, addParam)
                }
            },


            certainAction() {
				if (this.isBlank(this.addParam.buildId)) {
				    alert('楼盘不能为空')
				    return
				}
				if (this.isBlank(this.addParam.bhtId)) {
				    alert('户型不能为空')
				    return
				}
				if (this.isBlank(this.addParam.caName)) {
				    alert('类型不能为空')
				    return
				}
				if (this.isBlank(this.addParam.drection)) {
				    alert('朝向不能为空')
				    return
				}
				if (this.isBlank(this.addParam.downPayment)) {
				    alert('首付不能为空')
				    return
				}
				if (this.isBlank(this.addParam.buildArea)) {
				    alert('建筑面积不能为空')
				    return
				}

                this.isDisable = true
                setTimeout(() => {
                    this.isDisable = false
                }, 1000)
                if (this.isBlank(this.addParam.content)) {
                    alert('请添加分析内容')
                    return
                }
                const fd = new FormData();
                // 效果图
                // const horseTypeImg = $("#horseTypeImg")[0].files;
                for (let i = 0; i < this.horseTypeImgFileList.length; i++) {
                    fd.append("horseTypeImg", this.horseTypeImgFileList[i]);
                }
                fd.append("param", JSON.stringify(this.addParam));


                switch (this.title) {
                    case '新增':
                        var url = this.url + '/buildingAnalysisBean/insertByBid'
                        break;
                    case '修改':
                        var url = this.url + '/buildingAnalysisBean/patchBuildAnalysisById'
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
                $("#balDialog").modal("hide")
            },

            formatFileSize: function (fileSize, idx) {
                var units = ["B", "KB", "MB", "GB"];
                idx = idx || 0;
                if (fileSize < 1024 || idx === units.length - 1) {
                    return fileSize.toFixed(1) + units[idx];
                }
                return this.formatFileSize(fileSize / 1024, ++idx);
            },

            fatherBhtReceive(data) {
                this.addParam.bhtId = ''
                this.addParam.bhtId = data.bhtId

                this.addParam.imgName = ''
                this.addParam.imgName = data.bhtName
            },
            fatherIsSaleReceive(data) {
                this.addParam.isSale = ''
                this.addParam.isSale = data
            },
            fatherBuildReceive(data) {
                this.addParam.buildId = ''
                this.addParam.buildId = data.buildId
                this.addParam.htName = ''
                this.addParam.htName = data.htName
            },
            fatherBalReceive(data) {
                this.addParam.balIdList = []
                this.addParam.balIdList = data
            },
            fatherHtReceive(data) {
                this.addParam.htId = ''
                this.addParam.htId = data
            },
            //预览图
            horseTypeImgChange() {

                var files = $("#horseTypeImg")[0].files; //获取file对象
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

                    that.horseTypeImgFileList.push(file)
                    that.horseTypeImgList.push(dataUrl)

                }
            },
            fileDel(index) {
                this.horseTypeImgList.splice(index, 1);
                this.horseTypeImgFileList.splice(index, 1)
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

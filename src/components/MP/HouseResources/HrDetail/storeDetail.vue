<!-- add and modify position -->
<template>
    <div class="modal-content">
        <div class="modal-header">
            <h4 id="myModalLabel" class="modal-title">{{title}}商铺</h4>
        </div>
        <div class="modal-body  pos_r">
            <div class="tab-pane fade in active martop" id="basic">
                <div class="dialogInutBox clearfix">
                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">业态</label><span class="sign-left">:</span>
                        <div class="col-md-8">
                            <Commercial @comChange="comRe" ref="comRef"></Commercial>
                        </div>
                    </div>
                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">层高</label><span class="sign-left">:</span>
                        <div class="col-md-8">
                            <input type="text" class="form-control" v-model="storeParam.highLevel"/>
                        </div>
                    </div>
                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">餐饮</label><span class="sign-left">:</span>
                        <div class="col-md-8">
                            <select class="form-control" v-model="storeParam.isEat">
                                <option value="2">--是--</option>
                                <option value="3">--否--</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">空置</label><span class="sign-left">:</span>
                        <div class="col-md-8">
                            <select class="form-control" v-model="storeParam.isUse">
                                <option value="2">--是--</option>
                                <option value="3">--否--</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">最短租期</label><span class="sign-left">:</span>
                        <div class="col-md-8">
                            <input class="form-control" v-model="storeParam.minLeaseTerm"/>
                        </div>
                    </div>

                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">面积信息</label><span class="sign-left">:</span>
                        <div class="col-md-8">
                            <input class="form-control" v-model="storeParam.area"/>
                        </div>
                    </div>
                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">物业信息</label><span class="sign-left">:</span>
                        <div class="col-md-8">
                            <Property ref="proRef" @proChange="proRe"></Property>
                        </div>
                    </div>
                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">地铁信息</label><span class="sign-left">:</span>
                        <div class="col-md-8">
                            <input type="text" class="form-control" v-model="storeParam.stationInfo"/>
                        </div>
                    </div>
                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">公交信息</label><span class="sign-left">:</span>
                        <div class="col-md-8">
                            <input type="text" class="form-control" v-model="storeParam.transitInfo"/>
                        </div>
                    </div>
                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">周边小区</label><span class="sign-left">:</span>
                        <div class="col-md-8">
                            <input type="text" class="form-control" v-model="storeParam.surroundingCommunity"/>
                        </div>
                    </div>
                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">银行信息</label><span class="sign-left">:</span>
                        <div class="col-md-8">
                            <input type="text" class="form-control" v-model="storeParam.bankInfo"/>
                        </div>
                    </div>
                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">学校信息</label><span class="sign-left">:</span>
                        <div class="col-md-8">
                            <input type="text" class="form-control" v-model="storeParam.schoolInfo"/>
                        </div>
                    </div>
                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">医院信息</label><span class="sign-left">:</span>
                        <div class="col-md-8">
                            <input type="text" class="form-control" v-model="storeParam.hospitalInfo"/>
                        </div>
                    </div>

                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">商场信息</label><span class="sign-left">:</span>
                        <div class="col-md-8">
                            <input type="text" class="form-control" v-model="storeParam.storeInfo"/>
                        </div>
                    </div>


                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">图片</label><span
                        class="sign-left">:</span>
                        <div class="col-md-8">
                            <input type="file" id="storePicture" @change="buildRealImgChange" accept="image/*"
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
                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">头图</label><span class="sign-left">:</span>
                        <div class="col-md-8">
                            <input type="file" id="storeImg" @change="headImgChange" accept="image/*"/>
                            <p class="redtips">*注意：宽378px*高228px</p>

                            <div id="headImgOutDiv">
                                <div v-for="(item,index) of headImgList" :key="index" v-show="headImgList.length!==0">
                                    <div @click="fileDel(index,5,item)">x</div>
                                    <img :src="item" style="width: 100%">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">视频</label><span
                        class="sign-left">:</span>
                        <div class="col-md-8">
                            <input type="file" id="storeVideo" @change="videoChange"
                            />
                            <div id="playAvOutDiv" v-if="playAvOutDivFlag">
                                <!--                                <PlayAV ref="playRef"></PlayAV>-->
                                <label class="col-md-3 control-label text-right nopad end-aline"
                                       style="padding:0;line-height:34px;">{{this.videoName}}</label>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-12 form-group clearfix">
                        <div class="col-md-6  clearfix" style="padding: 0;">
                            <label class="col-md-3 control-label text-right nopad end-aline"
                                   style="padding:0;line-height:34px;">网点介绍</label><span class="sign-left">:</span>
                        </div>
                        <div class="col-md-12">
                            <textarea class="form-control wdType03" v-model="storeParam.produce"
                                      placeholder="网点介绍"></textarea>
                        </div>
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
    var that = null
    import Commercial from "../../../common/subCommercial/subCommercial";
    import Property from "../../../common/subProperty/subProperty";
    import Charas from "../../../common/Charas";

    export default {
        components: {
            Commercial,
            Property,
            Charas
        },
        data() {
            return {
                storeParam: {
                    // 共享房源详情ID
                    storeId: '',

                    //网点介绍
                    produce: '',

                    //特点
                    chaList: '',

                    // 短标签
                    label: '',

                    // 层高
                    highLevel: '',

                    // 是否 可餐饮
                    isEat: '',

                    //是否 空置中
                    isUse: '',

                    // 最短租期
                    minLeaseTerm: '',

                    //业态
                    suitable: [],

                    // 商铺介绍
                    storeProduce: '',

                    // 面积信息
                    area: '',

                    // 价格优势
                    priceAdvantage: '',

                    // 物业信息
                    properInfo: [],

                    // 地铁信息
                    stationInfo: '',

                    // 公交信息
                    transitInfo: '',

                    // 周边小区
                    surroundingCommunity: '',

                    //写字楼信息
                    buildingInfo: '',

                    //银行信息
                    bankInfo: '',

                    // 学校信息
                    schoolInfo: '',

                    // 医院信息
                    hospitalInfo: '',

                    // 商场信息
                    storeInfo: '',

                    // 房源id
                    roomId: '',

                    picList:[]
                },
                picture: [],
                pictureFile: [],
                title: '',
                size: 0,
                playAvOutDivFlag: true,
                buildRealImgList:
                    [],
                buildRealImgFileList:
                    [],
                headImgList:
                    [],
                headImgFileList:
                    [],
                isDisable: false,
                videoName: '',
                imgData: {
                    accept: 'image/gif, image/jpeg, image/png, image/jpg',
                },
                reStore:{

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
            comRe(data) {
                this.storeParam.suitable = []
                if (null != data) {
                    this.storeParam.suitable = data
                }
            },
            fatherCouLabel(data) {
                this.addCou.labelList = [];
                if (null !== data) {
                    this.addCou.labelList = data
                }
            },

            headImgChange() {

                var files = $("#storeImg")[0].files; //获取file对象
                if (null != files) {
                    this.headImgList = []
                }
                for (let i = 0; i < files.length; i++) {
                    var file = files[i]
                    this.fileAdd(file, i, 5)
                }
            },
            buildRealImgChange() {

                var files = $("#storePicture")[0].files; //获取file对象
                for (let i = 0; i < files.length; i++) {
                    var file = files[i]
                    this.fileAdd(file, i, 3)
                }
            },
            videoChange() {
                var files = $("#storeVideo")[0].files;
                if (null != files) {
                    this.videoName = ''
                }
            },

            fileAdd(file, i, pictureType) {
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
                    } else if (pictureType === 5) {
                        that.headImgFileList.push(file)
                        that.headImgList.push(dataUrl)
                    }

                    // if ($("#matchingRealImgInnDiv_" + i).length <= 0) $("#matchingRealImgOutDiv").append(
                    //     "<div id='matchingRealImgInnDiv_" + i + "' >" +
                    //     "<img id='matchingRealImg_" + i + "' src='#' style='width: 100%' />" +
                    //     "</div>"
                    // );
                    // $("#matchingRealImg_" + i).attr("src", dataUrl);


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
                if (this.title == '新增') return;
                if (this.isBlank(item)) return;
                var index = item.lastIndexOf('=');
                var str = item.substring(index + 1, item.length)
                if (this.isBlank(str)) return;
                var id = '';
                id = parseInt(str)
                this.$ajax({
                    method: 'POST',
                    url: this.url + '/buildingBean/deleteImgFile',
                    headers: {
                        'Content-Type': this.contentType,
                        'Access-Token': this.accessToken
                    },
                    data: {imgId: id},
                    dataType: 'json',
                }).then((response) => {
                }).catch((error) => {
                    console.log('楼盘信息提交失败')
                });
            },
            formatFileSize: function (fileSize, idx) {
                var units = ["B", "KB", "MB", "GB"];
                idx = idx || 0;
                if (fileSize < 1024 || idx === units.length - 1) {
                    return fileSize.toFixed(1) + units[idx];
                }
                return this.formatFileSize(fileSize / 1024, ++idx);
            },
            initData(addCou) {

                $('#storeDialog').modal({backdrop: 'static', keyboard: false});
                this.storeParam = {
                    // 共享房源详情ID
                    storeId: '',

                    //网点介绍
                    produce: '',

                    //特点
                    chaList: '',

                    // 短标签
                    label: '',

                    // 层高
                    highLevel: '',

                    // 是否 可餐饮
                    isEat: '',

                    //是否 空置中
                    isUse: '',

                    // 最短租期
                    minLeaseTerm: '',

                    //业态
                    suitable: [],

                    // 商铺介绍
                    storeProduce: '',

                    // 面积信息
                    area: '',

                    // 价格优势
                    priceAdvantage: '',

                    // 物业信息
                    properInfo: [],

                    // 地铁信息
                    stationInfo: '',

                    // 公交信息
                    transitInfo: '',

                    // 周边小区
                    surroundingCommunity: '',

                    //写字楼信息
                    buildingInfo: '',

                    //银行信息
                    bankInfo: '',

                    // 学校信息
                    schoolInfo: '',

                    // 医院信息
                    hospitalInfo: '',

                    // 商场信息
                    storeInfo: '',

                    // 房源id
                    roomId: ''
                }
                this.picture = []
                this.pictureFile = []
                $("#picture").val("");
                this.$refs.comRef.setCharaList([])
                this.$refs.proRef.setIdList([])

                this.getStoreByRoomId(addCou.id)

            },
            getStoreByRoomId(item) {
                var url = this.url + '/storeRoomBean/getStoreByRoomId'
                this.$ajax({
                    method: 'POST',
                    url: url,
                    headers: {
                        'Content-Type': this.contentType,
                        'Access-Token': this.accessToken
                    },
                    data: {
                        roomId: item
                    },
                    dataType: 'json',
                }).then((response) => {
                    var res = response.data
                    if (res.retCode === '0000') {
                        if (res.retData) {
                            this.storeParam = res.retData
                            this.title = '修改'
                            if (this.storeParam.picList) {
                                var buildRea = []
                                for (var i = 0; i < this.storeParam.picList.length; i++) {
                                    buildRea.push(this.url + this.storeParam.picList[i])
                                }
                                this.buildRealImgList = buildRea
                            }
                            // if (null != addParam && null != addParam.headPath) {
                            //     var img = []
                            //     img.push(this.url + addParam.headPath)
                            //     this.headImgList = img
                            // }
                            this.$refs.comRef.setCharaList(this.storeParam.suitable)
                            this.$refs.proRef.setIdList(this.storeParam.properInfo)

                        } else {
                            this.storeParam.roomId = item
                            this.title = '新增'
                        }
                    } else {
                        alert(res.retMsg)
                    }
                }).catch((error) => {
                    console.log('数据请求失败处理')
                });
            },
            certainAction() {
                this.loading = true
                this.btnName = '提交中...'

                const fd = new FormData();

                for (let i = 0; i < this.buildRealImgFileList.length; i++) {
                    fd.append("buildRealImg", this.buildRealImgFileList[i]);
                }


                // 头图
                for (let i = 0; i < this.headImgFileList.length; i++) {
                    fd.append("headImg", this.headImgFileList[0]);
                }

                // 视频
                var videoFile = $("#storeVideo")[0].files[0]
                fd.append("video", videoFile);
                if (null != videoFile) {
                    var Mb = videoFile.size / 1024 / 1024
                    console.log("文件大小" + Mb);
                    if (Mb > 100) {
                        alert("您的视频超出限制，请选择100Mb内视频")
                        return
                    }
                }
                fd.append("addParam", JSON.stringify(this.storeParam));
                switch (this.title) {
                    case '新增':
                        var url = this.url + '/storeRoomBean/addStoreRoom'
                        break;
                    case '修改':
                        var url = this.url + '/storeRoomBean/updateStoreRoom'
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
                        alert("提交成功！")
                        this.$emit('certainAction')
                    } else {
                        alert(res.retMsg)
                        this.$emit('certainAction')
                    }
                }).catch((error) => {
                    console.log(error);
                });
            },

            closeCurrentPage() {
                $("#storeDialog").modal("hide")
            },
            proRe(data) {
                this.storeParam.properInfo = []
                if (null != data) {
                    this.storeParam.properInfo = data
                }
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

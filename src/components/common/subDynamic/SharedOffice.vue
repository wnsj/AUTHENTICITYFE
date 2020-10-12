<!-- add and modify position -->
<template>
    <div class="modal-content">
        <div class="modal-header">
            <h4 id="myModalLabel" class="modal-title">{{title}}共享工位</h4>
        </div>
        <div class="modal-body  pos_r">
            <div class="tab-pane fade in active martop" id="basic">
                <div class="dialogInutBox clearfix">
                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:30px;">工位类型</label><span class="sign-left">:</span>
                        <div class="col-md-8">
                            <!--                           <select name="" id="" class="form-control " v-model="addParam.officeType" >-->
                            <!--                                <option value="3">独立办公室</option>-->
                            <!--                                <option value="2">开放工位</option>-->
                            <!--                            </select>-->

                            <BuildType @btChange="btRe" ref="btRef"></BuildType>
                        </div>
                    </div>
                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:30px;">匹配楼盘</label><span class="sign-left">:</span>
                        <div class="col-md-8">
                            <Building @buildChange='buildReceive' ref="buildRef"></Building>
                        </div>
                    </div>
                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:30px;">面积</label><span class="sign-left">:</span>
                        <div class="col-md-7" style="padding-right:0">
                            <input type="text" class="form-control " v-model="addParam.area" placeholder="必填"/>
                        </div>
                        <div style="padding:0;line-height:30px;">M²</div>
                    </div>


                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:30px;">工位个数</label><span class="sign-left">:</span>
                        <div class="col-md-8 form-group clearfix">
                            <input type="text" class="form-control " v-model="addParam.stationNum" placeholder="必填"/>
                        </div>
                    </div>

                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:30px;">剩余工位</label><span class="sign-left">:</span>
                        <div class="col-md-8 form-group clearfix">
                            <input type="text" class="form-control " v-model="addParam.surpluseNum" placeholder="必填"/>
                        </div>

                    </div>

                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:30px;">原价</label><span class="sign-left">:</span>
                        <div class="col-md-7 form-group clearfix">
                            <input type="text" class="form-control " v-model="addParam.sorcePrice" placeholder="必填"/>
                        </div>
                         <div style="padding:0;line-height:30px;">元/月</div>
                    </div>

                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:30px;">现价</label><span class="sign-left">:</span>
                        <div class="col-md-7 form-group clearfix">
                            <input type="text" class="form-control " v-model="addParam.nowPrice" placeholder="必填"/>
                        </div>
                         <div style="padding:0;line-height:30px;">元/月</div>
                    </div>
                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:30px;">房型</label><span class="sign-left">:</span>
                        <div class="col-md-8 form-group clearfix">
                            <input type="text" class="form-control " v-model="addParam.houseType" placeholder="必填"/>
                        </div>
                    </div>
                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:30px;">免租时间</label><span class="sign-left">:</span>
                        <div class="col-md-8 form-group clearfix">
                            <input type="text" class="form-control " v-model="addParam.freeRentTime" placeholder="必填"/>
                        </div>
                    </div>
                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:30px;">看房时间</label><span class="sign-left">:</span>
                        <div class="col-md-8 form-group clearfix">
<!--                            <input type="text" class="form-control " v-model="addParam.watchHouseTime" placeholder="必填"/>-->
                            <select class="form-control" v-model="addParam.watchHouseTime">
                                <option value="">--未选择--</option>
                                <option v-for="(item,index) in watchHouse" :key="index" v-bind:value="item.watchName">{{item.watchName}}</option>
                            </select>
                        </div>
                    </div>

                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:30px;">是否靠墙</label><span class="sign-left">:</span>
                        <div class="col-md-8">
                            <select name="" class="form-control" v-model="addParam.isWall">
                                <option value=2>是</option>
                                <option value=3>否</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:30px;">是否带窗</label><span class="sign-left">:</span>
                        <div class="col-md-8">
                            <select name="" class="form-control " v-model="addParam.isWindow">
                                <option value=2>是</option>
                                <option value=3>否</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:30px;">支付方式</label><span class="sign-left">:</span>
                        <div class="col-md-8 form-group clearfix">
                            <input type="text" class="form-control " v-model="addParam.payType" placeholder="必填"/>
                        </div>
                    </div>
                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:30px;">是否可注册</label><span class="sign-left">:</span>
                        <div class="col-md-8">
                            <select name="" class="form-control " v-model="addParam.isRegister">
                                <option value=2>是</option>
                                <option value=3>否</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-md-12 form-group clearfix">
                        <label class="col-md-2 control-label text-right nopad end-aline"
                               style="padding-left:0;line-height:30px; width:15.5%">头图：</label>
                        <div class="col-md-9" style="padding:0">
                            <input type="file" id="headImg" @change="headImgChange" accept="image/*"/>
                            <p class="redtips">*注意：宽378px*高228px</p>

                            <div id="headImgOutDiv">
                                <div v-for="(item,index) of headImgList" :key="index" v-show="headImgList.length!==0">
                                    <!-- <div @click="fileDel(index,5,item)">x</div> -->
                                    <img :src="item" style="width: 100%">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-12 form-group clearfix">
                        <label class="col-md-2 control-label text-right nopad end-aline"
                               style="padding-left:0;line-height:30px;  width:15.5%">视频：</label>
                        <div class="col-md-9" style="padding:0">
                            <input type="file" id="video" @change="videoChange"
                            />
                            <div id="playAvOutDiv" v-if="playAvOutDivFlag">
                                <!--                                <PlayAV ref="playRef"></PlayAV>-->
                                <label class="col-md-3 control-label text-right nopad end-aline"
                                       style="padding-left:0;line-height:30px;">{{this.videoName}}</label>

                            </div>
                        </div>
                    </div>
                    <div class="col-md-12 form-group clearfix">
                        <label class="col-md-2 control-label text-right nopad end-aline"
                               style="padding-left:0;line-height:30px; width:15.5%">图片列表:</label>
                        <div class="col-md-9" style="padding:0">
                            <input type="file" id="buildRealImg" @change="buildRealImgChange" accept="image/*"
                                   multiple="multiple"/>
                            <p class="redtips">*注意：宽710px*高400px</p>
                            <div id="buildRealImgOutDiv">
                                <div v-for="(item,index) of buildRealImgList" :key="index"
                                     v-show="buildRealImgList.length!==0">
                                    <div @click="fileDel(index,3,item)">x</div>
                                    <img :src="item" style="width: 100%" width="390px" height="220px">
                                </div>
                            </div>
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
    import datePicker from 'vue2-datepicker'
    import Building from '../Building.vue'
    import SummerNote from '../subArticle/SummerNote.vue'

    import BuildType from "../BildType";

    var that = null
    export default {
        components: {
            datePicker,
            Building,
            SummerNote,
            BuildType

        },
        data() {
            return {
                addParam: {
                    sorcePrice: '',  //原价
                    nowPrice: '',    //现价
                    stationNum: '',  //工位数
                    surpluseNum: '',  //剩余工位
                    officeType: '',   //工位类型
                    area: '',         //面积
                    houseType: '',    //房型
                    isWall: 3,       //是否靠墙
                    isWindow: 3,     //是否带窗
                    roomId: '',      //楼盘ID
                    // 是否可注册
                    isRegister: 2,
                    // 免租时间
                    freeRentTime: '',
                    // 看房时间
                    watchHouseTime: '',
                    // 支付方式
                    payType: ''
                },
                imgName: '',
                headImg: '',    //头图
                picture: [],   //图片
                video: '',      //视频
                headImgList: [],
                headImgFileList: [],
                playAvOutDivFlag: true,
                buildRealImgList:
                    [],
                buildRealImgFileList:
                    [],
                videoName: '',
                title: '',
                isDisable: false,
                imgData: {
                    accept: 'image/gif, image/jpeg, image/png, image/jpg',
                },
                watchHouse: [
                    {id:1,watchName:'随时看房'},
                    {id:2,watchName:'提前预约'},
                ]
            };
        },
        methods: {

            buildReceive(data) {
                this.addParam.roomId = ''
                if (null != data) {
                    this.addParam.roomId = data;
                }
            },

            btRe(data) {
                this.addParam.officeType = ''
                if (null != data) {
                    this.addParam.officeType = data
                }
            },
            // Initialization projcet’s content
            initDyRef(param, addParam) {
                this.videoName = ''
                this.headImgList = []
                this.headImgFileList = []
                this.buildRealImgList = []
                this.buildRealImgFileList = []
                this.$refs.btRef.setType(2)
                this.$refs.buildRef.setBuildType(2)

                this.$refs.btRef.setBtId('0')
                // $("#headImg").val("");
                // ("#buildRealImg").val("");
                // $("#video").val("");
                $('#dyDialog').modal({backdrop: 'static', keyboard: false});
                if (param === 'add') {
                    // this.$refs.rn.setData('')
                    this.$refs.buildRef.setBuildingId("")

                    this.title = '新增'
                    this.addParam = {
                        sorcePrice: '',  //原价
                        nowPrice: '',    //现价
                        stationNum: '',  //工位数
                        surpluseNum: '',  //剩余工位
                        officeType: '',   //工位类型
                        area: '',         //面积
                        houseType: '',    //房型
                        isWall: 3,       //是否靠墙
                        isWindow: 3,     //是否带窗
                        roomId: '',      //楼盘ID
                        // 是否可注册
                        isRegister: 2,
                        // 免租时间
                        freeRentTime: '',
                        // 看房时间
                        watchHouseTime: '',
                        // 支付方式
                        payType: ''
                    };


                } else if (param === 'modify') {

                    console.log('Initialization evaluation’s content, which modifies evaluation')
                    if (null != addParam && null != addParam.bdPath) {
                        var en = []
                        en.push(this.url + addParam.bdPath)
                        this.headImgList = en
                    }

                    this.title = '修改';
                    if (this.isBlank(addParam.videoName)) {
                        this.playAvOutDivFlag = false
                        $("#playAvOutDiv").modal("hide")
                    } else {
                        this.videoName = addParam.videoName
                        // this.$refs.playRef.initData(this.url + addParam.videoPath)
                    }


                    //头图
                    if (null != addParam && null != addParam.imgName) {
                        var img = []
                        img.push(this.url + addParam.imgName)
                        this.headImgList = img
                    }
                    //多图列表
                    if (null !== addParam.pictureList) {
                        var buildRea = []
                        for (var i = 0; i < addParam.pictureList.length; i++) {
                            buildRea.push(this.url + addParam.pictureList[i])
                        }
                        this.buildRealImgList = buildRea
                    }
                    this.$refs.btRef.setBtId(addParam.officeType)
                    this.$refs.buildRef.setBuildingId(addParam.roomId)
                    Object.assign(this.addParam, addParam)
                }
            },

            fatherBuild(data) {
                this.addParam.buildId = ''
                if (null !== data) {
                    this.addParam.buildId = data.buildId
                }
            },
            buildRealImgChange() {

                var files = $("#buildRealImg")[0].files; //获取file对象
                for (let i = 0; i < files.length; i++) {
                    var file = files[i]
                    this.fileAdd(file, i, 3)
                }
            },

            headImgChange() {
                var files = $("#headImg")[0].files; //获取file对象
                if (null != files) {
                    this.headImgList = []
                }
                for (let i = 0; i < files.length; i++) {
                    var file = files[i]
                    this.fileAdd(file, i, 5)
                }
            },


            certainAction() {
                if (this.isBlank(this.addParam.officeType)) {
                    alert('工位类型必选')
                    return
                }

                if (this.isBlank(this.addParam.roomId)) {
                    alert('匹配楼盘必选')
                    return
                }

                if (this.isBlank(this.addParam.area) || this.addParam.area == 0) {
                    alert('面积必填，且只能填正数，最多保留2位小数')
                    return
                } else {
                    if (!(/^(([0-9]*$)|([0-9]+(.[0-9]{1,2})?))$/).test(this.addParam.area)) {
                        alert('面积必填，且只能填正数，最多保留2位小数')
                        return;
                    }
                }

                if (this.isBlank(this.addParam.stationNum) || this.addParam.stationNum == 0) {
                    alert('工位个数必填，且只能填正整数')
                    return
                } else {
                    if (!(/^([0-9]*$)$/).test(this.addParam.stationNum)) {
                        alert('工位个数必填，且只能填正整数')
                        return;
                    }
                }

                if (this.isBlank(this.addParam.surpluseNum) || this.addParam.surpluseNum == 0) {
                    alert('剩余工位必填，且只能填正整数')
                    return
                } else {
                    if (!(/^([0-9]*$)$/).test(this.addParam.surpluseNum)) {
                        alert('剩余工位必填，且只能填正整数')
                        return;
                    }
                }

                if (this.isBlank(this.addParam.sorcePrice) || this.addParam.sorcePrice == 0) {
                    alert('原价必填，且只能填正数，最多保留2位小数')
                    return
                } else {
                    if (!(/^(([0-9]*$)|([0-9]+(.[0-9]{1,2})?))$/).test(this.addParam.sorcePrice)) {
                        alert('原价必填，且只能填正数，最多保留2位小数')
                        return;
                    }
                }

                if (this.isBlank(this.addParam.nowPrice) || this.addParam.nowPrice == 0) {
                    alert('现价必填，且只能填正数，最多保留2位小数')
                    return
                } else {
                    if (!(/^(([0-9]*$)|([0-9]+(.[0-9]{1,2})?))$/).test(this.addParam.nowPrice)) {
                        alert('现价必填，且只能填正数，最多保留2位小数')
                        return;
                    }
                }

                if (this.addParam.officeType == 7 && this.isBlank(this.addParam.houseType)) {
                    alert('独立办公室房型必填')
                    return
                }

                if (this.isBlank(this.addParam.freeRentTime)) {
                    alert('免租时间必填')
                    return
                }

                if (this.isBlank(this.addParam.watchHouseTime)) {
                    alert('看房时间必填')
                    return
                }

                if (this.isBlank(this.addParam.payType)) {
                    alert('支付方式必填')
                    return
                }

                if (this.headImgList.length == 0) {
                    alert('请选择头图')
                    return
                }

                if (this.buildRealImgList.length == 0) {
                    alert('请选择图片')
                    return
                }

                this.isDisable = true
                setTimeout(() => {
                    this.isDisable = false
                }, 1000)


                const fd = new FormData();
                // 头图
                for (let i = 0; i < this.headImgFileList.length; i++) {
                    fd.append("headImg", this.headImgFileList[i]);
                }
                fd.append("addParam", JSON.stringify(this.addParam));

                for (let i = 0; i < this.buildRealImgFileList.length; i++) {
                    fd.append("picture", this.buildRealImgFileList[i]);
                }
                var videoFile = $("#video")[0].files[0]
                fd.append("video", videoFile);
                if (null != videoFile) {
                    var Mb = videoFile.size / 1024 / 1024
                    console.log("文件大小" + Mb);
                    if (Mb > 100) {
                        alert("您的视频超出限制，请选择100Mb内视频")
                        return
                    }
                }
                console.log(this.buildRealImgList.length)
                switch (this.title) {
                    case '新增':
                        var url = this.url + '/officeBean/addOffice'
                        break;
                    case '修改':
                        var url = this.url + '/officeBean/patchOffice'
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
                        this.$emit('certainAction');
                        // console.log( this.buildRealImgList.length)
                    } else {
                        alert(res.retMsg)
                    }
                }).catch((error) => {
                    console.log('楼盘信息提交失败')
                });
            },
            closeCurrentPage() {
                this.$emit('certainAction');
            },

            formatFileSize: function (fileSize, idx) {
                var units = ["B", "KB", "MB", "GB"];
                idx = idx || 0;
                if (fileSize < 1024 || idx === units.length - 1) {
                    return fileSize.toFixed(1) + units[idx];
                }
                return this.formatFileSize(fileSize / 1024, ++idx);
            },

            videoChange() {
                var files = $("#video")[0].files;
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

                }
            },
            fileDel(index, type, item) {
                if (this.title == '修改') {
                    if (this.buildRealImgList.length == 1) {
                        alert('最后一张图片不可删除')
                        return;
                    }
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
                // console.log(index)
                // console.log(str)
                if (this.isBlank(str)) return;

                var id = '';

                id = parseInt(str)
                //console.log(id)
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
                    console.log('共享办公信息提交失败')
                });


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

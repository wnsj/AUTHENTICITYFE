<!-- add and modify position -->
<template>
    <div class="modal-content bigWidthModal" id="build">
        <div class="modal-header">
            <h4 id="myModalLabel" class="modal-title">{{title}}房源</h4>
        </div>
        <div class="modal-body  pos_r">
            <div class="tab-pane fade in active martop" id="basic">
                <div class="dialogInutBox clearfix">
                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">房源名称</label><span class="sign-left">:</span>
                        <div class="col-md-8">
                            <input type="text" class="form-control" v-model="addParam.room" placeholder="必填">
                        </div>
                    </div>

                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">房源编号</label><span class="sign-left">:</span>
                        <div class="col-md-8">
                            <input type="text" class="form-control" v-model="addParam.roomCode">
                        </div>
                    </div>
                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">房源类型</label><span class="sign-left">:</span>
                        <div class="col-md-8">
                            <select class="form-control" v-model="roomType" v-on:change="roomTypeChange()"
                                    >
                                <option value="0">--未选择--</option>
                                <option value="1">--普通办公--</option>
<!--                                <option value="2">&#45;&#45;共享办公&#45;&#45;</option>-->
                                <option value="3">--商铺--</option>
                            </select>
                        </div>
                    </div>

                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">类型</label><span class="sign-left">:</span>
                        <div class="col-md-8">
                            <bt @btChange='fatherBtReceive' ref="btRef"></bt>
                        </div>
                    </div>

                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">区域</label><span class="sign-left">:</span>
                        <div class="col-md-8">
                            <ldt @ldtChange='fatherLdtReceive' ref="ldtRef"></ldt>
                        </div>
                    </div>

                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">商圈</label><span class="sign-left">:</span>
                        <div class="col-md-8">
                            <Business @buChange='fatherBuReceive' ref="buRef"></Business>
                        </div>
                    </div>

                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">楼盘</label><span class="sign-left">:</span>
                        <div class="col-md-8">
                            <buildCompent @buildChange='fatherbuildCompentReceive' ref="buildCompentRef"></buildCompent>
                        </div>
                    </div>

                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">看房时间</label><span class="sign-left">:</span>
                        <div class="col-md-8">
                            <input type="text" class="form-control" v-model="addParam.watchHouseTime">
                        </div>
                    </div>

                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">免租时间</label><span class="sign-left">:</span>
                        <div class="col-md-8">
                            <input type="text" class="form-control" v-model="addParam.rentFreeTime">
                        </div>
                    </div>

                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">是否可注册</label><span class="sign-left">:</span>
                        <div class="col-md-8">
                            <select class="form-control" v-model="addParam.isRegister">
                                <option value=2>--是--</option>
                                <option value=3>--否--</option>
                            </select>
                        </div>
                    </div>

                    <!-- <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">是否首页共享</label><span class="sign-left">:</span>
                        <div class="col-md-8">
                            <select class="form-control" v-model="addParam.isHome">
                                <option value=0>--未选择--</option>
                                <option value=2>--是--</option>
                                <option value=3>--否--</option>
                            </select>
                        </div>
                    </div> -->

                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">是否热销</label><span class="sign-left">:</span>
                        <div class="col-md-8">
                            <select class="form-control" v-model="addParam.isHot">
                                <option value=2>--是--</option>
                                <option value=3>--否--</option>
                            </select>
                        </div>
                    </div>

                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">单价</label><span class="sign-left">:</span>
                        <div class="col-md-8">
                            <input type="text" class="form-control" v-model="addParam.unitPrice"
                                   placeholder="必填"><span class="pos-ab pos-tr">元/天</span>
                        </div>
                    </div>

                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">总价</label><span class="sign-left">:</span>
                        <div class="col-md-8">
                            <input type="text" class="form-control" v-model="addParam.totalPrice"
                                   placeholder="必填"><span class="pos-ab pos-tr">万元/月</span>
                        </div>
                    </div>

                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">建筑面积</label><span class="sign-left">:</span>
                        <div class="col-md-8">
                            <input type="text" class="form-control " v-model="addParam.buildArea"
                                   placeholder="必填"><span class="pos-ab pos-tr">㎡</span>
                        </div>
                    </div>

                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">详细地址</label><span class="sign-left">:</span>
                        <div class="col-md-8">
                            <input type="text" placeholder="必填" class="form-control" v-model="addParam.detailedAddress">
                        </div>
                    </div>

                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">地铁地址</label><span class="sign-left">:</span>
                        <div class="col-md-8">
                            <input type="text" placeholder="必填" class="form-control" v-model="addParam.stationAddress">
                        </div>
                    </div>

                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">经纪人</label><span class="sign-left">:</span>
                        <div class="col-md-8">
                            <Counselor @couChange='fatherCouReceive' ref="couRef"></Counselor>
                        </div>
                    </div>

                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">装修情况</label><span class="sign-left">:</span>
                        <div class="col-md-8">
                            <input type="text" placeholder="必填" class="form-control" v-model="addParam.renovationCondition">
                        </div>
                    </div>

                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">距地铁</label><span class="sign-left">:</span>
                        <div class="col-md-8">
                            <input type="text" placeholder="距2号线前门站580米(必填)" class="form-control" v-model="addParam.surround">
                        </div>
                    </div>

                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">标签集合</label><span class="sign-left">:</span>
                        <div class="col-md-8">
                            <input type="text" placeholder="必填(以|分隔每个标签)" class="form-control" v-model="addParam.labelList">
                        </div>
                    </div>

                    <!-- <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">楼盘经度</label><span class="sign-left">:</span>
                        <div class="col-md-8">
                            <input type="text" class="form-control" v-model="addParam.longitude"
                                   placeholder="数值,可填:30.02">
                        </div>
                    </div> -->
                    <!-- <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">楼盘纬度</label><span class="sign-left">:</span>
                        <div class="col-md-8">
                            <input type="text" class="form-control" v-model="addParam.latitude"
                                   placeholder="数值,可填:30.02">
                        </div>
                    </div> -->

                    <!-- <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">建筑面积</label><span class="sign-left">:</span>
                        <div class="col-md-8">
                            <input type="text" class="form-control " v-model="addParam.floorage"
                                   placeholder="数值,可填:1"><span class="pos-ab pos-tr">㎡</span>
                        </div>
                    </div> -->

                    <!-- <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">商铺类别</label><span class="sign-left">:</span>
                        <div class="col-md-8">
                            <storeType @stChange='fatherStReceive' ref="stRef"></storeType>
                        </div>
                    </div> -->

                    <!-- <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">特色标签</label><span class="sign-left">:</span>
                        <div class="col-md-8">
                            <Charas @charsChange='fatherChReceive' ref="charsRef"></Charas>
                        </div>
                    </div> -->

                    <!-- <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">业态</label><span class="sign-left">:</span>
                        <div class="col-md-8">
                            <comActive @comActiveChange='fatherComActiveReceive' ref="comActiveRef"></comActive>
                        </div>
                    </div> -->

                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">面积信息</label><span class="sign-left">:</span>
                        <div class="col-md-8">
                            <input type="text" placeholder="必填" class="form-control" v-model="addParam.areaInfo">
                        </div>
                    </div>

                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">转让费</label><span class="sign-left">:</span>
                        <div class="col-md-8">
                            <input type="text" class="form-control" v-model="addParam.transferFee"
                                   placeholder="数值,可填:30.02"><span class="pos-ab pos-tr">万元</span>
                        </div>
                    </div>

                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">支付方式</label><span class="sign-left">:</span>
                        <div class="col-md-8">
                            <input type="text" placeholder="必填" class="form-control" v-model="addParam.payType">
                        </div>
                    </div>
                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">是否在租</label><span class="sign-left">:</span>
                        <div class="col-md-8">
                            <select class="form-control" v-model="addParam.isRent">
                                <option value=2>--是--</option>
                                <option value=3>--否--</option>
                            </select>
                        </div>
                    </div>

                </div>

                <div class="dialogBtnBox form-group clearfix">
                    <div class="col-md-12">
                        <el-button
                            type="primary"
                            style="margin-right: 25%"
                            v-on:click="certainAction()"
                            :loading=loading>{{btnName}}
                        </el-button>
                        <el-button
                            type="warning"
                            v-on:click="closeCurrentPage()">返回
                        </el-button>
                    </div>
                </div>
            </div>
        </div>
        <div>
        </div>
    </div>

</template>


<script>
    import datePicker from 'vue2-datepicker'
    import bt from '../common/BildType.vue'
    import BuildHorseTypes from '../common/BuildHorseTypes.vue'
    import isSale from '../common/IsSale.vue'

    import ldt from '../common/LocationDType.vue'
    import dev from '../common/Dev.vue'
    import Charas from '../common/Charas.vue'
    import Counselor from './subCou/Counselor.vue'
    import pro from '../common/Province.vue'
    import Region from '../common/Region.vue'
    import Metros from '../common/Metros.vue'
    import PlayAV from '../common/PlayAV.vue'
    import Business from "./subBu/subBusiness"
    import buildCompent from "../common/Building";
    import storeType from "../common/StoreType";
    import comActive from "../common/ComActive";


    var that = null
    // $(function () {
    //     function testFun() {
    //         alert("88")
    //     }
    // })


    // $(document).on('click', '#remove_logo', function (e) {
    //     alert("hahhsah")
    //     that.fileDel(0)
    // });

    export default {
        components: {
            datePicker,
            storeType,
            comActive,
            bt,
            // BuildHorseTypes,
            // isSale,
            // lt,
            buildCompent,
            Business,
            ldt,
            // dev,
            Charas,
            Counselor,
            pro,
            // Region,
            // Metros,
            PlayAV,

        },
        data() {
            return {
                addParam: {
                    // 房源名称
                    room: '',

                    // 房源编号
                    roomCode: '',

                    // 区域ID
                    ldId: '',

                    // 商圈id
                    businessId: '',

                    // 楼盘id
                    buildId: '',

                    // 经度
                    longitude: '',

                    // 纬度
                    latitude: '',

                    // 咨询师id
                    couId: '',

                    // 看房时间
                    watchHouseTime: '',

                    // 免租时间
                    rentFreeTime: '',

                    // 是否注册
                    isRegister: 2,

                    // 是否首页目前用于共享办公
                    isHome: '',

                    // 是否热销
                    isHot: 3,

                    // 单价
                    unitPrice: '',

                    // 总价
                    totalPrice: '',

                    // 建筑面积
                    buildArea: '',

                    // 详细地址
                    detailedAddress: '',

                    // 地铁地址
                    stationAddress: '',

                    // 类型id对应buildtype表
                    btId: '',

                    // 装修情况
                    renovationCondition: '',

                    // 距地铁
                    surround: '',

                    // 标签list
                    labelList: '',

                    // 1,写字楼，2，共享，3商铺
                    roomType: '',

                    // 面积信息
                    areaInfo: '',

                    // 商铺类别
                    stId: '',

                    // 业态
                    caId: '',

                    // 转让费
                    transferFee: '',

                    // 支付方式
                    payType: '',

                    // 是否在租
                    isRent: 2,

                    // 网点介绍
                    produce: '',

                    // 特点list集合
                    chaList: [],

                },
                title: '',
                buildRealImgList:
                    [],
                buildRealImgFileList:
                    [],
                headImgList:
                    [],
                headImgFileList:
                    [],
                isDisable: false,
                size: 0,
                imgData: {
                    accept: 'image/gif, image/jpeg, image/png, image/jpg',
                },
                playAvOutDivFlag: true,
                typeFlag: 3,
                videoName: '',
                loading: false,
                btnName: '确认',
                roomType: '0',
            }
                ;
        },
        methods: {
            // Initialization projcet’s content
            initData(param, addParam) {
                this.btnName = '确认'
                this.loading = false

                this.buildRealImgList = []
                this.headImgList = []

                this.videoName = ''
                this.buildRealImgFileList = []
                this.headImgFileList = []
                $("#buildRealImg").val("");
                $("#headImg").val("");
                $("#video").val("");

                $('#roomMainDialog').modal({backdrop: 'static', keyboard: false});
                if (param === 'add') {
                    this.btnName = '保存并添加详情'
                    this.typeFlag = 3
                    this.title = '新增'
                    this.$refs.ldtRef.setLdtId('0')
                    this.$refs.couRef.setCouId('0')
                    this.$refs.btRef.setBtId('0')
                    this.$refs.buRef.setBuId('0')
                    this.roomType = '0'
                    this.$refs.buildCompentRef.setBuildingId('')


                    // this.$refs.proRef.setProId('0')
                    this.addParam = {
                        // 房源名称
                        room: '',

                        // 房源编号
                        roomCode: '',

                        // 区域ID
                        ldId: '',

                        // 商圈id
                        businessId: '',

                        // 楼盘id
                        buildId: '',

                        // 经度
                        longitude: '',

                        // 纬度
                        latitude: '',

                        // 咨询师id
                        couId: '',

                        // 看房时间
                        watchHouseTime: '',

                        // 免租时间
                        rentFreeTime: '',

                        // 是否注册
                        isRegister: 2,

                        // 是否首页目前用于共享办公
                        isHome: '',

                        // 是否热销
                        isHot: 3,

                        // 单价
                        unitPrice: '',

                        // 总价
                        totalPrice: '',

                        // 建筑面积
                        buildArea: '',

                        // 详细地址
                        detailedAddress: '',

                        // 地铁地址
                        stationAddress: '',

                        // 类型id对应buildtype表
                        btId: '',

                        // 装修情况
                        renovationCondition: '',

                        // 距地铁
                        surround: '',

                        // 标签list
                        labelList: '',

                        // 1,写字楼，2，共享，3商铺
                        roomType: '',

                        // 面积信息
                        areaInfo: '',

                        // 商铺类别
                        stId: '',

                        // 业态
                        caId: '',

                        // 转让费
                        transferFee: '',

                        // 支付方式
                        payType: '',

                        // 是否在租
                        isRent: 2,


                    }
                } else if (param === 'modify') {
                    // if (this.isBlank(addParam.videoPath)) {
                    //     this.playAvOutDivFlag = false
                    //     $("#playAvOutDiv").modal("hide")
                    // } else {
                    //     this.videoName = addParam.videoName
                    // }
                    this.title = '修改'

                    this.$refs.buRef.setBuId(addParam.businessId)
                    this.$refs.buildCompentRef.setBuildingId(addParam.buildId)
                    this.roomType = addParam.roomType

                    // this.$refs.stRef.setStId(addParam.stId)
                    this.$refs.ldtRef.setLdtId(addParam.ldId)
                    this.$refs.btRef.setBtId(addParam.btId)



                    // console.log('cacacacacacaca',this.addParam.caId)
                    // if(this.addParam.caId != null){
                    //     var ca = this.addParam.caId.split(',')
                    //     this.$refs.comActiveRef.setComActiveList(ca)
                    // }
                    if (addParam.chaIdList) {
                        // this.$refs.charsRef.setCharaList(addParam.chaIdList)
                    }

                    // this.$refs.proRef.setProId(addParam.proId)
                    this.$refs.couRef.setCouId(addParam.couId)
                    this.findHaveDetail(addParam)
                    Object.assign(this.addParam, addParam)
                }
            },

            findHaveDetail(addParam) {
                this.$ajax({
                    method: 'POST',
                    url: this.url + '/roomMainBean/findHaveDetail',
                    headers: {
                        'Content-Type': this.contentType,
                        'Access-Token': this.accessToken
                    },
                    data: addParam,
                    dataType: 'json',
                }).then((response) => {
                    const res = response.data
                    if (res.retCode === '0000') {
                        this.typeFlag = res.retData
                    } else {
                        alert(res.retMsg)
                    }
                }).catch((error) => {
                    console.log(error);
                });
            },
            certainAction() {

                if (this.isBlank(this.addParam.room)) {
                    alert('房源名不能为空')
                    return
                }

                if (this.isBlank(this.addParam.roomType)) {
                    alert('房源类型必选')
                    return
                }


                if (this.isBlank(this.addParam.btId) && this.addParam.roomType != 2) {
                    alert('类型必选')
                    return
                }
                if (this.isBlank(this.addParam.ldId)) {
                    alert('区域必选')
                    return
                }

                if (this.isBlank(this.addParam.businessId)) {
                    alert('商圈必选')
                    return
                }

                if (this.isBlank(this.addParam.buildId)) {
                    alert('楼盘必选')
                    return
                }

                // if (this.isBlank(this.addParam.isRegister)) {
                //     alert('是否可注册必选')
                //     return
                // }

                // if (this.isBlank(this.addParam.isHome)) {
                //     alert('是否首页共享必选')
                //     return
                // }

                // if (this.isBlank(this.addParam.isHot)) {
                //     alert('是否热销必选')
                //     return
                // }


                if (this.isBlank(this.addParam.unitPrice) || this.addParam.unitPrice == 0) {
                    alert('单价必填，且只能填正数，最多保留2位小数')
                    return
                } else {
                    if (!(/^(([0-9]*$)|([0-9]+(.[0-9]{1,2})?))$/).test(this.addParam.unitPrice)) {
                        alert('单价必填，且只能填正数，最多保留2位小数')
                        return;
                    }
                }

                if (this.isBlank(this.addParam.totalPrice) || this.addParam.totalPrice == 0) {
                    alert('总价必填，且只能填正数，最多保留2位小数')
                    return
                } else {
                    if (!(/^(([0-9]*$)|([0-9]+(.[0-9]{1,2})?))$/).test(this.addParam.totalPrice)) {
                        alert('总价必填，且只能填正数，最多保留2位小数')
                        return;
                    }
                }

                if (this.isBlank(this.addParam.buildArea) || this.addParam.buildArea == 0) {
                    alert('建筑面积必填，且只能填正数，最多保留2位小数')
                    return
                } else {
                    if (!(/^(([0-9]*$)|([0-9]+(.[0-9]{1,2})?))$/).test(this.addParam.buildArea)) {
                        alert('建筑面积必填，且只能填正数，最多保留2位小数')
                        return;
                    }
                }
                if (this.isBlank(this.addParam.detailedAddress)) {
                    alert('详细地址必填')
                    return
                }

                if (this.isBlank(this.addParam.stationAddress)) {
                    alert('地铁地址必填')
                    return
                }

                if (this.isBlank(this.addParam.couId)) {
                    alert('经纪人必选')
                    return
                }

                if (this.isBlank(this.addParam.renovationCondition)) {
                    alert('装修情况必填')
                    return
                }

                if (this.isBlank(this.addParam.surround)) {
                    alert('距地铁必填')
                    return
                }

                if (this.isBlank(this.addParam.labelList)) {
                    alert('标签集合必填')
                    return
                }

                // if (this.isBlank(this.addParam.longitude) || this.addParam.longitude == 0) {
                //     alert('经度必填，且不能为0')
                //     return
                // } else {
                //     if (this.formatResultToAbs(parseFloat(this.addParam.longitude)) > 180) {
                //         alert('经度范围 -180~180，请填写正确的经度')
                //         return
                //     }
                // }

                // if (this.isBlank(this.addParam.latitude) || this.addParam.latitude == 0) {
                //     alert('纬度必填，且不能为0')
                //     return
                // }  else {
                //     if (this.formatResultToAbs(parseFloat(this.addParam.latitude)) > 90) {
                //         alert('纬度范围 -90~90，请填写正确的纬度')
                //         return
                //     }
                // }

                if (this.isBlank(this.addParam.areaInfo)) {
                    alert('面积信息必填')
                    return
                }

                if (this.isBlank(this.addParam.payType)) {
                    alert('支付方式必填')
                    return
                }

                // if (this.isBlank(this.addParam.isRent)) {
                //     alert('是否在租必选')
                //     return
                // }

                // if (this.isBlank(this.addParam.produce)) {
                //     alert('网点介绍必填')
                //     return
                // }


                /*if (this.isBlank(this.addParam.longitude)) {
                    alert('经度不能为空或0')
                    return
                }
                if (this.isBlank(this.addParam.latitude)) {
                    alert('纬度不能为空或0')
                    return
                }

                if (this.addParam.unitPrice !== null && this.addParam.unitPrice !== '' && parseFloat(this.addParam.unitPrice) !== 0) {
                    if (!(/^(([0-9]*$)|([0-9]+(.[0-9]{1,2})?))$/).test(this.addParam.unitPrice)) {
                        alert('单价只能是整数或者1-2位小数的正实数')
                        return;
                    }
                }

                if (this.addParam.totalPrice !== null && this.addParam.totalPrice !== '' && parseFloat(this.addParam.totalPrice) !== 0) {
                    if (!(/^(([0-9]*$)|([0-9]+(.[0-9]{1,2})?))$/).test(this.addParam.totalPrice)) {
                        alert('总价只能是整数或者1-2位小数的正实数')
                        return;
                    }
                }



                if (this.addParam.transferFee != null && this.addParam.transferFee !== '' && parseFloat(this.addParam.transferFee) !== 0) {
                    if (!(/^(([0-9]*$)|([0-9]+(.[0-9]{1,2})?))$/).test(this.addParam.transferFee)) {
                        alert('转让费只能是整数或者1-2位小数的正实数')
                        return;
                    }
                }

                if (this.addParam.specialOffer != null && this.addParam.specialOffer !== '' && parseInt(this.addParam.specialOffer) !== 0) {
                    if (!(/^([0-9]*$)$/).test(this.addParam.specialOffer)) {
                        alert('特价值只能是整数')
                        return;
                    }
                }


                if (parseFloat(this.addParam.minArea) > parseFloat(this.addParam.maxArea)) {
                    alert('最大面积不能小于最小面积')
                    return;
                }
                if (!this.isBlank(this.addParam.tel)) {
                    if (!((/^((1[345678]\d{9})|(\d{2,3}\d{7,8})|(\d{2,3}-\d{7,8}))$/).test(this.addParam.tel))) {
                        alert('请输入正确的联系方式')
                        return;
                    }
                }*/


                this.loading = true
                this.btnName = '提交中...'

                // const fd = new FormData();
                // for (let i = 0; i < this.buildRealImgFileList.length; i++) {
                //     fd.append("buildRealImg", this.buildRealImgFileList[i]);
                // }


                // // 头图
                // for (let i = 0; i < this.headImgFileList.length; i++) {
                //     fd.append("headImg", this.headImgFileList[i]);
                // }
                // 区位
                // for (let i = 0; i < this.regionImgFileList.length; i++) {
                //     fd.append("regionImg", this.regionImgFileList[i]);
                // }
                // 视频
                // var videoFile = $("#video")[0].files[0]
                // fd.append("video", videoFile);
                // if (null != videoFile) {
                //     var Mb = videoFile.size / 1024 / 1024
                //     console.log("文件大小" + Mb);
                //     if (Mb > 100) {
                //         alert("您的视频超出限制，请选择100Mb内视频")
                //         return
                //     }
                // }
                // fd.append("addParam", JSON.stringify(this.addParam));
                switch (this.title) {
                    case '新增':
                        var url = this.url + '/roomMainBean/addRoomMain'
                        break;
                    case '修改':
                        var url = this.url + '/roomMainBean/updateRoomMain'
                        break;
                }


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
                        this.loading = false
                        this.btnName = '提交成功'
                        // if (this.addParam.isMobile == 1) {
                        //     // this.param.buildId = res.retData.buildId;
                        //     // this.param.sort = res.retData.sort;
                        //     // this.param.mobileHead = res.retData.mobileHead;
                        //     // this.param.mobileIntroduction = res.retData.mobileIntroduction;

                        //     // this.$parent.$refs.mobileDialogRef.initRef(this.param)
                        //     // $('#mobileDialog').modal({backdrop: 'static', keyboard: true});
                        //     // $("#mobileDialog").modal('show')
                        // } else {
                        //     setTimeout(() => {
                        //         this.$emit('certainAction')
                        //     }, 2000)
                        // }
                        alert(res.retMsg)
                        this.$emit('certainAction')
                    } else {
                        alert(res.retMsg)
                        // this.$emit('certainAction')
                    }
                }).catch((error) => {
                    console.log(error);
                });
            },
            closeCurrentPage() {
                this.playAvOutDivFlag = true
                // this.$emit('certainAction')
                $("#roomMainDialog").modal("hide")
            },

            formatFileSize: function (fileSize, idx) {
                var units = ["B", "KB", "MB", "GB"];
                idx = idx || 0;
                if (fileSize < 1024 || idx === units.length - 1) {
                    return fileSize.toFixed(1) + units[idx];
                }
                return this.formatFileSize(fileSize / 1024, ++idx);
            },

            // fatherBhtReceive(data) {
            //     this.addParam.bhtIdList = []
            //     this.addParam.bhtIdList = data
            // },
            fatherBtReceive(data) {
                this.addParam.btId = ''
                this.addParam.btId = data
            },

            // fatherStReceive(data) {
            //     this.addParam.stId = ''
            //     this.addParam.stId = data
            // },

            fatherCouReceive(data) {
                this.addParam.couId = ''
                if (null != data) {
                    this.addParam.couId = data
                }
            },


            // fatherIsSaleReceive(data) {
            //     this.addParam.isSale = ''
            //     this.addParam.isSale = data
            // },

            fatherbuildCompentReceive(data) {
                this.addParam.buildId = ''
                if (data != null) {
                    this.addParam.buildId = data
                }
            },

            fatherLdtReceive(data) {

                this.addParam.ldId = ''
                if (null != data) {
                    this.addParam.ldId = data

                }
                this.$refs.buRef.setLdId(data)
                this.addParam.businessId = ''
                this.$refs.buildCompentRef.setLdId(data)
                this.addParam.buildId = ''
            },
            fatherBuReceive(data) {
                this.addParam.businessId = ''
                if (null != data) {
                    this.addParam.businessId = data
                }
                this.$refs.buildCompentRef.setBussId(data)
                this.addParam.buildId = ''
            },
            // fatherMetrosReceive(data) {
            //     this.addParam.metroIdList = []
            //     this.addParam.metroIdList = data
            // },
            // fatherDevReceive(data) {
            //     this.addParam.devId = ''
            //     this.addParam.devId = data
            // },
            // fatherChReceive(data) {
            //     console.log('cscscscscscs',data)
            //     this.addParam.chaIdList = []
            //     this.addParam.chaIdList = data
            // },
            // fatherComActiveReceive(data) {
            //     var s = ''
            //     if(data != null){
            //         data.forEach(element => {
            //             s=s+element+','
            //         });
            //     }
            //     s=s.substring(0,s.length-1)
            //     this.addParam.caId=s
            // },
            fatherRegReceive(data) {
                this.addParam.regionId = ''
                this.addParam.regionId = data
            },
            fatherProReceive(data) {
                this.addParam.proId = ''
                if (null != data) {
                    this.addParam.proId = data
                }
                // this.$refs.ldtRef.setProId(data)
            },
            //预览图
            effectImgChange() {
                var files = $("#effectImg")[0].files; //获取file对象
                for (let i = 0; i < files.length; i++) {
                    var file = files[i]
                    this.fileAdd(file, i, 1)
                }
            },
            enPlanImgChange() {
                var files = $("#enPlanImg")[0].files; //获取file对象
                for (let i = 0; i < files.length; i++) {
                    var file = files[i]
                    this.fileAdd(file, i, 2)
                }
            },
            buildRealImgChange() {

                var files = $("#buildRealImg")[0].files; //获取file对象
                for (let i = 0; i < files.length; i++) {
                    var file = files[i]
                    this.fileAdd(file, i, 3)
                }
            },
            matchingRealImgChange() {

                var files = $("#matchingRealImg")[0].files; //获取file对象
                for (let i = 0; i < files.length; i++) {
                    var file = files[i]
                    this.fileAdd(file, i, 4)
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
            regionImgChange() {

                var files = $("#regionImg")[0].files; //获取file对象
                for (let i = 0; i < files.length; i++) {
                    var file = files[i]
                    this.fileAdd(file, i, 6)
                }
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
            formatResultToAbs(input) {
                return Math.abs(input);
            },
            roomTypeChange: function () {
                if (this.roomType != null) {
                    this.addParam.roomType = this.roomType
                    this.$refs.btRef.setType(this.roomType)
                    // this.$refs.btRef.setFlag(this.roomType)
                    this.addParam.btId = ''
                    // this.$refs.buildCompentRef.setBuildType(this.roomType)
                    // this.$refs.stRef.setType(this.roomType)
                    if (this.roomType == 1) {
                        this.$refs.btRef.setBtId(1)
                        this.addParam.btId = 1
                    }
                }

            },

        },
        mounted() {

        },
        computed: {
            editor() {
                return this.$refs.myQuillEditor.quill
            }
        },
    }
</script>

<style>
    .remove_logo {
        width: 1.5rem;
        height: 1.5rem;
        background: red;
        border-radius: 25px;

        text-align: center;
        line-height: 1rem;
        font-size: 0.5rem;
        color: #777777;
    }


</style>

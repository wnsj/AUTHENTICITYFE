<!-- add and modify position -->
<template>
    <div class="modal-content bigWidthModal" id="build">
        <div class="modal-header">
            <h4 id="myModalLabel" class="modal-title">{{title}}楼盘</h4>
        </div>
        <div class="modal-body  pos_r">
            <div class="tab-pane fade in active martop" id="basic">
                <div class="dialogInutBox clearfix">
                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">楼盘名称</label><span class="sign-left">:</span>
                        <div class="col-md-8">
                            <input type="text" class="form-control" v-model="addParam.htName" placeholder="楼盘名称必填">
                        </div>
                    </div>

                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">楼盘经度</label><span class="sign-left">:</span>
                        <div class="col-md-8">
                            <input type="text" class="form-control" v-model="addParam.longitude"
                                   placeholder="数值,可填:30.002">
                        </div>
                    </div>
                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">楼盘纬度</label><span class="sign-left">:</span>
                        <div class="col-md-8">
                            <input type="text" class="form-control" v-model="addParam.latitude"
                                   placeholder="数值,可填:30.002">
                        </div>
                    </div>

                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">建筑面积</label><span class="sign-left">:</span>
                        <div class="col-md-8">
                            <input type="text" class="form-control " v-model="addParam.floorage"
                                   placeholder="数值,可填:1"><span class="pos-ab pos-tr">㎡</span>
                        </div>
                    </div>
                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">物业公司</label><span class="sign-left">:</span>
                        <div class="col-md-8">
                            <input type="text" class="form-control" v-model="addParam.propertyCompany"
                                   placeholder="必填,可填:无">
                        </div>
                    </div>

<!--                    <div class="col-md-6 form-group clearfix">-->
<!--                        <label class="col-md-3 control-label text-right nopad end-aline"-->
<!--                               style="padding:0;line-height:34px;">省份</label><span class="sign-left">:</span>-->
<!--                        <div class="col-md-8">-->
<!--                            <pro @proChange="fatherProReceive" ref="proRef"></pro>-->
<!--                        </div>-->
<!--                    </div>-->

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
                               style="padding:0;line-height:34px;">类型</label><span class="sign-left">:</span>
                        <div class="col-md-8">
                            <bt @bstChange='fatherBtReceive' ref="btRef"></bt>
                        </div>
                    </div>
                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">特色标签</label><span class="sign-left">:</span>
                        <div class="col-md-8">
                            <Charas @charsChange='fatherChReceive' ref="charsRef"></Charas>
                        </div>
                    </div>
                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">热销值</label><span class="sign-left">:</span>
                        <div class="col-md-8">
                            <input type="text" class="form-control" v-model="addParam.sellWell" placeholder=""/>
                        </div>
                    </div>
                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">人气值</label><span class="sign-left">:</span>
                        <div class="col-md-8">
                            <input type="text" class="form-control" v-model="addParam.popularity" placeholder=""/>
                        </div>
                    </div>
                    <!--                    <div class="col-md-6 form-group clearfix">-->
                    <!--                        <label class="col-md-3 control-label text-right nopad end-aline"-->
                    <!--                               style="padding:0;line-height:34px;">热搜值</label><span class="sign-left">:</span>-->
                    <!--                        <div class="col-md-8">-->
                    <!--                            <input type="text" class="form-control" v-model="addParam.hotSearch" placeholder=""/>-->
                    <!--                        </div>-->
                    <!--                    </div>-->

                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">推荐楼盘</label><span class="sign-left">:</span>
                        <div class="col-md-8">
                            <select class="form-control" v-model="addParam.recommend">
                                <option value="2">--是--</option>
                                <option value="3">--否--</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">入驻企业</label><span class="sign-left">:</span>
                        <div class="col-md-8">
                            <textarea class="form-control wdType02" style="resize:none" placeholder=""
                                      v-model="addParam.enterprises"/>
                        </div>
                    </div>


                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">最低单价</label><span class="sign-left">:</span>
                        <div class="col-md-8">
                            <input type="text" class="form-control " v-model="addParam.minUnitPrice"
                                   placeholder=""/>
                        </div>
                    </div>
                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">最高单价</label><span class="sign-left">:</span>
                        <div class="col-md-8">
                            <input type="text" class="form-control " v-model="addParam.maxUnitPrice"
                                   placeholder=""/>
                        </div>
                    </div>
                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">最低总价</label><span class="sign-left">:</span>
                        <div class="col-md-8">
                            <input type="text" class="form-control " v-model="addParam.minTitlePrice"
                                   placeholder=""/>
                        </div>
                    </div>
                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">最高总价</label><span class="sign-left">:</span>
                        <div class="col-md-8">
                            <input type="text" class="form-control " v-model="addParam.maxTitlePrice"
                                   placeholder=""/>
                        </div>
                    </div>
                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">最小面积</label><span class="sign-left">:</span>
                        <div class="col-md-8">
                            <input type="text" class="form-control " v-model="addParam.minArea" placeholder=""/><span
                            class="pos-ab pos-tr">㎡</span>
                        </div>
                    </div>
                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">最大面积</label><span class="sign-left">:</span>
                        <div class="col-md-8">
                            <input type="text" class="form-control " v-model="addParam.maxArea" placeholder=""/>
                            <span class="pos-ab pos-tr">㎡</span>
                        </div>
                    </div>

                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">最小工位</label><span class="sign-left">:</span>
                        <div class="col-md-8">
                            <input type="text" class="form-control " v-model="addParam.minStationNum" placeholder=""/>
                        </div>
                    </div>
                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">最大工位</label><span class="sign-left">:</span>
                        <div class="col-md-8">
                            <input type="text" class="form-control " v-model="addParam.maxStationNum" placeholder=""/>
                        </div>
                    </div>

                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">楼层</label><span class="sign-left">:</span>
                        <div class="col-md-8">
                            <input type="text" class="form-control " v-model="addParam.floor" placeholder=""/>
                        </div>
                    </div>

                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">层高</label><span class="sign-left">:</span>
                        <div class="col-md-8">
                            <input type="text" class="form-control " v-model="addParam.floorHeight" placeholder=""/>
                        </div>
                    </div>
                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">楼盘地址</label><span class="sign-left">:</span>
                        <div class="col-md-8">
                            <textarea class="form-control wdType02" style="resize:none" placeholder=""
                                      v-model="addParam.adress"/>
                        </div>
                    </div>

                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">开发商</label><span class="sign-left">:</span>
                        <div class="col-md-8">
                            <textarea class="form-control wdType02" style="resize:none" placeholder=""
                                      v-model="addParam.devId"/>
                        </div>
                    </div>
                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">距地铁</label><span class="sign-left">:</span>
                        <div class="col-md-8">
                            <input class="form-control " v-model="addParam.periphery" placeholder=""/>
                        </div>
                    </div>
                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">客梯数</label><span class="sign-left">:</span>
                        <div class="col-md-8">
                            <input class="form-control " v-model="addParam.elevatorNum" placeholder=""/>
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
                               style="padding:0;line-height:34px;">头图</label><span class="sign-left">:</span>
                        <div class="col-md-8">
                            <input type="file" id="headImg" @change="headImgChange" accept="image/*"/>
                            <p class="redtips">*注意：宽280px*高215px</p>

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
                               style="padding:0;line-height:34px;">图片</label><span
                        class="sign-left">:</span>
                        <div class="col-md-8">
                            <input type="file" id="buildRealImg" @change="buildRealImgChange" accept="image/*"
                                   multiple="multiple"/>
                            <p class="redtips">*注意：宽780px*高450px</p>
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
                    <div class="col-md-12 form-group clearfix">
                        <div class="col-md-6  clearfix" style="padding: 0;">
                            <label class="col-md-3 control-label text-right nopad end-aline"
                                   style="padding:0;line-height:34px;">楼盘介绍</label><span class="sign-left">:</span>
                        </div>
                        <div class="col-md-12 ">
                            <textarea class="form-control wdType03" v-model="addParam.projectIntroduction"
                                      placeholder="楼盘介绍"></textarea>
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
    import bt from "./BuildShareType";
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
    import Business from "./subBu/subBusiness";

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
            bt,
            // BuildHorseTypes,
            // isSale,
            // lt,
            Business,
            ldt,
            // dev,
            Charas,
            Counselor,
            pro,
            // Region,
            // Metros,
            PlayAV
        },
        data() {
            return {
                addParam: {
                    // 楼盘名称
                    htName: '',

                    // 省份ID
                    proId: '',

                    // 区域ID
                    ldId: '',

                    // 最小面积
                    minArea: '',

                    // 最大面积
                    maxArea: '',

                    // 最大单价
                    maxUnitPrice: '',

                    // 最小单价
                    minUnitPrice: '',

                    // 最大总价
                    maxTitlePrice: '',

                    // 最小总价
                    minTitlePrice: '',

                    // 楼盘地址
                    adress: '',

                    // 开发商id
                    devId: '',

                    // 建筑面积
                    floorage: '',

                    // 物业公司
                    propertyCompany: '',

                    // 项目介绍
                    projectIntroduction: '',

                    // 人气值
                    popularity: 1,

                    // 热搜值
                    hotSearch: '',

                    // 特价值
                    specialOffer: '',

                    // 热销值
                    sellWell: 1,

                    // 是否推荐户型（2：是；3：否）
                    recommend: '3',

                    // 是否是优选楼盘（1：是；2：否）
                    optimization: '',

                    // 是否是品质楼盘（1：是；2：否）
                    quality: '',

                    // 联系方式
                    tel: '',

                    // 经度
                    longitude: '',

                    // 纬度
                    latitude: '',

                    // 排序权重
                    sort: '',

                    // 楼层
                    floor: '',

                    // 客梯数
                    elevatorNum: '',

                    // 标准层高
                    floorHeight: '',

                    // 入住企业
                    enterprises: '',

                    // 咨询师id
                    couId: '',

                    // 商圈id
                    businessId: '',

                    // 楼盘类型
                    buildTypeList: [],

                    // 周边
                    periphery: '',

                    // 特色
                    chaIdList: [],

                    // 最小工位数
                    minStationNum: '',

                    // 最大工位数
                    maxStationNum: '',
                },
                title: '',
                // effectImgList:
                //     [],
                // effectImgFileList:
                //     [],
                // enPlanImgList:
                //     [],
                // enPlanImgFileList:
                //     [],
                buildRealImgList:
                    [],
                buildRealImgFileList:
                    [],
                // matchingRealImgList:
                //     [],
                // matchingRealImgFileList:
                //     [],
                headImgList:
                    [],
                headImgFileList:
                    [],
                // regionImgList: [],
                // regionImgFileList: [],
                isDisable: false,
                size: 0,
                imgData: {
                    accept: 'image/gif, image/jpeg, image/png, image/jpg',
                },
                playAvOutDivFlag: true,
                videoName: '',
                loading: false,
                btnName: '确认',
            }
                ;
        },
        methods: {
            // Initialization projcet’s content
            initData(param, addParam) {
                this.btnName = '确认'
                this.loading = false
                this.$refs.btRef.queryData()
                // this.effectImgList = []
                //
                // this.enPlanImgList = []

                this.buildRealImgList = []

                // this.matchingRealImgList = []
                //
                this.headImgList = []
                //
                // this.regionImgList = []

                this.videoName = ''
                // this.effectImgFileList = []
                // this.enPlanImgFileList = []
                this.buildRealImgFileList = []
                // this.matchingRealImgFileList = []
                this.headImgFileList = []
                // this.regionImgFileList = []

                // $("#effectImg").val("");
                // $("#enPlanImg").val("");
                $("#buildRealImg").val("");
                // $("#matchingRealImg").val("");
                // $("#regionImg").val("");
                $("#headImg").val("");
                $("#video").val("");
                $('#buildDialog').modal({backdrop: 'static', keyboard: false});
                if (param === 'add') {
                    this.title = '新增'
                    this.$refs.ldtRef.setLdtId('0')
                    this.$refs.btRef.setBstIdList([])
                    this.$refs.couRef.setCouId('0')
                    this.$refs.buRef.setBuId('0')
                    // this.$refs.saleRef.setIsSale('0')
                    // this.$refs.devRef.setDevId(addParam.devId)
                    this.$refs.charsRef.setCharaList([])
                    // this.$refs.bhtsRef.setBhtIdList([])
                    // this.$refs.proRef.setProId('2')
                    // this.$refs.regionRef.setRegionId('0')
                    // this.$refs.metrosRef.setMetroIdList([])
                    this.addParam = {
                        // 楼盘名称
                        htName: '',

                        // 省份ID
                        proId: '',

                        // 区域ID
                        ldId: '',

                        // 最小面积
                        minArea: '',

                        // 最大面积
                        maxArea: '',

                        // 最大单价
                        maxUnitPrice: '',

                        // 最小单价
                        minUnitPrice: '',

                        // 最大总价
                        maxTitlePrice: '',

                        // 最小总价
                        minTitlePrice: '',

                        // 楼盘地址
                        adress: '',

                        // 开发商id
                        devId: '',

                        // 建筑面积
                        floorage: '',

                        // 物业公司
                        propertyCompany: '',

                        // 项目介绍
                        projectIntroduction: '',

                        // 人气值
                        popularity: 1,

                        // 热搜值
                        hotSearch: '',

                        // 特价值
                        specialOffer: '',

                        // 热销值
                        sellWell: 1,

                        // 是否推荐户型（1：是；2：否）
                        recommend: '3',

                        // 是否是优选楼盘（1：是；2：否）
                        optimization: '',

                        // 是否是品质楼盘（1：是；2：否）
                        quality: '',

                        // 联系方式
                        tel: '',

                        // 经度
                        longitude: '',

                        // 纬度
                        latitude: '',

                        // 排序权重
                        sort: '',

                        // 楼层
                        floor: '',

                        // 客梯数
                        elevatorNum: '',

                        // 标准层高
                        floorHeight: '',

                        // 入住企业
                        enterprises: '',

                        // 咨询师id
                        couId: '',

                        // 商圈id
                        businessId: '',

                        // 楼盘类型
                        buildTypeList: [],

                        // 周边
                        periphery: '',

                        // 特色
                        chaIdList: [],

                        // 最小工位数
                        minStationNum: '',

                        // 最大工位数
                        maxStationNum: ''

                    }
                } else if (param === 'modify') {
                    // if (this.isBlank(addParam.videoPath)) {
                    //     this.playAvOutDivFlag = false
                    //     $("#playAvOutDiv").modal("hide")
                    // } else {
                    this.videoName = addParam.videoName
                    // this.$refs.playRef.initData(this.url + addParam.videoPath)
                    // }
                    // console.log('Initialization evaluation’s content, which modifies evaluation')
                    this.title = '修改'

                    // this.param.buildId = addParam.buildId;
                    // this.param.sort = addParam.sort;
                    // this.param.isMobile = addParam.isMobile
                    // this.param.mobileHead = addParam.mobileHead;
                    // this.param.mobileIntroduction = addParam.mobileIntroduction;
                    //
                    // if (null !== addParam.effectPathList) {
                    //     var en = []
                    //     for (var i = 0; i < addParam.effectPathList.length; i++) {
                    //         en.push(this.url + addParam.effectPathList[i])
                    //     }
                    //     this.effectImgList = en
                    // }
                    //
                    //
                    // if (null !== addParam.enPlanPathList) {
                    //     var enPlan = []
                    //     for (var i = 0; i < addParam.enPlanPathList.length; i++) {
                    //         enPlan.push(this.url + addParam.enPlanPathList[i])
                    //     }
                    //     this.enPlanImgList = enPlan
                    // }


                    if (null !== addParam.picturePath) {
                        var buildRea = []
                        for (var i = 0; i < addParam.picturePath.length; i++) {
                            buildRea.push(this.url + addParam.picturePath[i])
                        }
                        this.buildRealImgList = buildRea
                    }


                    // if (null !== addParam.matchingRealPathList) {
                    //     var matching = []
                    //     for (var i = 0; i < addParam.matchingRealPathList.length; i++) {
                    //         matching.push(this.url + addParam.matchingRealPathList[i])
                    //     }
                    //     this.matchingRealImgList = matching
                    // }


                    // if (null !== addParam.regionPathList) {
                    //     var region = []
                    //     for (var i = 0; i < addParam.regionPathList.length; i++) {
                    //         region.push(this.url + addParam.regionPathList[i])
                    //     }
                    //     this.regionImgList = region
                    // }

                    //
                    if (null != addParam && null != addParam.headPath) {
                        var img = []
                        img.push(this.url + addParam.headPath)
                        this.headImgList = img
                    }


                    // console.log(JSON.stringify(addParam))
                    this.$refs.ldtRef.setLdtId(addParam.ldId)
                    if (addParam.buildTypeList) {
                        this.$refs.btRef.setBstIdList(addParam.buildTypeList)
                    }
                    // this.$refs.saleRef.setIsSale(addParam.isSale)
                    // this.$refs.devRef.setDevId(addParam.devId)
                    if (addParam.chaIdList) {
                        this.$refs.charsRef.setCharaList(addParam.chaIdList)
                    }

                    // this.$refs.bhtsRef.setBhtIdList(addParam.bhtIdList)
                    // this.$refs.proRef.setProId(addParam.proId)
                    this.$refs.couRef.setCouId(addParam.couId)
                    this.$refs.buRef.setBuId(addParam.businessId)
                    // this.$refs.regionRef.setRegionId(addParam.regionId)
                    // this.$refs.metrosRef.setMetroIdList(addParam.metroIdList)
                    Object.assign(this.addParam, addParam)
                }
            },


            certainAction() {
                if (this.isBlank(this.addParam.htName)) {
                    alert('楼盘名称必填')
                    return
                }

                if (this.isBlank(this.addParam.longitude) || this.addParam.longitude == 0) {
                    alert('经度必填，且不能为0')
                    return
                } else {
                    if (this.formatResultToAbs(parseFloat(this.addParam.longitude)) > 180) {
                        alert('经度范围 -180~180，请填写正确的经度')
                        return
                    }
                }

                if (this.isBlank(this.addParam.latitude) || this.addParam.latitude == 0) {
                    alert('纬度必填，且不能为0')
                    return
                } else {
                    if (this.formatResultToAbs(parseFloat(this.addParam.latitude)) > 90) {
                        alert('纬度范围 -90~90，请填写正确的纬度')
                        return
                    }
                }

                if (this.isBlank(this.addParam.floorage) || this.addParam.floorage == 0) {
                    alert('建筑面积必填，且只能填正数，最多保留2位小数')
                    return
                } else {
                    if (!(/^(([0-9]*$)|([0-9]+(.[0-9]{1,2})?))$/).test(this.addParam.floorage)) {
                        alert('建筑面积必填，且只能填正数，最多保留2位小数')
                        return;
                    }
                }

                if (this.isBlank(this.addParam.propertyCompany)) {
                    alert('物业公司必填')
                    return
                }

                // if (this.isBlank(this.addParam.proId)) {
                //     alert('省份必选')
                //     return
                // }

                if (this.isBlank(this.addParam.ldId)) {
                    alert('区域必选')
                    return
                }

                if (this.isBlank(this.addParam.businessId)) {
                    alert('商圈必选')
                    return
                }

                if (this.addParam.buildTypeList == null || this.addParam.buildTypeList.length === 0 || this.addParam.buildTypeList === []) {
                    alert('类型必选')
                    return
                }

                if (this.addParam.sellWell != null && this.addParam.sellWell !== '' && parseInt(this.addParam.sellWell) !== 0) {
                    if (!(/^([0-9]*$)$/).test(this.addParam.sellWell)) {
                        alert('热销值只能是整数')
                        return;
                    }
                }


                if (this.addParam.popularity != null && this.addParam.popularity !== '' && parseInt(this.addParam.popularity) !== 0) {
                    if (!(/^([0-9]*$)$/).test(this.addParam.popularity)) {
                        alert('人气值只能是整数')
                        return;
                    }
                }

                if (this.isBlank(this.addParam.enterprises)) {
                    alert('入驻企业必填')
                    return
                }

                if (this.isBlank(this.addParam.minUnitPrice) || this.addParam.minUnitPrice == 0) {
                    alert('最低单价必填，且只能填正数，最多保留2位小数')
                    return
                } else {
                    if (!(/^(([0-9]*$)|([0-9]+(.[0-9]{1,2})?))$/).test(this.addParam.minUnitPrice)) {
                        alert('最低单价必填，且只能填正数，最多保留2位小数')
                        return;
                    }
                }
                if (this.isBlank(this.addParam.maxUnitPrice) || this.addParam.maxUnitPrice == 0) {
                    alert('最高单价必填，且只能填正数，最多保留2位小数')
                    return
                } else {
                    if (!(/^(([0-9]*$)|([0-9]+(.[0-9]{1,2})?))$/).test(this.addParam.maxUnitPrice)) {
                        alert('最高单价必填，且只能填正数，最多保留2位小数')
                        return;
                    }
                }
                if (parseFloat(this.addParam.minUnitPrice) > parseFloat(this.addParam.maxUnitPrice)) {
                    alert('最高单价不能小于最低单价')
                    return;
                }


                if (this.isBlank(this.addParam.minTitlePrice) || this.addParam.minTitlePrice == 0) {
                    alert('最低总价必填，且只能填正数，最多保留2位小数')
                    return
                } else {
                    if (!(/^(([0-9]*$)|([0-9]+(.[0-9]{1,2})?))$/).test(this.addParam.minTitlePrice)) {
                        alert('最低总价必填，且只能填正数，最多保留2位小数')
                        return;
                    }
                }
                if (this.isBlank(this.addParam.maxTitlePrice) || this.addParam.maxTitlePrice == 0) {
                    alert('最高总价必填，且只能填正数，最多保留2位小数')
                    return
                } else {
                    if (!(/^(([0-9]*$)|([0-9]+(.[0-9]{1,2})?))$/).test(this.addParam.maxTitlePrice)) {
                        alert('最高总价必填，且只能填正数，最多保留2位小数')
                        return;
                    }
                }
                if (parseFloat(this.addParam.minTitlePrice) > parseFloat(this.addParam.maxTitlePrice)) {
                    alert('最高总价不能小于最低总价')
                    return;
                }


                if (this.isBlank(this.addParam.minArea) || this.addParam.minArea == 0) {
                    alert('最小面积必填，且只能填正数，最多保留2位小数')
                    return
                } else {
                    if (!(/^(([0-9]*$)|([0-9]+(.[0-9]{1,2})?))$/).test(this.addParam.minArea)) {
                        alert('最小面积必填，且只能填正数，最多保留2位小数')
                        return;
                    }
                }
                if (this.isBlank(this.addParam.maxArea) || this.addParam.maxArea == 0) {
                    alert('最大面积必填，且只能填正数，最多保留2位小数')
                    return
                } else {
                    if (!(/^(([0-9]*$)|([0-9]+(.[0-9]{1,2})?))$/).test(this.addParam.maxArea)) {
                        alert('最大面积必填，且只能填正数，最多保留2位小数')
                        return;
                    }
                }
                if (parseFloat(this.addParam.minArea) > parseFloat(this.addParam.maxArea)) {
                    alert('最大面积不能小于最小面积')
                    return;
                }

                if (this.isBlank(this.addParam.minStationNum) || this.addParam.minStationNum == 0) {
                    alert('最小工位必填，且只能填正数')
                    return
                } else {
                    if (!(/^([0-9]*$)$/).test(this.addParam.minStationNum)) {
                        alert('最小工位必填，且只能填正数')
                        return;
                    }
                }
                if (this.isBlank(this.addParam.maxStationNum) || this.addParam.maxStationNum == 0) {
                    alert('最大工位必填，且只能填正数')
                    return
                } else {
                    if (!(/^([0-9]*$)$/).test(this.addParam.maxStationNum)) {
                        alert('最大工位必填，且只能填正数')
                        return;
                    }
                }
                if (parseFloat(this.addParam.minStationNum) > parseFloat(this.addParam.maxStationNum)) {
                    alert('最大工位不能小于最小工位')
                    return;
                }

                if (this.isBlank(this.addParam.devId)) {
                    alert('开发商必填')
                    return
                }

                if (this.isBlank(this.addParam.adress)) {
                    alert('楼盘地址必填')
                    return
                }

                // if (this.isBlank(this.addParam.tel)) {
                //    alert('请输入正确的联系方式')
                //    return;
                // } else {
                //     if (!((/^((1[345678]\d{9})|(\d{2,3}\d{7,8})|(\d{2,3}-\d{7,8}))$/).test(this.addParam.tel))) {
                //         alert('请输入正确的联系方式')
                //         return;
                //     }
                // }

                if (this.isBlank(this.addParam.couId)) {
                    alert('经纪人必选')
                    return
                }
                if (this.isBlank(this.addParam.projectIntroduction)) {
                    alert('楼盘介绍必填')
                    return
                }

                if(this.headImgList.length == 0){
                    alert('请选择头图')
                    return
                }

                if(this.buildRealImgList.length == 0){
                    alert('请选择图片')
                    return
                }
                // projectIntroduction


                // if (this.addParam.coveredArea != null && this.addParam.coveredArea !== '' && parseFloat(this.addParam.coveredArea) !== 0) {
                //     if (!(/^(([0-9]*$)|([0-9]+(.[0-9]{1,2})?))$/).test(this.addParam.coveredArea)) {
                //         alert('占地面积只能是整数或者1-2位小数的正实数')
                //         return;
                //     }
                // }


                // if (this.addParam.specialOffer != null && this.addParam.specialOffer !== '' && parseInt(this.addParam.specialOffer) !== 0) {
                //     if (!(/^([0-9]*$)$/).test(this.addParam.specialOffer)) {
                //         alert('特价值只能是整数')
                //         return;
                //     }
                // }

                // if (this.addParam.hotSearch != null && this.addParam.hotSearch !== '' && parseInt(this.addParam.hotSearch) !== 0) {
                //     if (!(/^([0-9]*$)$/).test(this.addParam.hotSearch)) {
                //         alert('热搜值只能是整数')
                //         return;
                //     }
                // }

                this.loading = true
                this.btnName = '提交中...'

                const fd = new FormData();
                // 效果图
                // const effectImg = $("#effectImg")[0].files;
                // for (let i = 0; i < this.effectImgFileList.length; i++) {
                //     fd.append("effectImg", this.effectImgFileList[i]);
                // }
                //
                // // 环境规划
                // // const enPlanImg = $("#enPlanImg")[0].files;
                // for (let i = 0; i < this.enPlanImgFileList.length; i++) {
                //     fd.append("enPlanImg", this.enPlanImgFileList[i]);
                // }
                // 楼盘实景
                // const buildRealImg = $("#buildRealImg")[0].files;
                for (let i = 0; i < this.buildRealImgFileList.length; i++) {
                    fd.append("buildRealImg", this.buildRealImgFileList[i]);
                }
                // 配套实景
                // const matchingRealImg = $("#matchingRealImg")[0].files;
                // for (let i = 0; i < this.matchingRealImgFileList.length; i++) {
                //     fd.append("matchingRealImg", this.matchingRealImgFileList[i]);
                // }

                // 头图
                for (let i = 0; i < this.headImgFileList.length; i++) {
                    fd.append("headImg", this.headImgFileList[i]);
                }
                // 区位
                // for (let i = 0; i < this.regionImgFileList.length; i++) {
                //     fd.append("regionImg", this.regionImgFileList[i]);
                // }
                // 视频
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
                fd.append("addParam", JSON.stringify(this.addParam));
                switch (this.title) {
                    case '新增':
                        var url = this.url + '/buildingBean/addBuilding'
                        break;
                    case '修改':
                        var url = this.url + '/buildingBean/patchById'
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
                        this.loading = false
                        this.btnName = '提交成功'
                        if (this.addParam.isMobile == 1) {
                            // this.param.buildId = res.retData.buildId;
                            // this.param.sort = res.retData.sort;
                            // this.param.mobileHead = res.retData.mobileHead;
                            // this.param.mobileIntroduction = res.retData.mobileIntroduction;

                            // this.$parent.$refs.mobileDialogRef.initRef(this.param)
                            // $('#mobileDialog').modal({backdrop: 'static', keyboard: true});
                            // $("#mobileDialog").modal('show')
                        } else {
                            setTimeout(() => {
                                this.$emit('certainAction')
                            }, 2000)
                        }

                    } else {
                        alert(res.retMsg)
                        this.$emit('certainAction')
                    }
                }).catch((error) => {
                    console.log(error);
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

            // fatherBhtReceive(data) {
            //     this.addParam.bhtIdList = []
            //     this.addParam.bhtIdList = data
            // },
            fatherBtReceive(data) {
                this.addParam.buildTypeList = []
                if (null != data) {
                    this.addParam.buildTypeList = data
                }

            },

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

            fatherLdtReceive(data) {
                this.addParam.ldId = ''
                if (null != data) {
                    this.addParam.ldId = data
                }
                this.addParam.businessId = ''

                this.$refs.buRef.setLdId(data)
            },
            fatherBuReceive(data) {
                this.addParam.businessId = ''
                if (null != data) {
                    this.addParam.businessId = data
                }

            },
            // fatherMetrosReceive(data) {
            //     this.addParam.metroIdList = []
            //     this.addParam.metroIdList = data
            // },
            // fatherDevReceive(data) {
            //     this.addParam.devId = ''
            //     this.addParam.devId = data
            // },
            fatherChReceive(data) {
                this.addParam.chaIdList = []
                this.addParam.chaIdList = data
            },
            fatherRegReceive(data) {
                this.addParam.regionId = ''
                this.addParam.regionId = data
            },
            // fatherProReceive(data) {
            //     this.addParam.proId = ''
            //     if (null != data) {
            //         this.addParam.proId = data
            //     }
            //     this.$refs.ldtRef.setProId(data)
            // },
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
            numberValidate(input) {
                if (typeof (input) === 'boolean') {
                    // validate input is boolean
                    return false;
                }
                let inputStr = input.trim() + '';
                if (inputStr.length === 0) {
                    // input is empty string or empty array
                    return false;
                }
                let inputNum = Number(inputStr);
                if (typeof (inputNum) === 'number' && !isNaN(inputNum)) {
                    // inputNum type is number && it is not NaN
                    return true;
//		return inputNum; // or you can return a number
                }
                return false;
            },

            formatResultToAbs(input) {
                return Math.abs(input);
            }

        },
        computed: {
            editor() {
                return this.$refs.myQuillEditor.quill
            }
        }
        ,
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

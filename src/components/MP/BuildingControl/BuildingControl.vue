<template>
    <div>
        <!-- <div class="col-md-12 col-lg-12 main-title">
            <h1 class="titleCss">楼盘管理</h1>
        </div> -->
        <div class="row newRow" style="margin-top: 1%;">
            <!--类型-->
            <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                <div class="col-xs-5 col-sm-5 col-md-5 col-lg-5" style="padding: 0; line-height: 34px;">
                    <p class="end-aline col-md-11 col-lg-11" style="padding-right:5px; padding-left:20px;">类型</p><span
                    class="sign-left">:</span>
                </div>
                <div class="col-xs-7 col-sm-7 col-md-7 col-lg-7">
                    <bt @btChange='fatherBtReceive' ref="btRef"></bt>
                </div>
            </div>
            <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                <div class="col-xs-5 col-sm-5 col-md-5 col-lg-5" style="padding: 0; line-height: 34px;">
                    <p class="end-aline col-md-11 col-lg-11" style="padding-right:5px; padding-left:20px;">单价</p><span
                    class="sign-left">:</span>
                </div>
                <div class="col-xs-7 col-sm-7 col-md-7 col-lg-7">
                    <un @unitChange = 'fatherUnReceive' ref="unRef"></un>
                </div>
            </div>
            <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                <div class="col-xs-5 col-sm-5 col-md-5 col-lg-5" style="padding: 0; line-height: 34px;">
                    <p class="end-aline col-md-11 col-lg-11" style="padding-right:5px; padding-left:20px;">总价</p><span
                    class="sign-left">:</span>
                </div>
                <div class="col-xs-7 col-sm-7 col-md-7 col-lg-7">
                    <to @totalChange = 'fatherToReceive' ref="toRef"></to>
                </div>
            </div>

        </div>

        <div class="row newRow" style="margin-top: 1%">

            <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                <div class="col-xs-5 col-sm-5 col-md-5 col-lg-5" style="padding: 0; line-height: 34px;">
                    <p class="end-aline col-md-11 col-lg-11" style="padding-right:5px; padding-left:20px;">区域</p><span
                    class="sign-left">:</span>
                </div>
                <div class="col-xs-7 col-sm-7 col-md-7 col-lg-7">
                    <ldt @ldtChange='fatherLdtReceive' ref="ldt"></ldt>
                </div>
            </div>
            <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                <div class="col-xs-5 col-sm-5 col-md-5 col-lg-5" style="padding: 0; line-height: 34px;">
                    <p class="end-aline col-md-11 col-lg-11" style="padding-right:5px; padding-left:20px;">商圈</p><span
                    class="sign-left">:</span>
                </div>
                <div class="col-xs-7 col-sm-7 col-md-7 col-lg-7">
                    <Business @buChange='fatherBuReceive' ref="buRef"></Business>
                </div>
            </div>
            <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                <div class="col-xs-5 col-sm-5 col-md-5 col-lg-5" style="padding: 0; line-height: 34px;">
                    <p class="end-aline col-md-11 col-lg-11" style="padding-right:5px; padding-left:20px;">面积</p><span
                    class="sign-left">:</span>
                </div>
                <div class="col-xs-7 col-sm-7 col-md-7 col-lg-7">
                    <ar @areaChange = 'fatherAreaReceive' ref="arRef"></ar>
                </div>
            </div>
        </div>

        <div class="row newRow" style="margin-top: 1%">

            <button type="button" class="btn btn-warning pull-right m_r_10" style="margin-right:1.5%;" data-toggle="modal"
                       v-on:click="selectRule('1')">添加</button>
            <button type="button" class="btn btn-primary pull-right m_r_10" style="margin-right:1.5%;"
                    data-toggle="modal"
                    v-on:click="queryData(1)">查询
            </button>

        </div>


        <div class="" style="margin-top: 2%">
            <div class="col-md-12 col-lg-12">
                <div class="table-responsive  table-bg">
                    <table class="table table-bordered table-hover" id="datatable">
                        <thead class="datathead">
                        <tr>
                            <th class="text-center">楼盘名</th>
                            <th class="text-center">区域</th>
                             <th class="text-center">商圈</th>
                            <th class="text-center">类型</th>
                            <th class="text-center">面积</th>
                            <th class="text-center">咨询师</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="(item,index) in tableData" :key="index" v-on:dblclick="selectRule('3',item)">
                            <td class="text-center" style="line-height:33px;">{{item.htName}}</td>
                            <td class="text-center" style="line-height:33px;">{{item.ldName}}</td>
                            <!-- <td class="text-center" style="line-height:33px;">{{item.adress}}</td> -->
                            <td class="text-center" style="line-height:33px;">{{item.buName}}</td>
                            <td class="text-center" style="line-height:33px;">{{item.btName}}</td>
<!--                            <td class="text-center" style="line-height:33px;">{{item.chaName}}</td>-->
                            <td class="text-center" style="line-height:33px;">{{item.floorage}}</td>
                            <td class="text-center" style="line-height:33px;">{{item.counselorBean==null ?"-":item.counselorBean.couName }}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div class="row row_edit">
                    <div class="modal fade" id="buildDialog" >
                        <div class="modal-dialog">
                            <build-dialog ref='buildDialog' @certainAction='feedBack'></build-dialog>
                        </div>
                    </div>
<!--                    <div class="modal fade" id="mobileDialog" style="margin-left: 69%">-->
<!--                        <div class="modal-dialog" style="width: 90%">-->
<!--                            <MobileDialog ref='mobileDialogRef' @certainAction='feedBackMobile'></MobileDialog>-->
<!--                        </div>-->
<!--                    </div>-->
                </div>
                <!--分页插件-->
                <div class="page">
                    <!--这里时通过props传值到子级，并有一个回调change的函数，来获取自己传值到父级的值-->
                    <paging ref="paging" @change="pageChange"></paging>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import datePicker from 'vue2-datepicker'
    import bt from '../../common/BildType.vue'
    import bht from '../../common/BuildHorseType.vue'
    import isSale from '../../common/IsSale.vue'
    import MobileDialog from '../../common/MobileDialog.vue'
    import ldt from '../../common/LocationDType.vue'
    import ar from '../../common/Area.vue'
    import un from '../../common/UnitPrice.vue'
    import to from '../../common/TotalPrice.vue'
    import dev from '../../common/Dev.vue'
    import chara from '../../common/Chara.vue'
    import paging from '../../common/Paging.vue'
    import buildDialog from '../../common/BuildDialog.vue'
    import Business from "../../common/subBu/subBusiness";
    import Region from '../../common/Region.vue'
    import Metro from '../../common/Metro.vue'
    import PlayAV from "../../common/PlayAV";
    export default {
        components: {
            datePicker,
            bt,
            // bht,
            // isSale,
            // lt,
            ldt,
            Business,
            ar,
            un,
            to,
            // dev,
            chara,
            paging,
            buildDialog,
            // Region,
            // Metro,
            // MobileDialog
        },
        data() {
            return {
                tableData: [],
                openTime: [],
                buildTypeList: [],
                buildHorseTypeList: [],
                bhtSon: [],
                buildType: '',
                isSaleSon: [],
                ltSon: [],
                locationType:'',
                areaSon:[],
                unSon:[],
                toSon:[],
                devSon:[],
                charaSon:[],
                regionId:'',
                metroId:'',
                businessId: '',
                //分页需要的数据
                pages: '', //总页数
                current: 1, //当前页码
                pageSize: 10, //一页显示的数量
                total: '', //数据的数量
            };
        },
        name: "BuildingControl",
        methods: {

            //子级传值到父级上来的动态拿去
            pageChange: function(page) {
                this.current = page
                this.queryData(page)
            },
            fatherBhtReceive(data) {
                this.bhtSon = []
                if (null !== data) {
                    this.bhtSon.push(data.bhtId)
                }
            },
            fatherBtReceive(data) {
                this.buildType = ''
                if (null !== data) {
                    this.buildType = data
                }
            },
            fatherIsSaleReceive(data) {
                this.isSaleSon = []
                if (null !== data) {
                    this.isSaleSon.push(data)
                }

            },
            // fatherLtReceive(data) {
            //     this.$refs.ldt.locationTypeChange(data)
            // },
            fatherMetroReceive(data) {
                this.metroId = data
            },
            fatherLdtReceive(data) {
                this.ltSon = []
                if (null !== data) {
                    this.ltSon.push(data)
                }

            },
            fatherBuReceive(data) {
                this.businessId = ''
                if (null != data) {
                    this.businessId = data
                }

            },
            fatherAreaReceive(data) {
                this.areaSon = []
                if (null != data) {
                    let areaParam = {
                        minArea:data.begArea,
                        maxArea:data.endArea
                    }
                    this.areaSon.push(areaParam)
                }
            },
            fatherUnReceive(data) {
                this.unSon = []
                if (null != data) {
                    var begPrice = null;
                    if (null != data.begPrice) {
                        begPrice = data.begPrice*10000
                    }
                    var endPrice = null;
                    if (null != data.endPrice) {
                        endPrice = data.endPrice*10000
                    }
                    let unParam = {
                        minUnitPrice:begPrice,
                        maxUnitPrice:endPrice
                    }
                    this.unSon.push(unParam)
                }
            },
            fatherToReceive(data) {
                this.toSon = []
                if (null != data) {
                    let toParam = {
                        minTitlePrice:data.begPrice,
                        maxTitlePrice:data.endPrice
                    }
                    this.toSon.push(toParam)
                }
            },
            fatherDevReceive(data) {
                this.devSon = []
                if (null !== data) {
                    this.devSon.push(data)
                }
            },
            fatherChReceive(data) {
                this.charaSon = []
                if (null !== data) {
                    this.charaSon.push(data)
                }
            },
            fatherRegReceive(data) {
                this.regionId = ''
                this.regionId = data
            },
            async queryData(page) {
                var url = this.url + '/buildingBean/getAllBulidBypages'
                this.$ajax({
                    method: 'POST',
                    url: url,
                    headers: {
                        'Content-Type': this.contentType,
                        'Access-Token': this.accessToken
                    },
                    data: {
                        bhtIdList: this.bhtSon,
                        buildType: this.buildType,
                        isSaleList: this.isSaleSon,
                        ldIdList: this.ltSon,
                        startTime:this.openTime[0],
                        endTime:this.openTime[1],
                        areaList:this.areaSon,
                        totalPriceList:this.toSon,
                        unitPriceList:this.unSon,
                        devIdList:this.devSon,
                        chaIdList:this.charaSon,
                        regionId:this.regionId,
                        metroId:this.metroId,
                        businessId: this.businessId,
                        current: page,
                        pageSize: this.pageSize
                    },
                    dataType: 'json',
                }).then((response) => {
                    var res = response.data
                    if (res.retCode === '0000') {
                        this.pages = res.retData.pages //总页数
                        this.current = res.retData.current //当前页码
                        this.pageSize = res.retData.size //一页显示的数量  必须是奇数
                        this.total = res.retData.total //数据的数量
                        this.$refs.paging.setParam(this.pages, this.current, this.total)
                        this.tableData = res.retData.records
                    } else {
                        alert(res.retMsg)
                    }
                }).catch((error) => {
                    console.log('数据请求失败处理')
                });
            },
            selectRule(param, item) {
                if (param === "1") {
                    this.$refs.buildDialog.initData('add')
                    $("#buildDialog").modal('show')
                } else if (param === "3") {
                    this.$refs.buildDialog.initData('modify', item)
                    $("#buildDialog").modal('show')
                }

            },
            feedBack() {
                this.queryData(this.current)
                $("#buildDialog").modal('hide')
            },

            feedBackMobile() {
                this.queryData(1)
                $("#mobileDialog").modal('hide')
            },
            // dataLook(obj){
            //     if (null == obj)return
            //     list:[]
            //     for (let i = 0; i < this.obj.length; i++) {
            //         list.push(obj[i])
            //     }
            //     list.join('\')
            // }
        },
        mounted() {
            this.$refs.unRef.setType(1)
            this.$refs.toRef.setType(1)
            this.$refs.arRef.setType(1)
            this.$refs.btRef.setType(1)
        },
        created: function () {
            this.queryData()
        }
    }
</script>

<style>

</style>

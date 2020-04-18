<template>
    <div class="wraper">
        <div class="col-md-12 col-lg-12 main-title">
            <h1 class="titleCss">楼盘管理</h1>
        </div>
        <div class="row newRow" style="margin-top: 1%">
            <!--类型-->
            <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                <div class="col-xs-5 col-sm-5 col-md-5 col-lg-5" style="padding: 0; line-height: 34px;">
                    <p class="end-aline col-md-11 col-lg-11" style="padding-right:5px; padding-left:20px;">类型</p><span
                    class="sign-left">:</span>
                </div>
                <div class="col-xs-7 col-sm-7 col-md-7 col-lg-7">
                    <bt @btChange='fatherBtReceive'></bt>
                </div>
            </div>
            <!--户型-->
            <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                <div class="col-xs-5 col-sm-5 col-md-5 col-lg-5" style="padding: 0; line-height: 34px;">
                    <p class="end-aline col-md-11 col-lg-11" style="padding-right:5px; padding-left:20px;">户型</p><span
                    class="sign-left">:</span>
                </div>
                <div class="col-xs-7 col-sm-7 col-md-7 col-lg-7">
                    <bht @bhtChange='fatherBhtReceive'></bht>
                </div>
            </div>
            <!--出售情况-->
            <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                <div class="col-xs-5 col-sm-5 col-md-5 col-lg-5" style="padding: 0; line-height: 34px;">
                    <p class="end-aline col-md-11 col-lg-11" style="padding-right:5px; padding-left:20px;">出售情况</p><span
                    class="sign-left">:</span>
                </div>
                <div class="col-xs-7 col-sm-7 col-md-7 col-lg-7">
                    <is-sale @isSaleChange='fatherIsSaleReceive'></is-sale>
                </div>
            </div>
            <!--特色-->
            <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                <div class="col-xs-5 col-sm-5 col-md-5 col-lg-5" style="padding: 0; line-height: 34px;">
                    <p class="end-aline col-md-11 col-lg-11" style="padding-right:5px; padding-left:20px;">特色</p><span
                    class="sign-left">:</span>
                </div>
                <div class="col-xs-7 col-sm-7 col-md-7 col-lg-7">
                    <chara @charaChange='fatherChReceive'></chara>
                </div>
            </div>
        </div>

        <div class="row newRow" style="margin-top: 1%">

            <!--位置-->
            <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                <div class="col-xs-5 col-sm-5 col-md-5 col-lg-5" style="padding: 0; line-height: 34px;">
                    <p class="end-aline col-md-11 col-lg-11" style="padding-right:5px; padding-left:20px;">位置</p><span
                    class="sign-left">:</span>
                </div>
                <div class="col-xs-7 col-sm-7 col-md-7 col-lg-7">
                    <lt @locationTypeChange='fatherLtReceive'></lt>
                </div>
            </div>
            <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                <div class="col-xs-5 col-sm-5 col-md-5 col-lg-5" style="padding: 0; line-height: 34px;">
                    <p class="end-aline col-md-11 col-lg-11" style="padding-right:5px; padding-left:20px;">时间</p><span
                    class="sign-left">:</span>
                </div>
                <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                    <datePicker v-model="openTime" type="date" value-type="format"
                                 range></datePicker>
                </div>
            </div>
            <!--<div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                <div class="col-xs-5 col-sm-5 col-md-5 col-lg-5" style="padding: 0; line-height: 34px;">
                    <p class="end-aline col-md-11 col-lg-11" style="padding-right:5px; padding-left:20px;">结束时间</p><span
                    class="sign-left">:</span>
                </div>
                <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                    <datePicker v-model="endTime" type="datetime" value-type="format"
                                format="YYYY-MM-DD HH:mm:ss"></datePicker>
                </div>
            </div>-->
        </div>

        <div class="row newRow" style="margin-top: 1%">
            <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                <div class="col-xs-5 col-sm-5 col-md-5 col-lg-5" style="padding: 0; line-height: 34px;">
                    <p class="end-aline col-md-11 col-lg-11" style="padding-right:5px; padding-left:20px;">面积</p><span
                    class="sign-left">:</span>
                </div>
                <div class="col-xs-7 col-sm-7 col-md-7 col-lg-7">
                    <ar @areaChange = 'fatherAreaReceive'></ar>
                </div>
            </div>
            <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                <div class="col-xs-5 col-sm-5 col-md-5 col-lg-5" style="padding: 0; line-height: 34px;">
                    <p class="end-aline col-md-11 col-lg-11" style="padding-right:5px; padding-left:20px;">单价</p><span
                    class="sign-left">:</span>
                </div>
                <div class="col-xs-7 col-sm-7 col-md-7 col-lg-7">
                    <un @unitChange = 'fatherUnReceive'></un>
                </div>
            </div>
            <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                <div class="col-xs-5 col-sm-5 col-md-5 col-lg-5" style="padding: 0; line-height: 34px;">
                    <p class="end-aline col-md-11 col-lg-11" style="padding-right:5px; padding-left:20px;">总价</p><span
                    class="sign-left">:</span>
                </div>
                <div class="col-xs-7 col-sm-7 col-md-7 col-lg-7">
                    <to @totalChange = 'fatherToReceive'></to>
                </div>
            </div>
            <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                <div class="col-xs-5 col-sm-5 col-md-5 col-lg-5" style="padding: 0; line-height: 34px;">
                    <p class="end-aline col-md-11 col-lg-11" style="padding-right:5px; padding-left:20px;">供应商</p><span
                    class="sign-left">:</span>
                </div>
                <div class="col-xs-7 col-sm-7 col-md-7 col-lg-7">
                    <dev @devChange = 'fatherDevReceive'></dev>
                </div>
            </div>
        </div>

        <div class="row newRow" style="padding-bottom:15px;margin-top: 1.5%">
               <button type="button" class="btn btn-warning pull-right m_r_10" style="margin-right:1.5%;" data-toggle="modal"
                       v-on:click="selectRule('1')">添加</button>
            <button type="button" class="btn btn-primary pull-right m_r_10" style="margin-right:1.5%;"
                    data-toggle="modal"
                    v-on:click="queryData">查询
            </button>
        </div>

        <div class="">
            <div class="col-md-12 col-lg-12">
                <div class="table-responsive pre-scrollable table-bg">
                    <table class="table table-bordered table-hover" id="datatable">
                        <thead class="datathead">
                        <tr>
                            <th class="text-center">楼盘名</th>
                            <th class="text-center">出售状态</th>
                            <th class="text-center">地址</th>
                            <th class="text-center">户型</th>
                            <th class="text-center">面积</th>
                            <th class="text-center">类型</th>
                            <th class="text-center">特色</th>
                            <th class="text-center">开盘时间</th>
                            <th class="text-center">参考单价(万)</th>
                            <th class="text-center">参考总价(万)</th>
                            <th class="text-center">咨询师</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="(item,index) in tableData" :key="index">
                            <td class="text-center" style="line-height:33px;">{{item.htName}}</td>
                            <td class="text-center" style="line-height:33px;">{{item.saleLabel}}</td>
                            <td class="text-center" style="line-height:33px;">{{item.adress}}</td>
                            <td class="text-center" style="line-height:33px;">{{item.caName}}</td>
                            <td class="text-center" style="line-height:33px;">{{item.minArea}}-{{item.maxArea}}</td>
                            <td class="text-center" style="line-height:33px;">{{item.btName}}</td>
                            <td class="text-center" style="line-height:33px;">{{item.chaName}}</td>
                            <td class="text-center" style="line-height:33px;">{{item.openDateTime}}</td>
                            <td class="text-center" style="line-height:33px;">{{item.minUnitPrice}}</td>
                            <td class="text-center" style="line-height:33px;">{{item.minTitlePrice}}</td>
                            <td class="text-center" style="line-height:33px;">{{item.couName}}</td>
                           <!-- <td class="text-center" style="line-height:33px;"><button type="button" class="btn btn-warning"
                                                                                      v-on:click="selectRule('3',item)">修改</button></td>-->
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div class="row row_edit">
                    <div class="modal fade" id="buildDialog">
                        <div class="modal-dialog">
                            <build-dialog ref='buildDialog' @certainAction='feedBack'></build-dialog>
                        </div>
                    </div>
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
    import lt from '../../common/LocationType.vue'
    import ar from '../../common/Area.vue'
    import un from '../../common/UnitPrice.vue'
    import to from '../../common/TotalPrice.vue'
    import dev from '../../common/Dev.vue'
    import chara from '../../common/Chara.vue'
    import Paging from '../../common/Paging.vue'
    import buildDialog from '../../common/BuildDialog.vue'
    export default {
        components: {
            datePicker,
            bt,
            bht,
            isSale,
            lt,
            ar,
            un,
            to,
            dev,
            chara,
            Paging,
            buildDialog
        },
        data() {
            return {
                tableData: [],
                openTime: [],
                buildTypeList: [],
                buildHorseTypeList: [],
                bhtSon: [],
                btSon: [],
                isSaleSon: [],
                ltSon: [],
                areaSon:[],
                unSon:[],
                toSon:[],
                devSon:[],
                charaSon:[],

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
                this.bhtSon.push(data)
            },
            fatherBtReceive(data) {
                this.btSon = []
                this.btSon.push(data)
            },
            fatherIsSaleReceive(data) {
                this.isSaleSon = []
                this.isSaleSon.push(data)
            },
            fatherLtReceive(data) {
                this.ltSon = []
                this.ltSon.push(data)
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
                    let unParam = {
                        minUnitPrice:data.begPrice,
                        maxUnitPrice:data.endPrice
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
                this.devSon.push(data)
            },
            fatherChReceive(data) {
                this.charaSon = []
                this.charaSon.push(data)
            },
            async queryData(page) {
                var url = this.url + '/buildingBean/getAllBuildByPage'
                this.$ajax({
                    method: 'POST',
                    url: url,
                    headers: {
                        'Content-Type': this.contentType,
                        'Access-Token': this.accessToken
                    },
                    data: {
                        bhtIdList: this.bhtSon,
                        btIdList: this.btSon,
                        isSaleList: this.isSaleSon,
                        ldIdList: this.ltSon,
                        startTime:this.openTime[0],
                        endTime:this.openTime[1],
                        areaList:this.areaSon,
                        totalPriceList:this.toSon,
                        unitPriceList:this.unSon,
                        devIdList:this.devSon,
                        chaIdList:this.charaSon,
                        pageNum: page,
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
                this.queryData(1)
                $("#buildDialog").modal('hide')
            }
        },
        created: function () {
            this.queryData()
        }
    }
</script>

<style>

</style>

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
        <div class="row newRow" style="padding-bottom:15px;">
            <!--   <button type="button" class="btn btn-warning pull-right m_r_10" style="margin-right:1.5%;" data-toggle="modal"
                       v-on:click="selectRule('1')">添加</button>-->
            <button type="button" class="btn btn-primary pull-right m_r_10" style="margin-right:1.5%;"
                    data-toggle="modal"
                    v-on:click="queryData">查询
            </button>
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
            dev
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
                devSon:[]
            };
        },
        name: "BuildingControl",
        methods: {

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
                        startUnitPrice:data.begPrice,
                        endUnitPrice:data.endPrice
                    }
                    this.unSon.push(unParam)
                }
            },
            fatherToReceive(data) {
                console.log('数据',data)
                this.toSon = []
                if (null != data) {
                    let toParam = {
                        startTitlePrice:data.begPrice,
                        endTitlePrice:data.endPrice
                    }
                    console.log('数据1',toParam)
                    this.toSon.push(toParam)
                    console.log('数据2',this.toSon)
                }
            },
            fatherDevReceive(data) {
                this.devSon = []
                this.devSon.push(data)
            },
            async queryData() {
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
                        devIdList:this.devSon
                    },
                    dataType: 'json',
                }).then((response) => {
                    var res = response.data
                    if (res.retCode === '0000') {
                        this.tableData = res.retData
                    } else {
                        alert(res.retMsg)
                    }
                }).catch((error) => {
                    console.log('数据请求失败处理')
                });
            },
        },
        created: function () {
            this.queryData()
        }
    }
</script>

<style>

</style>

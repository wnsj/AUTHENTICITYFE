<template>
    <div class="wraper">
        <div class="col-md-12 col-lg-12 main-title">
            <h1 class="titleCss">户型分析管理</h1>
        </div>
        <div class="row newRow" style="margin-top: 1%">
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
            <!--楼盘名称-->
            <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                <div class="col-xs-5 col-sm-5 col-md-5 col-lg-5" style="padding: 0; line-height: 34px;">
                    <p class="end-aline col-md-11 col-lg-11" style="padding-right:5px; padding-left:20px;">楼盘名称</p><span
                    class="sign-left">:</span>
                </div>
                <div class="col-xs-7 col-sm-7 col-md-7 col-lg-7">
                    <build @buildChange='fatherBuildReceive'></build>
                </div>
            </div>
        </div>
        <div class="row newRow" style="padding-bottom:15px;margin-top: 1.5%">
               <button type="button" class="btn btn-warning pull-right m_r_10" style="margin-right:1.5%;" data-toggle="modal"
                       v-on:click="selectRule('1')">添加</button>
            <button type="button" class="btn btn-primary pull-right m_r_10" style="margin-right:1.5%;"
                    data-toggle="modal"
                    v-on:click="queryData(1)">查询
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
                            <th class="text-center">户型</th>
                            <th class="text-center">类型</th>
                            <th class="text-center">户型标签</th>
                            <th class="text-center">朝向</th>
                            <th class="text-center">建筑面积</th>
                            <th class="text-center">户型分析</th>
                            <th class="text-center">总价(万)</th>
                            <th class="text-center">首付(万)</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="(item,index) in tableData" :key="index" v-on:dblclick="selectRule('3',item)">
                            <td class="text-center" style="line-height:33px;">{{item.htName}}</td>
                            <td class="text-center" style="line-height:33px;">{{item.saleLabel}}</td>
                            <td class="text-center" style="line-height:33px;">{{item.imgName}}</td>
                            <td class="text-center" style="line-height:33px;">{{item.caName}}</td>
                            <td class="text-center" style="line-height:33px;">{{item.balContent}}</td>
                            <td class="text-center" style="line-height:33px;">{{item.drectionLabel}}</td>
                            <td class="text-center" style="line-height:33px;">{{item.buildArea}}</td>
                            <td class="text-center" style="line-height:33px;">{{item.content}}</td>
                            <td class="text-center" style="line-height:33px;">{{item.totlePrice}}</td>
                            <td class="text-center" style="line-height:33px;">{{item.downPayment}}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div class="row row_edit">
                    <div class="modal fade" id="buildDialog">
                        <div class="modal-dialog">

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
    import bht from '../../common/BuildHorseType.vue'
    import isSale from '../../common/IsSale.vue'
    import paging from '../../common/Paging.vue'
    import build from '../../common/Building.vue'
    export default {
        components: {
            bht,
            isSale,
            paging,
            build
        },
        data() {
            return {
                tableData: [],
                bhtSon: '',
                isSaleSon: '',
                buildSon: '',
                //分页需要的数据
                pages: '', //总页数
                current: 1, //当前页码
                pageSize: 10, //一页显示的数量
                total: '', //数据的数量
            };
        },
        name: "BuildingAnalysis",
        methods: {

            //子级传值到父级上来的动态拿去
            pageChange: function(page) {
                this.current = page
                this.queryData(page)
            },
            fatherBhtReceive(data) {
                this.bhtSon = ''
                this.bhtSon = data
            },
            fatherIsSaleReceive(data) {
                this.isSaleSon = ''
                this.isSaleSon = data
            },
            fatherBuildReceive(data) {
                this.buildSon = ''
                this.buildSon = data
            },
            async queryData(page) {
                var url = this.url + '/buildingAnalysisBean/getAllAnalysisByBid'
                this.$ajax({
                    method: 'POST',
                    url: url,
                    headers: {
                        'Content-Type': this.contentType,
                        'Access-Token': this.accessToken
                    },
                    data: {
                        bhtId: this.bhtSon,
                        isSale: this.isSaleSon,
                        buildId: this.buildSon,
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

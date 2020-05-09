<template>
    <div>
        <!-- <div class="col-md-12 col-lg-12 main-title">
            <h1 class="titleCss">招聘管理</h1>
        </div> -->
        <div class="row newRow" style="margin-top: 1%">

            <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                <div class="col-xs-5 col-sm-5 col-md-5 col-lg-5" style="padding: 0; line-height: 34px;">
                    <p class="end-aline col-md-11 col-lg-11" style="padding-right:5px; padding-left:20px;">招聘类型</p><span
                    class="sign-left">:</span>
                </div>
                <div class="col-xs-7 col-sm-7 col-md-7 col-lg-7">
                    <select class="form-control" v-model="recruitmentType">
                        <option value=0>--未选择--</option>
                        <option value=1>社招</option>
                        <option value=2>校招</option>
                    </select>
                </div>
            </div>
            <!--岗位类型-->
            <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                <div class="col-xs-5 col-sm-5 col-md-5 col-lg-5" style="padding: 0; line-height: 34px;">
                    <p class="end-aline col-md-11 col-lg-11" style="padding-right:5px; padding-left:20px;">岗位类型</p><span
                    class="sign-left">:</span>
                </div>
                <div class="col-xs-7 col-sm-7 col-md-7 col-lg-7">
                    <position-type @ptChange="fatherPt" ref="ptRef"></position-type>
                </div>
            </div>
            <!--岗位-->
            <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                <div class="col-xs-5 col-sm-5 col-md-5 col-lg-5" style="padding: 0; line-height: 34px;">
                    <p class="end-aline col-md-11 col-lg-11" style="padding-right:5px; padding-left:20px;">岗位</p><span
                    class="sign-left">:</span>
                </div>
                <div class="col-xs-7 col-sm-7 col-md-7 col-lg-7">
                    <position @pChange="fatherPosition" ref="pRef"></position>
                </div>
            </div>

            <button type="button" class="btn btn-warning pull-right m_r_10" style="margin-right:1.5%;" data-toggle="modal"
                    v-on:click="selectRule('1')">添加</button>

            <button type="button" class="btn btn-warning pull-right m_r_10" style="margin-right:1.5%;" data-toggle="modal"
                    v-on:click="selectPt()">类型</button>
            <button type="button" class="btn btn-warning pull-right m_r_10" style="margin-right:1.5%;" data-toggle="modal"
                    v-on:click="selectP()">岗位</button>
            <button type="button" class="btn btn-primary pull-right m_r_10" style="margin-right:1.5%;"
                    data-toggle="modal"
                    v-on:click="queryData(1)">查询
            </button>
        </div>


        <div class="" style="padding-top: 30px;">
            <div class="col-md-12 col-lg-12">
                <div class="table-responsive  table-bg">
                    <table class="table table-bordered table-hover" id="datatable">
                        <thead class="datathead">
                        <tr>
                            <th class="text-center">岗位类型</th>
                            <th class="text-center">岗位名称</th>
                            <th class="text-center">招聘人数</th>
                            <th class="text-center">工作地点</th>
                            <th class="text-center">毕业院校</th>
                            <th class="text-center">薪酬</th>
                            <th class="text-center">工作年限</th>
                            <th class="text-center">五险一金</th>
                            <th class="text-center">吃住</th>
                            <th class="text-center">双休</th>
                            <th class="text-center">发布时间</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="(item,index) in tableData" :key="index" v-on:dblclick="selectRule('3',item)">
                            <td class="text-center" style="line-height:33px;">{{item.positionTypeLabel}}</td>
                            <td class="text-center" style="line-height:33px;">{{item.position}}</td>
                            <td class="text-center" style="line-height:33px;">{{item.recruitsNum}}</td>
                            <td class="text-center" style="line-height:33px;">{{item.workplace}}</td>
                            <td class="text-center" style="line-height:33px;">{{item.education}}</td>
                            <td class="text-center" style="line-height:33px;">{{item.minPay}}-{{item.maxPay}}</td>
                            <td class="text-center" style="line-height:33px;">{{item.minWorkingYears}}-{{item.maxWorkingYears}}</td>
                            <td class="text-center" style="line-height:33px;">{{item.fiveRisksFundLabel}}</td>
                            <td class="text-center" style="line-height:33px;">{{item.foodShelterLabel}}</td>
                            <td class="text-center" style="line-height:33px;">{{item.weekendLabel}}</td>
                            <td class="text-center" style="line-height:33px;">{{item.createDate}}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div class="row row_edit">
                    <div class="modal fade" id="reDialog">
                        <div class="modal-dialog">
                            <SubRe ref='reDialog' @certainAction='feedBack'></SubRe>
                        </div>
                    </div>
                </div>
                <div class="row row_edit">
                    <div class="modal fade" id="addPt">
                        <div class="modal-dialog">
                            <subPt ref='addPt' @certainAction='feedBack1'></subPt>
                        </div>
                    </div>
                </div>
                <div class="row row_edit">
                    <div class="modal fade" id="addP">
                        <div class="modal-dialog">
                            <subP ref='addP' @certainAction='feedBack2'></subP>
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
    import paging from '../../common/Paging.vue'
    import PositionType from '../../common/subRecruit/PositionType.vue'
    import Position from '../../common/subRecruit/Position.vue'
    import SubRe from '../../common/subRecruit/RecruitDialog.vue'
    import subPt from '../../common/subRecruit/addPositionType.vue'
    import subP from '../../common/subRecruit/addPosition.vue'
    var that = null
    export default {
        components: {
            PositionType,
            Position,
            paging,
            SubRe,
            subPt,
            subP
        },
        name: "RecruitControl",
        data() {
            return {
                // 职位类型
                positionType:'',
                // 职位
                position:'',
                // 招聘类型
                recruitmentType:'',
                tableData: [],
                //分页需要的数据
                pages: '', //总页数
                current: 1, //当前页码
                pageSize: 10, //一页显示的数量
                total: '', //数据的数量
            };
        },
        methods:{
            fatherPt(data) {
                this.positionType = '';
                if (null !== data) {
                    this.positionType = data
                    this.$refs.pRef.queryData(this.positionType)
                }
            },
            fatherPosition(data) {
                this.position = '';
                if (null !== data) {
                    this.position = data
                }
            },
            //子级传值到父级上来的动态拿去
            pageChange: function(page) {
                this.current = page
                this.queryData(page)
            },
            async queryData(page) {
                var url = this.url + '/recruitBean/getRecruitByPage'
                this.$ajax({
                    method: 'POST',
                    url: url,
                    headers: {
                        'Content-Type': this.contentType,
                        'Access-Token': this.accessToken
                    },
                    data: {
                        positionType: this.positionType,
                        position: this.position,
                        recruitmentType:this.recruitmentType,
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
                    this.$refs.reDialog.initData('add')
                    $("#reDialog").modal('show')
                    $("#addPt").modal('hide')
                } else if (param === "3") {
                    this.$refs.reDialog.initData('modify', item)
                    $("#reDialog").modal('show')
                    $("#addP").modal('hide')
                    $("#addPt").modal('hide')
                }
            },
            selectPt(item) {
                this.$refs.addPt.initRef(item)
                $("#reDialog").modal('hide')
                $("#addP").modal('hide')
                $("#addPt").modal('show')
            },
            selectP(item) {
                this.$refs.addP.initRef(item)
                $("#reDialog").modal('hide')
                $("#addPt").modal('hide')
                $("#addP").modal('show')
            },
            feedBack() {
                this.queryData(1)
                $("#reDialog").modal('hide')
            },
            feedBack1() {
                this.queryData(1)
                $("#addPt").modal('hide')
            },
            feedBack2() {
                this.queryData(1)
                $("#addP").modal('hide')
            }
        },
        created: function () {
            this.queryData()
        },
    }
</script>

<style scoped>

</style>

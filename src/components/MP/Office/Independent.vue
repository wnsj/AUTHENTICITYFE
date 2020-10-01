<template>
    <div>
        <!-- <div class="col-md-12 col-lg-12 main-title">
            <h1 class="titleCss">动态管理</h1>
        </div> -->
        <div class="row newRow" style="margin-top: 1%">
            <!--楼盘-->
            <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                <div class="col-xs-5 col-sm-5 col-md-5 col-lg-5" style="padding: 0; line-height: 30px; ">
                    <p class="end-aline col-md-12 col-lg-12 textcenter" >工位类型：</p>
                </div>
                <div class="col-xs-7 col-sm-7 col-md-7 col-lg-7" style="padding:0">

                    <BuildType @btChange="btRe" ref="btRef"></BuildType>
                </div>
            </div>
            <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                <div class="col-xs-5 col-sm-5 col-md-5 col-lg-5" style="padding: 0; line-height: 30px;">
                    <p class="end-aline col-md-12 col-lg-12 textcenter" >楼盘名称：</p>
                </div>
                <div class="col-xs-7 col-sm-7 col-md-7 col-lg-7" style="padding:0; line-height:30px; height:30px">
                    <Building @buildChange='buildReceive' ref="buildRef"></Building>
                </div>
            </div>

            <button type="button" class="btn btn-warning pull-right m_r_10" style="margin-right:1.5%;" data-toggle="modal"
                    v-on:click="selectRule('1')">添加</button>
            <button type="button" class="btn btn-primary pull-right m_r_10" style="margin-right:1.5%;"
                    data-toggle="modal"
                    v-on:click="couQueryData(1)">查询
            </button>
        </div>

        <div class="" style="padding-top: 30px;">
            <div class="col-md-12 col-lg-12">
                <div class="table-responsive  table-bg">
                    <table class="table table-bordered table-hover" id="datatable">
                        <thead class="datathead">
                        <tr>
                            <th class="text-center">工位类型</th>
                            <th class="text-center">楼盘名称</th>
                            <th class="text-center">工位个数</th>
                            <th class="text-center">现价</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="(item,index) in couData" :key="index" v-on:dblclick="selectRule('3',item)">
                            <td class="text-center">{{item.officeTypeName}}</td>
                            <td class="text-center">{{item.roomName}}</td>
                            <td class="text-center">{{item.stationNum}}</td>
                            <td class="text-center">{{item.nowPrice}}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div class="row row_edit">
                    <div class="modal fade" id="dyDialog">
                        <div class="modal-dialog">
                            <dynamicDialog  ref='dyDialog' @certainAction='feedBack'></dynamicDialog>
                        </div>
                    </div>
                </div>

                <div class="col-md-12 col-lg-12 posAb">
                    <p class="tips">* 双击单行，可对当前数据进行修改</p>
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

    import dynamicDialog from '../../common/subDynamic/SharedOffice.vue'
    import paging from '../../common/Paging.vue'
    import Building from '../../common/Building.vue'


    import BuildType from "../../common/BildType";
    var that = null
    export default {
        components: {
            paging,
            Building,
            dynamicDialog,
            BuildType

        },
        //name: 'BuildingDynamic',
        data() {
            return {
                buildId:'',
                couData:[],
                //分页需要的数据
                pages: '', //总页数
                current: 1, //当前页码
                pageSize: 10, //一页显示的数量
                total: '', //数据的数量
                officeType:'',
                roomId:'' ,
            };
        },
        methods:{

            buildReceive(data) {
                this.roomId = ''
                if (null != data) {
                    this.roomId = data;
                }
            },
            //子级传值到父级上来的动态拿去
            pageChange: function(page) {
                this.current = page
                this.couQueryData(page)
            },
            btRe(data) {
                this.officeType = ''
                if (null != data) {
                    this.officeType = data
                }
            },
            async couQueryData(page) {
                var url = this.url + '/officeBean/getAllOffice'
                this.$ajax({
                    method: 'POST',
                    url: url,
                    headers: {
                        'Content-Type': this.contentType,
                        'Access-Token': this.accessToken
                    },
                    data: {

                       current: page,
                       pageSize: 10,
                       roomId:this.roomId,
                       officeType:this.officeType,
                    },
                    dataType: 'json',
                }).then((response) => {
                    var res = response.data
                    if (res.retCode === '0000') {
                        this.pages = res.retData.pages //总页数
                        this.current = res.retData.pageNum //当前页码
                        this.pageSize = res.retData.size //一页显示的数量  必须是奇数
                        this.total = res.retData.total //数据的数量
                        this.$refs.paging.setParam(this.pages, this.current, this.total)
                        this.couData = res.retData.list
                    } else {
                        alert(res.retMsg)
                    }
                }).catch((error) => {
                    console.log('数据请求失败处理')
                });
            },
            selectRule(param, item) {
                if (param === "1") {
                    this.$refs.dyDialog.initDyRef('add')
                    $("#dyDialog").modal('show')
                } else if (param === "3") {
                    this.$refs.dyDialog.initDyRef('modify', item)
                    $("#dyDialog").modal('show')
                }
            },
            feedBack() {
                this.couQueryData(1)
                $("#dyDialog").modal('hide')
            }
        },
        mounted() {
            this.$refs.btRef.setType(2)
            this.$refs.buildRef.setBuildType(2)
        },
        created: function () {

            this.couQueryData(1)
        },
    }
</script>

<style scoped>
.textcenter{ text-align: center;
 text-align-last: center; padding:0}
</style>

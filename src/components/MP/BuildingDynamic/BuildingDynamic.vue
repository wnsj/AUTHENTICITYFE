<template>
    <div>
        <!-- <div class="col-md-12 col-lg-12 main-title">
            <h1 class="titleCss">动态管理</h1>
        </div> -->
        <div class="row newRow" style="margin-top: 1%">
            <!--楼盘-->
            <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4" style="padding: 0; line-height: 30px;">
                    <p class="end-aline col-md-12 col-lg-12 textcenter">资讯类型：</p>
                </div>
                <div class="col-xs-5 col-sm-5 col-md-5 col-lg-5" style="padding:0">
                    <mtI @mtIdChange='fathermtIReceive' ref="mtIRef"></mtI>
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
                            <th class="text-center">资讯类型</th>
                            <th class="text-center">资讯标题</th>
                            <th class="text-center">资讯描述</th>
                            <th class="text-center">发布时间</th>
                            <th class="text-center">操作</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="(item,index) in couData" :key="index" v-on:dblclick="selectRule('3',item)">
                            <td class="text-center" style="width:10%">{{item.typeName}}</td>
                            <td class="text-center" style="width:15%">{{item.bdName}}</td>
                            <td class="text-center">{{item.bdLabel}}</td>
                            <td class="text-center" style="width:8%">{{item.createTime}}</td>
                            <td class="text-center"><button type="button" class="btn btn-danger pull-right m_r_10" style="margin-right:1.5%;" data-toggle="modal"
                                                            v-on:click="deleteDynamicById(item)">删除
                            </button></td>

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

    import dynamicDialog from '../../common/subDynamic/dynamicDialog.vue'
    import paging from '../../common/Paging.vue'
    import Building from '../../common/Building.vue'


    import mtI from '../../common/InformationType.vue'

    var that = null
    export default {
        components: {
            paging,
            Building,
            dynamicDialog,
            mtI,

        },
        name: 'BuildingDynamic',
        data() {
            return {
                buildId:'',
                couData:[],
                //分页需要的数据
                pages: '', //总页数
                current: 1, //当前页码
                pageSize: 10, //一页显示的数量
                total: '', //数据的数量
                mtId:'',
            };
        },
        methods:{
            fathermtIReceive(data) {
                this.mtId = ''
                if (null != data) {
                    this.mtId = data
                }
               // this.$refs.mtIRef.setmtId(data)
            },

            //子级传值到父级上来的动态拿去
            pageChange: function(page) {
                this.current = page
                this.couQueryData(page)
            },
            async couQueryData(page) {
                var url = this.url + '/buildingDynamicBean/getDynamicByBid'
                this.$ajax({
                    method: 'POST',
                    url: url,
                    headers: {
                        'Content-Type': this.contentType,
                        'Access-Token': this.accessToken
                    },
                    data: {
                       // buildId:this.buildId,
                        current: page,
                        pageSize: 10,
                        buildId:this.mtId,
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

            deleteDynamicById(item) {
                if (!confirm("确定删除"+ item.bdName + "?")) {
                    return;
                }
                var url = this.url + '/buildingDynamicBean/deleteDynamicById'
                this.$ajax({
                    method: 'POST',
                    url: url,
                    headers: {
                        'Content-Type': this.contentType,
                        'Access-Token': this.accessToken
                    },
                    data: {
                        bdId: item.bdId,
                    },
                    dataType: 'json',
                }).then((response) => {
                    var res = response.data
                    if (res.retCode === '0000') {
                        alert(res.retMsg)
                        this.couQueryData(this.current)
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
        created: function () {
            this.couQueryData(1)
        },
    }
</script>

<style scoped>
.textcenter{ text-align: center;
 text-align-last: center; padding:0}
</style>

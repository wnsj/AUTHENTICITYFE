<template>
    <div>
        <!-- <div class="col-md-12 col-lg-12 main-title">
            <h1 class="titleCss">电话回拨管理</h1>
        </div> -->
        <div class="row newRow" style="margin-top: 1%">

            <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3" style="padding-right:0">
                <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4" style="padding: 0; line-height: 30px;">
                    <p class="end-aline col-md-12 col-lg-12 textcenter" style="padding-right:5px; padding-left:20px;">联系电话：</p>
                </div>
                <div class="col-xs-7 col-sm-7 col-md-7 col-lg-7" style="padding:0">
                    <input type="text" class="form-control" v-model="phone"/>
                </div>
            </div>

            <button type="button" class="btn btn-primary pull-left m_r_10" data-toggle="modal" style="height:30px; line-height:18px" v-on:click="couQueryData(1)">查询
            </button>
        </div>

        <div class="" style="padding-top: 30px;">
            <div class="col-md-12 col-lg-12">
                <div class="table-responsive  table-bg">
                    <table class="table table-bordered table-hover" id="datatable">
                        <thead class="datathead">
                        <tr>

                            <th class="text-center">联系方式</th>
                            <th class="text-center">来源</th>
                            <th class="text-center">创建时间</th>
                            <th class="text-center">备注</th>
                            <th class="text-center">是否回拨</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="(item,index) in couData" :key="index" v-on:dblclick="selectRule(item)">

                            <td class="text-center" style="line-height:33px;">{{item.phone}}</td>
                            <td class="text-center" style="line-height:33px;">{{item.moLabel}}</td>
                            <td class="text-center" style="line-height:33px;">{{item.createTime}}</td>
                            <td class="text-center" style="line-height:33px;">{{item.form}}</td>
                            <td class="text-center">
                                <button type="button" :class="item.remarks == 2 ? 'btn btn-primary': 'btn btn-warning' "
                                        data-toggle="modal" :disabled="item.remarks == 2 ? false : true"
                                        v-on:click="patchReMarks(item)">{{item.remarksLabel}}
                                </button>
                            </td>

                        </tr>
                        </tbody>
                    </table>
                </div>
                <div class="row row_edit">
                    <div class="modal fade" id="phoneDialog">
                        <div class="modal-dialog">
                            <phoneDialog ref='phoneDialog' @certainAction='feedBack'></phoneDialog>
                        </div>
                    </div>
                </div>
                <div class="col-md-12 col-lg-12 posAb">
                    <p class="tips">* 双击当条添加反馈</p>
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
    import phoneDialog from '../../common/subLinkPhone/subLinkPhone.vue'

    var that = null
    export default {
        components: {
            paging,
            phoneDialog
        },
        name: 'LinkPhone',
        data() {
            return {

                // 联系人的姓名
                phone: '',
                lpId: '',
                couData: [],
                //分页需要的数据
                pages: '', //总页数
                current: 1, //当前页码
                pageSize: 10, //一页显示的数量
                total: '', //数据的数量
            };
        },
        methods: {

            fatherBuild(data) {
                this.buildId = ''
                if (null !== data) {
                    this.buildId = data.buildId
                }
            },
            //子级传值到父级上来的动态拿去
            pageChange: function (page) {
                this.current = page
                this.couQueryData(page)
            },
            async couQueryData(page) {
                var url = this.url + '/linkPhoneBean/getPhone'
                this.$ajax({
                    method: 'POST',
                    url: url,
                    headers: {
                        'Content-Type': this.contentType,
                        'Access-Token': this.accessToken
                    },
                    data: {
                        phone: this.phone,
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
                        this.couData = res.retData.records
                    } else {
                        alert(res.retMsg)
                    }
                }).catch((error) => {
                    console.log('数据请求失败处理')
                });
            },
            selectRule(item) {
                this.$refs.phoneDialog.initPhoneRef(item)
                $("#phoneDialog").modal('show')
            },
            feedBack() {
                this.couQueryData(1)
                $("#phoneDialog").modal('hide')
            },
            async patchReMarks(item) {
                if (this.isBlank(item.form)) {
                    alert("请添加该客户备注")
                    return;
                }
                if (!confirm("确定已回拨该客户？")) {
                    return;
                }
                var url = this.url + '/linkPhoneBean/patchLinkById'

                this.$ajax({
                    method: 'POST',
                    url: url,
                    headers: {
                        'Content-Type': this.contentType,
                        'Access-Token': this.accessToken
                    },
                    data: {
                        lpId: item.lpId,
                        remarks: '1',
                    },
                    dataType: 'json',
                }).then((response) => {
                    var res = response.data
                    alert(res.retMsg)
                    this.couQueryData(this.current)
                }).catch((error) => {
                    console.log('数据请求失败处理')
                });
            }
        },
        created: function () {
            this.couQueryData()
        },
    }
</script>

<style scoped>
.textcenter{ text-align: center;
 text-align-last: center; padding:0}

</style>

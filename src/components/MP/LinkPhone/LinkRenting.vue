<template>
    <div>
        <!-- <div class="col-md-12 col-lg-12 main-title">
            <h1 class="titleCss">电话回拨管理</h1>
        </div> -->
        <div class="row newRow" style="margin-top: 1%">

            <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                <div class="col-xs-5 col-sm-5 col-md-5 col-lg-5" style="padding: 0; line-height: 34px;">
                    <p class="end-aline col-md-11 col-lg-11" style="padding-right:5px; padding-left:20px;">楼盘</p><span
                    class="sign-left">:</span>
                </div>
                <div class="col-xs-7 col-sm-7 col-md-7 col-lg-7">
                    <input type="text" class="form-control" />
                </div>
            </div>
            <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                <div class="col-xs-5 col-sm-5 col-md-5 col-lg-5" style="padding: 0; line-height: 34px;">
                    <p class="end-aline col-md-11 col-lg-11" style="padding-right:5px; padding-left:20px;">区域</p><span
                    class="sign-left">:</span>
                </div>
                <div class="col-xs-7 col-sm-7 col-md-7 col-lg-7">
                    <select name="" id="" class="form-control">
                        <option value="未选择">未选择</option>
                    </select>
                </div>
            </div>
            <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                <div class="col-xs-5 col-sm-5 col-md-5 col-lg-5" style="padding: 0; line-height: 34px;">
                    <p class="end-aline col-md-11 col-lg-11" style="padding-right:5px; padding-left:20px;">商圈</p><span
                    class="sign-left">:</span>
                </div>
                <div class="col-xs-7 col-sm-7 col-md-7 col-lg-7">
                    <select name="" id="" class="form-control">
                        <option value="未选择">未选择</option>
                    </select>
                </div>
            </div>

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
                            <th class="text-center">姓名</th>
                            <th class="text-center">手机号</th>
                            <th class="text-center">座机号</th>
                            <th class="text-center">区域</th>
                            <th class="text-center">商圈</th>
                            <th class="text-center">写字楼</th>
                            <th class="text-center">创建时间</th>
                            <th class="text-center">备注</th>
                            <th class="text-center">是否回拨</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="(item,index) in couData" :key="index" v-on:dblclick="selectRule(item)">
                            <td class="text-center" style="line-height:33px;">{{item.name}}</td>
                            <td class="text-center" style="line-height:33px;">{{item.phone}}</td>
                            <td class="text-center" style="line-height:33px;">{{item.tel}}</td>
                            <td class="text-center" style="line-height:33px;">{{item.ldName}}</td>
                            <td class="text-center" style="line-height:33px;">{{item.buName}}</td>
                            <td class="text-center" style="line-height:33px;">{{item.obName}}</td>
                            <td class="text-center" style="line-height:33px;">{{item.createDate}}</td>
                            <td class="text-center" style="line-height:33px;">{{item.remark}}</td>
                            <td class="text-center">
                                <button type="button" :class="item.isContact == 3 ? 'btn btn-primary': 'btn btn-warning' "
                                        data-toggle="modal" :disabled="item.isContact == 3 ? false : true"
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
    import phoneDialog from '../../common/subLinkPhone/subLinkRentin.vue'

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
            //查询商圈；
            // findsq(data){
            //      var url = this.url + '/locationDistinguishBean/getAllDistinguish';
            //      this.$ajax({
            //         method: 'POST',
            //         url: url,
            //      })
            // },
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
                var url = this.url + '/entrustRentBean/getEnByPage'
                this.$ajax({
                    method: 'POST',
                    url: url,
                    headers: {
                        'Content-Type': this.contentType,
                        'Access-Token': this.accessToken
                    },
                    data: {
                       // phone: this.phone,
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
                if (this.isBlank(item.remark)) {
                    alert("请添加该客户备注")
                    return;
                }
                if (!confirm("确定已回拨该客户？")) {
                    return;
                }
                var url = this.url + '/entrustRentBean/updateEntrustRent?enId='+item.enId + "&isContact" + '=' +2

                this.$ajax({
                    method: 'GET',
                    url: url,
                    headers: {
                        'Content-Type': this.contentType,
                        'Access-Token': this.accessToken
                    },
                    data: {
                        // enId: item.enId,
                        // isContact: 2,
                        
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


</style>

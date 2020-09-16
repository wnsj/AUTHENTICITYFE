<template>
    <div>
        <!-- <div class="col-md-12 col-lg-12 main-title">
            <h1 class="titleCss">咨询师管理</h1>
        </div> -->
        <div class="row newRow" style="margin-top: 1%">
            <!--咨询师-->
            <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                <div class="col-xs-5 col-sm-5 col-md-5 col-lg-5" style="padding: 0; line-height: 34px;">
                    <p class="end-aline col-md-11 col-lg-11" style="padding-right:5px; padding-left:20px;">咨询师</p><span
                    class="sign-left">:</span>
                </div>
                <div class="col-xs-7 col-sm-7 col-md-7 col-lg-7">
                    <cou @couChange="fatherCou" ref="couRef"></cou>
                </div>
            </div>
            <!--咨询师特长-->
<!--            <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">-->
<!--                <div class="col-xs-5 col-sm-5 col-md-5 col-lg-5" style="padding: 0; line-height: 34px;">-->
<!--                    <p class="end-aline col-md-11 col-lg-11" style="padding-right:5px; padding-left:20px;">特长</p><span-->
<!--                    class="sign-left">:</span>-->
<!--                </div>-->
<!--                <div class="col-xs-7 col-sm-7 col-md-7 col-lg-7">-->
<!--                    <cou-chara @couCharaChange="fatherCouChara">-->
<!--                    </cou-chara>-->
<!--                </div>-->
<!--            </div>-->


             <button type="button" class="btn btn-warning pull-right m_r_10" style="margin-right:1.5%;" data-toggle="modal"
                    v-on:click="selectRule('1')">添加</button>
            <button type="button" class="btn btn-primary pull-right m_r_10" style="margin-right:1.5%;"
                    data-toggle="modal"
                    v-on:click="couQueryData(1)">查询
            </button>
        </div>


        <div class="" style="padding-top: 30px;">
            <div class="col-md-12 col-lg-12">
                <div class="table-responsive table-bg">
                    <table class="table table-bordered table-hover" id="datatable">
                        <thead class="datathead">
                        <tr>
                            <th class="text-center">咨询师</th>
                            <th class="text-center">毕业院校</th>
                            <th class="text-center">特长</th>
                            <th class="text-center">标签</th>
                            <th class="text-center">联系方式</th>
                            <!-- <th class="text-center">自我介绍</th> -->
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="(item,index) in couData" :key="index" v-on:dblclick="selectRule('3',item)">
                            <td class="text-center" style="line-height:33px;">{{item.couName}}</td>
                            <td class="text-center" style="line-height:33px;">{{item.graduate}}</td>
                            <td class="text-center" style="line-height:33px;">{{item.charaName}}</td>
                            <td class="text-center" style="line-height:33px;">{{item.couLabel}}</td>
                            <td class="text-center" style="line-height:33px;">{{item.tel}}</td>
                            <!-- <td class="text-center" style="line-height:33px;">{{item.introduce}}</td> -->
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div class="row row_edit">
                    <div class="modal fade" id="couDialog">
                        <div class="modal-dialog">
                            <cou-dialog  ref='couDialog' @certainAction='feedBack'></cou-dialog>
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
    import couChara from '../../common/subCou/CouChara.vue'
    import cou from '../../common/subCou/Counselor.vue'
    import paging from '../../common/Paging.vue'
    import couDialog from '../../common/subCou/CuoDialog.vue'
    var that = null
    export default {
        components: {
            couChara,
            cou,
            paging,
            couDialog
        },
        name: 'CounselorControl',
        data() {
            return {
                couId:'',
                charaName:'',
                couData:[],
                //分页需要的数据
                pages: '', //总页数
                current: 1, //当前页码
                pageSize: 10, //一页显示的数量
                total: '', //数据的数量
            };
        },
        methods:{
          fatherCou(data) {
              this.couId = '';
              if (null !== data) {
                  this.couId = data
              }
          },
            fatherCouChara(data) {
                this.charaName = '';
              if (null !== data) {
                  this.charaName = data
              }
            },
            //子级传值到父级上来的动态拿去
            pageChange: function(page) {
                this.current = page
                this.couQueryData(page)
            },
            async couQueryData(page) {
                var url = this.url + '/counselorBean/getAllCouselorByPage'
                this.$ajax({
                    method: 'POST',
                    url: url,
                    headers: {
                        'Content-Type': this.contentType,
                        'Access-Token': this.accessToken
                    },
                    data: {
                        couId: this.couId,
                        charaName: this.charaName,
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
            selectRule(param, item) {
                if (param === "1") {
                    this.$refs.couDialog.initData('add')
                    $("#couDialog").modal('show')
                } else if (param === "3") {
                    this.$refs.couDialog.initData('modify', item)
                    $("#couDialog").modal('show')
                }
            },
            feedBack() {
                this.couQueryData(1)
                $("#couDialog").modal('hide')
            }
        },
        created: function () {
            this.couQueryData()
        },
    }
</script>

<style scoped>

</style>

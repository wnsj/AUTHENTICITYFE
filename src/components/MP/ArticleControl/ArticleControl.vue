<template>
    <div>
        <!-- <div class="col-md-12 col-lg-12 main-title">
            <h1 class="titleCss">文章管理</h1>
        </div> -->
        <div class="row newRow" style="margin-top: 1%">
            <!--文章类型-->
            <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                <div class="col-xs-5 col-sm-5 col-md-5 col-lg-5" style="padding: 0; line-height: 34px;">
                    <p class="end-aline col-md-11 col-lg-11" style="padding-right:5px; padding-left:20px;">文章类型</p><span
                    class="sign-left">:</span>
                </div>
                <div class="col-xs-7 col-sm-7 col-md-7 col-lg-7">
                    <select class="form-control" v-model="articleType">
                        <option value=0>--未选择--</option>
                        <option value=1>公司简介</option>
                        <option value=2>发展历程</option>
                        <option value=3>公司荣誉</option>
                        <option value=4>企业团队</option>
                        <option value=5>企业文化</option>
                        <option value=6>联系我们</option>
                        <option value=7>服务声明</option>
                    </select>
                </div>
            </div>


             <button type="button" class="btn btn-warning pull-right m_r_10" style="margin-right:1.5%;" data-toggle="modal"
                    v-on:click="selectRule('1')">添加</button>
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
<!--                            <th class="text-center">ID</th>-->
                            <th class="text-center">文章类型</th>
                            <th class="text-center">文章标题</th>
                            <th class="text-center">创建时间</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="(item,index) in tableData" :key="index" v-on:dblclick="selectRule('3',item)">
<!--                            <td class="text-center" style="line-height:33px;">{{item.id}}</td>-->
                            <td class="text-center" style="line-height:33px;">{{item.articleTypeLabel}}</td>
                            <td class="text-center" style="line-height:33px;">{{item.title}}</td>
                            <td class="text-center" style="line-height:33px;">{{item.createDate}}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div class="row row_edit">
                    <div class="modal fade" id="subDialog">
                        <div class="modal-dialog">
                            <SubArticle ref='subDialog' @certainAction='feedBack'></SubArticle>
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
    import SubArticle from '../../common/subArticle/SubArticle.vue'
    export default {
        components: {
            paging,
            SubArticle
        },
        data() {
            return {
                tableData: [],
                articleType: '',
                //分页需要的数据
                pages: '', //总页数
                current: 1, //当前页码
                pageSize: 10, //一页显示的数量
                total: '', //数据的数量
            };
        },
        name: "ArticleControl",
        methods: {

            //子级传值到父级上来的动态拿去
            pageChange: function(page) {
                this.current = page
                this.queryData(page)
            },
            async queryData(page) {
                var url = this.url + '/articleBean/getArticleByPage'
                this.$ajax({
                    method: 'POST',
                    url: url,
                    headers: {
                        'Content-Type': this.contentType,
                        'Access-Token': this.accessToken
                    },
                    data: {
                        articleType: this.articleType,
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
                    this.$refs.subDialog.initRef('add')
                    $("#subDialog").modal('show')
                } else if (param === "3") {
                    this.$refs.subDialog.initRef('modify', item)
                    $("#subDialog").modal('show')
                }
            },
            feedBack() {
                this.queryData(1)
                $("#subDialog").modal('hide')
            }
        },
        created: function () {
            this.queryData()
        }
    }
</script>

<style>

</style>

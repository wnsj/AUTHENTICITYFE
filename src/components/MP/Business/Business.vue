<template>
    <div>
        <!-- <div class="col-md-12 col-lg-12 main-title">
            <h1 class="titleCss">商圈管理</h1>
        </div> -->
        <div class="row newRow" style="margin-top: 1%">
            <!--咨询师-->
            <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3" style="padding: 0; line-height: 30px;">
                    <p class="end-aline col-md-12 col-lg-12 textcenter">区域：</p>
                </div>
                <div class="col-xs-9 col-sm-9 col-md-9 col-lg-9">
                    <ldt @ldtChange='fatherLdtReceive' ref="ldtRef"></ldt>
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
                <div class="table-responsive table-bg">
                    <table class="table table-bordered table-hover" id="datatable">
                        <thead class="datathead">
                        <tr>
                            <th class="text-center">所属区域</th>
                            <th class="text-center">商圈名称</th>
                            <th class="text-center">是否热门</th>
                            <th class="text-center">商圈描述</th>
                            <th class="text-center">创建时间</th>
                           
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="(item,index) in couData" :key="index" v-on:dblclick="selectRule('3',item)">
                            <td class="text-center" style="width:10%">{{item.ldName}}</td>
                            <td class="text-center" style="width:10%">{{item.buName}}</td>
                            <td class="text-center" style="width:10%">{{item.isHotName}}</td>
                            <td class="text-center" style="">{{item.buLabel}}</td>
                            <td class="text-center" style="width:10%">{{item.createTime}}</td>
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
    import couDialog from '../../common/subCou/busicou.vue'
    import ldt from '../../common/LocationDType.vue'
   
    var that = null
    export default {
        components: {
            couChara,
            cou,
            paging,
            couDialog,
            
            ldt,
        },
        name: 'CounselorControl',
        data() {
            return {
                ldId:'',
                lpId: '',
                couData:[],
                //分页需要的数据
                pages: '', //总页数
                current: 1, //当前页码
                pageSize: 10, //一页显示的数量
                total: '', //数据的数量
                businessId:'',
            };
        },
        methods:{
         
            fatherLdtReceive(data) {
                this.ldId = ''
                if (null != data) {
                    this.ldId = data
                }
                this.$refs.ldtRef.setLdId(data)
            },
            
              
            
            //子级传值到父级上来的动态拿去
            pageChange: function(page) {
                this.current = page
                this.couQueryData(page)
            },
            async couQueryData(page) {
                var url = this.url + '/businessDistrictBean/getBusinessDistrictPage'
                this.$ajax({
                    method: 'POST',
                    url: url,
                    headers: {
                        'Content-Type': this.contentType,
                        'Access-Token': this.accessToken
                    },
                    data: {
                        current: page,
                        pageSize: this.pageSize,
                        ldId:this.ldId,
                    },
                    dataType: 'json',
                }).then((response) => {
                    var res = response.data
                    if (res.retCode === '0000') {
                        this.pages = res.retData.pages //总页数
                        this.current = res.retData.pageNum //当前页码
                       // this.pageSize = res.retData.size //一页显示的数量  必须是奇数
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
.textcenter{ text-align: center;
 text-align-last: center; padding:0}
</style>

<!-- add and modify position -->
<template>
    <div class="modal-content">
        <div class="modal-header">
            <h4 id="myModalLabel" class="modal-title">{{title}}招聘</h4>
        </div>
        <div class="modal-body  pos_r">
            <div class="tab-pane fade in active martop" id="basic">
                <form action="" class="clearfix">
                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">招聘类型</label><span class="sign-left">:</span>
                        <div class="col-md-8">
                            <select class="form-control" v-model="addParam.recruitmentType">
                                <option value=0>--未选择--</option>
                                <option value=1>社招</option>
                                <option value=2>校招</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">是否热招</label><span class="sign-left">:</span>
                        <div class="col-md-8">
                            <select class="form-control" v-model="addParam.hotJob">
                                <option value=0>--未选择--</option>
                                <option value=1>是</option>
                                <option value=2>否</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">是否长招</label><span class="sign-left">:</span>
                        <div class="col-md-8">
                            <select class="form-control" v-model="addParam.longRecruit">
                                <option value=0>--未选择--</option>
                                <option value=1>是</option>
                                <option value=2>否</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">招收人数</label><span class="sign-left">:</span>
                        <div class="col-md-8">
                            <input type="text" class="form-control" v-model="addParam.recruitsNum"/>
                        </div>
                    </div>
                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">岗位类型</label><span class="sign-left">:</span>
                        <div class="col-md-8">
                            <position-type @ptChange="fatherPt" ref="ptRef"></position-type>
                        </div>
                    </div>
                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">岗位</label><span class="sign-left">:</span>
                        <div class="col-md-8">
                            <Position @pChange="fatherPosition" ref="pRef"></Position>
                        </div>
                    </div>



                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">最小薪酬</label><span class="sign-left">:</span>
                        <div class="col-md-8">
                            <input type="text" class="form-control" v-model="addParam.minPay"/>
                        </div>
                    </div>
                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">最大薪酬</label><span class="sign-left">:</span>
                        <div class="col-md-8">
                            <input type="text" class="form-control" v-model="addParam.maxPay"/>
                        </div>
                    </div>
                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">最小工龄</label><span class="sign-left">:</span>
                        <div class="col-md-8">
                            <input type="text" class="form-control" v-model="addParam.minWorkingYears"/>
                        </div>
                    </div>
                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">最大工龄</label><span class="sign-left">:</span>
                        <div class="col-md-8">
                            <input type="text" class="form-control" v-model="addParam.maxWorkingYears"/>
                        </div>
                    </div>
                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">工作地点</label><span class="sign-left">:</span>
                        <div class="col-md-8">
                            <input type="text" class="form-control" v-model="addParam.workplace"/>
                        </div>
                    </div>
                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">学历</label><span class="sign-left">:</span>
                        <div class="col-md-8">
                            <input type="text" class="form-control" v-model="addParam.education"/>
                        </div>
                    </div>
                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">吃住</label><span class="sign-left">:</span>
                        <div class="col-md-8">
                            <select class="form-control" v-model="addParam.foodShelter">
                                <option value=0>--未选择--</option>
                                <option value=1>是</option>
                                <option value=2>否</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">五险一金</label><span class="sign-left">:</span>
                        <div class="col-md-8">
                            <select class="form-control" v-model="addParam.fiveRisksFund">
                                <option value=0>--未选择--</option>
                                <option value=1>是</option>
                                <option value=2>否</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">双休</label><span class="sign-left">:</span>
                        <div class="col-md-8">
                            <select class="form-control" v-model="addParam.weekend">
                                <option value=0>--未选择--</option>
                                <option value=1>是</option>
                                <option value=2>否</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-md-12 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline" style="padding:0;line-height:34px;">岗位要求</label><span
                        class="sign-left">:</span>
                    </div>
                    <div class="col-md-12 form-group clearfix">
                        <RecruitNote ref="rn"></RecruitNote>
                    </div>
                    <div class="form-group clearfix">
                        <div class="col-md-12">
                            <button type="button" class="btn btn-warning pull-right m_r_10" style="margin-right:1.5%;"
                                    data-toggle="modal"
                                    v-on:click="closeCurrentPage()">返回
                            </button>
                            <button type="button" class="btn btn-primary pull-right m_r_10" style="margin-right:1.5%;"
                                    data-toggle="modal"
                                    v-on:click="certainAction()">确认
                            </button>
                        </div>
                    </div>
                </form>
            </div>

        </div>

    </div>
</template>


<script>
    import RecruitNote from '../subRecruit/RecruitNote.vue'
    import PositionType from '../subRecruit/PositionType.vue'
    import Position from '../subRecruit/Position.vue'
    var that = null
    export default {
        components: {
            RecruitNote,
            PositionType,
            Position
        },
        data() {
            return {
                addParam: {
                    // 职位
                    position:'',
                    // 职位类型
                    positionType:'',
                    // 招收人数
                    recruitsNum:'',
                    // 工作地点
                    workplace:'',
                    // 最小薪酬
                    minPay:'',
                    // 最大薪酬
                    maxPay:'',
                    //最小工作年限
                    minWorkingYears:'',
                    // 最大工作年限
                    maxWorkingYears:'',
                    // 1:有五险一金；2：没有五险一金
                    fiveRisksFund:'',
                    // 1:包吃住；2：否
                    foodShelter:'',
                    // 1：双休；2：没有双休
                    weekend:'',
                    // 学历,
                    education:'',
                    //岗位职责
                    responsibilities: '',
                    // 岗位要求
                    requirements:'',
                    // 招聘类型
                    recruitmentType:'',
                    // 发布时间
                    createTime:'',
                    // 是否热招
                    hotJob:'',
                    // 是否长招
                    longRecruit:''
                },
                title: '',
            };
        },
        methods: {
            // Initialization projcet’s content
            initData(param, addParam) {
                $('#reDialog').modal({backdrop: 'static', keyboard: false});
                if (param === 'add') {
                    this.title = '新增'
                    this.addParam = {
                        // 职位
                        position:'',
                        // 职位类型
                        positionType:'',
                        // 招收人数
                        recruitsNum:'',
                        // 工作地点
                        workplace:'',
                        // 最小薪酬
                        minPay:'',
                        // 最大薪酬
                        maxPay:'',
                        //最小工作年限
                        minWorkingYears:'',
                        // 最大工作年限
                        maxWorkingYears:'',
                        // 1:有五险一金；2：没有五险一金
                        fiveRisksFund:'',
                        // 1:包吃住；2：否
                        foodShelter:'',
                        // 1：双休；2：没有双休
                        weekend:'',
                        // 学历,
                        education:'',
                        //岗位职责
                        responsibilities: '',
                        // 岗位要求
                        requirements:'',
                        // 招聘类型
                        recruitmentType:'',
                        // 发布时间
                        createTime:'',
                        // 是否热招
                        hotJob:'',
                        // 是否长招
                        longRecruit:''
                    }
                } else if (param === 'modify') {
                    console.log('Initialization evaluation’s content, which modifies evaluation')
                    this.title = '修改'
                    this.$refs.rn.setData(addParam.requirements)
                    Object.assign(this.addParam, addParam)
                }
            },


            certainAction() {
                this.addParam.requirements = this.$refs.rn.getData()

                switch (this.title) {
                    case '新增':
                        var url = this.url + '/recruitBean/addRecruit'
                        break;
                    case '修改':
                        var url = this.url + '/recruitBean/patchRecruitById'
                        break;
                }

                this.$ajax({
                    method: 'POST',
                    url: url,
                    headers: {
                        'Content-Type': this.contentType,
                        'Access-Token': this.accessToken
                    },
                    data:this.addParam,
                    dataType: 'json',
                }).then((response) => {
                    const res = response.data
                    if (res.retCode === '0000') {
                        alert(res.retMsg)
                        this.$emit('certainAction')
                    }
                }).catch((error) => {
                    console.log('楼盘信息提交失败')
                });
            },
            closeCurrentPage() {
                $("#reDialog").modal("hide")
            },


            fatherPt(data) {
                this.addParam.positionType = '';
                if (null !== data) {
                    this.addParam.positionType = data
                    this.$refs.pRef.queryData(this.addParam.positionType)
                }
            },
            fatherPosition(data) {
                this.addParam.position='';
                if (null !== data) {
                    this.addParam.position = data
                }
            },

        },
        computed: {
            editor() {
                return this.$refs.myQuillEditor.quill
            }
        }
    }
</script>

<style>
</style>

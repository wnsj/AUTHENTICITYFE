<!-- add and modify position -->
<template>
    <div class="modal-content" id="build">
        <div class="modal-header">
            <h4 id="myModalLabel" class="modal-title">{{title}}楼盘</h4>
        </div>
        <div class="modal-body  pos_r">
            <div class="tab-pane fade in active martop" id="basic">
                <form action="" class="clearfix">
                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">楼盘名称</label><span class="sign-left">:</span>
                        <div class="col-md-8">
                            <input type="text" class="form-control" v-model="addParam.htName">
                        </div>
                    </div>
                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">别名</label><span class="sign-left">:</span>
                        <div class="col-md-8">
                            <input type="text" class="form-control" v-model="addParam.alias">
                        </div>
                    </div>
                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">位置</label><span class="sign-left">:</span>
                        <div class="col-md-8">
                            <lt @locationTypeChange='fatherLtReceive'></lt>
                        </div>
                    </div>
                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">类型</label><span class="sign-left">:</span>
                        <div class="col-md-8">
                            <bt @btChange='fatherBtReceive'></bt>
                        </div>
                    </div>
                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">户型</label><span class="sign-left">:</span>
                        <div class="col-md-8">
                            <bht @bhtChange='fatherBhtReceive'></bht>
                        </div>
                    </div>
                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">总价</label><span class="sign-left">:</span>
                        <div class="col-md-8">

                                <input type="text" class="form-control" v-model="addParam.minTitlePrice" style="width: 40%"/>


                                <input type="text" class="form-control" v-model="addParam.maxTitlePrice" style="width: 40%"/>
                        </div>
                    </div>
                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">单价</label><span class="sign-left">:</span>
                        <div class="col-md-8">
                            <input type="text" class="form-control" v-model="addParam.minUnitPrice" style="width: 40%"/>


                            <input type="text" class="form-control" v-model="addParam.maxUnitPrice" style="width: 40%"/>
                        </div>
                    </div>
                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">面积</label><span class="sign-left">:</span>
                        <div class="col-md-8">
                            <input type="text" class="form-control" v-model="addParam.minArea" style="width: 40%"/>


                            <input type="text" class="form-control" v-model="addParam.maxArea" style="width: 40%"/>
                        </div>
                    </div>
                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">开盘时间</label><span class="sign-left">:</span>
                        <div class="col-md-8">
                            <datePicker v-model="addParam.openDate" type="date" value-type="format" style="width: 97%"></datePicker>
                        </div>
                    </div>
                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">销售情况</label><span class="sign-left">:</span>
                        <div class="col-md-8">
                            <is-sale @isSaleChange='fatherIsSaleReceive'></is-sale>
                        </div>
                    </div>
                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">开发商</label><span class="sign-left">:</span>
                        <div class="col-md-8">
                            <dev @devChange = 'fatherDevReceive'></dev>
                        </div>
                    </div>
                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">特色</label><span class="sign-left">:</span>
                        <div class="col-md-8">
                            <chara @charaChange='fatherChReceive'></chara>
                        </div>
                    </div>
                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">咨询师</label><span class="sign-left">:</span>
                        <div class="col-md-8">
                            <cou @couChange="fatherCouReceive"></cou>
                        </div>
                    </div>
                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">地址</label><span class="sign-left">:</span>
                        <div class="col-md-8">
                            <input type="text" class="form-control" v-model="addParam.adress"/>
                        </div>
                    </div>
                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">省份</label><span class="sign-left">:</span>
                        <div class="col-md-8">
                            <pro @proChange="fatherProReceive"></pro>
                        </div>
                    </div>
                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">加推时间</label><span class="sign-left">:</span>
                        <div class="col-md-8">
                            <datePicker v-model="addParam.createDate" type="date" value-type="format" style="width: 97%"></datePicker>
                        </div>
                    </div>
                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">预交房时间</label><span class="sign-left">:</span>
                        <div class="col-md-8">
                            <datePicker v-model="addParam.proDate" type="date" value-type="format" style="width: 97%"></datePicker>
                        </div>
                    </div>
                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline" style="padding:0;line-height:34px;">效果图</label><span
                            class="sign-left">:</span>
                        <div class="col-md-8">
                            <input type="file" id="effectImg" />
                        </div>
                    </div>
                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline" style="padding:0;line-height:34px;">环境规划</label><span
                        class="sign-left">:</span>
                        <div class="col-md-8">
                            <input type="file" id="enPlanImg" />
                        </div>
                    </div>
                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline" style="padding:0;line-height:34px;">楼盘实景</label><span
                        class="sign-left">:</span>
                        <div class="col-md-8">
                            <input type="file" id="buildRealImg" />
                        </div>
                    </div>
                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline" style="padding:0;line-height:34px;">配套实景</label><span
                        class="sign-left">:</span>
                        <div class="col-md-8">
                            <input type="file" id="matchingRealImg" />
                        </div>
                    </div>
                    <div class="form-group clearfix">
                        <div class="col-md-12">
                            <button type="button" class="btn btn-warning pull-right m_r_10" style="margin-right:1.5%;" data-toggle="modal"
                            v-on:click="closeCurrentPage()">返回</button>
                            <button type="button" class="btn btn-primary pull-right m_r_10" style="margin-right:1.5%;" data-toggle="modal"
                            v-on:click="certainAction()">确认</button>
                        </div>
                    </div>
                </form>
            </div>

        </div>

    </div>
</template>








<script>
    import datePicker from 'vue2-datepicker'
    import bt from '../common/BildType.vue'
    import bht from '../common/BuildHorseType.vue'
    import isSale from '../common/IsSale.vue'
    import lt from '../common/LocationType.vue'
    import dev from '../common/Dev.vue'
    import chara from '../common/Chara.vue'
    import cou from '../common/Counselor.vue'
    import pro from '../common/Province.vue'
    export default {
        components: {
            datePicker,
            bt,
            bht,
            isSale,
            lt,
            dev,
            chara,
            cou,
            pro
        },
        data() {
            return {
                addParam: {
                    // 楼盘名称
                    htName:'',
                    // 区域位置
                    ldId:'',
                    // 类型
                    btId:'',
                    // 户型
                    bhtId:'',
                    // 最小总价
                    minTitlePrice:'',
                    // 最大总价
                    maxTitlePrice:'',
                    // 最小单价
                    minUnitPrice:'',
                    // 最大单价
                    maxUnitPrice:'',
                    // 面积（小）
                    minArea:'',
                    // 面积(大)
                    maxArea:'',
                    // 开盘时间
                    openDate:'',
                    // 销售情况
                    isSale:'',
                    // 品牌开发商
                    devId:'',
                    // 特色
                    chaId:'',
                    // 地址
                    adress:'',
                    // 省份
                    proId:'',
                    // 简称
                    alias:'',
                    // 加推时间
                    createDate:'',
                    // 预交房时间
                    proDate:''
                },
                title:''
            };
        },
        methods: {
            // Initialization projcet’s content
            initData(param, addParam) {
                $('#buildDialog').modal({backdrop: 'static', keyboard: false});
                if (param === 'add') {
                    this.title = '新增'
                    this.addParam = {
                        // 楼盘名称
                        htName:'',
                        // 区域位置
                        ldId:'',
                        // 类型
                        btId:'',
                        // 户型
                        bhtId:'',
                        // 最小总价
                        minTitlePrice:'',
                        // 最大总价
                        maxTitlePrice:'',
                        // 最小单价
                        minUnitPrice:'',
                        // 最大单价
                        maxUnitPrice:'',
                        // 面积（小）
                        minArea:'',
                        // 面积(大)
                        maxArea:'',
                        // 开盘时间
                        openDate:'',
                        // 销售情况
                        isSale:'',
                        // 品牌开发商
                        devId:'',
                        // 特色
                        chaId:'',
                        // 地址
                        adress:'',
                        // 省份
                        proId:'',
                        // 简称
                        alias:'',
                        // 加推时间
                        createDate:'',
                        // 预交房时间
                        proDate:''
                    }
                } else if (param === 'modify') {
                    console.log('Initialization evaluation’s content, which modifies evaluation')
                    this.title = '修改'
                    Object.assign(this.addParam, addParam)
                }
            },


            certainAction() {
                const fd = new FormData();
                // 效果图
                const effectImg = $("#effectImg")[0].files[0];
                fd.append("effectImg", effectImg);
                // 环境规划
                const enPlanImg = $("#enPlanImg")[0].files[0];
                fd.append("enPlanImg", enPlanImg);
                // 楼盘实景
                const buildRealImg = $("#buildRealImg")[0].files[0];
                fd.append("buildRealImg",buildRealImg);
                // 配套实景
                const matchingRealImg = $("#matchingRealImg")[0].files[0];
                fd.append("matchingRealImg",matchingRealImg);
                fd.append("addParam", JSON.stringify(this.addParam));

                let url = '';
                switch (this.title) {
                    case '新增':
                        url = this.url + '/buildingBean/addBuilding'
                        break;
                    case '修改':
                        url = this.url + '/testProblemBase/updateTestProblemBase'
                        break;
                }

                console.log('数据============',this.addParam);
                this.$ajax({
                    method: 'POST',
                    url: url,
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        'Access-Token': this.accessToken
                    },
                    data: fd,
                    dataType: 'json',
                }).then((response) => {
                    const res = response.data
                    if (res.retCode === '0000') {
                        alert(res.retMsg)
                        this.$emit('certainAction')
                    }
                }).catch((error) => {
                    console.log('课程信息请提交失败')
                });
            },
            closeCurrentPage() {
                $("#buildDialog").modal("hide")
            },
            handlerUpload1: function (e, paramUrl) {
                //获取选定的文件
                this.tFiles = e.target.files;
            },
            handlerUpload: function (e, paramUrl) {
                //获取选定的文件
                // let tFiles = e.target.files;
                let len = this.tFiles.length;
                for (var i = 0; i < len; i++) {
                    //开始上传每一个文件
                    var item = {
                        name: this.tFiles[i].name,
                        uploadPercentage: 1,
                        size: this.formatFileSize(this.tFiles[i].size, 0),
                        uploadStatus: 0
                    }
                    console.log(item)
                    // this.files.push(item);
                    //开始上传文件 新建一个formData
                    let param = new FormData();
                    param.append("name", this.tFiles[i].name);
                    //登录客户端账户ID
                    param.append("evaluationData", JSON.stringify(this.evaluation));
                    //通过append向form对象添加数据
                    param.append("file", this.tFiles[i]);
                    //FormData私有类对象，访问不到，可以通过get判断值是否传进去
                    console.log('数据：' + JSON.stringify(this.evaluation))
                    console.log(param.get("file"));
// 					//判断大小
// 					if (!this.checkFileSize(tFiles[i].size)) {
// 						item.uploadStatus = -3;
// 						alert("文件大于2M!");
// 						return false;
// 					}
// 					if (!this.checkFileType(tFiles[i].name.split('.')[1])) {
// 						item.uploadStatus = -2;
// 						alert("文件类型错误!")
// 						return false;
// 					}
                    //通过axios上传文件
                    //配置
                    let config = {
                        //添加请求头
                        headers: {
                            "Content-Type": "multipart/form-data"
                        },
                        //添加上传进度监听事件
                        onUploadProgress: e => {
                            var completeProgress = ((e.loaded / e.total * 100) | 0) + "%";
                            //console.log(this.files)
                            item.uploadPercentage = completeProgress;
                        }
                    };

                    var url = this.url + paramUrl;
                    axios.post(url, param, config).then(function (response) {
                        console.log(response);
                        item.uploadStatus = 2;
                        if (response.data.retCode == '0000') {
                            if (response.data.retData.length > 0) {
                                vm.patientList = response.data.retData
                            } else {
                                alert("上传成功!")
                            }
                        } else {
                            alert(response.data.retMsg)
                        }
                    }).catch(function (error) {
                        console.log(error);
                        item.uploadStatus = -1;
                    });
                }
            },
            formatFileSize: function (fileSize, idx) {
                var units = ["B", "KB", "MB", "GB"];
                idx = idx || 0;
                if (fileSize < 1024 || idx === units.length - 1) {
                    return fileSize.toFixed(1) + units[idx];
                }
                return this.formatFileSize(fileSize / 1024, ++idx);
            },
            checkFileType: function (fileType) {
                const acceptTypes = ['png', 'jpg', 'jpeg'];
                for (var i = 0; i < acceptTypes.length; i++) {
                    if (fileType === acceptTypes[i]) {
                        return true;
                    }
                }
                return false;
            },
            checkFileSize: function (fileSize) {
                //2M
                const MAX_SIZE = 2 * 1024 * 1024;
                if (fileSize > MAX_SIZE) {
                    return false;
                }
                return true;
            },
            myFile: function (param) {
                $("#imgFile").click();
            },
            fatherBhtReceive(data) {
                this.addParam.bhtId = ''
                this.addParam.bhtId = data
            },
            fatherBtReceive(data) {
                this.addParam.btId = ''
                this.addParam.btId = data
            },
            fatherIsSaleReceive(data) {
                this.addParam.isSale = ''
                this.addParam.isSale = data
            },
            fatherLtReceive(data) {
                this.addParam.ldId = ''
                this.addParam.ldId = data
            },
            fatherDevReceive(data) {
                this.addParam.devId = ''
                this.addParam.devId = data
            },
            fatherChReceive(data) {
                this.addParam.chaId = ''
                this.addParam.chaId = data
            },
            fatherCouReceive(data) {
                this.addParam.couId = ''
                this.addParam.couId = data
            },
            fatherProReceive(data) {
                this.addParam.proId = ''
                this.addParam.proId = data
            }
        },
        computed: {
            editor() {
                return this.$refs.myQuillEditor.quill
            }
        },

    }
</script>

<style>

</style>

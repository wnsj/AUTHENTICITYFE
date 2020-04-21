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
                   <!-- <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">户型</label><span class="sign-left">:</span>
                        <div class="col-md-8">
                            <bht @bhtChange='fatherBhtReceive'></bht>
                        </div>
                    </div>-->
                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">总价</label><span class="sign-left">:</span>
                        <div class="col-md-8">

                            <input type="text" class="form-control" v-model="addParam.minTitlePrice"
                                   style="width: 40%"/>


                            <input type="text" class="form-control" v-model="addParam.maxTitlePrice"
                                   style="width: 40%"/>
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
                            <datePicker v-model="addParam.openDate" type="date" value-type="format"
                                        style="width: 97%"></datePicker>
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
                            <dev @devChange='fatherDevReceive'></dev>
                        </div>
                    </div>
                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">特色</label><span class="sign-left">:</span>
                        <div class="col-md-8">
                            <chara @charaChange='fatherChReceive'></chara>
                        </div>
                    </div>
                   <!-- <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">咨询师</label><span class="sign-left">:</span>
                        <div class="col-md-8">
                            <cou @couChange="fatherCouReceive"></cou>
                        </div>
                    </div>-->
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
                            <datePicker v-model="addParam.createDate" type="date" value-type="format"
                                        style="width: 97%"></datePicker>
                        </div>
                    </div>
                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">预交房时间</label><span class="sign-left">:</span>
                        <div class="col-md-8">
                            <datePicker v-model="addParam.proDate" type="date" value-type="format"
                                        style="width: 97%"></datePicker>
                        </div>
                    </div>
                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">效果图</label><span
                        class="sign-left">:</span>
                        <div class="col-md-8">
                            <input type="file" id="effectImg" @change="effectImgChange" accept="image/*"
                                   multiple="multiple"/>
                            <div id="effectImgOutDiv">
                                <div v-for="(item,index) of effectImgList" :key="index" v-show="effectImgList.length!==0">
                                    <div @click="fileDel(index,1)">x</div>
                                    <img :src="item" style="width: 100%">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">环境规划</label><span
                        class="sign-left">:</span>
                        <div class="col-md-8">
                            <input type="file" id="enPlanImg" @change="enPlanImgChange" accept="image/*"
                                   multiple="multiple"/>
                            <div id="enPlanImgOutDiv">
                                <div v-for="(item,index) of enPlanImgList" :key="index" v-show="enPlanImgList.length!==0">
                                    <div @click="fileDel(index,2)">x</div>
                                    <img :src="item" style="width: 100%">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">楼盘实景</label><span
                        class="sign-left">:</span>
                        <div class="col-md-8">
                            <input type="file" id="buildRealImg" @change="buildRealImgChange" accept="image/*"
                                   multiple="multiple"/>
                            <div id="buildRealImgOutDiv">
                                <div v-for="(item,index) of buildRealImgList" :key="index" v-show="buildRealImgList.length!==0">
                                    <div @click="fileDel(index,3)">x</div>
                                    <img :src="item" style="width: 100%">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">配套实景</label><span
                        class="sign-left">:</span>
                        <div class="col-md-8">
                            <input type="file" id="matchingRealImg" @change="matchingRealImgChange" accept="image/*"
                                   multiple="multiple"/>
                            <div id="matchingRealImgOutDiv">
                                <div v-for="(item,index) of matchingRealImgList" :key="index" v-show="matchingRealImgList.length!==0">
                                    <div @click="fileDel(index,4)">x</div>
                                    <img :src="item" style="width: 100%">
                                </div>
                            </div>
                        </div>
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
    import datePicker from 'vue2-datepicker'
    import bt from '../common/BildType.vue'
    import bht from '../common/BuildHorseType.vue'
    import isSale from '../common/IsSale.vue'
    import lt from '../common/LocationType.vue'
    import dev from '../common/Dev.vue'
    import chara from '../common/Chara.vue'
    import cou from '../common/Counselor.vue'
    import pro from '../common/Province.vue'

    var that = null
    // $(function () {
    //     function testFun() {
    //         alert("88")
    //     }
    // })


    // $(document).on('click', '#remove_logo', function (e) {
    //     alert("hahhsah")
    //     that.fileDel(0)
    // });

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
                    htName: '',
                    // 区域位置
                    ldId: '',
                    // 类型
                    btId: '',
                    // 户型
                    bhtId: '',
                    // 最小总价
                    minTitlePrice: '',
                    // 最大总价
                    maxTitlePrice: '',
                    // 最小单价
                    minUnitPrice: '',
                    // 最大单价
                    maxUnitPrice: '',
                    // 面积（小）
                    minArea: '',
                    // 面积(大)
                    maxArea: '',
                    // 开盘时间
                    openDate: '',
                    // 销售情况
                    isSale: '',
                    // 品牌开发商
                    devId: '',
                    // 特色
                    chaId: '',
                    // 地址
                    adress: '',
                    // 省份
                    proId: '',
                    // 简称
                    alias: '',
                    // 加推时间
                    createDate: '',
                    // 预交房时间
                    proDate: ''
                },
                title: '',
                effectImgList: [],
                effectImgFileList: [],
                enPlanImgList: [],
                enPlanImgFileList: [],
                buildRealImgList: [],
                buildRealImgFileList: [],
                matchingRealImgList: [],
                matchingRealImgFileList: [],
                size: 0,
                imgData: {
                    accept: 'image/gif, image/jpeg, image/png, image/jpg',
                }
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
                        htName: '',
                        // 区域位置
                        ldId: '',
                        // 类型
                        btId: '',
                        // 户型
                        bhtId: '',
                        // 最小总价
                        minTitlePrice: '',
                        // 最大总价
                        maxTitlePrice: '',
                        // 最小单价
                        minUnitPrice: '',
                        // 最大单价
                        maxUnitPrice: '',
                        // 面积（小）
                        minArea: '',
                        // 面积(大)
                        maxArea: '',
                        // 开盘时间
                        openDate: '',
                        // 销售情况
                        isSale: '',
                        // 品牌开发商
                        devId: '',
                        // 特色
                        chaId: '',
                        // 地址
                        adress: '',
                        // 省份
                        proId: '',
                        // 简称
                        alias: '',
                        // 加推时间
                        createDate: '',
                        // 预交房时间
                        proDate: ''
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
                // const effectImg = $("#effectImg")[0].files;
                for (let i = 0; i < this.effectImgFileList.length; i++) {
                    fd.append("effectImg", this.effectImgFileList[i]);
                }

                // 环境规划
                // const enPlanImg = $("#enPlanImg")[0].files;
                for (let i = 0; i < this.enPlanImgFileList.length; i++) {
                    fd.append("enPlanImg", this.enPlanImgFileList[i]);
                }
                // 楼盘实景
                // const buildRealImg = $("#buildRealImg")[0].files;
                for (let i = 0; i < this.buildRealImgFileList.length; i++) {
                    fd.append("buildRealImg", this.buildRealImgFileList[i]);
                }
                // 配套实景
                // const matchingRealImg = $("#matchingRealImg")[0].files;
                for (let i = 0; i < this.matchingRealImgFileList.length; i++) {
                    fd.append("matchingRealImg", this.matchingRealImgFileList[i]);
                }
                fd.append("addParam", JSON.stringify(this.addParam));

                let url = '';
                switch (this.title) {
                    case '新增':
                        url = this.url + '/buildingBean/addBuilding'
                        break;
                    case '修改':
                        url = this.url + '/buildingBean/patchById'
                        break;
                }

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
                    console.log('楼盘信息提交失败')
                });
            },
            closeCurrentPage() {
                $("#buildDialog").modal("hide")
            },

            formatFileSize: function (fileSize, idx) {
                var units = ["B", "KB", "MB", "GB"];
                idx = idx || 0;
                if (fileSize < 1024 || idx === units.length - 1) {
                    return fileSize.toFixed(1) + units[idx];
                }
                return this.formatFileSize(fileSize / 1024, ++idx);
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
            },
            //预览图
            effectImgChange() {

                var files = $("#effectImg")[0].files; //获取file对象
                for (let i = 0; i < files.length; i++) {
                    var file = files[i]
                    this.fileAdd(file, i, 1)
                }
            },
            enPlanImgChange() {

                var files = $("#enPlanImg")[0].files; //获取file对象
                for (let i = 0; i < files.length; i++) {
                    var file = files[i]
                    this.fileAdd(file, i, 2)
                }
            },
            buildRealImgChange() {

                var files = $("#buildRealImg")[0].files; //获取file对象
                for (let i = 0; i < files.length; i++) {
                    var file = files[i]
                    this.fileAdd(file, i, 3)
                }
            },
            matchingRealImgChange() {

                var files = $("#matchingRealImg")[0].files; //获取file对象
                for (let i = 0; i < files.length; i++) {
                    var file = files[i]
                    this.fileAdd(file, i, 4)
                }
            },
            fileAdd(file, i, pictureType) {
                let type = file.type;//文件的类型，判断是否是图片
                let size = file.size;//文件的大小，判断图片的大小
                if (this.imgData.accept.indexOf(type) === -1) {
                    alert('请选择我们支持的图片格式！');
                    return false;
                }
                if (size > 3145728) {
                    alert('请选择3M以内的图片！');
                    return false;
                }
                let that = this;
                // 总大小
                this.size = this.size + file.size;
                let reader = new FileReader();
                // 调用reader.readAsDataURL()方法，把图片转成base64
                reader.readAsDataURL(file);

                // 监听reader对象的onload事件，当图片加载完成时，把base64编码賦值给预览图片
                reader.onload = function () {
                    var dataUrl = reader.result;

                    file.src = this.result;
                    if (pictureType === 1) {
                        that.effectImgFileList.push(file)
                        that.effectImgList.push(dataUrl)

                    } else if (pictureType === 2) {
                        that.enPlanImgFileList.push(file)
                        that.enPlanImgList.push(dataUrl)

                    } else if (pictureType === 3) {
                        that.buildRealImgFileList.push(file)
                        that.buildRealImgList.push(dataUrl)
                    } else if (pictureType === 4) {
                        that.matchingRealImgFileList.push(file)
                        that.matchingRealImgList.push(dataUrl)

                        // if ($("#matchingRealImgInnDiv_" + i).length <= 0) $("#matchingRealImgOutDiv").append(
                        //     "<div id='matchingRealImgInnDiv_" + i + "' >" +
                        //     "<img id='matchingRealImg_" + i + "' src='#' style='width: 100%' />" +
                        //     "</div>"
                        // );
                        // $("#matchingRealImg_" + i).attr("src", dataUrl);
                    }

                }
            },
            fileDel(index,type) {
                if (type === 1) {
                    this.effectImgList.splice(index, 1);
                    this.effectImgFileList.splice(index, 1)
                } else if (type === 2) {
                    this.enPlanImgList.splice(index,1)
                    this.enPlanImgFileList.splice(index,1)
                } else if (type === 3) {
                    this.buildRealImgList.splice(index,1)
                    this.buildRealImgFileList.splice(index,1)
                } else if (type === 4) {
                    this.matchingRealImgList.splice(index,1)
                    this.matchingRealImgFileList.splice(index,1)
                }
            }
        },
        computed: {
            editor() {
                return this.$refs.myQuillEditor.quill
            }
        }
    }
</script>

<style>
    .remove_logo {
        width: 1.5rem;
        height: 1.5rem;
        background: red;
        border-radius: 25px;

        text-align: center;
        line-height: 1rem;
        font-size: 0.5rem;
        color: #777777;
    }
</style>

<!-- add and modify position -->
<template>
    <div class="modal-content" id="build">
        <div class="modal-header">
            <h4 id="myModalLabel" class="modal-title">{{title}}楼盘</h4>
        </div>
        <div class="modal-body  pos_r">
            <div class="tab-pane fade in active martop" id="basic">
                <div id="buildInputBox" class="clearfix">
                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">楼盘名称</label><span class="sign-left">:</span>
                        <div class="col-md-8">
                            <input type="text" class="form-control" v-model="addParam.htName">
                        </div>
                    </div>
                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">楼盘经度</label><span class="sign-left">:</span>
                        <div class="col-md-8">
                            <input type="text" class="form-control" v-model="addParam.longitude">
                        </div>
                    </div>
                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">楼盘纬度</label><span class="sign-left">:</span>
                        <div class="col-md-8">
                            <input type="text" class="form-control" v-model="addParam.latitude">
                        </div>
                    </div>
                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">产权年限</label><span class="sign-left">:</span>
                        <div class="col-md-8">
                            <input type="text" class="form-control" v-model="addParam.ownershipYear">
                        </div>
                    </div>
                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">容积率</label><span class="sign-left">:</span>
                        <div class="col-md-8">
                            <input type="text" class="form-control" v-model="addParam.plotRatio">
                        </div>
                    </div>
                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">绿化率</label><span class="sign-left">:</span>
                        <div class="col-md-8">
                            <input type="text" class="form-control" v-model="addParam.greeningRate">
                        </div>
                    </div>
                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">售楼地址</label><span class="sign-left">:</span>
                        <div class="col-md-8">
                            <input type="text" class="form-control" v-model="addParam.saleAddress">
                        </div>
                    </div>
                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">楼盘特点</label><span class="sign-left">:</span>
                        <div class="col-md-8">
                            <input type="text" class="form-control" v-model="addParam.buildDescription">
                        </div>
                    </div>
                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">物业地址</label><span class="sign-left">:</span>
                        <div class="col-md-8">
                            <input type="text" class="form-control" v-model="addParam.propertyAddress">
                        </div>
                    </div>
                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">装修情况</label><span class="sign-left">:</span>
                        <div class="col-md-8">
                            <input type="text" class="form-control" v-model="addParam.decoration">
                        </div>
                    </div>
                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">占地面积</label><span class="sign-left">:</span>
                        <div class="col-md-8">
                            <input type="text" class="form-control" v-model="addParam.coveredArea">
                        </div>
                    </div>
                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">总户数</label><span class="sign-left">:</span>
                        <div class="col-md-8">
                            <input type="text" class="form-control" v-model="addParam.households">
                        </div>
                    </div>
                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">建筑风格</label><span class="sign-left">:</span>
                        <div class="col-md-8">
                            <input type="text" class="form-control" v-model="addParam.architecturalStyle">
                        </div>
                    </div>
                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">开发周期</label><span class="sign-left">:</span>
                        <div class="col-md-8">
                            <input type="text" class="form-control" v-model="addParam.iteration">
                        </div>
                    </div>
                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">建筑面积</label><span class="sign-left">:</span>
                        <div class="col-md-8">
                            <input type="text" class="form-control" v-model="addParam.floorage">
                        </div>
                    </div>
                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">物业公司</label><span class="sign-left">:</span>
                        <div class="col-md-8">
                            <input type="text" class="form-control" v-model="addParam.propertyCompany">
                        </div>
                    </div>
                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">物业费</label><span class="sign-left">:</span>
                        <div class="col-md-8">
                            <input type="text" class="form-control" v-model="addParam.propertyFee">
                        </div>
                    </div>
                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">停车位</label><span class="sign-left">:</span>
                        <div class="col-md-8">
                            <input type="text" class="form-control" v-model="addParam.parkingSpace">
                        </div>
                    </div>
                    <!--  <div class="col-md-6 form-group clearfix">
                          <label class="col-md-3 control-label text-right nopad end-aline"
                                 style="padding:0;line-height:34px;">预售许可证</label><span class="sign-left">:</span>
                          <div class="col-md-8">
                              <input type="text" class="form-control" v-model="addParam.households">
                          </div>
                      </div>-->
                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">别名</label><span class="sign-left">:</span>
                        <div class="col-md-8">
                            <input type="text" class="form-control" v-model="addParam.alias">
                        </div>
                    </div>
                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">位置类型</label><span class="sign-left">:</span>
                        <div class="col-md-8">
                            <lt @ltChange='fatherLtReceive'></lt>
                        </div>
                    </div>
                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">位置</label><span class="sign-left">:</span>
                        <div class="col-md-8">
                            <ldt @ldtChange='fatherLdtReceive' ref="ldtRef"></ldt>
                        </div>
                    </div>
                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">环线</label><span class="sign-left">:</span>
                        <div class="col-md-8">
                            <Region @regionChange='fatherRegReceive' ref="regionRef"></Region>
                        </div>
                    </div>
                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">类型</label><span class="sign-left">:</span>
                        <div class="col-md-8">
                            <bt @btChange='fatherBtReceive' ref="btRef"></bt>
                        </div>
                    </div>
                     <div class="col-md-6 form-group clearfix">
                         <label class="col-md-3 control-label text-right nopad end-aline"
                                style="padding:0;line-height:34px;">户型</label><span class="sign-left">:</span>
                         <div class="col-md-8">
                             <build-horse-types @bhtsChange='fatherBhtReceive' ref="bhtsRef"></build-horse-types>
                         </div>
                     </div>
                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">热销值</label><span class="sign-left">:</span>
                        <div class="col-md-8">
                            <input type="text" class="form-control" v-model="addParam.sellWell"/>
                        </div>
                    </div>
                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">人气值</label><span class="sign-left">:</span>
                        <div class="col-md-8">
                            <input type="text" class="form-control" v-model="addParam.popularity"/>
                        </div>
                    </div>
                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">热搜值</label><span class="sign-left">:</span>
                        <div class="col-md-8">
                            <input type="text" class="form-control" v-model="addParam.hotSearch"/>
                        </div>
                    </div>
                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">特价</label><span class="sign-left">:</span>
                        <div class="col-md-8">
                            <input type="text" class="form-control" v-model="addParam.specialOffer"/>
                        </div>
                    </div>
                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">推荐户型</label><span class="sign-left">:</span>
                        <div class="col-md-8">
                            <select class="form-control" v-model="addParam.recommend">
                                <option value=0>--未选择--</option>
                                <option value=1>--是--</option>
                                <option value=2>--否--</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">优选楼盘</label><span class="sign-left">:</span>
                        <div class="col-md-8">
                            <select class="form-control" v-model="addParam.optimization">
                                <option value=0>--未选择--</option>
                                <option value=1>--是--</option>
                                <option value=2>--否--</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">品质楼盘</label><span class="sign-left">:</span>
                        <div class="col-md-8">
                            <select class="form-control" v-model="addParam.quality">
                                <option value=0>--未选择--</option>
                                <option value=1>--是--</option>
                                <option value=2>--否--</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">优惠楼盘</label><span class="sign-left">:</span>
                        <div class="col-md-8">
                            <select class="form-control" v-model="addParam.discount">
                                <option value=0>--未选择--</option>
                                <option value=1>--是--</option>
                                <option value=2>--否--</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">最近开盘</label><span class="sign-left">:</span>
                        <div class="col-md-8">
                            <select class="form-control" v-model="addParam.buildOpen">
                                <option value=0>--未选择--</option>
                                <option value=1>--是--</option>
                                <option value=2>--否--</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">最小总价</label><span class="sign-left">:</span>
                        <div class="col-md-8">
                            <input type="text" class="form-control" v-model="addParam.minTitlePrice"/>
                        </div>
                    </div>
                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">最大总价</label><span class="sign-left">:</span>
                        <div class="col-md-8">
                            <input type="text" class="form-control" v-model="addParam.maxTitlePrice"/>
                        </div>
                    </div>
                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">最小单价</label><span class="sign-left">:</span>
                        <div class="col-md-8">
                            <input type="text" class="form-control" v-model="addParam.minUnitPrice"/>
                        </div>
                    </div>
                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">最大单价</label><span class="sign-left">:</span>
                        <div class="col-md-8">
                            <input type="text" class="form-control" v-model="addParam.maxUnitPrice"/>
                        </div>
                    </div>
                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">最小面积</label><span class="sign-left">:</span>
                        <div class="col-md-8">
                            <input type="text" class="form-control" v-model="addParam.minArea"/>
                        </div>
                    </div>
                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">最大面积</label><span class="sign-left">:</span>
                        <div class="col-md-8">
                            <input type="text" class="form-control" v-model="addParam.maxArea"/>
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
                            <is-sale @isSaleChange='fatherIsSaleReceive' ref="saleRef"></is-sale>
                        </div>
                    </div>
                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">开发商</label><span class="sign-left">:</span>
                        <div class="col-md-8">
                            <dev @devChange='fatherDevReceive' ref="devRef"></dev>
                        </div>
                    </div>
                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">特色标签</label><span class="sign-left">:</span>
                        <div class="col-md-8">
                            <Charas @charsChange='fatherChReceive' ref="charsRef"></Charas>
                        </div>
                    </div>
                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">楼盘地址</label><span class="sign-left">:</span>
                        <div class="col-md-8">
                            <input type="text" class="form-control" v-model="addParam.adress"/>
                        </div>
                    </div>
                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">联系方式</label><span class="sign-left">:</span>
                        <div class="col-md-8">
                            <input type="text" class="form-control" v-model="addParam.tel"/>
                        </div>
                    </div>
                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">省份</label><span class="sign-left">:</span>
                        <div class="col-md-8">
                            <pro @proChange="fatherProReceive" ref="proRef"></pro>
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
                               style="padding:0;line-height:34px;">户型图</label><span
                        class="sign-left">:</span>
                        <div class="col-md-8">
                            <input type="file" id="effectImg" @change="effectImgChange" accept="image/*"
                                   multiple="multiple"/>
                            <div id="effectImgOutDiv">
                                <div v-for="(item,index) of effectImgList" :key="index"
                                     v-show="effectImgList.length!==0">
                                    <div @click="fileDel(index,1)">x</div>
                                    <img :src="item" style="width: 100%">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">小区环境</label><span
                        class="sign-left">:</span>
                        <div class="col-md-8">
                            <input type="file" id="enPlanImg" @change="enPlanImgChange" accept="image/*"
                                   multiple="multiple"/>
                            <div id="enPlanImgOutDiv">
                                <div v-for="(item,index) of enPlanImgList" :key="index"
                                     v-show="enPlanImgList.length!==0">
                                    <div @click="fileDel(index,2)">x</div>
                                    <img :src="item" style="width: 100%">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">实景图</label><span
                        class="sign-left">:</span>
                        <div class="col-md-8">
                            <input type="file" id="buildRealImg" @change="buildRealImgChange" accept="image/*"
                                   multiple="multiple"/>
                            <div id="buildRealImgOutDiv">
                                <div v-for="(item,index) of buildRealImgList" :key="index"
                                     v-show="buildRealImgList.length!==0">
                                    <div @click="fileDel(index,3)">x</div>
                                    <img :src="item" style="width: 100%">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">全景看房</label><span
                        class="sign-left">:</span>
                        <div class="col-md-8">
                            <input type="file" id="matchingRealImg" @change="matchingRealImgChange" accept="image/*"
                                   multiple="multiple"/>
                            <div id="matchingRealImgOutDiv">
                                <div v-for="(item,index) of matchingRealImgList" :key="index"
                                     v-show="matchingRealImgList.length!==0">
                                    <div @click="fileDel(index,4)">x</div>
                                    <img :src="item" style="width: 100%">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">头图</label><span
                        class="sign-left">:</span>
                        <div class="col-md-8">
                            <input type="file" id="headImg" @change="headImgChange" accept="image/*"
                                   />
                            <div id="headImgOutDiv">
                                <div v-for="(item,index) of headImgList" :key="index" v-show="headImgList.length!==0">
                                    <div @click="fileDel(index,5)">x</div>
                                    <img :src="item" style="width: 100%">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">视频</label><span
                        class="sign-left">:</span>
                        <div class="col-md-8">
                            <input type="file" id="video"
                                   />
                        </div>
                    </div>
                    <div class="col-md-6 form-group clearfix" style="width: 100%;">

                    </div>
                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">项目介绍</label><span
                        class="sign-left">:</span>
                        <div class="col-md-8">
                            <textarea style="height: 300px;width: 400px;" v-model="addParam.projectIntroduction"
                                      placeholder="项目介绍"></textarea>
                        </div>
                    </div>

                </div>

                <div id="buildBtnBox" class="form-group clearfix">
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

            </div>

        </div>

    </div>
</template>


<script>
    import datePicker from 'vue2-datepicker'
    import bt from '../common/BildType.vue'
    import BuildHorseTypes from '../common/BuildHorseTypes.vue'
    import isSale from '../common/IsSale.vue'
    import lt from '../common/LocationType.vue'
    import ldt from '../common/LocationDType.vue'
    import dev from '../common/Dev.vue'
    import Charas from '../common/Charas.vue'
    import cou from './subCou/Counselor.vue'
    import pro from '../common/Province.vue'
    import Region from '../common/Region.vue'
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
            BuildHorseTypes,
            isSale,
            lt,
            ldt,
            dev,
            Charas,
            cou,
            pro,
            Region
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
                    bhtIdList: [],
                    // 最小总价
                    minTitlePrice: '0',
                    // 最大总价
                    maxTitlePrice: '0',
                    // 最小单价
                    minUnitPrice: '0',
                    // 最大单价
                    maxUnitPrice: '0',
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
                    chaIdList: [],
                    // 地址
                    adress: '',
                    // 省份
                    proId: '',
                    // 简称
                    alias: '',
                    // 加推时间
                    createDate: '',
                    // 预交房时间
                    proDate: '',
                    // 产权年限
                    ownershipYear: '',
                    // 物业类型
                    propertyType: '',
                    // 容积率
                    plotRatio: '',
                    // 绿化率
                    greeningRate: '',
                    // 售楼地址
                    saleAddress: '',
                    // 物业地址
                    propertyAddress: '',
                    // 装修情况
                    decoration: '',
                    // 占地面积
                    coveredArea: '',
                    // 建筑面积
                    floorage: '',
                    // 户数
                    households: '',
                    // 建筑风格
                    architecturalStyle: '',
                    // 开发周期
                    iteration: '',
                    // 物业公司
                    propertyCompany: '',
                    // 物业费
                    propertyFee: '',
                    // 停车位
                    parkingSpace: '',
                    // 项目介绍
                    projectIntroduction: '1',
                    // 优惠(1:优惠；2：不优惠)
                    discount: 0,
                    // 热销值
                    sellWell: '0',
                    //(1:近期开盘;2:不是近期开盘)
                    buildOpen: 0,
                    // 联系方式
                    tel: '',
                    // 修改时间
                    modifyTime: '',
                    // 人气值
                    popularity: '0',
                    // 热搜值
                    hotSearch: '0',
                    // 特价值
                    specialOffer: '0',
                    //是否推荐户型（1：是；2：否）
                    recommend: 1,
                    // 是否是优选楼盘（1：是；2：否）
                    optimization: 1,
                    //是否是品质楼盘（1：是；2：否）
                    quality: 1,
                    // 经度
                    longitude: '',
                    // 纬度
                    latitude: '',
                    // 楼盘特色描述
                    buildDescription: '',
                    // 环线id
                    regionId:'',
                },
                title: '',
                effectImgList:
                    [],
                effectImgFileList:
                    [],
                enPlanImgList:
                    [],
                enPlanImgFileList:
                    [],
                buildRealImgList:
                    [],
                buildRealImgFileList:
                    [],
                matchingRealImgList:
                    [],
                matchingRealImgFileList:
                    [],
                headImgList:
                    [],
                headImgFileList:
                    [],
                size:
                    0,
                imgData:
                    {
                        accept: 'image/gif, image/jpeg, image/png, image/jpg',
                    }
            }
                ;
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
                        bhtIdList: [],
                        // 最小总价
                        minTitlePrice: '0',
                        // 最大总价
                        maxTitlePrice: '0',
                        // 最小单价
                        minUnitPrice: '0',
                        // 最大单价
                        maxUnitPrice: '0',
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
                        chaIdList: [],
                        // 地址
                        adress: '',
                        // 省份
                        proId: '',
                        // 简称
                        alias: '',
                        // 加推时间
                        createDate: '',
                        // 预交房时间
                        proDate: '',
                        // 产权年限
                        ownershipYear: '',
                        // 物业类型
                        propertyType: '',
                        // 容积率
                        plotRatio: '',
                        // 绿化率
                        greeningRate: '',
                        // 售楼地址
                        saleAddress: '',
                        // 物业地址
                        propertyAddress: '',
                        // 装修情况
                        decoration: '',
                        // 占地面积
                        coveredArea: '',
                        // 建筑面积
                        floorage: '',
                        // 户数
                        households: '',
                        // 建筑风格
                        architecturalStyle: '',
                        // 开发周期
                        iteration: '',
                        // 物业公司
                        propertyCompany: '',
                        // 物业费
                        propertyFee: '',
                        // 停车位
                        parkingSpace: '',
                        // 项目介绍
                        projectIntroduction: '1',
                        // 优惠(1:优惠；2：不优惠)
                        discount: 0,
                        // 热销值
                        sellWell: '0',
                        //(1:近期开盘;2:不是近期开盘)
                        buildOpen: 0,
                        // 联系方式
                        tel: '',
                        // 修改时间
                        modifyTime: '',
                        // 人气值
                        popularity: '0',
                        // 热搜值
                        hotSearch: '0',
                        // 特价值
                        specialOffer: '0',
                        //是否推荐户型（1：是；2：否）
                        recommend: 1,
                        // 是否是优选楼盘（1：是；2：否）
                        optimization: 1,
                        //是否是品质楼盘（1：是；2：否）
                        quality: 1,
                        // 经度
                        longitude: '',
                        // 纬度
                        latitude: '',
                        // 楼盘特色描述
                        buildDescription: '',
                        // 环线id
                        regionId: ''
                    }
                } else if (param === 'modify') {
                    console.log('Initialization evaluation’s content, which modifies evaluation')
                    this.title = '修改'

                    this.$refs.ldtRef.setLdtId(addParam.ldId)
                    this.$refs.btRef.setBtId(addParam.btId)
                    this.$refs.saleRef.setIsSale(addParam.isSale)
                    this.$refs.devRef.setDevId(addParam.devId)
                    this.$refs.charsRef.setCharaList(addParam.chaIdList)
                    this.$refs.bhtsRef.setBhtIdList(addParam.bhtIdList)
                    this.$refs.proRef.setProId(addParam.proId)
                    this.$refs.regionRef.setRegionId(addParam.regionId)
                    Object.assign(this.addParam, addParam)
                }
            },


            certainAction() {
				if(this.isBlank(this.addParam.sellWell)){
					alert('热销值不能为空')
					return
				}
				if(this.isBlank(this.addParam.hotSearch)){
					alert('热搜值不能为空')
					return
				}
				if(this.isBlank(this.addParam.popularity)){
					alert('人气值不能为空')
					return
				}
				
				if(this.isBlank(this.addParam.specialOffer)){
					alert('热搜值不能为空')
					return
				}
				
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

                // 头图
                for (let i = 0; i < this.headImgFileList.length; i++) {
                    fd.append("headImg", this.headImgFileList[i]);
                }
                // 视频
                fd.append("video",$("#video")[0].files[0]);

                fd.append("addParam", JSON.stringify(this.addParam));
                switch (this.title) {
                    case '新增':
                       var url = this.url + '/buildingBean/addBuilding'
                        break;
                    case '修改':
                       var url = this.url + '/buildingBean/patchById'
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
                this.addParam.bhtIdList = []
                this.addParam.bhtIdList = data
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
                this.$refs.ldtRef.locationTypeChange(data)
            },
            fatherLdtReceive(data) {
                this.addParam.ldId = ''
                this.addParam.ldId = data
            },
            fatherDevReceive(data) {
                this.addParam.devId = ''
                this.addParam.devId = data
            },
            fatherChReceive(data) {
                this.addParam.chaIdList = []
                this.addParam.chaIdList = data
            },
            fatherRegReceive(data) {
                this.addParam.regionId = ''
                this.addParam.regionId = data
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
            headImgChange() {

                var files = $("#headImg")[0].files; //获取file对象
                for (let i = 0; i < files.length; i++) {
                    var file = files[i]
                    this.fileAdd(file, i, 5)
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
                    } else if (pictureType === 5) {
                        that.headImgFileList.push(file)
                        that.headImgList.push(dataUrl)
                    }

                }
            },
            fileDel(index, type) {
                if (type === 1) {
                    this.effectImgList.splice(index, 1);
                    this.effectImgFileList.splice(index, 1)
                } else if (type === 2) {
                    this.enPlanImgList.splice(index, 1)
                    this.enPlanImgFileList.splice(index, 1)
                } else if (type === 3) {
                    this.buildRealImgList.splice(index, 1)
                    this.buildRealImgFileList.splice(index, 1)
                } else if (type === 4) {
                    this.matchingRealImgList.splice(index, 1)
                    this.matchingRealImgFileList.splice(index, 1)
                } else if (type === 5) {
                    this.headImgList.splice(index, 1)
                    this.headImgFileList.splice(index, 1)
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
    #buildInputBox{height: 550px;overflow-y: scroll;overflow-x: hidden; }
    #buildBtnBox{padding-top: 20px;}
</style>

<!-- add and modify position -->
<template>
    <div class="modal-content bigWidthModal" id="build">
        <div class="modal-header">
            <h4 id="myModalLabel" class="modal-title">{{title}}楼盘</h4>
        </div>
        <div class="modal-body  pos_r">
            <div class="tab-pane fade in active martop" id="basic">
                <div class="dialogInutBox clearfix">
                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">楼盘名称</label><span class="sign-left">:</span>
                        <div class="col-md-8">
                            <input type="text" class="form-control" v-model="addParam.htName" placeholder="楼盘名称必填">
                        </div>
                    </div>
                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">楼盘经度</label><span class="sign-left">:</span>
                        <div class="col-md-8">
                            <input type="text" class="form-control" v-model="addParam.longitude"
                                   placeholder="数值,可填:30.002">
                        </div>
                    </div>
                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">楼盘纬度</label><span class="sign-left">:</span>
                        <div class="col-md-8">
                            <input type="text" class="form-control" v-model="addParam.latitude"
                                   placeholder="数值,可填:30.002">
                        </div>
                    </div>
                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">产权年限</label><span class="sign-left">:</span>
                        <div class="col-md-8">
                            <input type="text" class="form-control intWid100" v-model="addParam.ownershipYear"
                                   placeholder="数值,可填:30"><span class="Unit">年</span>
                        </div>
                    </div>
                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">容积率</label><span class="sign-left">:</span>
                        <div class="col-md-8">
                            <input type="text" class="form-control intWid100" v-model="addParam.plotRatio"
                                   placeholder="数值,可填:1.0"><span class="Unit">%</span>
                        </div>
                    </div>
                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">绿化率</label><span class="sign-left">:</span>
                        <div class="col-md-8">
                            <input type="text" class="form-control intWid100" v-model="addParam.greeningRate"
                                   placeholder="必填,可填:1.0"><span class="Unit">%</span>
                        </div>
                    </div>
                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">售楼地址</label><span class="sign-left">:</span>
                        <div class="col-md-8">
                            <input type="text" class="form-control" v-model="addParam.saleAddress"
                                   placeholder="必填,可填:无">
                        </div>
                    </div>
                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">楼盘特点</label><span class="sign-left">:</span>
                        <div class="col-md-8">
                            <input type="text" class="form-control" v-model="addParam.buildDescription"
                                   placeholder="必填,可填:无">
                        </div>
                    </div>
                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">物业地址</label><span class="sign-left">:</span>
                        <div class="col-md-8">
                            <input type="text" class="form-control" v-model="addParam.propertyAddress"
                                   placeholder="必填,可填:无">
                        </div>
                    </div>
                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">装修情况</label><span class="sign-left">:</span>
                        <div class="col-md-8">
                            <input type="text" class="form-control" v-model="addParam.decoration" placeholder="必填,可填:无">
                        </div>
                    </div>
                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">占地面积</label><span class="sign-left">:</span>
                        <div class="col-md-8">
                            <input type="text" class="form-control intWid100" v-model="addParam.coveredArea"
                                   placeholder="数值,可填:1"><span class="Unit">㎡</span>
                        </div>
                    </div>
                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">总户数</label><span class="sign-left">:</span>
                        <div class="col-md-8">
                            <input type="text" class="form-control" v-model="addParam.households" placeholder="数值,可填:1">
                        </div>
                    </div>
                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">建筑风格</label><span class="sign-left">:</span>
                        <div class="col-md-8">
                            <input type="text" class="form-control" v-model="addParam.architecturalStyle"
                                   placeholder="必填,可填:无">
                        </div>
                    </div>
                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">开发周期</label><span class="sign-left">:</span>
                        <div class="col-md-8">
                            <input type="text" class="form-control intWid100" v-model="addParam.iteration" placeholder="数值,可填:1"><span class="Unit">年</span>
                        </div>
                    </div>
                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">建筑面积</label><span class="sign-left">:</span>
                        <div class="col-md-8">
                            <input type="text" class="form-control intWid100" v-model="addParam.floorage" placeholder="数值,可填:1"><span class="Unit">㎡</span>
                        </div>
                    </div>
                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">物业公司</label><span class="sign-left">:</span>
                        <div class="col-md-8">
                            <input type="text" class="form-control" v-model="addParam.propertyCompany"
                                   placeholder="必填,可填:无">
                        </div>
                    </div>
                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">物业类型</label><span class="sign-left">:</span>
                        <div class="col-md-8">
                            <input type="text" class="form-control" v-model="addParam.propertyType"
                                   placeholder="必填,可填:无">
                        </div>
                    </div>
                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">物业费</label><span class="sign-left">:</span>
                        <div class="col-md-8">
                            <input type="text" class="form-control intWid100" v-model="addParam.propertyFee"
                                   placeholder="数值,可填:1"><span class="Unit">元 / 年</span>
                        </div>
                    </div>
                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">停车位</label><span class="sign-left">:</span>
                        <div class="col-md-8">
                            <input type="text" class="form-control intWid100" v-model="addParam.parkingSpace"
                                   placeholder="数值,可填:1"><span class="Unit">个</span>
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
                            <input type="text" class="form-control" v-model="addParam.alias" placeholder="必填,可填:无">
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
                            <input type="text" class="form-control" v-model="addParam.sellWell" placeholder="必填"/>
                        </div>
                    </div>
                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">人气值</label><span class="sign-left">:</span>
                        <div class="col-md-8">
                            <input type="text" class="form-control" v-model="addParam.popularity" placeholder="必填"/>
                        </div>
                    </div>
                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">热搜值</label><span class="sign-left">:</span>
                        <div class="col-md-8">
                            <input type="text" class="form-control" v-model="addParam.hotSearch" placeholder="必填"/>
                        </div>
                    </div>
                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">特价</label><span class="sign-left">:</span>
                        <div class="col-md-8">
                            <input type="text" class="form-control intWid100" v-model="addParam.specialOffer" placeholder="必填"/><span class="Unit">万</span>
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
                               style="padding:0;line-height:34px;">最小总价</label><span class="sign-left">:</span>
                        <div class="col-md-8">
                            <input type="text" class="form-control intWid100"  v-model="addParam.minTitlePrice" placeholder="必填"/><span class="Unit">万</span>
                        </div>
                    </div>
                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">最大总价</label><span class="sign-left">:</span>
                        <div class="col-md-8">
                            <input type="text" class="form-control intWid100"  v-model="addParam.maxTitlePrice" placeholder="必填"/><span class="Unit">万</span>
                        </div>
                    </div>
                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">最小单价</label><span class="sign-left">:</span>
                        <div class="col-md-8">
                            <input type="text" class="form-control intWid100" v-model="addParam.minUnitPrice" placeholder="必填"/><span class="Unit">万</span>
                        </div>
                    </div>
                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">最大单价</label><span class="sign-left">:</span>
                        <div class="col-md-8">
                            <input type="text" class="form-control intWid100" v-model="addParam.maxUnitPrice" placeholder="必填"/><span class="Unit">万</span>
                        </div>
                    </div>
                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">最小面积</label><span class="sign-left">:</span>
                        <div class="col-md-8">
                            <input type="text" class="form-control intWid100" v-model="addParam.minArea" placeholder="必填"/><span class="Unit">㎡</span>
                        </div>
                    </div>
                    <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">最大面积</label><span class="sign-left">:</span>
                        <div class="col-md-8">
                            <input type="text" class="form-control intWid100" v-model="addParam.maxArea" placeholder="必填"/><span class="Unit">㎡</span>
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
                            <input type="text" class="form-control" v-model="addParam.devId"/>
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
                            <label class="a-upload">
                                <input type="file" id="effectImg" @change="effectImgChange"
                                       accept="image/*"
                                       multiple="multiple"/>
                            </label>
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
                               style="padding:0;line-height:34px;">区位</label><span
                        class="sign-left">:</span>
                        <div class="col-md-8">
                            <input type="file" id="regionImg" @change="regionImgChange" accept="image/*"
                                   multiple="multiple"/>
                            <div id="regionImgOutDiv">
                                <div v-for="(item,index) of regionImgList" :key="index"
                                     v-show="regionImgList.length!==0">
                                    <div @click="fileDel(index,6)">x</div>
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
                            <div id="playAvOutDiv" v-if="playAvOutDivFlag">
<!--                                <PlayAV ref="playRef"></PlayAV>-->
                                <label class="col-md-3 control-label text-right nopad end-aline"
                                       style="padding:0;line-height:34px;">{{this.videoName}}</label>
                            </div>
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

                <div class="dialogBtnBox form-group clearfix">
                    <div class="col-md-12">
                        <button type="button" class="btn btn-warning pull-right m_r_10" style="margin-right:1.5%;"
                                data-toggle="modal"
                                v-on:click="closeCurrentPage()">返回
                        </button>
                        <button type="button" :disabled="this.isDisable" class="btn btn-primary pull-right m_r_10"
                                style="margin-right:1.5%;"
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
    import PlayAV from '../common/PlayAV.vue'

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
            Region,
            PlayAV
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
                    minTitlePrice: '1',
                    // 最大总价
                    maxTitlePrice: '1',
                    // 最小单价
                    minUnitPrice: '1',
                    // 最大单价
                    maxUnitPrice: '1',
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
                    projectIntroduction: '',
                    // 热销值
                    sellWell: '1',
                    // 联系方式
                    tel: '',
                    // 修改时间
                    modifyTime: '',
                    // 人气值
                    popularity: '1',
                    // 热搜值
                    hotSearch: '1',
                    // 特价值
                    specialOffer: '1',
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
                    regionId: '',
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
                regionImgList: [],
                regionImgFileList: [],
                isDisable: false,
                size: 0,
                imgData: {
                        accept: 'image/gif, image/jpeg, image/png, image/jpg',
                    },
                playAvOutDivFlag:true,
                videoName:''
            }
                ;
        },
        methods: {
            // Initialization projcet’s content
            initData(param, addParam) {

                this.effectImgList = []

                this.enPlanImgList = []

                this.buildRealImgList = []

                this.matchingRealImgList = []

                this.headImgList = []

                this.regionImgList = []

                this.videoName = ''
                this.effectImgFileList = []
                this.enPlanImgFileList = []
                this.buildRealImgFileList = []
                this.matchingRealImgFileList = []
                this.headImgFileList = []
                this.regionImgFileList = []

                $("#effectImg").val("");
                $("#enPlanImg").val("");
                $("#buildRealImg").val("");
                $("#matchingRealImg").val("");
                $("#regionImg").val("");
                $("#headImg").val("");
                $("#video").val("");

                $('#buildDialog').modal({backdrop: 'static', keyboard: false});
                if (param === 'add') {
                    this.title = '新增'
                    this.$refs.ldtRef.setLdtId('0')
                    this.$refs.btRef.setBtId('0')
                    this.$refs.saleRef.setIsSale('0')
                    // this.$refs.devRef.setDevId(addParam.devId)
                    this.$refs.charsRef.setCharaList([])
                    this.$refs.bhtsRef.setBhtIdList([])
                    this.$refs.proRef.setProId('0')
                    this.$refs.regionRef.setRegionId('0')
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
                        minTitlePrice: '1',
                        // 最大总价
                        maxTitlePrice: '1',
                        // 最小单价
                        minUnitPrice: '1',
                        // 最大单价
                        maxUnitPrice: '1',
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
                        plotRatio: '1.0',
                        // 绿化率
                        greeningRate: '1.0',
                        // 售楼地址
                        saleAddress: '',
                        // 物业地址
                        propertyAddress: '',
                        // 装修情况
                        decoration: '',
                        // 占地面积
                        coveredArea: '1',
                        // 建筑面积
                        floorage: '1',
                        // 户数
                        households: '1',
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
                        projectIntroduction: '',
                        // 热销值
                        sellWell: '1',
                        // 联系方式
                        tel: '',
                        // 修改时间
                        modifyTime: '',
                        // 人气值
                        popularity: '1',
                        // 热搜值
                        hotSearch: '1',
                        // 特价值
                        specialOffer: '1',
                        //是否推荐户型（1：是；2：否）
                        recommend: 1,
                        // 是否是优选楼盘（1：是；2：否）
                        optimization: 1,
                        //是否是品质楼盘（1：是；2：否）
                        quality: 1,
                        // 经度
                        longitude: '1.0',
                        // 纬度
                        latitude: '1.0',
                        // 楼盘特色描述
                        buildDescription: '',
                        // 环线id
                        regionId: ''
                    }
                } else if (param === 'modify') {
                    if (this.isBlank(addParam.videoPath)) {
                        this.playAvOutDivFlag = false
                        $("#playAvOutDiv").modal("hide")
                    }else{
                        this.videoName = addParam.videoName
                        // this.$refs.playRef.initData(this.url + addParam.videoPath)
                    }
                    console.log('Initialization evaluation’s content, which modifies evaluation')
                    this.title = '修改'


                    var en = []
                    if (null !== addParam.effectPathList) {
                        for (var i = 0; i < addParam.effectPathList.length; i++) {
                            en.push(this.url + addParam.effectPathList[i])
                        }
                    }
                    this.effectImgList = en


                    var enPlan = []
                    if (null !== addParam.enPlanPathList) {
                        for (var i = 0; i < addParam.enPlanPathList.length; i++) {
                            enPlan.push(this.url + addParam.enPlanPathList[i])
                        }
                    }
                    this.enPlanImgList = enPlan


                    var buildRea = []
                    if (null !== addParam.buildReaPathList) {
                        for (var i = 0; i < addParam.buildReaPathList.length; i++) {
                            buildRea.push(this.url + addParam.buildReaPathList[i])
                        }
                    }
                    this.buildRealImgList = buildRea


                    var matching = []
                    if (null !== addParam.matchingRealPathList) {
                        for (var i = 0; i < addParam.matchingRealPathList.length; i++) {
                            matching.push(this.url + addParam.matchingRealPathList[i])
                        }
                    }
                    this.matchingRealImgList = matching

                    var region = []
                    if (null !== addParam.regionPathList) {
                        for (var i = 0; i < addParam.regionPathList.length; i++) {
                            region.push(this.url + addParam.regionPathList[i])
                        }
                    }
                    this.regionImgList = region

                    var img = []
                    img.push(this.url + addParam.imgPath)
                    this.headImgList = img

                    // console.log(JSON.stringify(addParam))
                    this.$refs.ldtRef.setLdtId(addParam.ldId)
                    this.$refs.btRef.setBtId(addParam.btId)
                    this.$refs.saleRef.setIsSale(addParam.isSale)
                    // this.$refs.devRef.setDevId(addParam.devId)
                    this.$refs.charsRef.setCharaList(addParam.chaIdList)
                    this.$refs.bhtsRef.setBhtIdList(addParam.bhtIdList)
                    this.$refs.proRef.setProId(addParam.proId)
                    this.$refs.regionRef.setRegionId(addParam.regionId)
                    Object.assign(this.addParam, addParam)
                }
            },


            certainAction() {
                this.isDisable = true
                setTimeout(() => {
                    this.isDisable = false
                }, 1000)

                if (this.isBlank(this.addParam.longitude)) {
                    alert('经度不能为空或0')
                    return
                }
                if (this.isBlank(this.addParam.latitude)) {
                    alert('纬度不能为空或0')
                    return
                }
                if (this.isBlank(this.addParam.htName)) {
                    alert('楼盘不能为空')
                    return
                }
                if (this.isBlank(this.addParam.saleAddress)) {
                    alert('售楼地址不能为空')
                    return
                }
                if (this.isBlank(this.addParam.propertyAddress)) {
                    alert('物业地址不能为空')
                    return
                }
                if (this.isBlank(this.addParam.decoration)) {
                    alert('装修情况不能为空')
                    return
                }
                if (this.isBlank(this.addParam.coveredArea)) {
                    alert('占地面积不能为空或0')
                    return
                }
                if (this.isBlank(this.addParam.floorage)) {
                    alert('建筑面积不能为空或0')
                    return
                }
                if (this.isBlank(this.addParam.households)) {
                    alert('户数不能为空或0')
                    return
                }
                if (this.isBlank(this.addParam.architecturalStyle)) {
                    alert('建筑风格不能为空')
                    return
                }
                if (this.isBlank(this.addParam.iteration)) {
                    alert('开发周期不能为空或0')
                    return
                }
                if (this.isBlank(this.addParam.propertyCompany)) {
                    alert('物业公司不能为空')
                    return
                }
                if (this.isBlank(this.addParam.propertyFee)) {
                    alert('物业费不能为空或0')
                    return
                }
                if (this.isBlank(this.addParam.parkingSpace)) {
                    alert('停车位不能为空或0')
                    return
                }
                if (this.isBlank(this.addParam.greeningRate)) {
                    alert('绿化率不能为空或0')
                    return
                }
                if (this.isBlank(this.addParam.plotRatio)) {
                    alert('容积率不能为空或0')
                    return
                }
                if (this.isBlank(this.addParam.propertyType)) {
                    alert('物业类型不能为空')
                    return
                }
                if (this.isBlank(this.addParam.ownershipYear)) {
                    alert('产权年限不能为空或0')
                    return
                }
                if (this.isBlank(this.addParam.sellWell)) {
                    alert('热销值不能为空或0')
                    return
                }
                if (this.isBlank(this.addParam.hotSearch)) {
                    alert('热搜值不能为空或0')
                    return
                }
                if (this.isBlank(this.addParam.popularity)) {
                    alert('人气值不能为空或0')
                    return
                }

                if (this.addParam.minArea > this.addParam.maxArea){
                    alert('最大面积不能小于最小面积')
                    return;
                }
                if (this.addParam.minUnitPrice > this.addParam.maxUnitPrice) {
                    alert('最大单价不能小于最小单价')
                    return;
                }
                if (this.addParam.minTitlePrice > this.addParam.maxTitlePrice) {
                    alert('最大总价不能小于最小总价')
                    return;
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
                // 区位
                for (let i = 0; i < this.regionImgFileList.length; i++) {
                    fd.append("regionImg", this.regionImgFileList[i]);
                }
                // 视频
                var videoFile = $("#video")[0].files[0]
                fd.append("video",videoFile );
                if (null != videoFile) {
                    var Mb = videoFile.size/1024/1024
                    console.log("文件大小" +Mb);
                    if (Mb > 100) {
                        alert("您的视频超出限制，请选择100Mb内视频")
                        return
                    }
                }
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
                    // $("#effectImgOutDiv").remove();
                    // $("#enPlanImgOutDiv").remove();
                    // $("#buildRealImgOutDiv").remove();
                    // $("#matchingRealImgOutDiv").remove();
                    // $("#regionImgOutDiv").remove();
                    // $("#headImgOutDiv").remove();
                }).catch((error) => {
                    console.log('楼盘信息提交失败')
                });
            },
            closeCurrentPage() {
                // $("#effectImgOutDiv").remove();
                // $("#enPlanImgOutDiv").remove();
                // $("#buildRealImgOutDiv").remove();
                // $("#matchingRealImgOutDiv").remove();
                // $("#regionImgOutDiv").remove();
                // $("#headImgOutDiv").remove();
                this.playAvOutDivFlag = true
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
            regionImgChange() {

                var files = $("#regionImg")[0].files; //获取file对象
                for (let i = 0; i < files.length; i++) {
                    var file = files[i]
                    this.fileAdd(file, i, 6)
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
                    } else if (pictureType === 6) {
                        that.regionImgFileList.push(file)
                        that.regionImgList.push(dataUrl)
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
                } else if (type === 6) {
                    this.regionImgList.splice(index, 1)
                    this.regionImgFileList.splice(index, 1)
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

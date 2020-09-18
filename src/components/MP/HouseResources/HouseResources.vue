<template>
	<div>
		<!-- <div class="col-md-12 col-lg-12 main-title">
            <h1 class="titleCss">楼盘管理</h1>
        </div> -->
		<div class="row newRow" style="margin-top: 1%;">
			<!--类型-->
			<!-- <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
				<div class="col-xs-5 col-sm-5 col-md-5 col-lg-5" style="padding: 0; line-height: 34px;">
					<p class="end-aline col-md-11 col-lg-11" style="padding-right:5px; padding-left:20px;">类型</p><span class="sign-left">:</span>
				</div>
				<div class="col-xs-7 col-sm-7 col-md-7 col-lg-7">
					<bt @btChange='fatherBtReceive'></bt>
				</div>
			</div> -->
			<div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
					<div class="col-xs-5 col-sm-5 col-md-5 col-lg-5" style="padding: 0; line-height: 34px;">
						<p class="end-aline col-md-11 col-lg-11" style="padding-right:5px; padding-left:20px;">类型</p><span class="sign-left">:</span>
					</div>
					<div class="col-xs-7 col-sm-7 col-md-7 col-lg-7">
						<select class="form-control" v-model="roomType" v-on:change="roomTypeChange()">
							<option value="0">--未选择--</option>
							<option value="1">--写字楼--</option>
							<option value="2">--共享办公--</option>
							<option value="3">--商铺--</option>
						</select>
					</div>
			</div>
			<div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
				<div class="col-xs-5 col-sm-5 col-md-5 col-lg-5" style="padding: 0; line-height: 34px;">
					<p class="end-aline col-md-11 col-lg-11" style="padding-right:5px; padding-left:20px;">面积</p><span class="sign-left">:</span>
				</div>
				<div class="col-xs-7 col-sm-7 col-md-7 col-lg-7">
					<ar @areaChange='fatherAreaReceive' ref="ar"></ar>
				</div>
			</div>
			<div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
				<div class="col-xs-5 col-sm-5 col-md-5 col-lg-5" style="padding: 0; line-height: 34px;">
					<p class="end-aline col-md-11 col-lg-11" style="padding-right:5px; padding-left:20px;">单价</p><span class="sign-left">:</span>
				</div>
				<div class="col-xs-7 col-sm-7 col-md-7 col-lg-7">
					<un @unitChange='fatherUnReceive'></un>
				</div>
			</div>
			<div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
				<div class="col-xs-5 col-sm-5 col-md-5 col-lg-5" style="padding: 0; line-height: 34px;">
					<p class="end-aline col-md-11 col-lg-11" style="padding-right:5px; padding-left:20px;">总价</p><span class="sign-left">:</span>
				</div>
				<div class="col-xs-7 col-sm-7 col-md-7 col-lg-7">
					<to @totalChange='fatherToReceive'></to>
				</div>
			</div>
				<!-- <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
					<div class="col-xs-5 col-sm-5 col-md-5 col-lg-5" style="padding: 0; line-height: 34px;">
						<p class="end-aline col-md-11 col-lg-11" style="padding-right:5px; padding-left:20px;">出租类型</p><span class="sign-left">:</span>
					</div>
					<div class="col-xs-7 col-sm-7 col-md-7 col-lg-7">
						<select class="form-control" v-model="roomType">
							<option value="1">--写字楼--</option>
							<option value="2">--共享办公--</option>
							<option value="3">--商铺--</option>
						</select>
					</div>
				</div> -->

		</div>

		<div class="row newRow" style="margin-top: 1%">
			<!-- 区域 -->
			<div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
				<div class="col-xs-5 col-sm-5 col-md-5 col-lg-5" style="padding: 0; line-height: 34px;">
					<p class="end-aline col-md-11 col-lg-11" style="padding-right:5px; padding-left:20px;">区域</p><span class="sign-left">:</span>
				</div>
				<div class="col-xs-7 col-sm-7 col-md-7 col-lg-7">
					<ldt @ldtChange='fatherLdtReceive' ref="ldt"></ldt>
				</div>
			</div>

			<!-- 商圈 -->
			<div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
				<div class="col-xs-5 col-sm-5 col-md-5 col-lg-5" style="padding: 0; line-height: 34px;">
					<p class="end-aline col-md-11 col-lg-11" style="padding-right:5px; padding-left:20px;">商圈</p><span class="sign-left">:</span>
				</div>
				<div class="col-xs-7 col-sm-7 col-md-7 col-lg-7">
					<subBu @buChange='fathersubBuReceive' ref="subBu"></subBu>
				</div>
			</div>

			<!-- 楼盘 -->
			<div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
				<div class="col-xs-5 col-sm-5 col-md-5 col-lg-5" style="padding: 0; line-height: 34px;">
					<p class="end-aline col-md-11 col-lg-11" style="padding-right:5px; padding-left:20px;">楼盘</p><span class="sign-left">:</span>
				</div>
				<div class="col-xs-7 col-sm-7 col-md-7 col-lg-7">
					<buildCompent @buildChange='fatherbuildCompentReceive' ref="subBu"></buildCompent>
				</div>
			</div>
		</div>

		<div class="row newRow" style="margin-top: 1%">

			<!-- <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
				<div class="col-xs-5 col-sm-5 col-md-5 col-lg-5" style="padding: 0; line-height: 34px;">
					<p class="end-aline col-md-11 col-lg-11" style="padding-right:5px; padding-left:20px;">面积</p><span class="sign-left">:</span>
				</div>
				<div class="col-xs-7 col-sm-7 col-md-7 col-lg-7">
					<ar @areaChange='fatherAreaReceive'></ar>
				</div>
			</div> -->
			<div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
				<div class="col-xs-5 col-sm-5 col-md-5 col-lg-5" style="padding: 0; line-height: 34px;">
					<p class="end-aline col-md-11 col-lg-11" style="padding-right:5px; padding-left:20px;">时间</p><span class="sign-left">:</span>
				</div>
				<div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
					<datePicker v-model="openTime" type="date" value-type="format" range></datePicker>
				</div>
				<!--<div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                <div class="col-xs-5 col-sm-5 col-md-5 col-lg-5" style="padding: 0; line-height: 34px;">
                    <p class="end-aline col-md-11 col-lg-11" style="padding-right:5px; padding-left:20px;">结束时间</p><span
                    class="sign-left">:</span>
                </div>
                <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                    <datePicker v-model="endTime" type="datetime" value-type="format"
                                format="YYYY-MM-DD HH:mm:ss"></datePicker>
                </div>
            </div>-->
			</div>

			<button type="button" class="btn btn-warning pull-right m_r_10" style="margin-right:1.5%;" data-toggle="modal"
			 v-on:click="selectRule('1')">添加</button>
			<button type="button" class="btn btn-primary pull-right m_r_10" style="margin-right:1.5%;" data-toggle="modal"
			 v-on:click="queryData(1)">查询
			</button>

		</div>


		<div class="" style="margin-top: 2%">
			<div class="col-md-12 col-lg-12">
				<div class="table-responsive  table-bg">
					<table class="table table-bordered table-hover" id="datatable">
						<thead class="datathead">
							<tr>
								<th class="text-center">楼盘名</th>
								<th class="text-center">出售状态</th>
								<th class="text-center">户型</th>
								<th class="text-center">类型</th>
								<th class="text-center">面积</th>
								<th class="text-center">均价(元)</th>
								<th class="text-center">参考总价(万)</th>
								<th class="text-center">开盘时间</th>
								<th class="text-center">编辑详情</th>
							</tr>
						</thead>
						<tbody>
							<tr v-for="(item,index) in tableData" :key="index" v-on:dblclick="selectRule('3',item)">
								<td class="text-center" style="line-height:33px;">{{item.room}}</td>
								<td class="text-center" style="line-height:33px;">{{item.saleLabel}}</td>
								<!-- <td class="text-center" style="line-height:33px;">{{item.adress}}</td> -->
								<td class="text-center" style="line-height:33px;">{{item.caName}}</td>
								<td class="text-center" style="line-height:33px;" v-if="item.roomType==1">写字楼</td>
								<td class="text-center" style="line-height:33px;" v-if="item.roomType==2">共享办公</td>
								<td class="text-center" style="line-height:33px;" v-if="item.roomType==3">商铺</td>
								<!--                            <td class="text-center" style="line-height:33px;">{{item.chaName}}</td>-->
								<td class="text-center" style="line-height:33px;">{{item.buildArea}}</td>
								<td class="text-center" style="line-height:33px;">{{item.averagePrice}}</td>
								<td class="text-center" style="line-height:33px;">{{item.minTitlePrice}}-{{item.maxTitlePrice}}</td>
								<td class="text-center" style="line-height:33px;">{{item.openDateTime}}</td>
								<td class="text-center" style="line-height:33px;">
									<button type="button" class="btn btn-primary pull-right m_r_10" style="margin-right:1.5%;" data-toggle="modal"
									 v-on:click="addDetail(item)">编辑详情
									</button>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
				<div class="row row_edit">
                    <div class="modal fade" id="storeDialog" >
                        <div class="modal-dialog">
                            <storeDetail ref='storeRef' @certainAction='feedBack'></storeDetail>
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
	import datePicker from 'vue2-datepicker'
	import bt from '../../common/BildType.vue'
	import bht from '../../common/BuildHorseType.vue'
	import isSale from '../../common/IsSale.vue'
	import MobileDialog from '../../common/MobileDialog.vue'
	import ldt from '../../common/LocationDType.vue'
	import ar from '../../common/Area.vue'
	import un from '../../common/UnitPrice.vue'
	import to from '../../common/TotalPrice.vue'
	import dev from '../../common/Dev.vue'
	import chara from '../../common/Chara.vue'
	import paging from '../../common/Paging.vue'
	import buildDialog from '../../common/BuildDialog.vue'
	import Region from '../../common/Region.vue'
	import Metro from '../../common/Metro.vue'
	import PlayAV from "../../common/PlayAV";
	import subBu from "../../common/subBu/subBusiness";
	import buildCompent from "../../common/Building";


	import Hb from "../HouseResources/HrDetail/Hb";
	import BuildDetail from "../HouseResources/HrDetail/BuildDetail";
	import ShareDetail from "../HouseResources/HrDetail/ShareDetail";
	import storeDetail from "./HrDetail/storeDetail";
	export default {
		components: {
			datePicker,
			bt,
			bht,
			isSale,
			// lt,
			ldt,
			ar,
			un,
			to,
			subBu,
			buildCompent,
			dev,
			chara,
			paging,
			buildDialog,
			Region,
			Metro,
			MobileDialog,
			Hb,
			BuildDetail,
			ShareDetail,
			storeDetail
		},
		data() {
			return {
				tableData: [],
				openTime: [],
				buildTypeList: [],
				buildHorseTypeList: [],
				bhtSon: [],
				btSon: [],
				isSaleSon: [],
				ltSon: [],
				locationType: '',
				areaSon: [],
				unSon: [],
				toSon: [],
				subBuSon: [],
				buildCompentSon: [],
				devSon: [],
				charaSon: [],
				regionId: '',
				metroId: '',
				//分页需要的数据
				pages: '', //总页数
				current: 1, //当前页码
				pageSize: 10, //一页显示的数量
				total: '', //数据的数量
                reStore:{},
				roomType:'0',//房源类型
			};
		},
		name: "BuildingControl",
		methods: {

			roomTypeChange: function() {
				console.log(this.roomType)
                // for (var i = 0; i < this.totalIdList.length; i++) {
                //     if(this.totalId === '0'){
                //         this.$emit('totalChange', null)
                //         return
                //     }else{
                //         if (this.totalIdList[i].tpId === this.totalId) {

                //             this.$emit('totalChange', this.totalIdList[i])
                //             return
                //         }
                //     }
				// }



				// this.btSon = []
				// if (null !== data) {
				// 	this.btSon.push(data)
				// }
				// if(data == null){
				// 	data = ""
				// }
				// this.$refs.ar.setType(data)
            },

			//子级传值到父级上来的动态拿去
			pageChange: function(page) {
				this.current = page
				this.queryData(page)
			},
			fatherBhtReceive(data) {
				this.bhtSon = []
				if (null !== data) {
					this.bhtSon.push(data.bhtId)
				}
			},
			fatherBtReceive(data) {

				this.btSon = []
				if (null !== data) {
					this.btSon.push(data)
				}
				if(data == null){
					data = ""
				}
				this.$refs.ar.setType(data)

			},
			fatherIsSaleReceive(data) {
				this.isSaleSon = []
				if (null !== data) {
					this.isSaleSon.push(data)
				}

			},
			// fatherLtReceive(data) {
			//     this.$refs.ldt.locationTypeChange(data)
			// },
			fatherMetroReceive(data) {
				this.metroId = data
			},
			fatherLdtReceive(data) {
				this.ltSon = []
				if (null !== data) {
					this.ltSon.push(data)
				}
				console.log('11112312312312',data)
				this.$refs.subBu.setLdId(data)

			},
			fathersubBuReceive(data) {
				this.subBuSon = []
				if(data != null){
					this.subBuSon.push(data)
				}

			},
			fatherbuildCompentReceive(data){
				this.buildCompentSon = []
				if(data != null){
					this.buildCompentSon.push(data)
				}
			},
			fatherAreaReceive(data) {
				this.areaSon = []
				if (null != data) {
					let areaParam = {
						minArea: data.begArea,
						maxArea: data.endArea
					}
					this.areaSon.push(areaParam)
				}
			},
			fatherUnReceive(data) {
				this.unSon = []
				if (null != data) {
					var begPrice = null;
					if (null != data.begPrice) {
						begPrice = data.begPrice * 10000
					}
					var endPrice = null;
					if (null != data.endPrice) {
						endPrice = data.endPrice * 10000
					}
					let unParam = {
						minUnitPrice: begPrice,
						maxUnitPrice: endPrice
					}
					this.unSon.push(unParam)
				}
			},
			fatherToReceive(data) {
				this.toSon = []
				if (null != data) {
					let toParam = {
						minTitlePrice: data.begPrice,
						maxTitlePrice: data.endPrice
					}
					this.toSon.push(toParam)
				}
			},
			fatherDevReceive(data) {
				this.devSon = []
				if (null !== data) {
					this.devSon.push(data)
				}
			},
			fatherChReceive(data) {
				this.charaSon = []
				if (null !== data) {
					this.charaSon.push(data)
				}
			},
			fatherRegReceive(data) {
				this.regionId = ''
				this.regionId = data
			},
			async queryData(page) {
				var url = this.url + '/roomMainBean/getRoomByConditions'
				this.$ajax({
					method: 'POST',
					url: url,
					headers: {
						'Content-Type': this.contentType,
						'Access-Token': this.accessToken
					},
					data: {
						"type":this.roomType
					},
					dataType: 'json',
				}).then((response) => {
					var res = response.data
					if (res.retCode === '0000') {
						this.pages = res.retData.pages //总页数
						this.current = res.retData.pageNum //当前页码
						this.pageSize = res.retData.pageSize //一页显示的数量  必须是奇数
						this.total = res.retData.total //数据的数量
						this.$refs.paging.setParam(this.pages, this.current, this.total)
						this.tableData = res.retData.list
					} else {
						alert(res.retMsg)
					}
				}).catch((error) => {
					console.log('数据请求失败处理')
				});
			},
			addDetail(item){
				if(item.roomType=='1'){
					console.log('写字楼')
				}else if(item.roomType=='2'){
                    console.log('共享办公')
				}else if(item.roomType=='3'){

                    // setTimeout(() => {
                    //     if (this.reStore) {
                    //         this.$refs.storeRef.initData(this.reStore)
                    //     } else {
                            this.$refs.storeRef.initData(item)
                    //     }
                    // }, 1)

                    $("#storeDialog").modal('show')
				}
			},

			selectRule(param, item) {
				this.roomType='1'
				if (param === "1") {
					this.$refs.hb.initData('add')
					$("#hbDialog").modal('show')
				} else if (param === "3") {
					this.$refs.hb.initData('modify', item)
					$("#hbDialog").modal('show')
				}

			},
			feedBack() {
				this.queryData(1)
				$("#storeDialog").modal('hide')
			},

			feedBackMobile() {
				this.queryData(1)
				$("#mobileDialog").modal('hide')
			},
			// dataLook(obj){
			//     if (null == obj)return
			//     list:[]
			//     for (let i = 0; i < this.obj.length; i++) {
			//         list.push(obj[i])
			//     }
			//     list.join('\')
			// }
		},
		created: function() {
			this.queryData()
		}
	}
</script>

<style>

</style>

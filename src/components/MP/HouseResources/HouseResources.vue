<template>
	<div>
		<!-- <div class="col-md-12 col-lg-12 main-title">
            <h1 class="titleCss">楼盘管理</h1>
        </div> -->
		<div class="row newRow" style="margin-top: 1%;">

			<div class="col-xs-2 col-sm-2 col-md-2 col-lg-2">
					<div class="col-xs-3 col-sm-3 col-md-3 col-lg-3" style="padding: 0; line-height: 30px;">
						<p class="end-aline col-md-12 col-lg-12 textcenter">类型：</p>
					</div>
					<div class="col-xs-9 col-sm-9 col-md-9 col-lg-9" style="padding:0">
						<select class="form-control" v-model="roomType" v-on:change="roomTypeChange()">
							<option value="0">--未选择--</option>
							<option value="1">写字楼</option>
							<option value="2">共享办公</option>
							<option value="3">商铺</option>
						</select>
					</div>
			</div>
			<div class="col-xs-2 col-sm-2 col-md-2 col-lg-2">
				<div class="col-xs-3 col-sm-3 col-md-3 col-lg-3" style="padding: 0; line-height: 30px;">
					<p class="end-aline col-md-12 col-lg-12 textcenter">面积：</p>
				</div>
				<div class="col-xs-9 col-sm-9 col-md-9 col-lg-9" style="padding:0">
					<ar @areaChange='fatherAreaReceive' ref="ar"></ar>
				</div>
			</div>
			<!-- <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2">
				<div class="col-xs-3 col-sm-3 col-md-3 col-lg-3" style="padding: 0; line-height: 30px;">
					<p class="end-aline col-md-12 col-lg-12 textcenter">单价：</p>
				</div>
				<div class="col-xs-9 col-sm-9 col-md-9 col-lg-9" style="padding:0">
					<un @unitChange='fatherUnReceive' ref="un"></un>
				</div>
			</div>
			<div class="col-xs-2 col-sm-2 col-md-2 col-lg-2">
				<div class="col-xs-3 col-sm-3 col-md-3 col-lg-3" style="padding: 0; line-height: 30px;">
					<p class="end-aline col-md-12 col-lg-12 textcenter">总价：</p>
				</div>
				<div class="col-xs-9 col-sm-9 col-md-9 col-lg-9" style="padding:0">
					<to @totalChange='fatherToReceive' ref="to"></to>
				</div>
			</div> -->
			<!-- 商圈 -->
			<div class="col-xs-2 col-sm-2 col-md-2 col-lg-2">
				<div class="col-xs-3 col-sm-3 col-md-3 col-lg-3" style="padding: 0; line-height: 30px;">
					<p class="end-aline col-md-12 col-lg-12 textcenter">商圈：</p>
				</div>
				<div class="col-xs-9 col-sm-9 col-md-9 col-lg-9" style="padding:0">
					<subBu @buChange='fathersubBuReceive' ref="subBu"></subBu>
				</div>
			</div>

			<!-- 楼盘 -->
			<div class="col-xs-2 col-sm-2 col-md-2 col-lg-2">
				<div class="col-xs-3 col-sm-3 col-md-3 col-lg-3" style="padding: 0; line-height: 30px;">
					<p class="end-aline col-md-12 col-lg-12 textcenter">楼盘：</p>
				</div>
				<div class="col-xs-9 col-sm-9 col-md-9 col-lg-9" style="padding:0">
					<buildCompent @buildChange='fatherbuildCompentReceive' ref="buildCompent"></buildCompent>
				</div>
			</div>

		</div>

		<div class="row newRow" style="margin-top: 1%">
			<!-- 区域 -->
			<div class="col-xs-2 col-sm-2 col-md-2 col-lg-2">
				<div class="col-xs-3 col-sm-3 col-md-3 col-lg-3" style="padding: 0; line-height: 30px;">
					<p class="end-aline col-md-12 col-lg-12 textcenter">区域：</p>
				</div>
				<div class="col-xs-9 col-sm-9 col-md-9 col-lg-9" style="padding:0">
					<ldt @ldtChange='fatherLdtReceive' ref="ldt"></ldt>
				</div>
			</div>


			<div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
				<div class="col-xs-2 col-sm-2 col-md-2 col-lg-2" style="padding: 0; line-height: 30px;">
					<p class="end-aline col-md-12 col-lg-12 textcenter">时间：</p>
				</div>
				<div class="col-xs-9 col-sm-9 col-md-9 col-lg-9"  style="padding:0">
					<datePicker v-model="openTime" type="date" value-type="format" range style="width:250px" id="datedate"></datePicker>
				</div>

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
								<th class="text-center">房源名</th>
								<th class="text-center">区域</th>
								<th class="text-center">商圈</th>
								<th class="text-center">楼盘</th>
								<th class="text-center">类型</th>
								<th class="text-center">面积</th>
								<th class="text-center">单价</th>
								<th class="text-center">总价</th>
								<th class="text-center">创建时间</th>
								<th class="text-center">操作</th>
							</tr>
						</thead>
						<tbody>
							<tr v-for="(item,index) in tableData" :key="index" v-on:dblclick="selectRule('3',item)">
								<td class="text-left" style="line-height:33px;">{{item.room}}</td>
								<td class="text-center" style="line-height:33px;">{{item.ldName}}</td>
								<!-- <td class="text-center" style="line-height:33px;">{{item.adress}}</td> -->
								<td class="text-center" style="line-height:33px;">{{item.bussinessName}}</td>
								<td class="text-center" style="line-height:33px;">{{item.buildName}}</td>
								<td class="text-center" style="line-height:33px;" v-if="item.roomType==1">写字楼</td>
								<td class="text-center" style="line-height:33px;" v-if="item.roomType==2">共享办公</td>
								<td class="text-center" style="line-height:33px;" v-if="item.roomType==3">商铺</td>
								<td class="text-center" style="line-height:33px;" v-if="item.roomType==null"></td>
								<!--                            <td class="text-center" style="line-height:33px;">{{item.chaName}}</td>-->
								<td class="text-center" style="line-height:33px;">{{item.buildArea}}</td>
								<td class="text-center" style="line-height:33px;">{{item.unitPrice}}</td>
								<td class="text-center" style="line-height:33px;">{{item.totalPrice}}</td>
								<td class="text-center" style="line-height:33px;">{{item.createTime}}</td>
								<td class="text-center" style="line-height:33px;">
									<button :disabled="item.roomType == 2 ? true : false" type="button" class="btn btn-primary m_r_10" style="margin-right:1.5%;" data-toggle="modal"
									 v-on:click="addDetail(item)">编辑详情
									</button>

                                    <button type="button" class="btn btn-danger pull-right m_r_10" style="margin-right:1.5%;" data-toggle="modal"
                                            v-on:click="offOrOnTheShelf(item,3)">删除
                                    </button>

                                    <button type="button" :class="item.flag == 1 ? 'btn btn-primary': 'btn btn-warning' "
                                            data-toggle="modal"
                                            v-on:click="offOrOnTheShelf(item,null)">{{item.flag == 2 ? '上架':'下架'}}
                                    </button>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
				<div class="row row_edit">
                    <div class="modal fade" id="roomMainDialog" >
                        <div class="modal-dialog">
                            <roomMainDialog ref='roomMainDialog' @certainAction='feedBack(1)'></roomMainDialog>
                        </div>
                    </div>

					<div class="modal fade" id="storeDialog" >
                        <div class="modal-dialog">
                            <storeDetail ref='storeRef' @certainAction='feedBack(2)'></storeDetail>
                        </div>
                    </div>

					<div class="modal fade" id="roomDialog" >
                        <div class="modal-dialog">
                            <roomDetail ref='roomRef' @certainAction='feedBack(3)'></roomDetail>
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
	import roomMainDialog from '../../common/RoomMainDialog'
	import Region from '../../common/Region.vue'
	import Metro from '../../common/Metro.vue'
	import PlayAV from "../../common/PlayAV";
	import subBu from "../../common/subBu/subBusiness";
	import buildCompent from "../../common/Building";


	import Hb from "../HouseResources/HrDetail/Hb";
	import BuildDetail from "../HouseResources/HrDetail/BuildDetail";
	import ShareDetail from "../HouseResources/HrDetail/ShareDetail";
	import storeDetail from "./HrDetail/storeDetail";
	import roomDetail  from "./HrDetail/RoomDetail"
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
			roomMainDialog,
			Region,
			Metro,
			MobileDialog,
			Hb,
			BuildDetail,
			ShareDetail,
			storeDetail,
			roomDetail
		},
		data() {
			return {
				tableData: [],
				openTime: [],
				buildTypeList: [],
				buildHorseTypeList: [],
				bhtSon: [],
				btSon: '',
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
				pages: 0, //总页数
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
				if (this.roomType != null) {
					this.btSon = this.roomType
					this.$refs.ar.setType(this.roomType)
					// this.$refs.un.setType(this.roomType)
					// this.$refs.to.setType(this.roomType)
				}

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
			fatherMetroReceive(data) {
				this.metroId = data
			},
			fatherLdtReceive(data) {
				this.ltSon = []
				if (null !== data) {
					this.ltSon.push(data)
				}
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
			// fatherUnReceive(data) {
			// 	this.unSon = []
			// 	if (null != data) {
			// 		var begPrice = null;
			// 		if (null != data.begPrice) {
			// 			begPrice = data.begPrice * 10000
			// 		}
			// 		var endPrice = null;
			// 		if (null != data.endPrice) {
			// 			endPrice = data.endPrice * 10000
			// 		}
			// 		let unParam = {
			// 			minUnitPrice: begPrice,
			// 			maxUnitPrice: endPrice
			// 		}
			// 		this.unSon.push(unParam)
			// 	}
			// },
			// fatherToReceive(data) {
			// 	this.toSon = []
			// 	if (null != data) {
			// 		let toParam = {
			// 			minTitlePrice: data.begPrice,
			// 			maxTitlePrice: data.endPrice
			// 		}
			// 		this.toSon.push(toParam)
			// 	}
			// },
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
            offOrOnTheShelf(item,param) {
                var flag = null;
                if (param == null) {
                    if (item.flag === 1) {
                        flag = 2
                    } else if (item.flag === 2) {
                        flag = 1
                    } else {
                        flag = item.flag
                    }
                } else {
                    flag = 3
                }

                if (flag === 2) {
                    if (!confirm("确定下架"+ item.room + "?")) {
                        return;
                    }
                }

                if (flag === 3) {
                    if (!confirm("确定删除"+ item.room + "?")) {
                        return;
                    }
                }

                var url = this.url + '/roomMainBean/offOrOnTheShelf'

                this.$ajax({
                    method: 'POST',
                    url: url,
                    headers: {
                        'Content-Type': this.contentType,
                        'Access-Token': this.accessToken
                    },
                    data: {
                        id: item.id,
                        roomType: item.roomType,
                        flag: flag
                    },
                    dataType: 'json',
                }).then((response) => {
                    var res = response.data
                    alert(res.retMsg)
                    this.queryData(this.current)
                }).catch((error) => {
                    console.log('数据请求失败处理')
                });
            },
			async queryData(page) {
				var url = this.url + '/roomMainBean/getRoomByConditionsBe'
				this.$ajax({
					method: 'POST',
					url: url,
					headers: {
						'Content-Type': this.contentType,
						'Access-Token': this.accessToken
					},
					data: {
						current:page,
						pageSize:this.pageSize,
						type:this.roomType,
						areaList:this.areaSon,
						unitPriceList:this.unSon,
						totalPriceList:this.toSon,
						bdIdList:this.subBuSon,
						ldIdList:this.ltSon,
						buildIdList:this.buildCompentSon,
						startTime:this.openTime[0],
                        endTime:this.openTime[1],
					},
					dataType: 'json',
				}).then((response) => {
					var res = response.data
					if (res.retCode === '0000') {
						this.pages = res.retData.pages
						this.current = res.retData.pageNum
						this.pageSize = res.retData.pageSize
						this.total = res.retData.total
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
					this.$refs.roomRef.initData(item)
					$("#roomDialog").modal('show')
					console.log('写字楼')
				}else if(item.roomType=='2'){
                    console.log('共享办公')
				}else if(item.roomType=='3'){
                    this.$refs.storeRef.initData(item)
                    $("#storeDialog").modal('show')
				}
			},

			selectRule(param, item) {
				// this.roomType='1'
				if (param === "1") {
					this.$refs.roomMainDialog.initData('add')
					$("#roomMainDialog").modal('show')
				} else if (param === "3") {
					this.$refs.roomMainDialog.initData('modify', item)
					$("#roomMainDialog").modal('show')
				}

			},
			feedBack(item) {
				this.queryData(this.current)
                if(item === 1) {
                    $("#roomMainDialog").modal('hide')
                } else if (item === 2) {
                    $("#storeDialog").modal('hide')
                } else if (item === 3) {
                    $("#roomDialog").modal('hide')
                }

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
.textcenter{ text-align: center;
	text-align-last: center; padding:0}
	#datedate input{ height: 30px;}
	.el-input__inner{    border: 1px solid #ccc; }
</style>

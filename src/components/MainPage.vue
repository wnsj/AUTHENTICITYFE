<template>
	<div class="root">
		<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 aside-logo">
			<div class="col-xs-2 col-sm-2 col-md-2 col-lg-2 con-cen" style="height:100%;">
				<h2 class="pull-left">
					<img style="width: 156px; height: 57px;" src="../assets/img/lp_logo.jpg" />
				</h2>
			</div>
			<div class="col-xs-10 col-sm-10 col-md-10 col-lg-10 text-right">
				<h1 class="col-xs-6 col-sm-6 col-md-6 col-lg-6 text-right titleNow">{{titleNow}}</h1>
				<div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 text-right">
					<!-- <p style="color: #1b4fa3;">欢迎<span style="color: #d58512;"> {{accountName}} </span>来到，寄居找房管理系统</p> -->
					<button class="btn btn-default m_r_10" style="margin-top: 20px;" v-on:click="loginOut()">退出</button>
				</div>
			</div>
		</div>
		<div class="container-fluid clear-mp" id="Odiv">
			<div class="row clear-mp">
				<div class="col-xs-2 col-sm-2 col-md-2 col-lg-2 my-aside clear-mp" id="Adiv" style="padding-top: 10px;">
					<p style=" display:block; width:190px; height:50px;margin:0 auto; line-height:50px; font-size: 30px;font-weight: bold;color: #047EB1;text-align: left; margin-bottom:10px;">
						功能列表</p>
					<div id="aside-menu">
						<dl v-bind:class="{h4:bool6}">
							<dt @click="onShow(5)" v-bind:class="{'li-active':bool6}">
								<i class="fa" v-bind:class="{'fa-folder-open':bool6,'fa-folder':!bool6}" aria-hidden="false">
									房源管理
								</i>
							</dt>
							<dd @click="addCheck('HouseResources')" v-bind:class="{'li-active':onString=='HouseResources'}">
								<router-link to="/MP/HouseResources/HouseResources"><i class="fa" aria-hidden="true">房源管理</i></router-link>
							</dd>
							<dd @click="addCheck('EntrustRent')" v-bind:class="{'li-active':onString=='EntrustRent'}">
								<router-link to="/MP/HouseResources/EntrustRent"><i class="fa" aria-hidden="true">委托管理</i></router-link>
							</dd>
							<dd @click="addCheck('Business')" v-bind:class="{'li-active':onString=='Business'}">
								<router-link to="/MP/Business/Business"><i class="fa" aria-hidden="true">商圈管理</i></router-link>
							</dd>
							<dd @click="addCheck('Office')" v-bind:class="{'li-active':onString=='Office'}">
								<router-link to="/MP/HouseResources/Office/Office"><i class="fa" aria-hidden="true">共享办公室</i></router-link>
							</dd>
						</dl>
						<dl v-bind:class="{h4:bool4}">
							<dt @click="onShow(3)" v-bind:class="{'li-active':bool4}">
								<i class="fa" v-bind:class="{'fa-folder-open':bool4,'fa-folder':!bool4}" aria-hidden="true">
									楼盘相关
								</i>
							</dt>

							<dd @click="addCheck('BuildingControl')" v-bind:class="{'li-active':onString=='BuildingControl'}">
								<router-link to="/MP/BuildingControl/BuildingControl"><i class="fa" aria-hidden="true">楼盘管理</i></router-link>
							</dd>
							<dd @click="addCheck('BuildingAnalysis')" v-bind:class="{'li-active':onString=='BuildingAnalysis'}">
								<router-link to="/MP/BuildingAnalysis/BuildingAnalysis"><i class="fa" aria-hidden="true">户型分析管理</i></router-link>
							</dd>
							<dd @click="addCheck('CounselorControl')" v-bind:class="{'li-active':onString=='CounselorControl'}">
								<router-link to="/MP/Counselor/CounselorControl"><i class="fa" aria-hidden="true">咨询师管理</i></router-link>
							</dd>
							<dd @click="addCheck('Comment')" v-bind:class="{'li-active':onString=='Comment'}">
								<router-link to="/MP/Comment/Comment"><i class="fa" aria-hidden="true">点评管理</i></router-link>
							</dd>
						</dl>
						<dl v-bind:class="{h1:bool1}">
							<dt @click="onShow(0)" v-bind:class="{'li-active':bool1}">
								<i class="fa" v-bind:class="{'fa-folder-open':bool1,'fa-folder':!bool1}" aria-hidden="true">
									招聘相关
								</i>
							</dt>
							<dd @click="addCheck('RecruitControl')" v-bind:class="{'li-active':onString=='RecruitControl'}">
								<router-link to="/MP/RecruitControl/RecruitControl"><i class="fa" aria-hidden="true">招聘管理</i></router-link>
							</dd>
						</dl>
						<dl v-bind:class="{h1:bool2}">
							<dt @click="onShow(1)" v-bind:class="{'li-active':bool2}">
								<i class="fa" v-bind:class="{'fa-folder-open':bool2,'fa-folder':!bool2}" aria-hidden="true">
									楼盘动态
								</i>
							</dt>
							<dd @click="addCheck('BuildingDynamic')" v-bind:class="{'li-active':onString=='BuildingDynamic'}">
								<router-link to="/MP/BuildingDynamic/BuildingDynamic"><i class="fa" aria-hidden="true">动态管理</i></router-link>
							</dd>
						</dl>
						<dl v-bind:class="{h222:bool3}" v-show=phoneFlag>
							<dt @click="onShow(2)" v-bind:class="{'li-active':bool3}">
								<i class="fa" v-bind:class="{'fa-folder-open':bool3,'fa-folder':!bool3}" aria-hidden="false">
									电话回拨
								</i>
							</dt>
							<dd @click="addCheck('LinkPhone')" v-bind:class="{'li-active':onString=='LinkPhone'}">
								<router-link to="/MP/LinkPhone/LinkPhone"><i class="fa" aria-hidden="true">委托找房</i></router-link>
							</dd>
							<dd @click="addCheck('LinkRenting')" v-bind:class="{'li-active':onString=='LinkRenting'}">
								<router-link to="/MP/LinkPhone/LinkRenting"><i class="fa" aria-hidden="true">委托好租</i></router-link>
							</dd>
						</dl>
						<dl v-bind:class="{h1:bool5}">
							<dt @click="onShow(4)" v-bind:class="{'li-active':bool5}">
								<i class="fa" v-bind:class="{'fa-folder-open':bool5,'fa-folder':!bool5}" aria-hidden="true">
									其他模块
								</i>
							</dt>
							<dd @click="addCheck('ArticleControl')" v-bind:class="{'li-active':onString=='ArticleControl'}">
								<router-link to="/MP/ArticleControl/ArticleControl"><i class="fa" aria-hidden="true">其他模块</i></router-link>
							</dd>
						</dl>
						<!--                        <el-row class="tac">-->
						<!--                            <el-col :span="24">-->
						<!--                                <el-menu :unique-opened="true" :router="true"-->
						<!--                                         class="el-menu-vertical-demo">-->
						<!--                                    <template v-for="item in menuList">-->
						<!--                                        <el-submenu :index="item.menuPath" :key="item.menuPath">-->
						<!--                                            <template slot="title"><span>{{item.menuName}}</span></template>-->
						<!--                                            <template v-for="itemChild in item.menuBeanList">-->
						<!--                                                &lt;!&ndash;三级菜单&ndash;&gt;-->
						<!--                                                <el-submenu-->
						<!--                                                    v-if="itemChild.menuBeanList && itemChild.menuBeanList.length"-->
						<!--                                                    :index="itemChild.menuPath" :key="itemChild.menuPath">-->
						<!--                                                    <template slot="title"><span>{{itemChild.menuName}}</span>-->
						<!--                                                    </template>-->
						<!--                                                    <el-menu-item v-for="itemChildChild in itemChild.menuBeanList"-->
						<!--                                                                  :index="itemChildChild.menuPath"-->
						<!--                                                                  :key="itemChildChild.menuPath">-->
						<!--                                                        <span slot="title">{{itemChildChild.menuName}}</span>-->
						<!--                                                    </el-menu-item>-->
						<!--                                                </el-submenu>-->
						<!--                                                &lt;!&ndash;二级菜单&ndash;&gt;-->
						<!--                                                <el-menu-item v-else :index="itemChild.menuPath" :key="itemChild.menuPath">-->
						<!--                                                    <span slot="title">{{itemChild.menuName}}</span></el-menu-item>-->
						<!--                                            </template>-->
						<!--                                        </el-submenu>-->
						<!--                                    </template>-->
						<!--                                </el-menu>-->
						<!--                            </el-col>-->
						<!--                        </el-row>-->
					</div>
					`
				</div>
				<div id="Sdiv" class="col-xs-10 col-sm-10 col-md-10 col-lg-10" style="overflow: inherit;position: relative; ">
					<div id="SdivInnerBox">
						<router-view />
					</div>
					<div style="position: relative;width: 100%;overflow: hidden;padding: 20px 0; ">@ 版权所有：九博科技有限公司</div>
				</div>
			</div>
		</div>
	</div>

</template>

<script type="module">
	import axios from 'axios'
    import Cookies from 'js-cookie'
    import {
        init
    } from '@/../static/js/common.js'

    export default {
        components: {},
        data() {
            return {
                accountName: this.accountName(),
                accountId: this.accountId(),
                phoneFlag: true,
                // menuList: [],
                bool1: false,
                bool2: false,
                bool3: false,
                bool4: true,
				bool5: false,
				bool6: false,
                onString: 'MemberSummary',
                titleNow: '楼盘管理'
            }
        },
        methods: {
            titleChange(param) {
                // console.log('param:' + param)
                this.title = param
            },
            onShow(index) {
                switch (index) {
                    case 0:
                        this.bool1 = !this.bool1;
                        this.bool2 = false;
                        this.bool3 = false;
                        this.bool4 = false;
						this.bool5 = false;
						this.bool6 = false;
                        break;
                    case 1:
                        this.bool1 = false;
                        this.bool2 = !this.bool2;
                        this.bool3 = false;
                        this.bool4 = false;
						this.bool5 = false;
						this.bool6 = false;
                        break;
                    case 2:
                        this.bool1 = false;
                        this.bool2 = false;
                        this.bool3 = !this.bool3;
                        this.bool4 = false;
						this.bool5 = false;
						this.bool6 = false;
                        break;
                    case 3:
                        this.bool1 = false;
                        this.bool2 = false;
                        this.bool3 = false;
                        this.bool4 = !this.bool4;
						this.bool5 = false;
						this.bool6 = false;
                        break;
                    case 4:
                        this.bool1 = false;
                        this.bool2 = false;
                        this.bool3 = false;
                        this.bool4 = false;
						this.bool5 = !this.bool5;
						this.bool6 = false;
						break;
					 case 5:
                        this.bool1 = false;
                        this.bool2 = false;
                        this.bool3 = false;
                        this.bool4 = false;
						this.bool5 = false;
						this.bool6 = !this.bool6;
                        break;
                }

            },
            addCheck(string) {
                this.onString = string;
                //console.log(string);
                if (string == 'BuildingControl') {
                    this.titleNow = '楼盘管理';
                    return false;
                }
                if (string == 'BuildingAnalysis') {
                    this.titleNow = '户型分析管理';
                    return false;
                }
                if (string == 'CounselorControl') {
                    this.titleNow = '咨询师管理';
                    return false;
                }
                if (string == 'Comment') {
                    this.titleNow = '点评管理';
                    return false;
                }
                if (string == 'RecruitControl') {
                    this.titleNow = '招聘管理';
                    return false;
                }
                if (string == 'ArticleControl') {
                    this.titleNow = '其他模块';
                    return false;
                }
                if (string == 'BuildingDynamic') {
                    this.titleNow = '动态管理';
                    return false;
                }
                if (string == 'LinkPhone') {
                    this.titleNow = '委托找房';
                    return false;
				}
				 if (string == 'LinkRenting') {
                    this.titleNow = '委托好租';
                    return false;
                }
				if (string == 'HouseResources') {
				    this.titleNow = '房源管理';
				    return false;
				}
				if (string == 'EntrustRent') {
				    this.titleNow = '委托管理';
				    return false;
				}
				if (string == 'Business') {
				    this.titleNow = '商圈管理';
				    return false;
				}
				if (string == 'Office') {
				    this.titleNow = '共享办公相关';
				    return false;
				}
            },
            gainFun(data) {
                this.onString = data;
                this.bool2 = true;
            },
            gainFun2(data) {
                this.onString = data;
                this.bool2 = true;
            },
            //用户退出
            loginOut() {
                if (confirm("确定退出?") == false) {
                    return;
                } else {
                    //删除cookie
                    Cookies.remove("accountData");
                    Cookies.remove("accessToken");
                    this.$parent.setRouter("/login");
                    this.accountId = '';
                }
            },
            checkJur() {

                if (this.accountId == 1) {
                    this.phoneFlag = true
                    // console.log('accountId' + this.index);
                } else {
                    this.phoneFlag = false
                }
            },
        },
        mounted() {
            // var menu = JSON.parse(sessionStorage.getItem("menuList"));
            // this.menuList = menu.menuBeanList
            init();
        },
        created() {
            this.checkJur()
            this.$parent.setRouter("/MainPage");
        }

    }
</script>

<style>
	#aside-menu {
		border-top: 1px solid #ccc;
		height: 640px;
		overflow-y: auto;
		overflow-x: hidden;
	}

	#aside-menu::-webkit-scrollbar {
		display: none;
	}

	#aside-menu dl {
		margin-bottom: 0;
		height: 50px;
		overflow: hidden;
		color: #047EB1;
		font-size: 20px;
		background: #f1f1f1;
		transition: height .5s
	}

	#aside-menu dl.noShow {
		color: #f2ad4e
	}

	#aside-menu dl.h4 {
		margin-top: 0px;
		height: 250px;
	}

	#aside-menu dl.h2 {
		margin-top: 0px;
		height: 150px;
	}

	#aside-menu dl.h1 {
		margin-top: 0px;
		height: 100px;
	}
	#aside-menu dl.h222 {
		margin-top: 0px;
		height: 150px;
	}


	#aside-menu dl dt {
		height: 50px;
		text-align: center;
		background: #e6e6e6;
		border-bottom: 1px solid #ccc;
	}

	#aside-menu dl dd {
		height: 50px;
		text-align: center;
		border-bottom: 1px solid #ccc;
	}

	#aside-menu dl dd:hover {
		background: #f5f5f5;
		/* color: #603b2c; */
	}

	#aside-menu dl i {
		position: relative;
		display: inline-block;
		width: 200px;
		height: 50px;
		text-align: left;
		line-height: 50px;
		text-indent: 25px;
	}

	#aside-menu dl i:before {
		position: absolute;
		left: -25px;
		display: block;
	}

	#aside-menu dl dd.li-active {
		background: #fff
	}

	.li-active i {
		color: #2C6489;
	}

	.root {
		width: 100%;
		overflow-x: hidden;
	}

	a {
		color: #48AFE9 !important;
	}

	a:hover {
		/* color: #795548 !important; */
	}
</style>
<host>

</host>

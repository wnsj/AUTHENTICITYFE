<template>
    <div class="root">
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 aside-logo">
            <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2 con-cen" style="height:100%;">
                <h2 class="pull-left" style="padding:10px 0; height:100%;">
                    <img style="width: 50px; height: 50px;" src="../assets/img/logo1.png" /> <strong style=" display:inline-block;font-size: 35px; line-height:40px;">
                        圣安米悦</strong><br />
                    <font style=" disply:block; font-size:26px;line-height:30px;">商 城 管 理 系 统</font>
                </h2>
            </div>
            <div class="col-xs-10 col-sm-10 col-md-10 col-lg-10 text-right">
                <p style="color: #1b4fa3;">欢迎<span style="color: #d58512;"> {{accountName}} </span>来到，商城管理系统</p>
                <button class="btn btn-default m_r_10" style="margin-top: 40px;" v-on:click="loginOut()">退出</button>
            </div>
        </div>
        <div class="container-fluid clear-mp" id="Odiv">
            <div class="row clear-mp">
                <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2 my-aside clear-mp" id="Adiv" style="padding-top: 10px;">
                    <p style=" display:block; width:190px; height:50px;margin:0 auto; line-height:50px; font-size: 30px;font-weight: bold;color: #795548;text-align: left; margin-bottom:10px;">功能列表</p>
                    <div id="aside-menu">
                        
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
                        </dl>
                        <dl v-bind:class="{h4:bool1}">
                            <dt @click="onShow(0)" v-bind:class="{'li-active':bool1}">
                                <i class="fa" v-bind:class="{'fa-folder-open':bool1,'fa-folder':!bool1}" aria-hidden="true">
                                    招聘相关
                                </i>
                            </dt>
                            <dd @click="addCheck('ArticleControl')" v-bind:class="{'li-active':onString=='ArticleControl'}">
                                <router-link to="/MP/ArticleControl/ArticleControl"><i class="fa" aria-hidden="true">文章管理</i></router-link>
                            </dd>
                            <dd @click="addCheck('RecruitControl')" v-bind:class="{'li-active':onString=='RecruitControl'}">
                                <router-link to="/MP/RecruitControl/RecruitControl"><i class="fa" aria-hidden="true">招聘管理</i></router-link>
                            </dd>
                        </dl>
                    </div>
                </div>
                <div class="col-xs-10 col-sm-10 col-md-10 col-lg-10 embed-responsive embed-responsive-16by9" style="overflow: inherit; background-color:">
                    <router-view />
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
        components: {
        },
        data() {
            return {
                accountName:this.accountName(),
                itemList:[],
                bool1:true,
                bool2:false,
                bool3:false,
                bool4:false,
                bool5:false,
                onString:'MemberSummary'
            }
        },
        methods:{
            titleChange(param){
                console.log('param:'+param)
                this.title=param
            },
            onShow(index){
                switch(index){
                    case 0:
                        this.bool1 = !this.bool1;
                        this.bool2 = false;
                        this.bool3 = false;
                        this.bool4 = false;
                        this.bool5 = false;
                        break;
                    case 1:
                        this.bool1 = false;
                        this.bool2 = !this.bool2;
                        this.bool3 = false;
                        this.bool4 = false;
                        this.bool5 = false;
                        break;
                    case 2:
                        this.bool1 = false;
                        this.bool2 = false;
                        this.bool3 = !this.bool3;
                        this.bool4 = false;
                        this.bool5 = false;
                        break;
                    case 3:
                        this.bool1 = false;
                        this.bool2 = false;
                        this.bool3 = false;
                        this.bool4 = !this.bool4;
                        this.bool5 = false;
                        break;
                    case 4:
                        this.bool1 = false;
                        this.bool2 = false;
                        this.bool3 = false;
                        this.bool4 = false;
                        this.bool5 = !this.bool5;
                        break;
                }

            },
            addCheck(string){
                this.onString = string;
                console.log(string)
            },
            gainFun(data){
                this.onString = data;
                this.bool2 = true;
            },
            gainFun2(data){
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
        },
        mounted() {
            init();

        },
        created() {
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
        color: #795548;
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
        color: #603b2c;
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
        color: #f2ad4e;
    }

    .root {
        width: 100%;
        overflow-x: hidden;
    }

    a {
        color: #795548 !important;
    }

    a:hover {
        color: #795548 !important;
    }
</style>
<host>

</host>

import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login.vue'
import MainPage from '@/components/MainPage.vue'
/*------------*/
import BuildingControl from '../components/MP/BuildingControl/BuildingControl.vue'
import BuildingAnalysis from '../components/MP/BuildingAnalysis/BuildingAnalysis.vue'
import CounselorControl from '../components/MP/Counselor/CounselorControl.vue'
import ArticleControl from '../components/MP/ArticleControl/ArticleControl.vue'
import RecruitControl from '../components/MP/RecruitControl/RecruitControl.vue'
import Comment from '../components/MP/Comment/Comment.vue'
import BuildingDynamic from '../components/MP/BuildingDynamic/BuildingDynamic.vue'
import LinkPhone from '../components/MP/LinkPhone/LinkPhone.vue'
import LinkRenting from '../components/MP/LinkPhone/LinkRenting.vue'
import HouseResources from '../components/MP/HouseResources/HouseResources.vue'
import EntrustRent from '../components/MP/HouseResources/EntrustRent.vue'
import Business from '../components/MP/Business/Business.vue'
import Office from '../components/MP/HouseResources/Office/Office.vue'
import Independent from '../components/MP/Office/Independent.vue'


Vue.use(Router)

//解决路由多次跳转同一页面报错
const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err);
}

export default new Router({
    routes: [{
            path: '/login',
            component: login,
            hidden: true
        },
        {
            path: '/MainPage',
            name: 'MainPage',
            component: MainPage,
            children: [
                {
                    path: '/MP/BuildingControl/BuildingControl',
                    name: 'BuildingControl',
                    component: BuildingControl,
                },

                {
                    path: '/MP/Office/Independent',
                    name: 'Independent',
                    component: Independent,
                },
               


                {
                    path: '/MP/BuildingAnalysis/BuildingAnalysis',
                    name: 'BuildingAnalysis',
                    component: BuildingAnalysis,
                },{
                    path: '/MP/Counselor/CounselorControl',
                    name: 'CounselorControl',
                    component: CounselorControl,
                },
                {
                    path: '/MP/ArticleControl/ArticleControl',
                    name: 'ArticleControl',
                    component: ArticleControl,
                },
                {
                    path: '/MP/RecruitControl/RecruitControl',
                    name: 'RecruitControl',
                    component: RecruitControl,
                },
                {
                    path: '/MP/Comment/Comment',
                    name: 'Comment',
                    component: Comment,
                },
                {
                    path: '/MP/BuildingDynamic/BuildingDynamic',
                    name: 'BuildingDynamic',
                    component: BuildingDynamic,
                },
                {
                    path: '/MP/LinkPhone/LinkRenting',
                    name: 'LinkRenting',
                    component: LinkRenting,
                },
                {
                    path: '/MP/LinkPhone/LinkPhone',
                    name: 'LinkPhone',
                    component: LinkPhone,
                },
				{
				    path: '/MP/HouseResources/HouseResources',
				    name: 'HouseResources',
				    component: HouseResources,
				},
				{
				    path: '/MP/HouseResources/EntrustRent',
				    name: 'EntrustRent',
				    component: EntrustRent,
				},
				{
				    path: '/MP/Business/Business',
				    name: 'Business',
				    component: Business,
				},
				{
				    path: '/MP/HouseResources/Office/Office',
				    name: 'Office',
				    component: Office,
				}
            ],
            redirect: '/MP/BuildingControl/BuildingControl'
        }
    ]
})

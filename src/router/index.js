import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login.vue'
import MainPage from '@/components/MainPage.vue'
/*------------*/
import BuildingControl from '../components/MP/BuildingControl/BuildingControl.vue'


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
            ],
            redirect: '/MP/BuildingControl/BuildingControl'
        }
    ]
})

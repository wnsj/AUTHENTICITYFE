<template>
    <div class="page-bar">
        <ul>
            <li class="first">
                <span>共{{dataNum}}条记录 第 {{cur}} / {{all}} 页</span>
            </li>
            <li v-if="cur>1">
                <!--点击上一页-->
                <a v-on:click="cur--,pageClick()"><</a>
            </li>
            <li v-if="cur==1">
                <!--点击第一页时显示-->
                <a class="banclick"><</a>
            </li>
            <li  class="li_a" v-for="index in indexs" v-bind:class="{ 'active': cur == index}">
                <!--页码-->
                <a v-on:click="btnClick(index)">{{ index }}</a>
            </li>
            <li  v-if="cur!=all">
                <!--点击下一页-->
                <a v-on:click="cur++,pageClick()">></a>
            </li>
            <li  v-if="cur == all">
                <!--点击最后一页时显示-->
                <a class="banclick">></a>
            </li>
            <li class="last_li">
                <!--共有多少页-->
                <span>共<i>{{all}}</i>页</span>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        //显示的声明组件
        name: "paging",
        //从父级组件中传值过来的，你可以自己设置名字，但是需要跟父级传入的名字一致！
        // props : ["dataAll","dataCur","datanum","dataDatanum"],
        data() {
            return{
                all: 1, //总页数
                cur: 1, //当前页码
                num: 5, //一页显示的数量  必须是奇数
                dataNum: 0, //数据的数量
            }
        },
        watch: {
            cur: function(oldValue, newValue) {
                //父组件通过change方法来接受当前的页码
                this.$emit('change', oldValue)
                //这里是直接点击执行函数
            }
        },
        methods: {
            btnClick: function(data) { //页码点击事件
                if(data != this.cur) {
                    this.cur = data
                }
            },
            pageClick: function() {
                console.log('现在在' + this.cur + '页');
                //父组件通过change方法来接受当前的页码
                //这里是点击下一页执行函数
                this.$emit('change',  this.cur)
            },
            setParam: function(all,cur,dataNum) {
                if(this.isBlank(all)){
                    this.all='0'
                }else{
                    this.all=parseInt(all)
                }
                if(this.isBlank(cur)){
                    this.cur='0'
                }else{
                    this.cur=parseInt(cur)
                }
                this.dataNum=parseInt(dataNum)
            },
        },

        computed: {
            indexs: function() {
                var left = 1;
                var right = this.all;
                var ar = [];
                if(this.all >= this.num ) {
                    if(this.cur > 3 && this.cur < this.all - 2) {
                        left = this.cur -  (this.num-1)/2
                        right = this.cur +  (this.num-1)/2
                    } else {
                        if(this.cur <= 3) {
                            left = 1
                            right =  this.num
                        } else {
                            right = this.all
                            left = this.all - (this.num - 1);
                        }
                    }
                }
                while(left <= right) {
                    ar.push(left)
                    left++
                }
                return ar
            }

        }

    }
</script>

<style scoped>
    .page-bar {
        text-align: center;
        width: 100%;
        height: 36px;
        margin: 0 auto;
        position: relative;
    }

    .page-bar ul {
        min-width: 700px;
        display: block;
        overflow: hidden;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
    }

    .page-bar li {
        display: block;
        width: 36px;
        height: 36px;
        border-radius: 4px;
        list-style: none;
        overflow: hidden;
        position: relative;
        float: left;
        margin-left: 8px;
    }
    .page-bar .first{
        display: block;
        width: 170px;
        height: 36px;
        font-size: 14px;
        line-height: 36px;
        text-align: center;
    }
    .page-bar .last_li{
        width: 85px;
        height: 36px;
        border: 1px solid #ddd;
    }
    .page-bar .last_li span{
        width: 100%;
        height: 100%;
        line-height: 36px;
        text-align: center;
        float: left;
    }
    .page-bar li:first-child {
        margin-left: 0px
    }

    .page-bar a {
        width: 34px;
        height: 34px;
        border: 1px solid #ddd;
        text-decoration: none;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        /*margin-left: -1px;*/
        line-height:  34px;
        color: #333!important;
        cursor: pointer
    }

    .page-bar .li_a a:hover {
        background-color: #eee;
        border: 1px solid #c4b190;
        color: #c4b190;
    }

    .page-bar a.banclick {
        cursor: not-allowed;
    }

    .page-bar .active a {
        color: #fff;
        cursor: default;
        background-color: rgb(230, 230, 230);
        border-color: rgb(230, 230, 230);
    }

    .page-bar i {
        font-style: normal;
        color: #d44950;
        margin: 0px 4px;
        font-size: 14px;
    }
</style>

<template>
    <header>
        <nav-bar :data="navs"></nav-bar>
    </header>
    <router-view :newsData="newsData"></router-view>

    <footer>
        <copyright :navs="navs" class="wow animate__animated animate__fadeInUp"></copyright>
    </footer>
</template>

<script setup lang='ts'>
// @ts-ignore
import { onMounted, nextTick, ref, reactive } from 'vue'
import { useRoute } from "vue-router";
import Copyright from '@/components/Copyright.vue'
import NavBar from '@/components/NavBar.vue';


//@ts-ignore
import { WOW } from "wowjs";

onMounted(()=>{
    nextTick(()=>{
        new WOW({
            live:false,
        }).init();
    })
})

const newsData = reactive<News[]>([
    {
        id: 31,
        title: '标题1标题1标题1标题1',
        desc: '简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述',
        date: '2021-10-31'
    },
    {
        id: 32,
        title: '标题2标题1标3题11标题1',
        desc: '简单描述简321单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述',
        date: '2021-12-31'
    },
    {
        id: 33,
        title: '标题1标题341标题1标题1',
        desc: '简单描述简231单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述',
        date: '2022-10-31'
    },
    {
        id: 34,
        title: '标题41标题1标题1标题1',
        desc: '简单描述324简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述',
        date: '2021-10-21'
    },
]);
const navs: Nav[] = [
    {
        text: '首页',
        to: '/',
    },
    {
        text: '新闻中心',
        to: '/news_center',
        subNav: [
            // {
            //     text: '子分类1',
            //     to: '/subNav1',
            // },
            // {
            //     text: '子分类2',
            //     to: '/subNav2',
            // },
            // {
            //     text: '子分类3',
            //     to: '/subNav3',
            // },
        ]
    },
    {
        text: '产品方案',
        to: '/products_scheme',
    },
    {
        text: '服务支持',
        to: '/service_support',
    },
    {
        text: '人才招聘',
        to: '/talent_recruitment',
    },
    {
        text: '关于我们',
        to: '/about_us',
    },
]

</script>

<style lang='scss' scoped>
footer {
    margin-top: 20px;
    overflow: hidden;
    padding: 20px 200px 0;
    background-color: #00162e;
}

@media screen and(max-width:1056px) {
    footer {
        padding: 0 50px 50px;
    }
}
</style>
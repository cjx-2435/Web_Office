<template>
    <main>
        <section class="header">
            <h1>智谱新闻</h1>
            <h3>Focus on zhipu</h3>
        </section>
        <section class="container wow animate__animated animate__fadeInLeft">
            <ul v-if="newsData.length">
                <li class="news" v-for="(news,index) in newsData" :key="news.id">
                    <news :news="news" :normal="false"></news>
                </li>
            </ul>
            <el-empty v-else description="数据为空"></el-empty>
        </section>
    </main>
    <el-pagination
        class="wow animate__animated animate__fadeInUp"
        background
        v-model:page-size="pageSize"
        v-model:current-page="currentPage"
        v-model:page-sizes="pageSizes"
        @current-change="change"
        layout="total,sizes,prev, pager, next,jumper,slot"
        :total="newsData.length"
    ></el-pagination>
</template>

<script setup lang='ts'>
import News from "@/components/News.vue";
import { onMounted, nextTick, onUnmounted, defineProps, PropType, reactive, ref } from "vue";
//@ts-ignore
import { WOW } from "wowjs";
onMounted(() => {
    nextTick(() => {
        new WOW({
            live: false,
        }).init()
    })
})

const props = defineProps({
    newsData: {
        type: Array as PropType<News[]>,
        default: [],
    }
});
const pageSizes = reactive([5, 10, 20, 50, 100]);
const pageSize = ref(10);
const currentPage = ref(1);

function change(index: number) {

}
</script>

<style lang='scss' scoped>
main {
    .header {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        box-sizing: border-box;
        padding-left: 326px;
        height: 450px;
        background: url("../assets/banners/2.jpg") center no-repeat;
        background-size: cover;
        color: #fff;
        h1 {
            margin-bottom: 0;
            font-size: 60px;
        }
        h3 {
            font-size: 28px;
            margin-top: 15px;
            &::after {
                margin-top: 15px;
                display: block;
                content: "";
                height: 8px;
                width: 80px;
                background-color: #fff;
            }
        }
    }
    .container {
        background-color: #fff;
        width: 1200px;
        height: auto;
        margin: 50px auto;
        ul {
            width: 100%;
            margin: 0;
            padding: 0;
            list-style: none;
            li {
                box-sizing: content-box;
                padding-bottom: 15px;
                margin-bottom: 15px;
                border-bottom: 1px solid #efefef;
            }
        }
    }
}
@media screen and(max-width:1056px) {
    main {
        .header {
            padding-left: 100px;
        }
        .container {
            width: 100%;
            margin: 50px 0;
        }
    }
}
</style>
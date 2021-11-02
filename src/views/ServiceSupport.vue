<template>
    <main>
        <section class="header"></section>
        <section class="container">
            <title-custom :title="'测试'">
                <div class="block wow animate__animated animate__fadeInLeft">
                    <card v-for="(card,index) in cards" :card="card" :key="card.title"></card>
                </div>
                <el-button class="wow animate__animated animate__fadeInUp">查看更多</el-button>
            </title-custom>
        </section>
    </main>
</template>

<script setup lang='ts'>
import TitleCustom from '@/components/TitleCustom.vue'
import Card from '@/components/Card.vue'
import { reactive,onMounted,nextTick } from 'vue';
//@ts-ignore
import { WOW } from "wowjs";
onMounted(() => {
  nextTick(() => {
    new WOW({
      live: false,
    }).init()
  })
})

const cards = reactive<Card[]>(
    [
        {
            pic: require('@/assets/icon.png'),
            title: '服务渠道1',
            sub_title: ['热线服务', '在线服务', '热线服务', '在线服务', '热线服务', '在线服务',],
        },
        {
            pic: require('@/assets/icon.png'),
            title: '服务渠道2',
            sub_title: ['热线服务', '在线服务'],
        },
        {
            pic: require('@/assets/icon.png'),
            title: '服务渠道3',
            sub_title: ['热线服务', '在线服务'],
        },
    ]
)
</script>

<style lang='scss' scoped>
main {
    .header {
        box-sizing: border-box;
        height: 450px;
        background: url("../assets/banners/2.jpg") center no-repeat;
        background-size: cover;
    }
    section.container {
        width: 100%;
        .block {
            display: flex;
            justify-content: space-around;
            align-items: center;
            margin:0 200px 10px;
            & > div {
                margin: 10px;
            }
        }
    }
}
@media screen and(max-width:1056px) {
        .container .block {
            margin: 0 !important;
        }
    }
</style>
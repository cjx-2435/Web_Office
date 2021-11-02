<template>
    <swiper v-if="newsData?.length" class="news-swiper" @swiper="init" :navigation="navigation" ref="newsSwiper">
        <swiper-slide :swiper-ref="newsSwiper!" v-for=" (news,index) in newsData " :key="news.id">
            <section>
                <div class="pic">
                    <img :src="news.pic" />
                </div>
                <p class="date">{{news.date}}</p>
                <router-link :to="`/news_center/${news.id}`">{{news.title}}</router-link>
                <p class="desc">{{news.desc}}</p>
            </section>
        </swiper-slide>
    </swiper>
</template>

<script setup lang='ts'>
import { ref, defineProps, toRefs, reactive, PropType } from 'vue'
import SwiperClass, { Navigation, Scrollbar, Autoplay } from 'swiper';
import { Swiper, SwiperSlide, } from 'swiper/vue';
import 'swiper/swiper.scss';
import 'swiper/swiper-bundle.css';
import { SwiperOptions } from 'swiper/types';
SwiperClass.use([Navigation]);

const props = defineProps({
    newsData: {
        type: Array as PropType<News[]>
    }
})

const newsSwiper = ref<SwiperClass>();
const { navigation } = toRefs(reactive<SwiperOptions>({
    navigation: true
}));


function init(swiper: SwiperClass) {

}
</script>

<style lang='scss' scoped>
.news-swiper {
    --swiper-navigation-color: #fff;
}
.swiper-container {
    section {
        width: 100%;
        text-align: left;
        .date {
            font-size: 16px;
            color: #999;
        }
        a {
            font-size: 20px;
            font-weight: bold;
            color: #333;
            display: block;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
            text-decoration: none;
        }
        .desc {
            font-size: 16px;
            color: #666;
            display: block;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
        }
        .pic {
            width: 100%;
            height: 400px;
            img {
                width: 100%;
                height: 100%;
            }
        }
    }
}
@media screen and (max-width: 1056px) {
    .news-swiper {
        display: none;
    }
}
</style>
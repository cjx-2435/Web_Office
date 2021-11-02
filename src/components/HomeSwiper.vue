<template>
    <swiper
        :autoplay="autoplay"
        :slides-per-view="slidesPerView"
        :loop="loop"
        :pagination="pagination"
        :speed="speed"
        ref="homeSwiper"
        @swiper="init"
        @slide-change="onSlideChange"
        @slide-change-transition-start="onTransitionStart"
        @slide-change-transition-end="onTransitionEnd"
    >
        <swiper-slide :swiper-ref="homeSwiper!" v-for="(banner,index) in banners" :key="index">
            <div class="banner">
                <img :src="require(`@/assets/banners/${banner.img}`)" />
                <transition name="fade">
                    <div class="hover" v-show="fade">
                        <h1 v-if="banner.title" class="title">{{ banner.title }}</h1>
                        <div v-if="banner.desc" class="desc">{{ banner.desc }}</div>
                        <em v-if="banner.title || banner.desc"></em>
                        <el-button
                            v-if="banner.to"
                            @click="router.push(banner.to!)"
                        >{{ banner.text }}</el-button>
                    </div>
                </transition>
            </div>
        </swiper-slide>
        <div class="custom" ref="customPagination"></div>
    </swiper>
</template>

<script setup lang='ts'>
import { defineProps, PropType, reactive, ref, toRefs, onMounted, nextTick } from 'vue';
import { useRouter } from 'vue-router'
import SwiperClass, { Pagination, Scrollbar, Autoplay } from 'swiper';
import { Swiper, SwiperSlide, } from 'swiper/vue';
import 'swiper/swiper.scss';
import 'swiper/swiper-bundle.css';
import { SwiperOptions } from 'swiper/types';

const router = useRouter();
const fade = ref(false);
const homeSwiper = ref<SwiperClass>();
const customPagination = ref<Element>();
// props
const { banners } = defineProps({
    banners: {
        type: Array as PropType<Banner[]>,
        default: []
    },
});
// 注册额外组件
const modules = [Pagination, Scrollbar, Autoplay];
SwiperClass.use(modules);
// swiper轮播图配置项
const { autoplay, slidesPerView, loop, pagination, speed } = toRefs(reactive<SwiperOptions>({
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    slidesPerView: 1,
    loop: true,
    pagination: {
        el: '.custom',
        type: 'custom',
        renderCustom: function (swiper: SwiperClass, current: number, total: number) {

            let customPaginationHtml = "";
            for (let i = 0; i < total; i++) {
                //判断哪个分页器此刻应该被激活 
                if (i == (current - 1)) {
                    customPaginationHtml += `<span index="${i}" class="swiper-pagination-customs swiper-pagination-customs-active"></span>`;
                } else {
                    customPaginationHtml += `<span index="${i}" class="swiper-pagination-customs" ></span>`;
                }
            }
            return customPaginationHtml;
        }
    },
    speed: 1000
}));

onMounted(() => {

})

// 事件
function init(swiper: SwiperClass) {
    customPagination.value!.addEventListener('click', (e) => {
        if ((e.target as Element).getAttribute('index')) {
            let index = parseInt((e.target as Element).getAttribute('index')!);
            swiper.slideTo(index + 1);
        }
    })
}
function onSlideChange(swiper: SwiperClass) {
    console.log('change');
}
function onTransitionStart() {
    fade.value = false;
}
function onTransitionEnd() {
    console.log('end');
    fade.value = true;
}
</script>


<style lang='scss'>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 1s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
    transition: opacity 0s ease;
}

/*包裹自定义分页器的div的位置等CSS样式*/
.swiper-pagination-custom {
    position: absolute;
    bottom: 50px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1;
}

/*自定义分页器的样式，这个你自己想要什么样子自己写*/
.swiper-pagination-customs {
    width: 47px;
    height: 7px;
    display: inline-block;
    transform: skewX(-45deg);
    background: #000;
    opacity: 0.3;
    margin: 0 5px;
    cursor: pointer;
}

/*自定义分页器激活时的样式表现*/
.swiper-pagination-customs-active {
    opacity: 1;
    background-color: #f78e00;
}
.banner {
    position: relative;
    width: 100%;
    height: 800px;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    .hover {
        position: absolute;
        top: 24%;
        left: 10%;
        color: #fff;
        .title {
            font-size: 32px;
        }
        .desc {
            font-size: 22px;
            padding-bottom: 80px;
        }
        em {
            display: block;
            width: 45px;
            height: 2px;
            background-color: #fff;
            margin-bottom: 60px;
        }
        button {
            float: left;
            padding: 0 40px;
            background-color: transparent;
            color: #fff;
            font-size: 16px;
            border-radius: 0;
        }
    }
}
</style>
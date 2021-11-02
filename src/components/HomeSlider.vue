<template>
    <swiper
        ref='homeSlider'
        :autoplay="autoplay"
        :slides-per-view="slidesPerView"
        :loop="loop"
        :navigation="navigation"
    >
        <swiper-slide
            :swiper-ref="homeSlider!"
            class="wow animate animate__animated animate__fadeInUp"
            v-for="(slider,index) in sliders"
            :key="index"
        >
            <div class="slider">
                <div class="icon" v-html="slider.icon"></div>
                <div class="info">
                    <div :class="['count', slider.more ? 'more' : '']">{{ slider.count }}</div>
                    <div class="desc">{{ slider.desc }}</div>
                </div>
            </div>
        </swiper-slide>
    </swiper>
</template>

<script setup lang='ts'>
import { defineProps, PropType, reactive, ref, watchEffect, onMounted, nextTick, onUnmounted, toRefs } from 'vue';
import SwiperClass, { Navigation } from 'swiper';
import { Swiper, SwiperSlide, } from 'swiper/vue';
import 'swiper/swiper.scss';
import 'swiper/swiper-bundle.css';
import { SwiperOptions } from 'swiper/types';
SwiperClass.use([Navigation]);

// props
const { sliders } = defineProps({
    sliders: {
        type: Array as PropType<Display[]>,
        default: [],
    }
})
// data
const { autoplay, slidesPerView, loop, navigation } = toRefs(reactive<SwiperOptions>({
    autoplay: false,
    slidesPerView: Math.ceil(window.innerWidth / 384),
    loop: false,
    navigation: false
}));

const homeSlider = ref<SwiperClass>();
// 生命周期
onMounted(() => {
    window.addEventListener('resize', calc);
})

onUnmounted(() => {
    window.removeEventListener('resize', calc);
})

// 方法
function calc(e?: Event) {
    slidesPerView!.value = Math.ceil(window.innerWidth / 384)

    if (sliders.length > Math.ceil(window.innerWidth / 384)) {
        navigation!.value = true;
    } else {
        navigation!.value = false;
    }
}

calc();

</script>

<style lang='scss' scoped>
.swiper-container {
    padding: 50px 100px;
    background: #f7f6f6;
    border-top: 5px solid #e2e2e2;
}
.swiper-slide {
    border-right: 1px solid rgb(218, 218, 218);
    &:last-child{
        border-right: none;
    }
}
.slider {
    display: flex;
    justify-content: center;
    align-items: center;
    .info {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        .count {
            position: relative;
            font-size: 42px;
            color: #18469d;
            font-style: normal;
            font-weight: bold;
            line-height: 100%;
        }
        .more::after {
            position: absolute;
            display: block;
            content: "+";
            top: -13px;
            right: -20px;
            font-size: 20px;
            color: #18469d;
            font-style: normal;
            margin-left: 10px;
        }
        .desc {
            font-size: 16px;
            color: #333;
        }
    }
}
</style>
<template>
    <swiper
        :slidesPerView="slidesPerView"
        :pagination="pagination"
        ref="cardSlider"
        @swiper="init"
        @active-index-change="onChange"
    >
        <swiper-slide :swiper-ref="cardSlider!" v-for="(card,index) in cards" :key="index">
            <div @mouseenter="hover" :class="['card', index === 0 ? 'on' : '']">
                <div class="pic" :style="card.pic?'':{height: '200px'}">
                    <img v-if="card.pic" :src="card.pic" />
                </div>
                <section>
                    <h3 class="title">{{card.title}}</h3>
                    <p>
                        {{card.text}}
                    </p>
                </section>
            </div>
        </swiper-slide>
        <div class="custom_swiper" v-show="pagination" ref="customPagination"></div>
    </swiper>
</template>

<script setup lang='ts'>
import { Swiper, SwiperSlide } from 'swiper/vue';
import SwiperClass, { SwiperOptions, Pagination } from 'swiper'
import { ref, reactive, toRefs, onMounted, onUnmounted, defineProps, PropType } from 'vue'
SwiperClass.use([Pagination]);
// props
const { cards } = defineProps({
    cards: {
        type: Array as PropType<SimpleCard[]>,
        default: [],
    }
});
const customPagination = ref<Element>();
const cardSlider = ref<SwiperClass>();
const mySwiper = ref<SwiperClass>();
const { slidesPerView, pagination } = toRefs(reactive<SwiperOptions>({
    slidesPerView: 1,
    pagination: false
}));

// 生命周期
onMounted(() => {
    customPagination.value!.addEventListener('click', (e) => {
        if ((e.target as Element).getAttribute('index')) {
            let index = parseInt((e.target as Element).getAttribute('index')!);
            mySwiper.value!.slideTo(index);
        }
    })

    calc();
    window.addEventListener('resize', calc);
})

onUnmounted(() => {
    window.removeEventListener('resize', calc);
})

// 方法
function init(swiper: SwiperClass) {
    mySwiper.value = swiper;

}
function onChange(swiper: SwiperClass) {
    swiper.slides.forEach(slide => slide.classList.remove('on'));
    swiper.slides[swiper.activeIndex].children[0].classList.add('on')
}
function calc(e?: Event) {
    slidesPerView!.value = Math.ceil(window.innerWidth / 640)

    if (cards.length > slidesPerView!.value) {
        pagination!.value = {
            el: '.custom_swiper',
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
        }
    } else {
        pagination!.value = false;
    }
}

function hover(e: Event) {
    document.querySelectorAll('.card').forEach(ele => {
        ele.classList.remove('on');
    });
    (e.target as Element).classList.add('on');
}

</script>

<style lang='scss' scoped>
.swiper-pagination-custom {
    bottom: 0px !important;
}
.swiper-container {
    display: flex;
    justify-content: center;
    .swiper-wrapper {
        box-sizing: border-box;
        width: 100%;
        margin: 0;
        padding: 0 100px !important;
        .swiper-slide {
            box-sizing: border-box;
            display: flex;
            justify-content: center;
            padding: 30px 20px;
            .card {
                position: relative;
                top: 0;
                width: 90%;
                padding: 20px 50px;
                border-radius: 10px;
                box-shadow: 0 0 5px 4px #999;
                background-color: #ccc;
                transition: top 0.5s;
                background: none;
                cursor: pointer;
                .pic {
                    width: 100%;
                    img {
                        width: 100%;
                        height: 100%;
                    }
                }
                section {
                    text-align: left;
                    p {
                        overflow: hidden;
                        text-overflow: ellipsis;
                        display: -webkit-box;
                        -webkit-box-orient: vertical;
                        -webkit-line-clamp: 5;
                    }
                }
                &.on {
                    top: -20px;
                    color: #fff;
                    background: url("../assets/card_focus.jpg") no-repeat;
                    background-size: cover;
                    object-fit: cover;
                }
            }
        }
    }
}
</style>
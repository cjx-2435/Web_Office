<template>
    <div class="container">
        <div class="pic">
            <img :src="card?.pic ?? require('@/assets/icon.png')" />
        </div>
        <span>{{ card.title }}</span>
        <div class="text">
            <div class="block" v-for="i in Math.ceil(card.sub_title.length / 3)" :key="i">
                <p v-for="(sub,index) in card.sub_title.slice((i - 1) * 3, i * 3)" :key="sub">
                    <span>{{ sub }}</span>
                </p>
            </div>
        </div>
    </div>
</template>

<script setup lang='ts'>
import { defineProps, PropType } from 'vue';
const props = defineProps({
    card: {
        type: Object as PropType<Card>,
        required: true
    }
})
</script>

<style lang='scss' scoped>
div.container {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    height: 252px;
    background-color: #efefef;
    .pic {
        display: flex;
        width: 100%;
        height: 120px;
        justify-content: center;
        align-items: center;
        img {
            height: 50%;
        }
    }
    & > span {
        font-size: 16px;
        color: #1f0b11;
        text-align: center;
        padding-bottom: 12px;
    }
    & > .text {
        flex: 1;
        display: flex;
        justify-content: center;
        align-content: flex-start;
        &>div.block {
            & > p {
                margin: 7px;
                display: flex;
                flex-direction: column;
                span {
                    position: relative;
                    font-size: 14px;
                    &::before {
                        position: absolute;
                        top: 50%;
                        left: -8px;
                        font-size: 14px;
                        color: #595757;
                        line-height: 14px;
                        font-weight: bold;
                        transform: translateY(-50%);
                        display: block;
                        content: "·";
                    }
                }
            }
        }
    }
}
</style>
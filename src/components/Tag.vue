<template>
    <div class="tag">
        <div class="icon">
            <img :src="iconPath" />
        </div>
        <div class="en">{{ en_title }}</div>
        <div class="zh">{{ zh_title }}</div>
    </div>
</template>

<script setup lang='ts' scoped>
import { defineProps } from 'vue';
const { iconPath, en_title, zh_title } = defineProps({
    iconPath: {
        type: String,
        default: require('@/assets/icon.png'),
    },
    en_title: {
        type: String,
        required: true,
    },
    zh_title: {
        type: String,
        required: true,
    }
})
</script>

<style lang='scss' scoped>
.tag {
    display: flex;
    flex-direction: column;
    text-align: left;
    .icon {
        width: 16px;
        height: 16px;
        img {
            width: 100%;
            height: 100%;
        }
    }
    .en {
        font-size: 20px;
        font-weight: bold;
        color: #444;
        margin-top: 15px;
    }
    .zh {
        font-size: 40px;
        color: #18469d;
        margin-top: 10px;
    }
}
</style>
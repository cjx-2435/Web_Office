<template>
    <div :class="['wrapped',className]">
        <header>
            <div class="tag wow animate__animated animate__fadeInLeft">
                <tag :en_title="en_title" :zh_title="zh_title" :icon-path="iconPath"></tag>
            </div>
            <div class="wow animate__animated animate__fadeInRight">
                <el-button @click="router.push(more.path)">{{ more.text }}</el-button>
            </div>
        </header>
        <slot></slot>
    </div>
</template>

<script setup lang='ts' scoped>
import Tag from '@/components/Tag.vue'
import { defineProps, PropType } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();
const props = defineProps({
    en_title: {
        type: String,
        required: true,
    },
    zh_title: {
        type: String,
        required: true,
    },
    iconPath: {
        type: String,
    },
    more: {
        type: Object as PropType<More>,
        default: {
            text: '查看详情 →',
            path: '/',
        }
    },
    className:{
        type:String,
    }
});
</script>

<style lang='scss'>
.wrapped {
    background: url("../assets/bg.png");
    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 75px 0 50px;
        margin: 0 100px;
        border-bottom: 1px solid #e5e5e5;
    }

    @media screen and(max-width:1056px) {
        header {
            margin: 0 30px;
        }
    }
}
</style>
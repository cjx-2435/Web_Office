<template>
    <div class="about_us">
        <div class="left_wrap wow animate__animated animate__fadeInLeft">
            <tag :="{...tag}" ></tag>
            <p class="description">{{ description }}</p>
            <el-button @click="$router.push(path!)">{{text}}</el-button>
        </div>
        <div class="right_wrap wow animate__animated animate__fadeInRight">
            <img :src="pic" />
        </div>
    </div>
</template>

<script setup lang='ts' scoped>
import Tag from '@/components/Tag.vue'
import { defineProps, PropType} from 'vue';

const props = defineProps({
    description: {
        type: String,
    },
    pic:{
        type:String,
        default:require('@/assets/banners/4.jpg'),
    },
    tag:{
        type:Object as PropType<Tag>,
        required:true,
    },
    path:{
        type:String,
        require:true,
    },
    text:{
        type:String,
    }
});


</script>

<style lang='scss'>
.about_us {
    padding: 50px 28px;
    display: flex;
    flex-wrap: wrap;
    background: url("../assets/bg.png") no-repeat;
    .left_wrap {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 50px 30px;
        .description {
            text-align: left;
            font-size: 16px;
            color: #777;
        }
    }
    .right_wrap {
        img {
            width: 100%;
            height: 100%;
        }
    }
    .left_wrap,
    .right_wrap {
        flex: 1;
    }
    @media screen and(max-width:1056px) {
        .left_wrap {
            padding: 50px 0;
        }
        .left_wrap,
        .right_wrap {
            flex: none;
            width: 100%;
        }
    }
}
</style>
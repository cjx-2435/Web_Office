<template>
    <div class="block wow animate__animated animate__fadeInUp">
        <h4>{{title}}</h4>
        <p>
            <span></span>
        </p>
    </div>
    <slot></slot>
</template>

<script setup lang='ts'>
import { defineProps } from "vue";
const props = defineProps({
    title:{
        type:String,
        require:true
    }
})
</script>

<style lang='scss' scoped>
.block {
    text-align: center;
    margin: 50px 0;
    h4 {
        color: #1f0b11;
        font-size: 24px;
        font-weight: normal;
        margin: 0;
        padding: 0;
    }
    p {
        width: 295px;
        height: 1px;
        background: #efefef;
        margin: 0 auto;
        margin-top: 10px;
        span {
            width: 90px;
            background: #f06b08;
            height: 3px;
            display: block;
            margin: 0 auto;
            position: relative;
            top: -1px;
        }
    }
}
</style>
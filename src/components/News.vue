<template>
    <section v-if="normal" class="news">
        <div class="pic">
            <img :src="news.pic" />
        </div>
        <div class="info">
            <p class="date">{{ news.date }}</p>
            <router-link :to="`/news_center/${news.id}`">{{ news.title }}</router-link>
            <p class="desc">{{ news.desc }}</p>
        </div>
    </section>
    <section v-else class="news unnormal">
        <div class="time">
            <div class="day">{{ day }}</div>
            <div class="date">{{ date }}</div>
        </div>
        <div class="info">
            <router-link :to="`/news_center/${news.id}`">{{ news.title }}</router-link>
            <p class="desc">{{ news.desc }}</p>
        </div>
    </section>
</template>

<script setup lang='ts'>
import { defineProps, PropType, ref } from 'vue';
const { news, normal } = defineProps({
    news: {
        type: Object as PropType<News>,
        required: true
    },
    normal: {
        type: Boolean,
        default: true,
    }
});
const day = ref(news.date.split('-')[2]);
const date = ref(news.date.slice(0, 6));



</script>

<style lang='scss' scoped>
.news {
    display: flex;
    width: 100%;
    text-align: left;
    .pic {
        flex: 1;
        width: 100%;
        height: 100px;
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
    &.unnormal {
        .time {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            .day {
                font-size: 32px;
                color: #b0b0b0;
            }
            .date {
                font-size: 14px;
                color: #b0b0b0;
            }
        }
        .info{
            .desc{
                font-size: 14px;
            }
        }
    }
    .info {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        margin-left: 10px;
        flex: 3;
        p,
        a {
            margin: 0;
            margin-top: 5px;
        }
        .date {
            font-size: 16px;
            color: #999;
        }
        a {
            font-size: 20px;
            color: #333;
            display: block;
            font-weight: bold;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
            text-decoration: none;
        }
        .desc {
            font-size: 16px;
            color: #666;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
        }
    }
}
</style>
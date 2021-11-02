<template>
  <ul v-if="asideNews.length" class="bar">
    <li class="news" v-for="(news,index) in asideNews" :key="news.id">
      <news :news="news"></news>
    </li>
  </ul>
  <el-empty v-else description="数据为空"></el-empty>
</template>

<script setup lang='ts'>
import News from '@/components/News.vue'
import { defineProps,PropType } from 'vue';
const props = defineProps({
  asideNews:{
    type:Array as PropType<News[]>,
    required:true
  }
})
</script>

<style lang='scss' scoped>
.bar {
  display: flex;
  flex-direction: column;
  list-style: none;
  margin: 0;
  li.news {
    margin-bottom: 20px;
    padding-bottom: 20px;
    border-bottom: 1px solid #e5e5e5;
    &:last-child {
      border-bottom: none;
    }
  }
}
</style>
<template>
  <div></div>
</template>

<script setup lang='ts'>
import { onMounted, onUnmounted, ref, getCurrentInstance } from "vue";
import { useRouter } from "vue-router";
const time = ref(5);
const timer = ref();
const router = useRouter();
onMounted(() => {
  timer.value = setInterval(() => {
    time.value--;
  }, 1000);

  const { $message } = getCurrentInstance()?.appContext.config.globalProperties!;

  $message?.warning({
    message: `${time.value}秒后返回首页...`,
    duration: 5000,
    onClose: () => {
      router.push('/');
    }
  });
});
onUnmounted(() => {
  clearInterval(timer.value);
})
</script>

<style lang='scss' scoped>
div {
  width: 100vw;
  height: 100vh;
  background: url("../assets/404.png");
}
</style>
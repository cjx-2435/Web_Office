<template>
  <el-config-provider :locale="lang">
    <router-view />
    <el-backtop />
  </el-config-provider>
</template>

<script setup lang="ts">
import lang from 'element-plus/lib/locale/lang/zh-cn';


</script>

<style lang="scss">
@media screen and(min-width:1056px ) and (max-width: 1920px) {
  #app {
    width: 1920px;
  }
}
html {
  overflow-x: hidden;
  overflow-y: auto;
}

#app {
  font-family: "微软雅黑", arial;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
}

body {
  padding: 0;
  margin: 0;
  height: 100%;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

<template>
    <div class="_container wow animate__animated animate__fadeInDown">
        <div class="logo">
            <router-link to="/">
                <img src="@/assets/logo.png" alt="logo" title="logo" />
            </router-link>
        </div>
        <div class="bar">
            <div class="nav_bar" v-for="(nav,index) in data" :key="nav.text">
                <router-link
                    :class="useRoute().fullPath === nav.to ? 'active' : ''"
                    :to="nav.to"
                >{{ nav.text }}</router-link>
                <ul class="sub_nav">
                    <li v-for="(item,i) in nav.subNav" :key="item.text">{{ item.text }}</li>
                </ul>
            </div>
            <div class="search" v-if="hasSearch">
                <el-input
                    @keypress.enter="toSearch"
                    :class="isActive ? 'active' : 'inactive'"
                    type="text"
                    v-model="value"
                >
                    <template #suffix>
                        <search
                            @click="toSearch"
                            :color="isActive ? '' : '#fff'"
                            style="position: absolute; top: 5px;left: -35px;cursor: pointer; width: 30px; height: 30px;"
                        />
                    </template>
                </el-input>
            </div>
            <el-dropdown @command="handleCommand" trigger="click">
                <expand style="cursor: pointer; width: 30px; height: 30px;" />
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item
                            v-for="(nav,index) in data"
                            :key="nav.text"
                            :command="nav.to"
                        >{{ nav.text }}</el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
        </div>
    </div>
</template>

<script setup lang='ts'>
import router from "@/router";
import { defineProps, PropType, ref, onMounted, nextTick } from "vue";
import { useRoute } from 'vue-router'

// data
const value = ref('');
const isActive = ref(false);

// props
const { data } = defineProps({
    data: {
        type: Array as PropType<Nav[]>,
    },
    hasSearch: {
        type: Boolean,
        default: true,
    }
})

onMounted(() => {
    // 动画完成后清除动画状态
    document.querySelector('._container')?.addEventListener('animationend', function (e: Event) {
        (e.target as HTMLElement).classList.remove('animate__animated');
    });
})

// 方法
function toSearch() {
    if (isActive.value && value.value.trim().length != 0) {
        console.log(`搜索:${value.value}`);
    } else {
        isActive.value = !isActive.value;
    }
}
function handleCommand(path: string) {
    router.push(path);
}

</script>

<style lang='scss'>
$height: 80px;

.sub_nav {
    overflow: hidden;
    position: absolute;
    z-index: 2;
    top: $height;
    left: 0;
    max-height: 0;
    list-style: none;
    width: 100%;
    margin: 0;
    padding: 0;
    background-color: #18469d;
    cursor: pointer;
    transition: max-height 0.8s;
    li {
        width: 100%;
        height: 36px;
        line-height: 36px;
        color: #fff;
        &:hover {
            background-color: #e05b28;
        }
    }
}
.nav_bar:hover {
    .sub_nav {
        max-height: 1000px;
    }
}
div._container {
    overflow: hidden;
    user-select: none;
    height: $height;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 2%;
    .logo {
        height: 55px;
        a {
            img {
                height: 100%;
            }
        }
    }
    .bar {
        display: flex;
        font-size: 16px;
        height: 100%;
        .el-dropdown {
            display: none;
            align-items: center;
        }
        a {
            display: block;
            color: #333;
            text-decoration: none;
            &:hover,
            &.active {
                color: #18469d;
                font-weight: bold;
            }
        }
        .nav_bar,
        .search {
            padding: 0 25px;
            line-height: $height;
        }
        .nav_bar {
            position: relative;
        }
        .search {
            input {
                position: relative;
                transition: all 0.5s;
                height: 40px;
            }
            .inactive {
                input {
                    width: 40px;
                    background-color: #409eff;
                }
            }
            .active {
                input {
                    width: 200px;
                }
            }
        }
    }
}

@media screen and (max-width: 1056px) {
    .nav_bar {
        display: none;
    }
    ._container .bar .el-dropdown {
        display: flex !important ;
    }
}
</style>
<template>
    <div class="copyright">
        <div class="header">
            <div class="left">
                <div class="logo">
                    <img :src="require('@/assets/logo_white.png')" />
                </div>
                <div class="nav">
                    <div v-for="(nav,index) in navs" :key="index">
                        <router-link :to="nav.to">{{ nav.text }}</router-link>
                    </div>
                </div>
            </div>
            <div class="right">
                <div class="tel">
                    <svg
                        t="1635488395753"
                        class="icon"
                        viewBox="0 0 1026 1024"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        p-id="5551"
                        width="32"
                        height="32"
                    >
                        <path
                            d="M704.512 387.072q21.504 25.6 46.08 52.224 20.48 23.552 45.568 52.224t51.712 58.368q33.792 38.912 55.808 69.632t34.816 56.32 17.408 47.104 4.608 43.008l0 66.56q0 30.72-10.24 55.296t-28.16 42.496-40.96 27.648-48.64 9.728l-631.808 0q-27.648 0-52.736-9.216t-44.032-26.112-30.208-40.448-11.264-53.248l0-78.848q0-24.576 4.608-47.104t16.896-47.104 33.792-52.736 54.272-61.952q26.624-28.672 54.784-57.856t50.688-52.736q26.624-27.648 51.2-53.248l375.808 0zM512 775.168q26.624 0 50.176-10.24t40.96-27.648 27.648-41.472 10.24-50.688-10.24-50.176-27.648-40.96-40.96-27.648-50.176-10.24-50.688 10.24-41.472 27.648-27.648 40.96-10.24 50.176 10.24 50.688 27.648 41.472 41.472 27.648 50.688 10.24zM1025.024 263.168l0 64.512q0 26.624-18.944 45.056t-45.568 18.432l-128 0q-26.624 0-45.056-18.432t-18.432-45.056l0-64.512-513.024 0 0 64.512q0 26.624-18.432 45.056t-45.056 18.432l-128 0q-26.624 0-45.568-18.432t-18.944-45.056l0-64.512 0-2.048q0-12.288 6.144-20.992t15.36-15.872 20.48-12.8 22.528-12.8q11.264-6.144 50.688-27.136t99.328-43.52 136.192-39.936 162.304-17.408q98.304 0 175.616 17.408t134.144 39.936 91.136 43.52 46.592 27.136q12.288 7.168 23.552 12.8t20.48 12.8 14.848 15.872 5.632 20.992l0 2.048z"
                            p-id="5552"
                            fill="#ffffff"
                        />
                    </svg>
                    <span>0001-0001-0001-0001</span>
                </div>
                <div class="address">
                    <svg
                        t="1635491202299"
                        class="icon"
                        viewBox="0 0 1024 1024"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        p-id="7305"
                        width="32"
                        height="32"
                    >
                        <path
                            d="M511.449009 213.858462a179.278769 179.278769 0 1 1 0 358.557538 179.278769 179.278769 0 0 1 0-358.557538z m393.294769 179.357538A393.294769 393.294769 0 1 0 182.036086 608.098462l294.203077 392.270769a39.384615 39.384615 0 0 0 70.498462 0l294.754461-392.270769c39.699692-61.912615 63.251692-135.483077 63.251692-214.882462z"
                            p-id="7306"
                            fill="#ffffff"
                        />
                    </svg>
                    <span>浙江省台州市路桥区财富大道890号桐屿街道创业创新园 3号楼303号</span>
                </div>
            </div>
        </div>
        <div class="footer">Copyright @ 2020-2021 浙江智谱实业集团有限公司 All Rights Reserved. 浙ICP备2020037809号</div>
    </div>
</template>

<script setup lang='ts'>
import { defineProps, PropType } from "vue";
const { navs } = defineProps({
    navs: {
        type: Array as PropType<Nav[]>,
        default: []
    },
});
</script>

<style lang='scss' scoped>
.copyright {
    .header {
        display: flex;
        color: #fff;
        & > div {
            display: flex;
            flex: 1;
        }
        .left {
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
            text-align: left;
            height: 160px;
            color: #c7c7c7;
            .logo {
                height: 80px;
                img {
                    height: 100%;
                }
            }
            .nav {
                display: flex;
                margin-top: 20px;
                & > div {
                    a {
                        text-decoration: none;
                        color: #c7c7c7;
                    }

                    &::after {
                        content: " | ";
                        display: inline-block;
                        margin: 0 10px;
                    }
                    &:last-child::after {
                        content: "";
                    }
                }
            }
        }
        .right {
            flex-direction: column;
            justify-content: center;
            align-items: flex-end;
            span {
                margin-left: 10px;
                vertical-align: super;
            }
        }
    }
    .footer {
        height: 50px;
        line-height: 50px;
        font-size: 18px;
        color: #c7c7c7;
    }
}

@media screen and(max-width:1446px) {
    .header {
        flex-direction: column;
        .left {
            align-items: center !important;
            .nav {
                display: none !important;
            }
        }
        .right {
            align-items: center !important;
        }
    }
}
</style>
<template>
    <main>
        <title-custom :title="'智谱实业集团'">
            <div class="box">
                <aside class="wow animate__animated animate__fadeInLeft">
                    <img :src="require('@/assets/banners/1.jpg')" />
                </aside>
                <article class="wow animate__animated animate__fadeInRight">
                    浙江智谱实业集团有限公司简介
                    浙江智谱实业集团有限公司，坐落于台州市路桥区财富大道890号，是一家以光谱技术为核心，以高端粮食机械产业为重点，面向涉及粮食、农业、食品、医药、饲料等行业领域的高端智能制造、电子信息、仪器仪表等战略新兴产业进行投资运营多元化发展的集团公司，拥有丰富的投资与综合运营管理经验。
                    目前，智谱旗下拥有浙江创谱科技有限公司、浙江伯利恒仪器设备有限公司、长春长光思博光谱技术有限公司、浙江麦根科技有限公司、浙江恩谱生物有限公司、浙江镭众科技有限公司、浙江盛捷包装科技有限公司、浙江光谱孵化器有限公司等不同经营范围的子公司，业务范围覆盖海内外。
                    旗下子公司大部分是台州500精英企业，国家高新技术企业，台州市院士工作站，拥有近红外光谱、近红外热成像测温、信息软件算法等核心技术，并与中国科学院长春光机所、河南工业大学、南京财经大学、国家粮食储备局武汉科学研究设计院、台州职业技术学院、浙江农林大学等进行紧密合作，坚持站在科技发展的最前沿、以强大的研发能力构筑核心竞争力，结合市场需求，不断创新及研发新的产品。
                    未来，我们将不断提升核心竞争力，共同发展与繁荣！构筑员工、股东、社会的良性发展关系，为社会创造价值并承担起相应的社会责任，实现企业永续经营！
                </article>
            </div>
        </title-custom>

        <title-custom :title="'董事长致辞'">
            <div class="box">
                <aside class="wow animate__animated animate__fadeInLeft">
                    <img :src="require('@/assets/banners/1.jpg')" />
                </aside>
                <article class="wow animate__animated animate__fadeInRight">
                    我们由衷地感谢给予智谱集团支持与关怀的社会各界朋友！自公司建立伊始，智谱集团整合与优化公司资源，一直积极投入近红外成分分析领域，致力于打造创新型绿色可持续发展的产业链。我们也因此得到了政府、社会各界及国内外同业与合作伙伴的支持和认可，实现了企业价值和社会发展的双赢，在一定程度上推动了我国食品安全事业的发展。
                    智谱集团及其旗下子公司，一直致力于推动粮食安全进程，粮食检测行业良性发展，创新商业模式，优化企业运营机制，实行流域化和区域化的管理，建立符合市场规律的价值模型。从而在日益开放与规范的市场竞争中，努力开拓市场，以卓越的发展业绩、资源优势和进取精神而立于行业潮头。
                    我们执着，我们追求。智谱集团将以孜孜不倦的创新精神开启事业新的征程。迎着太阳的光辉，我们在行进的道路上以“不干则已，干就一流；追求完美，永不停步”的企业精神登高望远，恪守“学习、成长、感恩、共享”的企业核心价值观，创造外部人脉和谐与内部管控严格的企业环境，为公司的前行提供不竭的正能量。
                    在服务上，我们将不断完善内部管理系统，将各方面的服务做到最好。请相信，智谱集团不仅是各位朋友首选的合作伙伴，更是您永远最可信赖的朋友!
                </article>
            </div>
        </title-custom>
    </main>
</template>

<script setup lang='ts'>
import TitleCustom from "@/components/TitleCustom.vue";
import { ref, Ref } from "vue";
const tag: Ref<Tag> = ref({
    zh_title: '关于我们',
    en_title: 'About Us'
})
</script>

<style lang='scss' scoped>
main {
    margin: 20px auto;
    width: 1200px;

    .box {
        display: flex;
        aside {
            flex: 1;
            margin-right: 20px;
            img {
                width: 100%;
                height: 100%;
            }
        }
        article {
            flex: 2;
            text-indent: 2em;
            text-align: left;
        }
    }
}
@media screen and(min-width:1056px) and (max-width:1400px) {
    main {
        margin: 20px 100px;
        width: auto;
    }
}
@media screen and(max-width:1056px) {
    main {
        margin: 20px 0;
        width: auto;
        aside {
            display: none;
        }
    }
}
</style>
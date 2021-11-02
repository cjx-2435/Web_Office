<template>
    <main>
        <h1 class="wow animate__animated animate__fadeIn">欢迎投递简历</h1>
        <article>
            <el-card class="wow animate__animated animate__fadeInTopLeft">
                <template #header>
                    <h2>Java初级开发工程师</h2>
                </template>
                <pre>
工作内容：
配合Java高级工程师指定项目。
语言要求：熟悉java
技术要求：
熟悉数据库；熟悉Linux操作系统。
            </pre>
            </el-card>

            <el-card class="wow animate__animated animate__fadeInDown">
                <template #header>
                    <h2>Java高级开发工程师</h2>
                </template>
                <pre>
工作内容：
1、配合外包公司承接公司商城项目；
2、公司自有设备的服务端开发；
3、公司云服务端开发。

语言要求：熟悉java

技术要求：
熟悉Spring cloud + Spring cloud alibbaba 重要组件，
熟悉redis，postgresql,mysql，
熟悉分布式架构，nginx + springGeteway + 微服务治理（nacos）
熟悉docker部署
            </pre>
            </el-card>

            <el-card class="wow animate__animated animate__fadeInTopRight">
                <template #header>
                    <h2>运维工程师</h2>
                </template>
                <pre>
岗位内容：
1.负责公司已上线系统的维护工作。
2.负责软件、数据库、网络等部分的维护工作，并在以后业务及公司
规模拓展时为其他人员提供相关培训；
3.能够正确理解业务需求，并根据业务需求实现系统配置。；
4.保证软件系统长期稳定运行，规避各方面可能存在的风险，在出现
问题时能快速解决；
5.负责将日常工作中遇到的相关问题进行总结，形成文档，并且备份，
方便后期维护工作；
6.完成领导交办的其他工作。

岗位要求：
1、专科及以上学历，计算机相关专业背景；
2、两年以上ERP维护或实施经验；
3、了解ERP原理，熟悉制造企业流程；
4、熟练掌握sql语句，有Sqlserver、Oracle数据库维护经验；
            </pre>
            </el-card>

            <el-card class="wow animate__animated animate__fadeInBottomLeft">
                <template #header>
                    <h2>软件测试</h2>
                </template>
                <pre>
1、配合研发工程师对言语处理器/视频处理器等DSP软件更新后的功
能进行测试；配合测试主管完成测试方案以及测试用例的编写；能够
独立执行测试用例，整理上报缺陷
2、配合研发工程师对言语处理器/视频处理器等系统配套使用的附件，
包括遥控器、电池仓、手机软件的功能进行测试

岗位要求
本科学历，电子类，通信工程类相关专业，工作积极主动，责任心强
，良好的团队合作精神
            </pre>
            </el-card>

            <el-card class="wow animate__animated animate__fadeInUp">
                <template #header>
                    <h2>运维工程师</h2>
                </template>
                <pre>
岗位内容：
1.负责公司已上线系统的维护工作。
2.负责软件、数据库、网络等部分的维护工作，并在以后业务及公司
规模拓展时为其他人员提供相关培训；
3.能够正确理解业务需求，并根据业务需求实现系统配置。；
4.保证软件系统长期稳定运行，规避各方面可能存在的风险，在出现
问题时能快速解决；
5.负责将日常工作中遇到的相关问题进行总结，形成文档，并且备份，
方便后期维护工作；
6.完成领导交办的其他工作。

岗位要求：
1、专科及以上学历，计算机相关专业背景；
2、两年以上ERP维护或实施经验；
3、了解ERP原理，熟悉制造企业流程；
4、熟练掌握sql语句，有Sqlserver、Oracle数据库维护经验；
            </pre>
            </el-card>

            <el-card class="wow animate__animated animate__fadeInBottomRight">
                <template #header>
                    <h2>UI设计师</h2>
                </template>
                <pre>
岗位职责：
1、负责app产品的策划、设计、管理；
2、负责app创新和预研，完成app的用户需求定义、产品功能/UI/交
互的设计；
3、负责制定项目开发计划并跟踪进度，确保项目如期完成；
4、负责项目资源的协调与组织，确保项目团队各关系人协同工作。

岗位要求：
1、有丰富的app类产品设计经验，2年以上产品工作经验；
2、对设计敏感，熟悉交互设计，至少精通一项交互视觉设计软件；
3、较高的审美水平，对色彩、空间感觉良好、熟悉APP设计，有优秀
的创意能力；
4、精通常用的UI设计相关工具，能设计整个项目的界面与风格；
5、具有较好的沟通能力、项目管理能力，能够协同多个部门执行开发
、负责项目的时间点；
6、热爱互联网产品工作，对最新的APP产品感兴趣；
7、面试请提供相关作品案例。
            </pre>
            </el-card>
        </article>
    </main>
</template>

<script setup lang='ts'>
import { onMounted,nextTick } from "vue";
//@ts-ignore
import { WOW } from "wowjs";
onMounted(() => {
  nextTick(() => {
    new WOW({
      live: false,
    }).init()
  })
})
</script>

<style lang='scss'>
article {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    .el-card {
        margin: 20px;
        width: 570px;
        h2 {
            margin: 0;
        }
        pre {
            font-size: 18px;
            text-align: left;
        }
    }
}
</style>
<template>
    <div class="login">
        <!-- 放置一个卡片组件 -->
        <el-card class="login-card">123</el-card>
    </div>
</template>

<script>
export default {
}
</script>
<style lang="less" scoped>
// 写上scoped属性 那么只会对 当前的组件样式产生作用 原理 是 为当前的标签生成了 data-v-随机
// 100vh相当于当前可视区域的100%高度
.login {
    background-image: url(../../assets/img/login_bg.jpg);
    background-size: cover;//自适应背景图片
    height: 100vh;
    display: flex;
    justify-content: center;//左右居中
    align-items: center;//垂直居中
    .login-card {
        width: 440px;
        height: 350px;
    }
}
</style>

<template>
  <header>
    <div class="l-content">
      <!-- 左边按钮 -->
      <el-button type="plain" icon="el-icon-menu" size="mini" @click="collapseMenu"></el-button>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <!-- current是通过计算属性得到的，内容是个对象 -->
        <el-breadcrumb-item :to="current.path" v-if="current">
          {{ current.label }}
          <!-- 把:to="current.path"写在上面就不用再写router-link了 -->
          <!-- <router-link :to="current.path">{{ current.label }}</router-link> -->
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>

    <div class="r-content">
      <el-dropdown trigger="click" size="small">
        <span class="el-dropdown-link">
          <!-- 用户头像 -->
          <img :src="userImg" class="user" />
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item icon="el-icon-user">个人中心</el-dropdown-item>
          <el-dropdown-item icon="el-icon-orange">退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </header>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'CommonHeader.vue',
  data() {
    return {
      // 要让图片的路径以模块的形式加载的话就用require引入
      userImg: require('../assets/images/user.jpg'),
    }
  },
  methods: {
    collapseMenu() {
      this.$store.commit('collapseMenu')
    }
  },
  computed: {
    // 展示存放在vuex中的面包屑数据
    ...mapState({
      current: (state) => state.tab.currentMenu,
    }),
  },
}
</script>

<style scoped>
header {
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: space-between;
}

.l-content {
  display: flex;
  align-items: center;
}
.l-content .el-button {
  margin-right: 20px;
}

.r-content .user {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  margin-top: 5px;
}
</style>

<style>
.el-breadcrumb__item .el-breadcrumb__inner {
  color: #f4f4f4;
}

.el-breadcrumb__item:last-child .el-breadcrumb__inner {
  color: #ffd04b;
  font-weight: 700;
}
.el-breadcrumb__inner a:hover,
.el-breadcrumb__inner.is-link:hover {
  font-weight: 700 !important;
  color: #409eff !important;
  cursor: pointer !important;
}
</style>
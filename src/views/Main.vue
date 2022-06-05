<template>
  <el-container style="height: 100%">
    <el-aside width="auto"><common-aside></common-aside></el-aside>
    <el-container>
      <el-header><common-header></common-header></el-header>
      <common-tab></common-tab>
      <el-main>
        <!-- 子路由的出口 -->
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import CommonAside from '@/components/CommonAside'
import CommonHeader from '../components/CommonHeader.vue'
import CommonTab from '@/components/CommonTab'
export default {
  name: 'Main',
  components: {
    CommonAside,
    CommonHeader,
    CommonTab,
  },
}
</script>

<style scoped>
.el-header {
  background-color: #333;
}
</style>
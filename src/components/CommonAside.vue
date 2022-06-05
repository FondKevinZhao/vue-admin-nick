<template>
  <el-menu
    default-active="2"
    class="el-menu-vertical-demo"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
    :collapse="isCollapse"
  >
    <el-menu-item
      :index="item.path"
      v-for="item in noChildren"
      :key="item.path"
      @click="clickMenu(item)"
    >
      <!-- 拼接icon名字 -->
      <i :class="'el-icon-' + item.icon"></i>
      <span slot="title">{{ item.label }}</span>
    </el-menu-item>

    <el-submenu
      :index="item.path + ''"
      v-for="item in hasChildren"
      :key="item.label"
    >
      <template slot="title">
        <i class="el-icon-setting"></i>
        <span>{{ item.label }}</span>
      </template>
      <el-menu-item-group>
        <el-menu-item
          :index="subItem.path"
          v-for="subItem in item.children"
          :key="subItem.label"
          @click="clickMenu"
        >
          <i :class="`el-icon-${subItem.icon}`"></i>
          {{ subItem.label }}
        </el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>

<script>
export default {
  data() {
    return {
      // 根据路由动态显示侧边栏的内容
      asideMenu: [
        {
          path: '/',
          name: 'home',
          label: '首页',
          icon: 's-home',
        },
        {
          path: '/video',
          name: 'video',
          label: '视频管理页',
          icon: 'video-play',
        },
        {
          path: '/user',
          name: 'user',
          label: '用户管理页',
          icon: 'user',
        },
        // 定义子级菜单，外面的path可以省略
        {
          label: '其他',
          icon: 'user',
          children: [
            {
              path: '/page1',
              name: 'page1',
              label: '页面1',
              icon: 'chicken',
            },
            {
              path: '/page2',
              page: 'page2',
              label: '页面2',
              icon: 'fork-spoon',
            },
          ],
        },
      ],
    }
  },
  computed: {
    // 计算侧边栏是否有子菜单
    noChildren() {
      return this.asideMenu.filter((item) => !item.children)
    },
    hasChildren() {
      return this.asideMenu.filter((item) => item.children)
    },
    isCollapse() {
      return this.$store.state.tab.isCollapse
    },
  },
  methods: {
    clickMenu(item) {
      // 先跳转
      this.$router.push({ name: item.name })
      // 然后存入vuex中
      this.$store.commit('selectMenu', item)
    },
  },
}
</script>

<style scoped>
.el-menu {
  height: 100%; /* 占满屏幕高度 */
  border: none;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
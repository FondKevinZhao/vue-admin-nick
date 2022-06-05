// tab栏内容
export default {
  state: {
    isCollapse: false, // 是否折叠侧边栏
    menu: [], // 全部菜单
    currentMenu: null, // 当前点击的菜单
    tabsList: [
      {
        path: '/',
        name: 'home',
        label: '首页',
        icon: 's-home',
      }
    ], // tabsList装的是可删除的标签，默认值是首页
  },
  mutations: {
    selectMenu(state, val) {
      // 传递过来的这个值给到当前点击的菜单
      // 通过过滤，防止点击出现两个首页的情况
      if (val.name !== 'home') {
        state.currentMenu = val;
        let result = state.tabsList.findIndex(item => item.name === val.name);
        // 给tabs标签去重，如果标签在tabs中有了就不加进来了，没有才加进来
        result === -1 ? state.tabsList.push(val) : '';
      } else {
        state.currentMenu = null;
      }
    },
    closeTab(state, val) {
      // 找到要删除的tab的索引，进行删除
      let result = state.tabsList.findIndex(item => item.name === val.name);
      state.tabsList.splice(result, 1);
    },
    // 处理是否展开侧边栏
    collapseMenu(state) {
      state.isCollapse = !state.isCollapse;
    }
  },
  actions: {

  }
}
<template>
  <div class="tabs">
    <!-- 这个数据是从vuex中获取的 -->
    <!-- effect: 激活时显示和非激活时显示 -->
    <el-tag
      :key="tag.name"
      size="small"
      v-for="tag in tags"
      :closable="tag.name !== 'home'"
      :disable-transitions="false"
      @close="handleClose(tag)"
      @click="changeMenu(tag)"
      :effect="$route.name === tag.name ? 'dark' : 'plain'"
    >
      {{ tag.label }}
    </el-tag>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
export default {
  data() {
    return {
      dynamicTags: ['标签一', '标签二', '标签三'],
      inputVisible: false,
      inputValue: '',
    }
  },
  methods: {
    ...mapMutations({
      // close: 'closeTab' 相当于 close: this.$store.commit('closeTab');
      close: 'closeTab',
    }),
    handleClose(tag) {
      this.close(tag)
    },
    changeMenu(item) {
      this.$router.push({name: item.name});
      this.$store.commit('selectMenu', item);
    }
  },
  computed: {
    ...mapState({
      tags: (state) => state.tab.tabsList,
    }),
  },
}
</script>

<style scoped>
.tabs {
  padding: 20px;
}

.el-tag {
  margin-right: 15px;
  cursor: pointer;
}
</style>
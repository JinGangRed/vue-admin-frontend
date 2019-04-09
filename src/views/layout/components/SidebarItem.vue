<template>
  <el-submenu :index="resolvePath(item.path)">
    <template slot="title">
      <i v-if="item.meta && item.meta.icon" :class="item.meta.icon"></i>
      <span>{{item.meta.title}}</span>
    </template>
    <el-menu-item
      v-for="child in item.children"
      :key="child.path"
      :index="child.Path"
      :route="child.path"
    >{{child.text}}</el-menu-item>
  </el-submenu>
</template>

<script>
import path from "path";
export default {
  name: "SidebarItem",
  props: {
    item: {
      type: Object,
      required: true
    },
    basePath: {
      type: String,
      default: ""
    }
  },
  data() {
    return {};
  },

  components: {},

  computed: {},

  beforeMount() {},

  mounted() {},

  methods: {
    resolvePath(routePath) {
      return routePath;
      //   if (isExternal(routePath)) {
      //     return routePath;
      //   }
      //   return path.resolve(this.basePath, routePath);
    }
  },

  watch: {}
};
</script>
<style lang='' scoped>
</style>
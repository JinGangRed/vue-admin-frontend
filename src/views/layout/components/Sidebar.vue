<template>
  <el-scrollbar wrap-class="scrollbar-wrapper">
    <el-menu
      mode="vertical"
      background-color="#21A179"
      text-color="#ffffff"
      active-text-color="#b2b2b2"
      :collapse="collapse"
    >
      <!-- <sidebar-item v-for="menu in paths" :key="menu.path" :index="menu.text" :item="menu"></sidebar-item> -->
      <template v-if="menusList">
        <template v-for="(path,index) in menusList">
          <template v-if="path.children && path.children.length>0">
            <el-submenu :key="index" index="1">
              <template slot="title">
                <i v-if="path.icon" :class="path.icon"></i>
                <span>{{path.title}}</span>
              </template>
              <el-menu-item
                v-for="(child,i) in path.children"
                :key="i"
                :route="child.path"
              >{{child.text}}</el-menu-item>
            </el-submenu>
          </template>
          <template v-else>
            <el-menu-item :key="index">
              <span slot="title">{{path.text}}</span>
            </el-menu-item>
          </template>
        </template>
      </template>
    </el-menu>
  </el-scrollbar>
</template>

<script>
import SidebarItem from "./SidebarItem.vue";
import variables from "@/styles/variables.less";
import { menus } from "@/services/menu/menu.ts";
export default {
  name: "",
  data() {
    return {
      default_active: "1",
      collapse: false,
      menusList: null
    };
  },
  created() {
    this.getMenus();
  },
  components: {
    SidebarItem
  },

  computed: {
    variables() {
      console.log(variables);
      return variables;
    }
  },

  beforeMount() {},

  mounted() {},

  methods: {
    getMenus() {
      menus().then(response => {
        this.menusList = response.data;
      });
    }
  },

  watch: {}
};
</script>
<style lang='' scoped>
</style>
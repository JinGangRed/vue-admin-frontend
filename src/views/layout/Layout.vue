<template>
  <div class="border">
    <sidebar class="sidebar-container"></sidebar>
    <div class="main-container">
      <navbar class="navbar-container"></navbar>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { Sidebar, Navbar } from "./components";
export default {
  name: "",
  props: [""],
  data() {
    return {};
  },

  components: {
    Sidebar,
    Navbar
  },

  computed: {},

  beforeMount() {},

  mounted() {},

  methods: {},

  watch: {}
};
</script>
<style lang='less' scoped>
</style>
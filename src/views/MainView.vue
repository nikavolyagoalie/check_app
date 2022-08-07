<template>
  <div class="app">
      <sidebar></sidebar>
      <main-window></main-window>
    </div>
</template>

<script>
import Sidebar from "@/components/Sidebar.vue";
import MainWindow from "@/components/MainWindow.vue";

export default {
  name: "main-view",
  components: {
    Sidebar,
    MainWindow,
  },
};
</script>

<style scoped>
.app {
  display: flex;
  height: 100vh;
}

/* .page {
  width: 100%;
  height: 100vh;
  background-color: #F3F3F3;
} */
</style>
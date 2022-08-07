<template>
  <div class="sidebar">
    <div class="sidebar__toolbar">
      <div class="sidebar__logo">My Check</div>
      <ul class="sidebar__links">
        <router-link 
        v-for="(item, idx) in links"
        :key="idx"
        :to="item.url"
        tag="li"
        :exact="item.exact"
        active-class="active"
        >{{ item.title }}
        </router-link>
      </ul>
      <div class="sidebar__feedback">Обратная связь</div>
    </div>
    <div class="sidebar__container"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      links: [
        { title: "Проверки", url: "/checks", exact: true },
        { title: "Шаблоны задач", url: "/templates" },
        { title: "Проверяющие", url: "/checkers" },
        { title: "Сотрудники", url: "/employers" },
        { title: "Статистика", url: "/statistics" },
      ],
    };
  },
};
</script>

<style scoped>
.sidebar {
  background-color: #f3f3f3;
}

.sidebar__links {
    display: flex;
    flex-direction: column;
}

.active {
    background-color: #E8E8E8;
}
</style>
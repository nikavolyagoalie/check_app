<template>
  <modal-base>
    <div class="modal__content">
      <p>День проверки: {{  }}</p>
      <form class="modal__form">
        <my-select
          :model-value="selectedType"
          @update:model-value="setTypes"
          :options="types"
        />
        <my-select
          :model-value="selectedTask"
          @update:model-value="setTasks"
          :options="tasks"
        />
        <my-select
          :model-value="selectedChecker"
          @update:model-value="setCheckers"
          :options="checkers"
        />
      </form>
      <div class="modal__btns">
        <button @click="cancelAdd">Отмена</button>
        <button @click="addObject" :disabled="disabled">Добавить объект</button>
      </div>
    </div>
  </modal-base>
</template>

<script>
import ModalBase from "@/components/UI/ModalBase.vue";
import MySelect from "@/components/UI/MySelect.vue";
import { mapActions, mapMutations, mapGetters, mapState } from "vuex";

export default {
  components: {
    ModalBase,
    MySelect,
  },
  props: {

  },
  methods: {
    cancelAdd() {
      this.$emit("close");
    },

    ...mapActions("newCheck", ["addObject"]),

    ...mapMutations("newCheck", [
      "setTypes",
      "setTasks",
      "setCheckers",
    ]),
  },
  computed: {
    ...mapGetters("newCheck", [
      "selectedType", "selectedTask", "selectedChecker", "types", "tasks", "checkers"
    ]),

    disabled() {
      if (this.selectedType && this.selectedChecker && this.selectedTask) {
        return false
      }
      return true
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
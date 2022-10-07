<template>
  <modal-base>
    <div class="modal__content">
      <form class="modal__form">
        <label>
          Название
          <my-input
            type="text"
            :model-value="nameObj"
            @update:model-value="setNameObj"
          />
        </label>
        <my-select
          :model-value="selectedCity"
          @update:model-value="setSelectedCity"
          :options="cities"
        />
        <label>
          Адрес
          <my-input
            type="text"
            :model-value="addressObj"
            @update:model-value="setAddressObj"
          />
        </label>
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
import MyInput from "@/components/UI/MyInput.vue";
import { mapActions, mapMutations, mapGetters, mapState } from "vuex";

export default {
  components: {
    ModalBase,
    MySelect,
    MyInput,
  },
  methods: {
    cancelAdd() {
      this.$emit("close");
    },

    ...mapActions("newObj", ["addObject"]),

    ...mapMutations("newObj", [
      "setNameObj",
      "setAddressObj",
      "setSelectedCity",
    ]),
  },
  computed: {
    ...mapGetters("newObj", [
      "nameObj",
      "addressObj",
      "selectedCity",
      "cities",
    ]),

    disabled() {
      if (this.nameObj && this.addressObj && this.selectedCity) {
        return false
      }
      return true
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
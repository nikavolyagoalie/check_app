<template>
  <div>
    <button class="button" @click="addObj">Добавить</button>
    <modal-object-modal
      v-if="closeNewObjModal"
      @close="closeModal"
      :modalTitle="modalTitle"
    ></modal-object-modal>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

import ModalObjectModal from "@/components/ModalNewObject.vue";

export default {
  name: "checks-view",
  components: {
    ModalObjectModal,
  },
  data() {
    return {
      modalTitle: "Новый объект",
    };
  },
  methods: {
    ...mapActions('newObj', ['addObj', 'closeModal']),
  },
  computed: {
    ...mapState({
      closeNewObjModal: state => state.newObj.closeNewObjModal,
      nameObj: state => state.newObj.nameObj,
    }),
  }
};
</script>

<style>
</style>
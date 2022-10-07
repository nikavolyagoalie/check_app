<template>
  <div class="modal">
    <div class="modal__overlay"></div>
    <div class="modal__window">
      <div class="modal__header">
        <div class="modal__title">{{ modalTitle }}</div>
        <div class="modal__close" @click="$emit('close')">X</div>
      </div>
      <div class="modal__content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "modal-base",
  props: {
    modalTitle: {
      type: String,
      default: " ",
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
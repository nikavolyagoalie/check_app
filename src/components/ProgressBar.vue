<template>
  <div class="progress-bar">
    <div class="progress-bar__width" :style="{width: widthStyle}">

    </div>
  </div>
</template>

<script>
export default {
  props: {
    progress: { type: Number, required: true},
  },
  computed: {
    widthStyle() {
        return this.progress + '%'
    }
  }
};
</script>

<style lang="scss" scoped>
.progress-bar {
    width: 100%;
    border: 2px solid blue;
    height: 12px;

    &__width {
        height: 100%;
        background-color: orange;
    }
}
</style>
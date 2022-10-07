<template>
  <div>
    <header>
      <div class="back" @click="goBack" v-if="toCalendar">Back</div>
      <div class="title">{{ headerTitle }}</div>
    </header>
    <component :is="checksComponent"/>
    <component :is="!checksComponent"/>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

import ChecksCalendar from "@/views/ChecksCalendar.vue";
import ChecksAdd from "@/views/ChecksAdd.vue";

export default {
  name: "checks-view",
  components: {
    ChecksAdd,
    ChecksCalendar,
  },
  methods: {
    ...mapActions('newObj', ['goBack']),
  },
  computed: {
    ...mapState({
      toCalendar: state => state.newObj.toCalendar,
      nameObj: state => state.newObj.nameObj,
    }),
    
    checksComponent() {
      return this.toCalendar ? 'checks-calendar' : 'checks-add'
    },

    headerTitle() {
      if (this.toCalendar) {
        return this.nameObj
      } else {
        return 'Проверки'
      }
    }
  }
};
</script>

<style>
</style>
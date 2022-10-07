<template>
  <div class="calendar">
    <div class="calendar__item">
      <div class="calendar__day">{{ today[0] }} {{ today[1] }}</div>
      <div class="calendar__add_check" @click="createCheck">+ Добавить проверку</div>
    </div>
    <div class="calendar__item">
      <div class="calendar__day">{{ tomorrow[0] }} {{ tomorrow[1] }}</div>
      <div class="calendar__add_check" @click="createCheck">+ Добавить проверку</div>
    </div>
    <div class="calendar__item">
      <div class="calendar__day">{{ thirdDay[0] }} {{ thirdDay[1] }}</div>
      <div class="calendar__add_check" @click="createCheck">+ Добавить проверку</div>
    </div>
    <div class="calendar__item">
      <div class="calendar__day">{{ fourthDay[0] }} {{ fourthDay[1] }}</div>
      <div class="calendar__add_check" @click="createCheck">+ Добавить проверку</div>
    </div>
    <div class="calendar__item">
      <div class="calendar__day">{{ fivethDay[0] }} {{ fivethDay[1] }}</div>
      <div class="calendar__add_check" @click="createCheck(fivethDay[0], fivethDay[1])">+ Добавить проверку</div>
    </div>
    <modal-new-check
      v-if="openModal"
      @close="closeModal"
      :modalTitle="modalTitle"
    />
  </div>
</template>

<script>
import { mapActions, mapMutations, mapGetters, mapState } from "vuex";
import ModalNewCheck from "@/components/ModalNewCheck.vue";

export default {
  components: {
    ModalNewCheck,
  },
  data() {
    return {
      modalTitle: "Новая проверка",
      week: [
        "понедельник",
        "вторник",
        "среда",
        "четверг",
        "пятница",
        "суббота",
        "воскресенье",
      ],
      year: [
        "января",
        "февраля",
        "марта",
        "апреля",
        "мая",
        "июня",
        "июля",
        "августа",
        "сентября",
        "октября",
        "ноября",
        "декабря",
      ],
    };
  },

  methods: {
    ...mapActions('newCheck', ['createCheck', 'closeModal']),
  },

  computed: {
    ...mapState({
      openModal: state => state.newCheck.openModal,
    }),

    dayToday() {
      return new Date().getDate();
    },

    monthToday() {
      return new Date().getMonth();
    },

    yearToday() {
      return new Date().getFullYear();
    },

    msBeginDayToday() {
      return new Date(this.yearToday, this.monthToday, this.dayToday).getTime();
    },

    msNow() {
      return Date.now();
    },

    msBeginDayTomorrow() {
      return new Date(
        this.yearToday,
        this.monthToday,
        this.dayToday + 1
      ).getTime();
    },

    weekDayNum() {
      return new Date(this.yearToday, this.monthToday, this.dayToday).getDay();
    },

    today() {
      let date = `${this.dayToday} ${this.year[this.monthToday]}`;
      let day = this.week[this.weekDayNum - 1];
      return ["Сегодня", day];
    },

    tomorrow() {
      let date = `${this.dayToday + 1} ${this.year[this.monthToday]}`;
      let day = this.week[this.weekDayNum - 1 + 1];
      return ["Завтра", day];
    },

    thirdDay() {
      let date = `${this.dayToday + 2} ${this.year[this.monthToday]}`;
      let day = this.week[this.weekDayNum - 1 + 2];
      return [date, day];
    },

    fourthDay() {
      let date = `${this.dayToday + 3} ${this.year[this.monthToday]}`;
      let day = this.week[this.weekDayNum - 1 + 3];
      return [date, day];
    },
    fivethDay() {
      let date = `${this.dayToday + 4} ${this.year[this.monthToday]}`;
      let day = this.week[this.weekDayNum - 1 + 4];
      return [date, day];
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
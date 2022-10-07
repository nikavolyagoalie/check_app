<template>
  <div>
    <div class="page reset" v-if="!showSend">
      <form class="reset__form" @submit.prevent="handlerSubmit">
        <h2>Восстановление пароля</h2>
        <label>
          <input
            type="text"
            v-model.trim="email"
            @focus="notValidEmail = false"
          />
          <small v-if="notValidEmail">Email введен неверно</small>
        </label>
        <button type="submit" :disabled="isDisabled">Восстановить</button>
      </form>
      <p>
        <router-link to="/login">Вернуться на страницу авторизации</router-link>
      </p>
    </div>
    <div class="send" v-if="showSend">
        На почту {{ this.$store.state.emailSend }}
выслана ссылка для сброса пароля
<router-link to="/login">Закрыть</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "reset-password",
  data() {
    return {
      email: "",
      notValidEmail: false,
      showSend: false,
    };
  },
  methods: {
    handlerSubmit() {
      const user = {
        email: this.email,
      };

      this.showSend = true

      this.$store.dispatch("resetPassword", user);

      if (!this.emailValid) {
        this.notValidEmail = true;
      }
    },
  },
  computed: {
    emailValid() {
      if (
        this.email?.includes("@") &&
        this.email?.includes(".") &&
        this.email?.length > 5
      ) {
        return true;
      } else {
        return false;
      }
    },
    isDisabled() {
      if (this.email.length > 0) {
        return false;
      } else {
        return true;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
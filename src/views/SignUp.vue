<template>
  <div>
    <div class="page signup">
      <form class="signup__form" @submit.prevent="handlerSubmit">
        <h2>Регистрация</h2>
        <!-- <label>
      <input type="text" v-model="companyName" />
    </label> -->
        <label>
          <input type="text" v-model.trim="email" @focus="notValidEmail = false"/>
          <small v-if="notValidEmail">Email введен неверно</small>
        </label>
        <label>
          <input type="password" v-model.trim="password" @focus="notValidPassword = false"/>
          <small v-if="notValidPassword">Пароль должен иметь более 6 знаков</small>
        </label>
        <button type="submit" :disabled="isDisabled">Зарегистрироваться</button>
      </form>
    </div>
    <p>
      Уже есть аккаунт? Тогда 
      <router-link to="/login">войдите</router-link>
    </p>
  </div>
</template>

<script>
export default {
  name: "SignUp",
  data() {
    return {
      email: '',
      password: '',
      notValidEmail: false,
      notValidPassword: false,
    };
  },
  methods: {
    handlerSubmit() {
      const user = {
        email: this.email,
        password: this.password,
      };

      if (this.emailValid && this.passwordMatches) {
        this.$router.push("/checks");
      } 
      if (!this.emailValid) {
        this.notValidEmail = true
      }
      if (!this.passwordMatches) {
        this.notValidPassword = true
      }

      this.$store.dispatch('registerUser', user)
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
    passwordMatches() {
      if (this.password.length > 6) {
        return true;
      } else {
        return false;
      }
    },
    isDisabled() {
      if (this.password.length > 0 && this.email.length > 0) {
        return false
      } else {
        return true
      }
    }
  },
};
</script>

<style lang="scss" scoped>
</style>
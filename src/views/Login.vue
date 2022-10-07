<template>
  <div>
    {{ logIn }}
    <div class="page login">
      <button @click="vkLogin">Войти с VK</button>
      <form class="login__form" @submit.prevent="handlerSubmit">
        <h2>Вход</h2>
        <!-- <label>
      <input type="text" v-model="companyName"/>
    </label> -->
        <label>
          <input
            type="text"
            v-model.trim="email"
            @focus="notValidEmail = false"
          />
          <small v-if="notValidEmail">Email введен неверно</small>
        </label>
        <label>
          <input
            type="password"
            v-model.trim="password"
            @focus="notValidPassword = false"
          />
          <small v-if="notValidPassword"
            >Пароль должен иметь более 6 знаков</small
          >
        </label>
        <button type="submit" :disabled="isDisabled">Войти</button>
        <div v-if="notValidForm">Логин и/или пароль введены не верно</div>
      </form>
      <button @click="$router.push('/reset')">Забыли пароль?</button>
    </div>
    <p>
      Нет аккауна? Тогда
      <router-link to="/signup">зарегистрируйтесь</router-link>
    </p>
  </div>
</template>

<script>

export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
      notValidForm: false,
      notValidPassword: false,
      notValidEmail: false,
    };
  },
  methods: {
    vkLogin() {
      this.$store.dispatch("getToken");
    },
    handlerSubmit() {
      const user = {
        email: this.email,
        password: this.password,
      };

      this.$store.dispatch("loginUser", user);

      if (!this.emailValid) {
        this.notValidEmail = true;
      }
      if (!this.passwordMatches) {
        this.notValidPassword = true;
      }
    },
  },
  computed: {
    notValidForm() {
      return this.$store.state.formValid;
    },
    logIn() {
      return this.$store.state.logIn;
    },

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
        return false;
      } else {
        return true;
      }
    },
  },
  watch: {
    logIn: {
      handler(newValue, oldValue) {
        if (newValue !== oldValue) {
          this.$router.push("/checks");
        }
      },
      deep: true,
    },
  },
};

</script>

<style lang="scss" scoped>
</style>
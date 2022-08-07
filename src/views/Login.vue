<template>
  <div>
    <div class="page login">
      <form class="login__form" @submit.prevent="handlerSubmit">
        <h2>Регистрация</h2>
        <!-- <label>
      <input type="text" v-model="companyName" ref="companyName" />
    </label> -->
        <label>
          <input type="text" v-model.trim="email" ref="email" />
        </label>
        <label>
          <input type="password" v-model.trim="password" ref="password" />
        </label>
        <button type="submit">Войти</button>
      </form>
    </div>
    <p>
      Уже есть аккаунт? Тогда войдите
      <router-link to="/signup">Зарегистрироваться</router-link>
    </p>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      email: null,
      password: null,
    };
  },
  methods: {
    handlerSubmit() {
      const user = {
        email: this.email,
        password: this.password,
      };

      this.$store.dispatch('loginUser', user)

      this.$router.push("/checks");
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
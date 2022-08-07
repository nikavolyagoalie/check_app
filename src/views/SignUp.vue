<template>
  <div>
    <div class="page signup">
      <form class="signup__form" @submit.prevent="handlerSubmit">
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
        <button type="submit">Зарегистрироваться</button>
      </form>
    </div>
    <p>
      Уже есть аккаунт? Тогда войдите
      <router-link to="/login">Login</router-link>
    </p>
  </div>
</template>

<script>
export default {
  name: "SignUp",
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

      this.$store.dispatch('registerUser', user)

      this.$router.push("/checks");
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
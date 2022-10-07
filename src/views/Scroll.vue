<template>
  <div class="wrapper">
    <div class="sample">
      <form @submit.prevent="sendData" v-if="show">
        <div
          class="content alert alert-info"
          @scroll="positionScroll"
        >
          <p>
            This text no one reads. This text no one reads. This text no one
            reads.
          </p>
          <p>
            This text no one reads. This text no one reads. This text no one
            reads.
          </p>
          <p>
            This text no one reads. This text no one reads. This text no one
            reads.
          </p>
          <p>
            This text no one reads. This text no one reads. This text no one
            reads.
          </p>
          <p>
            This text no one reads. This text no one reads. This text no one
            reads.
          </p>
          <p>
            This text no one reads. This text no one reads. This text no one
            reads.
          </p>
          <p>
            This text no one reads. This text no one reads. This text no one
            reads.
          </p>
          <p>
            This text no one reads. This text no one reads. This text no one
            reads.
          </p>
          <p>
            This text no one reads. This text no one reads. This text no one
            reads.
          </p>
          <p>
            This text no one reads. This text no one reads. This text no one
            reads.
          </p>
          <p>
            This text no one reads. This text no one reads. This text no one
            reads.
          </p>
          <p>
            This text no one reads. This text no one reads. This text no one
            reads.
          </p>
          <p>
            This text no one reads. This text no one reads. This text no one
            reads.
          </p>
          <p>
            This text no one reads. This text no one reads. This text no one
            reads.
          </p>
          <p>
            This text no one reads. This text no one reads. This text no one
            reads.
          </p>
          <p>
            This text no one reads. This text no one reads. This text no one
            reads.
          </p>
          <p>
            This text no one reads. This text no one reads. This text no one
            reads.
          </p>
          <p>
            This text no one reads. This text no one reads. This text no one
            reads.
          </p>
          <p>
            This text no one reads. This text no one reads. This text no one
            reads.
          </p>
          <p>
            This text no one reads. This text no one reads. This text no one
            reads.
          </p>
        </div>
        <div class="progress">
          <div class="progress__width" :style="[`width: ${progress}%`]"></div>
        </div>
        <div v-if="showChecks">
          <div class="form-check">
            <label class="form-check-label">
              <input class="form-check-input" type="checkbox" v-model="agree" />
              Agree all
            </label>
            <label class="form-check-label">
              <input class="form-check-input" type="checkbox" v-model="spam" />
              Get spam
            </label>
          </div>
          <div class="form-check" v-if="spam">
            <label class="form-check-label">
              <input
                class="form-check-input"
                type="radio"
                value="email"
                v-model="typeSpam"
                name="typeSpam"
              />
              Email
            </label>
            <label class="form-check-label">
              <input
                class="form-check-input"
                type="radio"
                value="phone"
                v-model="typeSpam"
                name="typeSpam"
              />
              Phone
            </label>
          </div>
          <hr />
          <button class="btn btn-primary" type="submit" :disabled="!agree">
            Send Data
          </button>
        </div>
      </form>
      <div v-else>
        <table class="table table-bordered">
          <tr>
            <td>Agree all</td>
            <td :style="[agree ? 'color: green' : 'color: red']">
              {{ agree ? "Yes" : "No" }}
            </td>
          </tr>
          <tr>
            <td>Get spam</td>
            <td :style="[spam ? 'color: green' : 'color: red']">
              {{ spam ? "Yes" : "No" }}
            </td>
          </tr>
          <tr v-if="spam">
            <td>Spam Type</td>
            <td>{{ typeSpam }}</td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      agree: false,
      spam: false,
      typeSpam: "",
      show: true,
      showChecks: false,
      progress: 0,
    };
  },
  methods: {
    sendData() {
      this.show = false;
    },
    positionScroll(e) {
      const scroll = e.target;
      let scrollHeight = scroll.scrollHeight;
      let scrollTop = scroll.scrollTop;
      let clientHeight = scroll.clientHeight;
      const h = scrollHeight - clientHeight;
      this.progress = Math.max(this.progress, scrollTop * (100 / h) );
      if (scrollHeight - scrollTop === clientHeight) {
        this.showChecks = true;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.content {
  height: 300px;
  overflow: auto;
  background: #00ffff;
}
.progress {
  height: 20px;
  border: 2px solid red;

  &__width {
    height: 100%;
    background: green;
  }
}
</style>
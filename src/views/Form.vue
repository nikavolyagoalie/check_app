<template>
  <div class="wrapper">
    <div class="sample">
      <form>
        <div class="progress">
          <progress-bar :progress="progress"></progress-bar>
        </div>
        <div>
          <my-input
            v-for="(field, i) in info"
            :key="i"
            :field="field"
            @onInput="onInput(i, $event)"
          >
          </my-input>
        </div>
        <button class="btn btn-primary">Send Data</button>
      </form>
      <pre>
				{{ info }}
			</pre
      >
      <div>
        <table class="table table-bordered">
          <tr>
            <td></td>
            <td></td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import ProgressBar from "@/components/ProgressBar.vue";

export default {
  components: {
    ProgressBar,
  },
  data() {
    return {
      info: [
        {
          label: "Name",
          value: "",
          pattern: /^[a-zA-Z ]{2,30}$/,
        },
        {
          label: "Phone",
          value: "",
          pattern: /^[0-9]{7,14}$/,
        },
        {
          label: "Email",
          value: "",
          pattern: /.+/,
        },
        {
          label: "Some Field 1",
          value: "",
          pattern: /.+/,
        },
        {
          label: "Some Field 2",
          value: "",
          pattern: /.+/,
        },
      ],
    };
  },
  created() {
    this.info.forEach((field) => {
      field.valid = false;
      field.activated = false;
    });
  },
  methods: {
    onInput(i, val) {
      let field = this.info[i];
      field.value = val.trim();
      field.valid = field.pattern.test(field.value);
      field.activated = true;
    },
  },
  computed: {
    progress() {
      let trues = this.info
        .map((item) => item.valid)
        .filter((item) => item).length;
      if (trues > 0) {
        return (100 / this.info.length) * trues;
      }
      return 0.3;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
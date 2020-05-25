<template>
  <input type="text" :value="currentValue" @input="handleInput" />
</template>
<script>
export default {
  name: "iInput",
  props: {
    value: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      currentValue: this.value,
    };
  },
  watch: {
    value(val) {
      this.currentValue = val;
    },
  },
  methods: {
    handleInput(event) {
      const value = event.target.value;
      this.currentValue = value;
      this.$emit("input", value);
    },
  },
};
</script>

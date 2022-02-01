<template>
  <h1>{{ msg }}123</h1>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },

  data() {
    return {
      count: 0,
    };
  },
};
</script>

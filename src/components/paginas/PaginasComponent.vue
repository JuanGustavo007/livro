<template>
  pica
  <router-view />
</template>

<script>
export default {
  name: "PaginasComponent",
  methods: {
    proxima() {
      this.$router.push({ path: "primeira" });
    },
  },
};
</script>

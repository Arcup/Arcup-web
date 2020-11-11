<template>
  <div class="about">
    <base-header></base-header>
    <h1>This is an about page</h1>
  </div>
</template>
<script>
import BaseHeader from "@/components/BaseHeader.vue";
export default {
  name: "About",
  components: {
    BaseHeader,
  },
};
</script>

<template>
  <div id="app">
    <MainHeader />
    <TheContainer>
      <RouterView />
    </TheContainer>
  </div>
</template>
<script>
// import IconTest from "./icons/direct-fill.svg";

import MainHeader from "@/components/MainHeader.vue";
import TheContainer from "@/components/TheContainer.vue";

export default {
  name: "App",
  components: { TheContainer, MainHeader },
};
</script>
<style scoped></style>

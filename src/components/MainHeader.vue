<template>
  <header class="header">
    <TheContainer class="header-inner">
      <div class="header-logo-out">
        <RouterLink to="/" class="header-logo">INSTAGRAM</RouterLink>
      </div>

      <form class="search" action="">
        <input type="text" placeholder="Search..." />
      </form>

      <nav class="header-nav">
        <RouterLink class="header-nav-item" to="/">
          <HomeFillSvg v-if="$route.path === '/'" />
          <HomeSvg v-else />
        </RouterLink>
        <RouterLink class="header-nav-item" to="/direct">
          <DirectFillSvg v-if="$route.path === '/direct'" />
          <DirectSvg v-else />
        </RouterLink>
        <RouterLink class="header-nav-item" to="/explore">
          <ExploreFillSvg v-if="$route.path === '/explore'" />
          <ExploreSvg v-else />
        </RouterLink>
        <RouterLink class="header-nav-item" to="/profile">profile</RouterLink>
      </nav>
    </TheContainer>
  </header>
</template>

<script>
/*
notlar:
  en başa header, header içindeki container'a &-inner, daha mantıklı bir isimlendirme şekli.
  aga artık şu inputları bir form tagı arasına koy be
  navigation'ları bir nav etiketine almalı. html5 taglarını kullan!!

  right:0 - left:0 --> That's why it works - by setting the left and right attributes you're stretching the element's offset to be 100%. And inside that 100% width the margin: auto works as usual.


 */

import TheContainer from "@/components/TheContainer.vue";
import HomeSvg from "@/icons/home.svg";
import HomeFillSvg from "@/icons/home-fill.svg";
import DirectSvg from "@/icons/direct.svg";
import DirectFillSvg from "@/icons/direct-fill.svg";
import ExploreSvg from "@/icons/explore.svg";
import ExploreFillSvg from "@/icons/explore-fill.svg";

export default {
  name: "MainHeader",
  components: {
    TheContainer,
    HomeSvg,
    HomeFillSvg,
    DirectSvg,
    DirectFillSvg,
    ExploreSvg,
    ExploreFillSvg,
  },
};
</script>

<style scoped>
.header {
  height: var(--header-height);
  background-color: white;
  z-index: 90;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  border-bottom: 1px solid rgb(var(--b6a));
}
.header-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: var(--header-height);
}

.header-logo-out {
  width: 100%;
  display: flex;
  justify-content: center;
  @media (--t) {
    width: auto;
  }
}
.header-logo {
  font-size: 21px;
  font-weight: bold;
  @media (--t) {
    display: inline;
    width: auto;
  }
}

.search {
  display: none;
  @media (--t) {
    display: block;
  }
  input {
    width: 215px;
    height: 28px;
    border: 1px solid rgb(var(--b6a));
    background-color: rgb(var(--b3f));
    border-radius: 4px;
    padding-left: 20px;
    padding-right: 20px;
  }
}

.header-nav {
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: white;
  height: var(--header-height);
  align-items: center;
  justify-content: space-around;

  @media (--t) {
    position: static;

    a + a {
      margin-left: 30px;
    }
  }
}
</style>

<template>
  <div>
    <p>profile</p>
    <RouterLink to="/profile/igtv"> igtv</RouterLink> |
    <RouterLink to="/profile/save"> save</RouterLink> |
    <RouterLink to="/profile/tag"> tag</RouterLink> |
    <RouterLink to="/profile/post"> post</RouterLink>
    <RouterView />
  </div>
</template>

<script>
export default {
  name: "ProfileView",
};
</script>

<style scoped></style>

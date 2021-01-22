<template>
  <div>
    <h1>Not Found</h1>
    <p>
      Sorry, this page is unavailable. Please go back to
      <router-link :to="{ name: 'Home' }">home</router-link>
    </p>
  </div>
</template>

<script>
export default {
  name: "NotFound",
};
</script>
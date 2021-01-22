<template>
  <nav id="nav">
    <h1>Destinations Travel Guide</h1>
    <ul class="nav-links">
      <li class="link">
        <router-link to="/">Home</router-link>
      </li>
      <li v-for="destination in destinations" :key="destination.slug" class="link">
        <router-link
          :to="{
            name: 'DestinationDetails',
            params: { slug: destination.slug },
          }"
          >{{ destination.name }}</router-link
        >
      </li>
    </ul>
  </nav>
</template>

<script>
import store from "@/store";
export default {
  name: "TheNavigation",
  data() {
    return {
      destinations: store.destinations,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#nav a.router-link-exact-active {
  color: #42b983;
}

#nav a {
  color: black;
  text-decoration: none;
  font-weight: bold;
}
#nav {
  display: flex;
  align-items: center;
  margin-bottom: 50px;
}

.nav-links {
  display: flex;
  margin-left: 50px;
}

.link {
  list-style: none;
  padding-right: 20px;
}

.link:hover {
  text-decoration: underline;
}
</style>

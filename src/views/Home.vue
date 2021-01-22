<template>
  <div class="home">
    <h1>All Destinations</h1>
    <div class="destinations">
      <div
        class="destination"
        v-for="destination in destinations"
        :key="destination.name"
      >
        <router-link :to="{name:'DestinationDetails', params: {slug: destination.slug}}">
          <h3>{{ destination.name }}</h3>
        </router-link>
        <router-link :to="{name:'DestinationDetails', params: {slug: destination.slug}}">
          <img
            :src="require(`@/assets/${destination.image}`)"
            :alt="`${destination.name} img`"
          />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import store from "@/store";

export default {
  name: "Home",
  data() {
    return {
      destinations: store.destinations,
    };
  },
};
</script>

<style scoped>
.home {
  padding: 0 50px;
}

.destinations {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.destination {
  display: flex;
  flex-direction: column;
  margin-right: 20px;
}

h3:hover {
  text-decoration: underline;
  cursor: pointer;
}

img {
  width: 300px;
  transition: transform 200ms ease-in-out;
}

img:hover {
  cursor: pointer;
  transform: scale(1.1);
}
</style>
<template>
  <div class="destination-wrapper">
    <h1>{{ destination.name }}</h1>
    <div class="destination-main">
      <img
        :src="require(`@/assets/${destination.image}`)"
        :alt="`${destination.name} img`"
      />
      <p class="destination-description">{{ destination.description }}</p>
    </div>
    <div class="experiences">
      <div
        v-for="experience in destination.experiences"
        :key="experience.name"
        class="experience"
      >
        <h3>{{ experience.name }}</h3>
        <router-link
          :to="{
            name: 'ExperienceDetails',
            params: { experienceSlug: experience.slug },
          }"
        >
          <img
            :src="require(`@/assets/${experience.image}`)"
            :alt="`${experience.name} img`"
            class="experience-img"
          />
        </router-link>
      </div>
    </div>
    <router-view :key="$route.path" />
  </div>
</template>

<script>
import store from "@/store";

export default {
  name: "DestinationDetails",
  props: {
    slug: {
      type: String,
      required: true,
    },
  },
  computed: {
    destination() {
      return store.destinations.find(
        (destination) => destination.slug === this.slug
      );
    },
  },
};
</script>

<style scoped>
.destination-wrapper {
  padding: 0 50px;
}

.destination-main {
  display: flex;
}

.destination-description {
  margin: 0;
  margin-left: 20px;
  text-align: left;
  line-height: 1.8rem;
  font-size: 20px;
}

.experiences {
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
}

.experience {
  margin-right: 20px;
}

.experience-img {
  width: 300px;
  transition: transform 200ms ease-in-out;
}

.experience-img:hover {
  cursor: pointer;
  transform: scale(1.1);
}
</style>
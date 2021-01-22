<template>
  <div class="experience-wrapper">
    <h2>{{ experience.name }}</h2>
    <div class="experience-main">
      <img
        :src="require(`@/assets/${experience.image}`)"
        :alt="`${experience.name} img`"
      />
      <p class="experience-description">{{ experience.description }}</p>
    </div>
  </div>
</template>

<script>
import store from "@/store";

export default {
  name: "ExperienceDetails",
  props: {
    slug: {
      type: String,
      required: true,
    },
    experienceSlug: {
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
    experience() {
      return this.destination.experiences.find(
        (experience) => experience.slug === this.experienceSlug
      );
    },
  },
};
</script>

<style scoped>
.experience-wrapper {
  margin: 50px 0;
}

.experience-main {
    display: flex;
}

.experience-description {
  text-align: left;
  margin: 0 20px;
  line-height: 1.8rem;
  font-size: 20px;
}
</style>
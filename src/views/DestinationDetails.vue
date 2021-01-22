<template>
    <div class="destination-wrapper">
        <h1>{{destination.name}}</h1>
        <div class="destination-main">
        <img :src="require(`@/assets/${destination.image}`)" :alt="`${destination.name} img`">
        <p class="destination-description">{{destination.description}}</p>
        </div>
    </div>
</template>

<script>
import store from "@/store";

export default {
    name: "DestinationDetails",
    data() {
        return {
            slug: this.$route.params.slug
        }
    },
    computed: {
        destination() {
            return store.destinations.find(destination => destination.slug === this.slug)
        }
    }
}
</script>

<style scoped>
.destination-wrapper {
    padding: 0 50px;
}

.destination-main {
    display: flex;
}

.destination-description {
    text-align: left;
    margin-left: 20px;
}
</style>
<template>
  <div v-if="card">
    <h1>{{ card.CardName }}</h1>
    <img :src="card.Image" />
    <router-view />
  </div>
  <div v-else>
    <p class="loading">Loading Card...</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      card: null,
    };
  },
  mounted() {
    fetch("http://localhost:3000/cards/" + this.$route.params.id)
      .then((res) => res.json())
      .then((data) => (this.card = data));
  },
};
</script>
<style>
.loading {
  font-size: 24px;
  text-align: center;
}
</style>

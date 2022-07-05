<template>
  <div class="container">
    <CardsCard v-for="card in cards" :key="card.id" :card="card" />
  </div>
</template>

<script>
import CardsCard from "../components/CardsCard";
export default {
  components: { CardsCard },
  data() {
    return {
      cards: [],
    };
  },
  mounted() {
    fetch("http://localhost:3000/cards")
      .then((res) => res.json())
      .then((data) => (this.cards = data))
      .catch((err) => console.log(err.message));
  },
};
</script>

<style scope>
.container {
  display: flex;
  flex-wrap: wrap;
  margin-left: 200px;
}
</style>

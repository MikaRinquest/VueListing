<template class="view">
  <div class="card">
    <div class="list-item">
      <img :src="card.Image" />
      <div class="list-info">
        <span class="sword">
          <p>ATK:{{ card.ATK }}</p>
          <p>DEF:{{ card.DEF }}</p>
          <p>Rarity: {{ card.Rarity }}</p>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["card"],
};
</script>

<style>
/* CSS Reset */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.view {
  display: flex;
  flex-wrap: wrap;
}
/* Image */
img {
  width: 150px;
  height: 250px;
  text-align: none;
}

/* Hover Effect */
.card {
  width: 25%;
}
.list-item {
  position: relative;
  width: 25%;
  padding-bottom: 15px;
  flex-wrap: wrap;
}

.list-info {
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.7) 0%,
    rgba(0, 0, 0, 0) 100%
  );
  color: white;
  position: absolute;
  width: 150px;
  height: 250px;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 30px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  opacity: 1;
  transition: all 0.1s linear;
  backdrop-filter: blur(0.6px);
}

.list-item:hover > img {
  width: 175px;
  height: 275px;
  transition: all 0s linear;
}

.list-item:hover .list-info {
  opacity: 0;
}

.sword {
  font-size: 15px;
}

.sword > img {
  width: 15px;
  aspect-ratio: 1;
}
</style>

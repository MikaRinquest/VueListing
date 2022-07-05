<template>
  <section id="landing">
    <div>
      <h1 class="title">Welcome to CardFinder</h1>
      <p class="subtitle">A database for yu gi oh cards</p>
    </div>
  </section>
</template>
<script>
export default {};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#landing {
  background-image: url("@/assets/682525.jpg");
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 89vh;
}

.title {
  font-size: 30px;
  color: gray;
  margin-top: -10px;
}

.subtitle {
  font-size: 25px;
  color: white;
}
</style>

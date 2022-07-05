<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/list">All Cards</router-link> |
    <router-link to="/admin">Admin</router-link>
  </div>
</template>

<script>
export default {};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  text-align: center;
  background: #2c3e50;
}

#nav a {
  font-weight: bold;
  color: white;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

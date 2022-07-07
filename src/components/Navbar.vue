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

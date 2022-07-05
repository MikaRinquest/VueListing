<template>
  <Landing />
</template>

<script>
// @ is an alias to /src
import Landing from "@/components/Landing.vue"; //Must be same name as the .vue file you're pulling from

export default {
  name: "HomeView", //name of the current file
  components: {
    Landing, //which component you're pulling information on
  },
};
</script>

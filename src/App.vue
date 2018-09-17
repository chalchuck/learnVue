<template>
  <div id="app">
   <main> <RobotBuilder/></main>
  </div>
</template>

<script>
// import HomePage from "./home/HomePage.vue";
import RobotBuilder from "./build/RobotBuilder.vue";

export default {
  name: "app",
  components: {
    RobotBuilder
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>


<style scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <h1>{{jokeText}}</h1>
    <JokeButton/>

  </div>
</template>

<script>

import JokeButton from "./components/JokeButton.vue"

import {useMainStore} from '@/store/main'
import {mapState} from 'pinia';

export default {
  name: 'App',
  components: {
    JokeButton
},
  computed: {
        // Actions
    ...mapState(useMainStore,['getJoke']),
            //getter
    ...mapState(useMainStore,['jokeText'])
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

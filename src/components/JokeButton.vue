<template>
    <div>
    <NormalJoke/>
    <LoudJoke/>
    <SnakeJoke/>
        <button @click="getJoke">get Joke</button>
        <button @click="getJoke">Snake it up</button>
        <button @click="getJoke">MAKE IT LOUD</button>
    </div>
</template>

<script>
import NormalJoke from "./NormalJoke.vue" 
import LoudJoke from "./LoudJoke.vue"
import SnakeJoke from "./SnakeJoke.vue"

import {useMainStore} from '@/store/main'
import {mapState} from 'pinia';

    export default {
        name : "JokeButton",
        components: {
            NormalJoke,
            LoudJoke,
            SnakeJoke,
    },        
        computed: {
            // Actions
            ...mapState(useMainStore,['getJoke']),
            //getter
            ...mapState(useMainStore,['jokeText'])
        }
}
</script>

<style lang="scss" scoped>

</style>
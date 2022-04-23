<template>
    <div>
        <h1>API container</h1>
        <h2>QOTD: {{jokeText}}</h2>
        <button @click="getJoke">get Joke</button>               
    </div>
</template>

<script>
import {useMainStore} from '@/store/main'
import {mapState} from 'pinia';

    export default {
        name : "JokePage",
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
<template>
    <div>
        
    </div>
</template>

<script>
import {useMainStore} from '@/store/main'
import {mapState} from 'pinia';

    export default {
        name : "SnakeJoke",
        computed: {
            // Actions
            ...mapState(useMainStore,['getJoke']),
            //getter
            ...mapState(useMainStore,['jokeText'])
        }
    }
</script>

<style lang="css" scoped>
button {
    text-decoration: dashed;
}
</style>
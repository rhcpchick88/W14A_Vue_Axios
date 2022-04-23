<template>
    <div>

    </div>
</template>

<script>
import {useMainStore} from '@/store/main'
import {mapState} from 'pinia';

    export default {
        name : "LoudJoke",
        computed: {
            // Actions
            ...mapState(useMainStore,['getJoke']),
            //getter
            ...mapState(useMainStore,['jokeText'])
        }
    }
</script>

<style lang="css" scoped>
div {
    text-decoration:dashed
}
</style>
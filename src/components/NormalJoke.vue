<template>
    <div>
        
    </div>
</template>

<script>
import {useMainStore} from '@/store/main'
import {mapState} from 'pinia';

    export default {
        name : "NormalJoke",
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
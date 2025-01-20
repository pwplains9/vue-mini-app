<template>
    <div class="progress">
        <h4 class="progress-level">
            <span>{{store.currentScore}}/{{ store.level.value }}</span>
            <span>{{ store.level.level + 1 }}</span>
        </h4>
        <div class="progress-container">
            <div class="progress-value" :style="{'width': progressWidth + '%'}"></div>
        </div>
    </div>
</template>

<script setup>
import {useScoreStore} from '@/stores/score.js';
import { computed } from 'vue';

const store = useScoreStore();

const progressWidth = computed(() => {
    return store.currentScore * 100 / store.level.value;
})

</script>

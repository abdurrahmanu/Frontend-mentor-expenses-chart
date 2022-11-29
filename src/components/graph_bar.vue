<template>
    <div class="pt-10 relative w-8 h-fit text-center grid gap-2 justify-center">
        <div v-if="show" class="bg-darkbrown text-white rounded-md p-1 text-xs absolute top-1 justify-self-center">
            ${{data.amount}}
        </div> 
        <div
        @mouseenter="show = !show"
        @mouseleave="show = !show"
        :style="{ height: [data.amount * 1.5] + 'px' }"
        class=" bar hover:bg-barhover cursor-pointer relative bg-softred rounded-sm w-8 self-end"></div>
        <div class="text-sm relative self-end w-8 text-gray-600">{{data.day}}</div>
    </div>
</template>

<script setup>
import { defineProps, ref } from 'vue';

const show = ref(false)
const props = defineProps({ data: Object })
</script>

<style>
.highest .bar {
    background: cyan;
}

.highest .bar:hover {
    background: #bde6e6;
}
</style>

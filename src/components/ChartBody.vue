<template>
    <div class="bg-paleorange grid gap-3 rounded-xl p-4">
        <p class="font-bold text-2xl">Spending - Last 7 days</p>

        <div class="p-1 flex gap-3 items-end border-b-gray-300 h-40 border-b pb-4">
        <graphBar
        v-for="(item, i) in data"
        :class="{highest: item.amount === highest_amount}"
        :key="i"
        :data="item"
        />
        </div>

        <div class="flex justify-between">
            <div>
                <div class="text-sm">Total this month</div>
                <div class="text-3xl font-bold">$478.33</div>
            </div>
            <div>
                <div class="font-bold mb-2">+2.4%</div>
                <div class="text-sm">from last month</div>
            </div>
        </div>
    </div>
</template>

<script setup>
import graphBar from './graph_bar.vue';
import data from '../../data.json'

const highest_amount = Math.max(...data.map(each => each.amount))
</script>

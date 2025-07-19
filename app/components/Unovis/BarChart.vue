<script setup lang="ts">
import { VisXYContainer, VisStackedBar, VisAxis } from '@unovis/vue'
import { ref } from 'vue'

type DataRecord = { x: number, y: number }
const data = ref<DataRecord[]>([
    { x: 1, y: 2 },
    { x: 2, y: 1 },
    { x: 3, y: 3 },
    { x: 4, y: 5 },
    { x: 5, y: 4 },
    { x: 6, y: 7 },
    { x: 7, y: 6 },
    { x: 8, y: 9 },
    { x: 9, y: 10 },
    { x: 10, y: 6 },
])
</script>

<template>
    <ClientOnly>
        <!-- <VisXYContainer>
            <VisLine :data="data" :x="(d: { x: any }) => d.x" :y="(d: { y: any }) => d.y" />
            <VisAxis type="x" />
            <VisAxis type="y" />
        </VisXYContainer> -->

        <VisXYContainer :data="data">
            <VisStackedBar :x="(d: { x: any }) => d.x" :y="(d: { y: any }) => d.y" color="var(--ui-primary)" />
            <VisAxis type="x" />
            <VisAxis type="y" />
        </VisXYContainer>
    </ClientOnly>
</template>

<style scoped>
.unovis-xy-container {
    --vis-crosshair-line-stroke-color: var(--ui-primary);
    --vis-crosshair-circle-stroke-color: var(--ui-bg);

    --vis-axis-grid-color: var(--ui-border);
    --vis-axis-tick-color: var(--ui-border);
    --vis-axis-tick-label-color: var(--ui-text-dimmed);

    --vis-tooltip-background-color: var(--ui-bg);
    --vis-tooltip-border-color: var(--ui-border);
    --vis-tooltip-text-color: var(--ui-text-highlighted);
}
</style>
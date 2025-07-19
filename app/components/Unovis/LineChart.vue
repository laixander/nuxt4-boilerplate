<script setup lang="ts">
import { VisXYContainer, VisLine, VisAxis, VisArea, VisCrosshair, VisTooltip } from '@unovis/vue'
import { ref } from 'vue'

type DataRecord = { x: number; y: number }

const now = Date.now()
const day = 24 * 60 * 60 * 1000

const data = ref<DataRecord[]>([
    { x: now, y: 2 },
    { x: now + 1 * day, y: 1 },
    { x: now + 2 * day, y: 3 },
    { x: now + 3 * day, y: 5 },
    { x: now + 4 * day, y: 4 },
    { x: now + 5 * day, y: 7 },
    { x: now + 6 * day, y: 6 },
    { x: now + 7 * day, y: 9 },
    { x: now + 8 * day, y: 10 },
    { x: now + 9 * day, y: 6 },
    { x: now + 10* day, y: 2 },
])

const tickFormat = (x: number) =>
    new Date(x).toLocaleDateString('en-GB', {
        day: '2-digit',
        month: 'short',
    })

const template = (d: DataRecord) => {
    const formatted = new Date(d.x).toLocaleDateString('en-GB', {
        day: '2-digit',
        month: 'short',
    })
    return `${formatted}: ${d.y}`
}
</script>

<template>
    <ClientOnly>
        <VisXYContainer :data="data">
            <VisLine :x="(d: { x: any }) => d.x" :y="(d: { y: any }) => d.y" color="var(--ui-primary)" />
            <VisArea :x="(d: { x: any }) => d.x" :y="(d: { y: any }) => d.y" color="var(--ui-primary)" :opacity="0.1" />
            <VisAxis type="x" :x="(d: { x: any }) => d.x" :tickFormat="tickFormat" />
            <VisCrosshair color="var(--ui-primary)" :template="template" />
            <VisTooltip />
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
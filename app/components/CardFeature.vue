<template>
    <UCard>
        <div :class="layoutClass" class="gap-4 items-start">
            <!-- Icon slot or fallback -->
            <div v-if="$slots.icon || icon" class="flex shrink-0">
                <slot name="icon">
                    <UIcon v-if="icon" :name="icon" class="size-8 text-primary" />
                </slot>
            </div>

            <div class="grid gap-6">
                <div class="space-y-2">
                    <h3 class="text-highlighted font-semibold">
                        {{ title }}
                    </h3>
                    <p class="text-sm text-muted">
                        {{ description }}
                    </p>
                </div>
                <div v-if="$slots.action || action">
                    <slot name="action">
                        <UButton v-if="action" :label="action" />
                    </slot>
                </div>
            </div>
        </div>
    </UCard>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { CardFeatureProps } from '~/types/CardFeature'

const props = defineProps<CardFeatureProps>()

const layoutClass = computed(() => {
    return props.layout === 'horizontal'
        ? 'flex'
        : 'flex flex-col'
})
</script>

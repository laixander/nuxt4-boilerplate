<template>
    <div class="space-y-6 p-[1px]">
        <div class="relative flex flex-col flex-1 lg:grid gap-x-8 gap-y-4 lg:grid-cols-2 lg:items-center p-0 sm:p-0">
            <div class="flex flex-col flex-1 items-start">
                <div class="flex-1">
                    <div class="text-base text-pretty font-semibold text-highlighted">
                        {{ title || 'Welcome to the Dashboard' }}
                    </div>
                    <div class="text-[15px] text-pretty text-muted mt-1">
                        {{ description || 'Description Goes Here' }}
                    </div>
                </div>
            </div>
            <slot name="actions" />
        </div>
        <slot name="content">
            Content goes here
        </slot>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    title?: string
    description?: string
}>()
</script>
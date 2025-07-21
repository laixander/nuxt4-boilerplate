<template>
    <div class="h-16 shrink-0 flex items-center justify-between border-b border-default px-4 sm:px-6 gap-1.5">
        <div class="flex items-center gap-1.5 min-w-0">
            <!-- Sidebar toggle (desktop) -->
            <UButton 
                :icon="collapsed ? 'i-lucide-panel-left-open' : 'i-lucide-panel-left-close'" 
                variant="ghost"
                color="neutral" 
                @click="$emit('toggleSidebar')" 
                class="hidden lg:flex" 
            />

            <!-- Sidebar slideover trigger (mobile) -->
            <USlideover side="left" class="lg:hidden" v-model:open="open">
                <UButton icon="i-lucide-menu" color="neutral" variant="ghost" />
                <template #content>
                    <Sidebar 
                        :collapsed="collapsed" 
                        :items="items"
                        @close="open = false" 
                    />
                </template>
            </USlideover>

            <!-- Page title -->
            <h1 class="flex items-center gap-1.5 font-semibold text-highlighted truncate">
                {{ title }}
            </h1>
        </div>

        <div class="flex items-center shrink-0 gap-3">
            <UDrawer direction="right" inset>
                <UChip size="lg" inset>
                    <UButton icon="i-lucide-bell" variant="ghost" color="neutral" />
                </UChip>
                <template #content>
                    <Placeholder class="min-w-96 min-h-full size-full m-4" />
                </template>
            </UDrawer>
        </div>
    </div>
</template>

<script setup lang="ts">
import Sidebar from '~/components/Core/Sidebar.vue'
import type { HeaderProps } from '~/types'

defineProps<HeaderProps>()

defineEmits(['toggleSidebar'])

const open = ref(false)
</script>

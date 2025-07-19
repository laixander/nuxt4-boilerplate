<template>
    <div class="h-16 shrink-0 flex items-center gap-1.5 px-4 lg:border-b lg:border-default">
        <UButton 
            icon="i-lucide-x" 
            variant="ghost" 
            color="neutral" 
            size="xl" 
            class="lg:hidden" 
            @click="$emit('close')" 
        />
        <UButton
            :avatar="{
                src: 'https://github.com/nuxt.png'
            }"
            :label="collapsed ? undefined : 'Application Name'"
            color="neutral"
            variant="ghost"
            :class="collapsed ? '' : 'w-full'"
        />
    </div>
    <div class="flex flex-col gap-4 flex-1 overflow-y-auto px-4 py-2">
        <UNavigationMenu 
            orientation="vertical" 
            :items="items[0]" 
            class="data-[orientation=vertical]:w-full" 
            :collapsed="collapsed" 
            :tooltip="collapsed" 
            :popover="collapsed" 
        />
        <UNavigationMenu 
            orientation="vertical" 
            :items="items[1]" 
            class="data-[orientation=vertical]:w-full" 
            :ui="{ root: 'mt-auto' }" 
            :collapsed="collapsed" 
            :tooltip="collapsed" 
        />
    </div>
    <div class="shrink-0 flex items-center gap-1.5 px-4 py-2 lg:border-t lg:border-default">
        <!-- <UDropdownMenu
            :items="userItems"
            :content="{ sideOffset: 16 }"
            :ui="{ content: 'w-56' }"
        >
            <UButton
                :avatar="{ src: 'https://i.pravatar.cc/40' }"
                :label="collapsed ? undefined : 'Jane Copper'"
                :trailing-icon="collapsed ? undefined : 'i-lucide-chevrons-up-down'"
                color="neutral"
                variant="ghost"
                :class="collapsed ? '' : 'w-full'"
                :ui="collapsed ? undefined : { label: 'mr-auto', trailingIcon: 'text-dimmed' }"
            />
            <template v-for="(_, name) in $slots" #[name]>
                <slot :name="name" />
            </template>
        </UDropdownMenu> -->
        <UserMenu :collapsed="collapsed" />
    </div>
</template>

<script setup lang="ts">
import UserMenu from '~/components/Core/UserMenu.vue'
defineProps<{
    collapsed: boolean,
    items: any,
}>()
defineEmits(['close'])
</script>
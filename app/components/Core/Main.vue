<template>
    <div v-if="$slots.toolbar" class="shrink-0 flex items-center justify-between border-b border-default px-4 sm:px-6 gap-1.5 overflow-x-auto min-h-[49px]">
        <slot name="toolbar" />
    </div>
    <div class="flex flex-col gap-4 sm:gap-6 flex-1 overflow-y-auto p-4 sm:p-6">
        <div class="relative overflow-auto shrink-0">
            <slot>
                Place your main content here
            </slot>
        </div>
    </div>
</template>
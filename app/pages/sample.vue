<template>
    <Main>
        <Page title="Sample Page" description="This is just a sample page">
            <template #content>
                <div class="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                    <CardFeature
                        v-for="(card, index) in cards"
                        :key="index"
                        v-bind="card"
                    />
                </div>
            </template>
        </Page>
    </Main>
</template>


<script setup lang="ts">
import Main from '~/components/core/Main.vue'
import Page from '~/components/core/Page.vue'
import CardFeature from '~/components/CardFeature.vue'
import { cards } from '~/data/cards'
</script>
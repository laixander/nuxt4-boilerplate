<template>
    <Main>
        <template #toolbar>
            <div class="text-muted text-sm">
                Your toolbar goes here
            </div>
        </template>
        <Page title="Dashboard">
            <template #actions>
                <div class="text-right">
                    <UButton label="Action" trailing-icon="i-lucide-plus" color="neutral" />
                </div>
            </template>
            <template #content>
                <div class="text-sm text-muted">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto dolore dolores labore aut similique eum totam facilis velit et nihil.
                </div>

                <BarChart />
                <LineChart />
            </template>
        </Page>
    </Main>
</template>

<script setup lang="ts">
import Main from '~/components/Core/Main.vue'
import BarChart from '~/components/Unovis/BarChart.vue'
import LineChart from '~/components/Unovis/LineChart.vue'
import Page from '~/components/Core/Page.vue'
</script>
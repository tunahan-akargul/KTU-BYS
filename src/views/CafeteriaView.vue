<script setup lang="ts">
// Placeholder view - Coming Soon
</script>

<template>
    <div class="coming-soon-page">
        <v-card class="text-center pa-8" max-width="500" style="margin: 0 auto;">
            <v-icon size="80" color="primary" class="mb-4">mdi-silverware-fork-knife</v-icon>
            <h1 class="text-h4 font-weight-bold mb-2">Yemekhane</h1>
            <p class="text-body-1 text-medium-emphasis mb-6">
                Bu sayfa henüz yapım aşamasındadır.
            </p>
            <v-btn color="primary" to="/" variant="tonal">
                <v-icon start>mdi-home</v-icon>
                Ana Sayfaya Dön
            </v-btn>
        </v-card>
    </div>
</template>

<style scoped>
.coming-soon-page {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 60vh;
}
</style>

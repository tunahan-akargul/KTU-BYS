<script setup lang="ts">
import { computed } from 'vue'
import { useStudentStore } from '@/stores/studentStore'
import AnnouncementCard from '@/components/announcements/AnnouncementCard.vue'

const studentStore = useStudentStore()

const sortedAnnouncements = computed(() => {
    return [...studentStore.announcements].sort((a, b) => {
        // Important ones first, then by date
        if (a.isImportant && !b.isImportant) return -1
        if (!a.isImportant && b.isImportant) return 1
        return new Date(b.date).getTime() - new Date(a.date).getTime()
    })
})

const importantCount = computed(() =>
    studentStore.announcements.filter(a => a.isImportant).length
)
</script>

<template>
    <div class="announcements-page">
        <!-- Header -->
        <v-card class="mb-6 pa-6">
            <v-row align="center">
                <v-col cols="12" md="8">
                    <div class="d-flex align-center mb-2">
                        <v-icon color="primary" size="32" class="mr-3">mdi-bullhorn</v-icon>
                        <div>
                            <h1 class="text-h5 font-weight-bold">Duyurular</h1>
                            <p class="text-body-2 text-medium-emphasis mb-0">
                                Tüm duyuruları görüntüleyin
                            </p>
                        </div>
                    </div>
                </v-col>
                <v-col cols="12" md="4" class="text-md-right">
                    <v-chip color="primary" variant="tonal" class="mr-2">
                        <v-icon start size="small">mdi-bell</v-icon>
                        {{ studentStore.announcements.length }} Duyuru
                    </v-chip>
                    <v-chip v-if="importantCount > 0" color="warning" variant="tonal">
                        <v-icon start size="small">mdi-alert-circle</v-icon>
                        {{ importantCount }} Önemli
                    </v-chip>
                </v-col>
            </v-row>
        </v-card>

        <!-- Announcements Grid -->
        <v-row>
            <v-col cols="12" sm="6" lg="4" v-for="announcement in sortedAnnouncements" :key="announcement.id">
                <AnnouncementCard :announcement="announcement" />
            </v-col>
        </v-row>

        <!-- Empty State -->
        <v-card v-if="studentStore.announcements.length === 0" class="text-center pa-8">
            <v-icon size="80" color="grey" class="mb-4">mdi-bullhorn-outline</v-icon>
            <h2 class="text-h5 font-weight-bold mb-2">Duyuru Bulunmuyor</h2>
            <p class="text-body-1 text-medium-emphasis">
                Şu anda görüntülenecek duyuru bulunmamaktadır.
            </p>
        </v-card>
    </div>
</template>

<style scoped>
.announcements-page {
    animation: fadeIn 0.3s ease;
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(10px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>

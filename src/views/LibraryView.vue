<script setup lang="ts">
import { useDisplay } from 'vuetify'
import { mockLibraryBooks } from '@/mock/mockData'

const { mdAndDown } = useDisplay()

const headers = [
    { title: 'Kitap Adı', key: 'title' },
    { title: 'Yazar', key: 'author' },
    { title: 'Ödünç Alma', key: 'borrowDate' },
    { title: 'Son Teslim', key: 'dueDate' },
    { title: 'Durum', key: 'status' },
]

function getStatusColor(status: string) {
    switch (status) {
        case 'borrowed': return 'info'
        case 'overdue': return 'error'
        case 'returned': return 'success'
        default: return 'grey'
    }
}

function getStatusText(status: string) {
    switch (status) {
        case 'borrowed': return 'Ödünç Alındı'
        case 'overdue': return 'Gecikmiş'
        case 'returned': return 'İade Edildi'
        default: return 'Bilinmiyor'
    }
}
</script>

<template>
    <v-container fluid :class="['library-page', mdAndDown ? 'pa-4' : 'pa-6']">
        <!-- Page Header -->
        <v-row class="mb-6">
            <v-col cols="12">
                <div class="d-flex align-center">
                    <v-icon size="32" color="indigo" class="mr-3">mdi-library</v-icon>
                    <div>
                        <h1 class="text-h5 text-sm-h4 font-weight-bold">Kütüphane İşlemleri</h1>
                        <p class="text-body-2 text-sm-subtitle-1 text-medium-emphasis mb-0">
                            Ödünç aldığınız kitaplar ve kütüphane borç durumu
                        </p>
                    </div>
                </div>
            </v-col>
        </v-row>

        <!-- Summary Cards -->
        <v-row class="mb-6">
            <v-col cols="12" md="4">
                <v-card class="summary-card pa-6" elevation="0">
                    <div class="d-flex align-center">
                        <v-avatar color="indigo" size="48" size-sm="56" class="mr-4">
                            <v-icon color="white">mdi-book-multiple</v-icon>
                        </v-avatar>
                        <div>
                            <div class="text-h5 text-sm-h4 font-weight-bold">{{ mockLibraryBooks.length }}</div>
                            <div class="text-caption text-medium-emphasis">Aktif Ödünç Kitap</div>
                        </div>
                    </div>
                </v-card>
            </v-col>
            <v-col cols="12" md="4">
                <v-card class="summary-card pa-6" elevation="0">
                    <div class="d-flex align-center">
                        <v-avatar color="error" size="48" size-sm="56" class="mr-4">
                            <v-icon color="white">mdi-cash-alert</v-icon>
                        </v-avatar>
                        <div>
                            <div class="text-h5 text-sm-h4 font-weight-bold">0.00 ₺</div>
                            <div class="text-caption text-medium-emphasis">Gecikme Cezası</div>
                        </div>
                    </div>
                </v-card>
            </v-col>
            <v-col cols="12" md="4">
                <v-card class="summary-card pa-6" elevation="0" link href="https://kutuphane.ktu.edu.tr" target="_blank">
                    <div class="d-flex align-center">
                        <v-avatar color="amber-darken-2" size="56" class="mr-4">
                            <v-icon color="white">mdi-magnify</v-icon>
                        </v-avatar>
                        <div>
                            <div class="text-h6 font-weight-bold">Katalog Tarama</div>
                            <div class="text-caption text-medium-emphasis">Kütüphane web sitesine git</div>
                        </div>
                    </div>
                </v-card>
            </v-col>
        </v-row>

        <!-- Borrowed Books Table -->
        <v-card rounded="lg" elevation="0" class="books-table-card">
            <v-card-title class="pa-5 font-weight-bold">
                <v-icon color="indigo" class="mr-2">mdi-book-clock</v-icon>
                Ödünç Alınan Kitaplar
            </v-card-title>
            <v-divider />
            <v-data-table :headers="headers" :items="mockLibraryBooks" class="books-table">
                <template #item.status="{ item }">
                    <v-chip :color="getStatusColor(item.status)" size="small" variant="tonal">
                        {{ getStatusText(item.status) }}
                    </v-chip>
                </template>
                <template #item.title="{ item }">
                    <span class="font-weight-medium">{{ item.title }}</span>
                </template>
            </v-data-table>
        </v-card>
    </v-container>
</template>

<style scoped>
.library-page {
    background: linear-gradient(135deg, rgba(var(--v-theme-primary), 0.1) 0%, rgb(var(--v-theme-background)) 100%);
    min-height: 100vh;
}

.summary-card {
    border-radius: 16px;
    border: 1px solid rgba(var(--v-border-color), var(--v-border-opacity));
    background: rgb(var(--v-theme-surface));
}

.books-table-card {
    border: 1px solid rgba(var(--v-border-color), var(--v-border-opacity));
}

.books-table {
    border-radius: 0 0 16px 16px;
    background: rgb(var(--v-theme-surface));
}
</style>

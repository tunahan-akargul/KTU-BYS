<script setup lang="ts">
import { computed } from 'vue'
import { useDisplay } from 'vuetify'
import { mockFees } from '@/mock/mockData'
import type { Fee } from '@/types'

const { mdAndDown } = useDisplay()

const headers = [
    { title: 'Dönem', key: 'semester' },
    { title: 'Son Ödeme Tarihi', key: 'dueDate' },
    { title: 'Ödeme Tarihi', key: 'paymentDate' },
    { title: 'Tutar', key: 'amount' },
    { title: 'Durum', key: 'status' },
]

function getStatusColor(status: string) {
    switch (status) {
        case 'paid': return 'success'
        case 'pending': return 'warning'
        case 'overdue': return 'error'
        default: return 'grey'
    }
}

function getStatusText(status: string) {
    switch (status) {
        case 'paid': return 'Ödendi'
        case 'pending': return 'Bekliyor'
        case 'overdue': return 'Gecikmiş'
        default: return 'Bilinmiyor'
    }
}

const pendingFees = computed(() => mockFees.filter(f => f.status !== 'paid'))
const totalPendingAmount = computed(() => pendingFees.value.reduce((sum, f) => sum + f.amount, 0))

</script>

<template>
    <v-container fluid :class="['fees-page', mdAndDown ? 'pa-4' : 'pa-6']">
        <!-- Page Header -->
        <v-row class="mb-6">
            <v-col cols="12">
                <div class="d-flex align-center">
                    <v-icon size="32" color="primary" class="mr-3">mdi-wallet</v-icon>
                    <div>
                        <h1 class="text-h5 text-sm-h4 font-weight-bold">Harç Ödemeleri</h1>
                        <p class="text-body-2 text-sm-subtitle-1 text-medium-emphasis mb-0">
                            Öğrenim ücreti ve harç durumunuzu takip edin
                        </p>
                    </div>
                </div>
            </v-col>
        </v-row>

        <!-- Summary Cards -->
        <v-row class="mb-6">
            <v-col cols="12" sm="12" lg="6">
                <v-card class="summary-card status-card pa-6" elevation="0">
                    <div class="d-flex flex-column flex-sm-row align-start align-sm-center justify-space-between">
                        <div class="mb-4 mb-sm-0">
                            <div class="text-overline mb-1">Toplam Borç</div>
                            <div class="text-h4 text-sm-h3 font-weight-bold" :class="totalPendingAmount > 0 ? 'text-error' : 'text-success'">
                                {{ totalPendingAmount.toFixed(2) }} ₺
                            </div>
                        </div>
                        <v-btn v-if="totalPendingAmount > 0" color="primary" block sm="auto" size="large" prepend-icon="mdi-credit-card-outline">
                            Hemen Öde
                        </v-btn>
                        <v-chip v-else color="success" size="large" variant="flat" prepend-icon="mdi-check-circle" class="w-100 w-sm-auto justify-center">
                            Borcunuz Bulunmamaktadır
                        </v-chip>
                    </div>
                </v-card>
            </v-col>
            <v-col cols="12" sm="12" lg="6">
                <v-card class="summary-card info-card pa-6" elevation="0">
                    <div class="d-flex align-center">
                        <v-icon size="48" color="info" class="mr-4">mdi-information-outline</v-icon>
                        <div>
                            <div class="font-weight-bold mb-1">Önemli Bilgilendirme</div>
                            <p class="text-body-2 mb-0">
                                Harç ödemelerinizi Vakıfbank ATM'lerinden veya İnternet Bankacılığı üzerinden "Eğitim Ödemeleri" kısmından öğrenci numaranız ile yapabilirsiniz.
                            </p>
                        </div>
                    </div>
                </v-card>
            </v-col>
        </v-row>

        <!-- Fees Table -->
        <v-card rounded="lg" elevation="0" class="fees-table-card">
            <v-card-title class="pa-5 font-weight-bold">
                <v-icon color="primary" class="mr-2">mdi-history</v-icon>
                Ödeme Geçmişi
            </v-card-title>
            <v-divider />
            <v-data-table :headers="headers" :items="mockFees" class="fees-table">
                <template #item.amount="{ item }">
                    <span class="font-weight-bold">{{ item.amount.toFixed(2) }} ₺</span>
                </template>
                <template #item.status="{ item }">
                    <v-chip :color="getStatusColor(item.status)" size="small" variant="tonal">
                        {{ getStatusText(item.status) }}
                    </v-chip>
                </template>
                <template #item.paymentDate="{ item }">
                    {{ item.paymentDate || '-' }}
                </template>
            </v-data-table>
        </v-card>
    </v-container>
</template>

<style scoped>
.fees-page {
    background: linear-gradient(135deg, rgb(var(--v-theme-background)) 0%, rgb(var(--v-theme-surface)) 100%);
    min-height: 100vh;
}

.summary-card {
    border-radius: 16px;
    border: 1px solid rgba(var(--v-border-color), var(--v-border-opacity));
}

.status-card {
    background: linear-gradient(135deg, rgb(var(--v-theme-surface)) 0%, rgba(var(--v-theme-primary), 0.05) 100%);
}

.info-card {
    background: linear-gradient(135deg, rgba(var(--v-theme-info), 0.1) 0%, rgba(var(--v-theme-info), 0.05) 100%);
    border: 1px solid rgba(var(--v-theme-info), 0.2);
}

.fees-table-card {
    border: 1px solid rgba(var(--v-border-color), var(--v-border-opacity));
}

.fees-table {
    border-radius: 0 0 16px 16px;
    background: rgb(var(--v-theme-surface));
}
</style>

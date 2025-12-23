import type { Student, Announcement, Course } from '@/types'
import tunahanPhoto from '@/assets/Photos/tunahan.jpeg'

export const mockStudent: Student = {
    id: '1',
    studentNumber: '444084',
    tcKimlikNo: '13541193568',
    firstName: 'TUNAHAN',
    lastName: 'AKARGÜL',
    email: '444084@ogr.ktu.edu.tr',
    personalEmail: 'tuna.akargul@gmail.com',
    phone: '5372002400',
    faculty: 'FEN',
    department: 'YAZILIM GELİŞTİRME BÖLÜMÜ',
    program: 'YAZILIM GELİŞTİRME',
    grade: 2,
    semester: '2. SINIF',
    status: 'active',
    registrationStatus: 'halen kayıtlı öğrencidir',
    advisor: 'Prof. Dr. Özcan ÖZYURT',
    gpa: 3.97,
    totalCredits: 120,
    completedCredits: 64,
    feeStatus: 'paid',
    photoUrl: tunahanPhoto
}

export const mockAnnouncements: Announcement[] = [
    {
        id: '1',
        title: '1955 KTÜ Açılıyor',
        content: 'Yükseköğretim Yürütme Kurulu Kararı ile yeni dönem başlamaktadır.',
        date: '2024-02-10',
        category: 'general',
        isImportant: true,
        link: 'https://ktu.edu.tr'
    },
    {
        id: '2',
        title: 'Yetenek Kapısı Platformu',
        content: 'Öğrenci ve mezunlar, Yetenek Kapısı\'nda profil oluşturarak işverenlerle iletişime geçebilecekler.',
        date: '2024-02-08',
        category: 'event',
        isImportant: false,
        link: 'https://yetenekkapisi.org'
    },
    {
        id: '3',
        title: 'Harç Ödeme Duyurusu',
        content: 'Harç ödemelerinizi son ödeme tarihine kadar yapmanız gerekmektedir.',
        date: '2024-02-05',
        category: 'financial',
        isImportant: true,
    },
    {
        id: '4',
        title: 'Bahar Dönemi Ders Kayıtları',
        content: 'Bahar dönemi ders kayıtları 15 Şubat tarihinde başlayacaktır.',
        date: '2024-02-01',
        category: 'academic',
        isImportant: true,
    },
]

export const mockCourses: Course[] = [
    {
        id: '1',
        code: 'YZM201',
        name: 'Veri Yapıları',
        credits: 4,
        instructor: 'Prof. Dr. Özcan ÖZYURT',
        schedule: 'Pazartesi 09:00-12:00',
        status: 'active',
    },
    {
        id: '2',
        code: 'YZM203',
        name: 'Nesne Yönelimli Programlama',
        credits: 4,
        instructor: 'Doç. Dr. Ahmet YILDIZ',
        schedule: 'Salı 13:00-16:00',
        status: 'active',
    },
    {
        id: '3',
        code: 'YZM205',
        name: 'Veritabanı Yönetim Sistemleri',
        credits: 3,
        instructor: 'Dr. Öğr. Üyesi Mehmet KAYA',
        schedule: 'Çarşamba 09:00-12:00',
        status: 'active',
    },
    {
        id: '4',
        code: 'YZM101',
        name: 'Programlamaya Giriş',
        credits: 4,
        instructor: 'Prof. Dr. Özcan ÖZYURT',
        schedule: '',
        status: 'completed',
        grade: 'AA',
        points: 4.0,
    },
    {
        id: '5',
        code: 'MAT101',
        name: 'Matematik I',
        credits: 4,
        instructor: 'Prof. Dr. Ali VURAL',
        schedule: '',
        status: 'completed',
        grade: 'BA',
        points: 3.5,
    },
]

export const navigationItems = [
    {
        title: 'Anasayfa',
        icon: 'mdi-home',
        to: '/'
    },
    {
        title: 'Kişisel İşlemler',
        icon: 'mdi-account-circle',
        children: [
            { title: 'Kişisel Bilgiler', icon: 'mdi-account-details', to: '/profile' },
            { title: 'Telefon / E-Posta / HES Kodu', icon: 'mdi-cellphone', to: '/contact' },
            { title: 'BYS Şifre Değiştirme', icon: 'mdi-key-variant', to: '/password' },
            { title: 'Mail Şifre Değiştirme', icon: 'mdi-email-lock', to: '/mail-password' },
        ]
    },
    {
        title: 'Ders İşlemleri',
        icon: 'mdi-book-open-variant',
        children: [
            { title: 'Transkript', icon: 'mdi-file-document-outline', to: '/transcript' },
            { title: 'Vize Notları', icon: 'mdi-clipboard-text-outline', to: '/midterm-grades' },
            { title: 'Ders Programı', icon: 'mdi-calendar-clock', to: '/schedule' },
            { title: 'Bölüm Ders Programı', icon: 'mdi-calendar-month', to: '/department-schedule' },
            { title: 'Bütünleme', icon: 'mdi-clipboard-check-outline', to: '/makeup-exams' },
            { title: 'Akademik Durum Analizi', icon: 'mdi-chart-bar', to: '/academic-analysis' },
        ]
    },
    {
        title: 'İlişik Kesme Talebi',
        icon: 'mdi-file-cancel-outline',
        children: [
            { title: 'İlişik Kesme Başvurusu', icon: 'mdi-file-remove-outline', to: '/clearance' },
        ]
    },
    {
        title: 'Staj Yönetim Sistemi',
        icon: 'mdi-briefcase-outline',
        children: [
            { title: 'Duyurular', icon: 'mdi-bullhorn-outline', to: '/internship/announcements' },
            { title: 'İlgili Mevzuatlar', icon: 'mdi-scale-balance', to: '/internship/regulations' },
            { title: 'Staj Başvuru', icon: 'mdi-file-send-outline', to: '/internship/apply' },
            { title: 'Tüm Staj Başvuruları', icon: 'mdi-folder-open-outline', to: '/internship/applications' },
            { title: 'Gerekli Dosyalar', icon: 'mdi-file-download-outline', to: '/internship/documents' },
            { title: 'Talepler', icon: 'mdi-message-text-outline', to: '/internship/requests' },
            { title: 'Staj Sonlandır', icon: 'mdi-check-circle-outline', to: '/internship/complete' },
            { title: 'Sık Sorulan Sorular', icon: 'mdi-help-circle-outline', to: '/internship/faq' },
        ]
    },
    {
        title: 'Burs Başvurusu',
        icon: 'mdi-wallet-outline',
        children: [
            { title: 'Vakıf Bursu Başvurusu', icon: 'mdi-hand-coin-outline', to: '/scholarship/foundation-apply' },
            { title: 'Vakıf Bursu Başvurularım', icon: 'mdi-format-list-bulleted', to: '/scholarship/foundation-list' },
            { title: 'Yemek Bursu Başvurusu', icon: 'mdi-food-outline', to: '/scholarship/meal-apply' },
            { title: 'Yemek Bursu Başvurularım', icon: 'mdi-format-list-checks', to: '/scholarship/meal-list' },
        ]
    },
    {
        title: 'Yemekhane',
        icon: 'mdi-silverware-fork-knife',
        to: '/cafeteria'
    },
    {
        title: 'Spor Sahaları Yönetimi',
        icon: 'mdi-soccer-field',
        children: [
            { title: 'Bakiye Yükle', icon: 'mdi-credit-card-plus-outline', to: '/sports/balance' },
            { title: 'Sahalar', icon: 'mdi-stadium-outline', to: '/sports/fields' },
            { title: 'Rezervasyonlarım', icon: 'mdi-calendar-check-outline', to: '/sports/reservations' },
        ]
    },
    {
        title: 'Kütüphane Borç Ödeme',
        icon: 'mdi-library-outline',
        to: '/library'
    },
    {
        title: 'Eğitim ve Kurs Yönetimi',
        icon: 'mdi-school-outline',
        children: [
            { title: 'Kurs Yönetimi', icon: 'mdi-certificate-outline', to: '/education/courses' },
            { title: 'Başvurularım', icon: 'mdi-clipboard-list-outline', to: '/education/applications' },
            { title: 'Yardım Dökümanı', icon: 'mdi-file-question-outline', to: '/education/help' },
        ]
    },
    {
        title: 'BYS Çıkış',
        icon: 'mdi-logout',
        to: '/'
    },

]

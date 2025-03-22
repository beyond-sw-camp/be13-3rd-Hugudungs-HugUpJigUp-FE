<template>
    <v-container>
        <v-row align="center">
            <v-col cols="6">
                <v-breadcrumbs :items="breadcrumbItems">
                    <template v-slot:title="{ item }">
                        {{ item.title.toUpperCase() }}
                    </template>
                </v-breadcrumbs>
            </v-col>

            <v-col cols="6" class="d-flex align-center" width="100px">
                <v-select v-model="selectedLocation" :items="locations" density="compact" class="me-2 select-field"
                    hide-details @change="handleSelectChange"></v-select>
                <v-text-field :loading="loading" append-inner-icon="mdi-magnify" density="compact"
                    label="검색할 내용을 입력하세요." variant="outlined" hide-details class="search-field"
                    @click:append-inner="onClick" @keyup.enter="onClick"></v-text-field>
                <v-btn variant="outlined" class="ms-2 navigate-button" @click="navigateToPage">작성</v-btn>
            </v-col>
        </v-row>

        <v-menu :location="menuLocation" v-model="showMenu">
            <v-list>
                <v-list-item v-for="(item, index) in selectItems" :key="index" :value="index"
                    @click="selectMenuItem(item)">
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>
    </v-container>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import type { BreadcrumbItem } from "vuetify/lib/components/VBreadcrumbs/VBreadcrumbs";

const selectedLocation = ref<string>('제목'); // Default value

const showMenu = ref(false);
const menuLocation = ref('end');

const breadcrumbItems = ref<BreadcrumbItem[]>([
    { title: 'Home', disabled: false, href: '/' },
    { title: 'Category', disabled: false, href: '/category' },
    { title: 'Current Page', disabled: true, href: '#' },
]);

const selectItems = ref<BreadcrumbItem[]>([
    { title: "Dashboard", disabled: false, href: "breadcrumbs_dashboard" },
    { title: "Link 1", disabled: false, href: "breadcrumbs_link_1" },
    { title: "Link 2", disabled: true, href: "breadcrumbs_link_2" },
]);

const locations = ['제목', '내용', '제목 + 내용', '작성자', '전체'];

const handleSelectChange = (value: string) => {
    console.log('Selected location:', value);
};

const selectMenuItem = (item: BreadcrumbItem) => {
    console.log('Selected menu item:', item);
    showMenu.value = false;
};

const loaded = ref(false);
const loading = ref(false);

function onClick() {
    loading.value = true;
    setTimeout(() => {
        loading.value = false;
        loaded.value = true;
    }, 2000);
}

const router = useRouter();

function navigateToPage() {
    router.push('/new-page');
}
</script>

<style scoped>
.d-flex {
    display: flex;
}

.align-center {
    align-items: center;
}

.me-2 {
    margin-right: 8px;
}

.ms-2 {
    margin-left: 8px;
}

.select-field {
    width: 150px;
}

.search-field {
    flex-grow: 1;
}

.navigate-button {
    min-width: 100px; /* Adjust button width */
}

:deep(.v-field__input) {
    min-height: 40px !important;
    padding-top: 0 !important;
    padding-bottom: 0 !important;
}
</style>

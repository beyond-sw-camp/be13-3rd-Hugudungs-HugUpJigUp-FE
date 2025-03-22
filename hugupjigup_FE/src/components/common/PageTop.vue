<template>
    <v-container>
        <v-row align="center">
            <!-- Breadcrumbs -->
            <v-col cols="6">
                <v-breadcrumbs :items="breadcrumbItems">
                    <template v-slot:title="{ item }">
                        {{ item.title.toUpperCase() }}
                    </template>
                </v-breadcrumbs>
            </v-col>

            <!-- Select Dropdown, Search Field, and Button -->
            <v-col cols="6" class="d-flex align-center" width="100px">
                <v-select v-model="selectedLocation" :items="locations" density="compact" class="me-2 select-field"
                    hide-details @change="handleSelectChange"></v-select>
                <v-text-field :loading="loading" append-inner-icon="mdi-magnify" density="compact"
                    label="검색할 내용을 입력하세요." variant="outlined" hide-details class="search-field"
                    @click:append-inner="onClick" @keyup.enter="onClick"></v-text-field>
                <!-- New Button -->
                <v-btn variant="outlined" class="ms-2 navigate-button" @click="navigateToPage">작성</v-btn>
            </v-col>
        </v-row>

        <!-- Menu (Optional) -->
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
import { useRouter } from "vue-router"; // Import Vue Router
import type { BreadcrumbItem } from "vuetify/lib/components/VBreadcrumbs/VBreadcrumbs";

// State for selected location
const selectedLocation = ref<string>('제목'); // Default value

// State for showing the menu
const showMenu = ref(false);
const menuLocation = ref('end');

// Breadcrumb items
const breadcrumbItems = ref<BreadcrumbItem[]>([
    { title: 'Home', disabled: false, href: '/' },
    { title: 'Category', disabled: false, href: '/category' },
    { title: 'Current Page', disabled: true, href: '#' },
]);

// Menu items
const selectItems = ref<BreadcrumbItem[]>([
    { title: "Dashboard", disabled: false, href: "breadcrumbs_dashboard" },
    { title: "Link 1", disabled: false, href: "breadcrumbs_link_1" },
    { title: "Link 2", disabled: true, href: "breadcrumbs_link_2" },
]);

// Locations for dropdown
const locations = ['제목', '내용', '제목 + 내용', '작성자', '전체'];

// Handle select change
const handleSelectChange = (value: string) => {
    console.log('Selected location:', value);
    // You can perform additional logic here with the selected value
};

// Handle menu item selection
const selectMenuItem = (item: BreadcrumbItem) => {
    console.log('Selected menu item:', item);
    showMenu.value = false;
};

const loaded = ref(false);
const loading = ref(false);

// Function to handle search click or enter key press
function onClick() {
    loading.value = true;
    setTimeout(() => {
        loading.value = false;
        loaded.value = true;
    }, 2000);
}

// Router instance for navigation
const router = useRouter();

// Function to navigate to another page
function navigateToPage() {
    router.push('/new-page'); // Replace '/new-page' with the desired route path
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

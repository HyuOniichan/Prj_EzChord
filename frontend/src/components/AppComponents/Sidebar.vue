<script setup>
import { ref } from 'vue';
import IconDoubleRightArrow from '../icons/IconDoubleRightArrow.vue';
import IconHome from '../icons/IconHome.vue';

const collapsed = ref(true); 

function toggleSidebar() {
    collapsed.value = !collapsed.value;
}

</script>

<template>

    <div class="relative">
        <Transition>
            <aside
                class="fixed top-16 right-0 z-30 h-screen transition-transform -translate-x-full sm:translate-x-0"
                :class="collapsed? 'w-16' : 'w-64'"
                aria-label="Sidebar">
                <button
                    class="absolute top-2 z-40 flex items-center justify-center rounded-md w-7 h-7 hover:bg-gray-100"
                    :class="collapsed? 'left-4' : 'left-2'"
                    @click="toggleSidebar()"
                >
                    <IconDoubleRightArrow :class="collapsed? 'rotate-180' : ''" />
                </button>
                <div class="h-full px-3 py-10 overflow-y-auto bg-gray-50 dark:bg-gray-800">
                    <ul class="space-y-2 font-medium">
                        <li>
                            <RouterLink to="/"
                                class="flex flex-row flex-nowrap items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <IconHome class="min-w-6" />
                                <span :class="collapsed? 'ms-6' : 'ms-3'">Home</span>
                            </RouterLink>
                        </li>
                    </ul>
                </div>
            </aside>
        </Transition>
    </div>

</template>

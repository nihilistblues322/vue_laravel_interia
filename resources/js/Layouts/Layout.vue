<template>
    <div>
        <header>
            <nav>
                <div class="space-x-4">
                    <Link :href="route('home')" class="nav-link">Home</Link>
                </div>
                <div class="space-x-4">
                    <Link :href="route('register')" class="nav-link">Register</Link>
                </div>
            </nav>
        </header>
        <main class="p-4">
            <slot />
        </main>
    </div>
</template>

<script setup>
import { Link, Head } from "@inertiajs/vue3";
</script>

<template>
  
    <div>
        <header class="bg-slate-400 text-white">
            <nav class="flex items-center justify-between p-4 mx-auto">
                <div class="space-x-4">
                    <Link href="/">Home</Link>
                    <Link href="/about">About</Link>
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

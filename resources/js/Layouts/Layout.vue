<template>
    <div>
        <header class="bg-slate-400 text-white">
            <nav class="flex items-center justify-between p-4 mx-auto">
                <div class="space-x-4">
                    <a href="/">Home</a>
                    <a href="/about">About</a>
                </div>
            </nav>
        </header>
        <main class="p-4">
            <slot />
        </main>
    </div>
</template>

<script setup></script>

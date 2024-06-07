<template>
    <Head>
        <title>Register</title>
    </Head>
    <h1 class="title">Register a new account</h1>
    <div class="w-2/4 mx-auto">
        <form @submit.prevent="submit">
            <div class="mb-6">
                <label for="">
                    Name
                    <input type="text" v-model="form.name" />
                    <small>{{ form.errors.name }}</small>
                </label>
            </div>
            <div class="mb-6">
                <label for="">
                    Email
                    <input type="text" v-model="form.email" />
                    <small>{{ form.errors.email }}</small>
                </label>
            </div>
            <div class="mb-6">
                <label for="">
                    Password
                    <input type="password" v-model="form.password" />
                    <small>{{ form.errors.password }}</small>
                </label>
            </div>
            <div class="mb-6">
                <label for="">
                    Password Confirmation
                    <input
                        type="password"
                        v-model="form.password_confirmation"
                    />
                </label>
            </div>
            <div>
                <p class="text-slate-600 mb-2">
                    Already a user? <a href="#" class="text-link">Login</a>
                </p>
                <button class="primary-btn" :disabled="form.processing">
                    Register
                </button>
            </div>
        </form>
    </div>
</template>

<script setup>
import { useForm } from "@inertiajs/vue3";

const form = useForm({
    name: null,
    email: null,
    password: null,
    password_confirmation: null,
});

const submit = () => {
    form.post(route("register"), {
        onError: () => {
            form.reset("password", "password_confirmation");
        },
    });
};
</script>

<style></style>

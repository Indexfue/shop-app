<script setup>
import HeaderLogo from './icons/HeaderLogo.vue'
import { RouterLink } from 'vue-router'
</script>

<template>
    <header>
        <div class="header-logo">
            <HeaderLogo />
        </div>
        <nav class="header-links">
            <div class="maximum-width">
                <div class="header-links--wrapper">
                    <div class="header-link--inner">
                        <router-link to="/" class="link">Главная</router-link>
                    </div>
                    <div class="header-link--inner">
                        <router-link to="/basket">Корзина</router-link>
                    </div>
                </div>
            </div>
        </nav>
    </header>
</template>

<style>

</style>
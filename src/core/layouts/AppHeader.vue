<script setup>
import HeaderLogo from './icons/HeaderLogo.vue'
</script>

<template>
    <header>
        <div class="header-logo">
            <HeaderLogo />
            <span class="header-logo--title">Shmot</span>
        </div>
        <nav class="header-links">
            <div class="maximum-width">
                <div class="header-links--wrapper">
                    <div class="header-link--inner">
                        <router-link to="/" class="link">Главная</router-link>
                    </div>
                    <div class="header-link--inner">
                        <router-link to="/basket" class="link">Корзина</router-link>
                    </div>
                </div>
            </div>
        </nav>
    </header>
</template>

<style scoped>
header {
    margin: 0 auto;
    width: 100%;
    background-color: transparent;
    z-index: 100;
    padding: 10px 0;
}

.header-logo {
    position: fixed;
    display: flex;
    align-items: center;
    width: 150px;
    left: 0;
    padding-left: 15px;
}

.header-logo--title {
    color:#000;
}

.header-links {
    background-color: transparent;
}

.header-links--wrapper {
    display: flex;
    justify-content: center;
    padding: 30px 100px;
}

.link {
    color: #000;
    text-decoration: none;
    position: relative;
    padding: 10px 50px;
}

.link::after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: 0;
    left: 50%;
    background-color: #000;
    transition: width 0.3s ease, left 0.3s ease;
}

.link:hover::after {
    width: 100%;
    left: 0;
}
</style>
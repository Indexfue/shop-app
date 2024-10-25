<template>
    <footer class="app-footer">
        <div class="footer-content">
        <div class="footer-links">
            <router-link to="#" class="link">О нас</router-link>
            <router-link to="#" class="link">Контакты</router-link>
            <router-link to="#" class="link">Политика конфиденциальности</router-link>
        </div>
        <div class="footer-info">
            <p>&copy; 2024 Shmot. Все права защищены.</p>
        </div>
        </div>
    </footer>
</template>

<style scoped>
footer {
    background-color: #f5f5f5;
    padding: 20px 0;
    margin-top: auto;
}

.footer-content {
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
}

.footer-links {
    display: flex;
    gap: 30px;
}

.link {
    color: #000;
    text-decoration: none;
    position: relative;
    padding: 5px 0;
}

.link::after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -2px;
    left: 50%;
    background-color: #000;
    transition: width 0.3s ease, left 0.3s ease;
}

.link:hover::after {
    width: 100%;
    left: 0;
}

.footer-info {
    text-align: right;
    font-size: 14px;
    color: #666;
}
</style>
  
<script>
    import { mapMutations } from 'vuex';
    
    export default {
        name: 'ProductCardDetail',
        props: {
            product: {
                type: Object,
                required: true,
            },
        },
        methods: {
            ...mapMutations(['ADD_TO_CART']),
            addToCart(product) {
                this.ADD_TO_CART(product)
            }
        }
    };
</script>

<template>
    <div class="product-detail-card">
        <div class="product-image-container">
            <img :src="product.image" alt="Product Image" class="product-image" />
        </div>
        <div class="product-info-container">
            <h2 class="product-title">{{ product.title }}</h2>
            <p class="product-description">{{ product.description }}</p>
    
            <div class="product-details">
                <p class="product-price">Цена: {{ product.price }} ₽</p>
                <p v-if="product.sku" class="product-sku">Артикул: {{ product.sku }}</p>
                <p v-if="product.brand" class="product-brand">Бренд: {{ product.brand }}</p>
                <p v-if="product.availability" class="product-availability">
                  Наличие: {{ product.availability ? 'В наличии' : 'Нет в наличии' }}
                </p>
                <button @click="addToCart(product)">Добавить в корзину</button>
            </div>
        </div>
    </div>
</template>
  
<style scoped>
.product-detail-card {
    display: flex;
    flex-wrap: wrap;
    border: 1px solid #ddd;
    border-radius: 8px;
    overflow: hidden;
    transition: box-shadow 0.3s;
    margin: 20px 0;
}

.product-image-container {
    flex: 1 1 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f9f9f9;
}

.product-image {
    width: 100%;
    max-width: 400px;
    height: auto;
    object-fit: cover;
}

.product-info-container {
    flex: 2 1 400px;
    padding: 20px;
}

.product-title {
    font-size: 24px;
    color: black;
    font-weight: bold;
    margin-bottom: 10px;
}

.product-description {
    font-size: 16px;
    color: black;
    margin-bottom: 15px;
}

.product-details {
    font-size: 16px;
    color: black;
}

.product-price {
    font-size: 20px;
    color: black;
    font-weight: bold;
    margin-top: 10px;
}

.product-sku, .product-brand, .product-availability {
    margin-top: 5px;
    color: black;
}
</style>
<script>
export default {
    name: 'ProductCard',
    props: {
        product: {
            type: Object,
            required: true,
        },
    },
}
</script>

<template>
    <div class="product-card">
        <img :src="product.image" alt="Product Image" class="product-image" />
        <div class="product-info">
            <h3 class="product-title">{{ product.title }}</h3>
            <p class="product-price">{{ product.price }} ₽</p>
        </div>
    </div>
</template>

<style scoped>
    .product-card {
        overflow: hidden;
        transition: box-shadow 0.3s;
    }

    .product-card:hover {
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }

    .product-image {
        width: 100%;
        height: 200px;
        object-fit: cover;
    }

    .product-info {
        padding: 15px;
        background-color: whitesmoke;
        color: black;
    }

    .product-title {
        font-size: 18px;
        margin: 0;
    }

    .product-price {
        font-size: 16px;
    }
</style>

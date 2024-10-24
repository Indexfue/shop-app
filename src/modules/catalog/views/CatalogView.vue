<script>
    import ProductCard from '../components/ProductCard.vue'

    export default {
        name: 'CatalogView',
        components: {
            ProductCard
        },
        data() {
            return {
            products: [
                {
                    title: 'Пример товара 1',
                    description: 'Описание товара 1',
                    price: 1200,
                    image: 'https://via.placeholder.com/200',
                },
                {
                    title: 'Пример товара 2',
                    description: 'Описание товара 2',
                    price: 2300,
                    image: 'https://via.placeholder.com/200',
                },
                {
                    title: 'Пример товара 3',
                    description: 'Описание товара 3',
                    price: 1500,
                    image: 'https://via.placeholder.com/200',
                },
                {
                    title: 'Пример товара 4',
                    description: 'Описание товара 4',
                    price: 1700,
                    image: 'https://via.placeholder.com/200',
                },
            ],
            };
        },
    };
</script>

<template>
    <div class="catalog-view">
        <div class="product-list">
            <ProductCard
                v-for="(product, index) in products"
                :key="index"
                :product="product"
            />
        </div>
    </div>
</template>
  
<style scoped>
    .catalog-view {
        width: 90%;
        margin: 0 auto;
    }

    .product-list {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
        gap: 5px;
    }
</style>
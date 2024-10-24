<script>
    import ProductDetailCard from '../components/ProductCardDetail.vue'

    export default {
        name: 'ProductDetailPage',
        components: {
            ProductDetailCard
        },
        props: ['id'],
        data() {
            return {
            product: null
            }
        },
        created() {
            const products = [
            {
                id: 1,
                title: 'Пример товара 1',
                description: 'Подробное описание товара 1',
                price: 1200,
                image: 'https://via.placeholder.com/400',
                sku: '1234567890',
                brand: 'Example Brand',
                availability: true,
            },
            {
                id: 2,
                title: 'Пример товара 2',
                description: 'Подробное описание товара 2',
                price: 2300,
                image: 'https://via.placeholder.com/400',
                sku: '9876543210',
                brand: 'Another Brand',
                availability: false,
            },
            {
                id: 3,
                title: 'Пример товара 3',
                description: 'Подробное описание товара 3',
                price: 1500,
                image: 'https://via.placeholder.com/400',
                sku: '5647382910',
                brand: 'Some Brand',
                availability: true,
            },
            ];

            this.product = products.find(p => p.id === parseInt(this.id));
        }
    }
</script>

<template>
    <div class="product-detail-page">
        <h1>Детальная информация о товаре</h1>
        <ProductDetailCard v-if="product" :product="product" />
        <p v-else>Товар не найден</p>
    </div>
</template>
  
<style scoped>
    .product-detail-page {
        width: 90%;
        margin: 0 auto;
    }
</style>
  
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
                    title: 'Кроссовки HUGO BOSS',
                    description: 'Мужские кроссовки от немецкого бренда Hugo Boss изготовлены из гладкой кожи и прочного текстиля. Дизайнеры украсили модель ярким контрастным логотипом. Широкая выступающая подошва с протектором не утяжеляет обувь и обеспечивает комфорт при ходьбе, а её передняя часть защищает мыс изделия.',
                    price: 39990,
                    image: '/src/assets/images/products/1.jpg',
                    sku: '1521516163',
                    brand: 'HUGO BOSS',
                    availability: true,
                },
                {
                    id: 2,
                    title: 'Перчатки HUGO BOSS',
                    description: 'Чёрные женские перчатки от HUGO BOSS изготовлены из натуральной нежнейшей кожи высокого качества. Классическую модель дизайнеры украсили фактурным логотипом. Современные перчатки на уютной флисовой подкладке адаптированы к пользованию сенсорными устройствами.',
                    price: 13990,
                    image: '/src/assets/images/products/2.jpg',
                    sku: '12958219509',
                    brand: 'HUGO BOSS',
                    availability: false,
                },
                {
                    id: 3,
                    title: 'Френч Add',
                    description: 'Однобортный тренч от итальянского бренда Add изготовлен из лёгкого дышащего габардина с водоотталкивающей пропиткой. Дизайнеры дополнили модель двумя боковыми карманами и съёмным поясом. Внутренний карман Wave Shielding Pocket для мобильного телефона защищает от электромагнитного излучения.',
                    price: 23990,
                    image: '/src/assets/images/products/3.jpg',
                    sku: '1234567890',
                    brand: 'Add',
                    availability: true,
                },
                {
                    id: 4,
                    title: 'Кроссовки Versace',
                    description: 'Мужские кроссовки от немецкого бренда Hugo Boss изготовлены из гладкой кожи и прочного текстиля. Дизайнеры украсили модель ярким контрастным логотипом. Широкая выступающая подошва с протектором не утяжеляет обувь и обеспечивает комфорт при ходьбе, а её передняя часть защищает мыс изделия.',
                    price: 57990,
                    image: '/src/assets/images/products/4.jpg',
                    sku: '14125613166',
                    brand: 'Versace',
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
        color: black;
        width: 90%;
        margin: 0 auto;
    }
</style>
  
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
                    id: 1,
                    title: 'Кроссовки HUGO BOSS',
                    description: 'Женские кроссовки от немецкого бренда Hugo Boss изготовлены из гладкой кожи и прочного текстиля. Дизайнеры украсили модель ярким контрастным логотипом. Широкая выступающая подошва с протектором не утяжеляет обувь и обеспечивает комфорт при ходьбе, а её передняя часть защищает мыс изделия.',
                    price: 39990,
                    image: '/src/assets/images/products/1.jpg',
                },
                {
                    id: 2,
                    title: 'Перчатки HUGO BOSS',
                    description: 'Чёрные женские перчатки от HUGO BOSS изготовлены из натуральной нежнейшей кожи высокого качества. Классическую модель дизайнеры украсили фактурным логотипом. Современные перчатки на уютной флисовой подкладке адаптированы к пользованию сенсорными устройствами.',
                    price: 13990,
                    image: '/src/assets/images/products/2.jpg',
                },
                {
                    id: 3,
                    title: 'Френч Add',
                    description: 'Однобортный тренч от итальянского бренда Add изготовлен из лёгкого дышащего габардина с водоотталкивающей пропиткой. Дизайнеры дополнили модель двумя боковыми карманами и съёмным поясом. Внутренний карман Wave Shielding Pocket для мобильного телефона защищает от электромагнитного излучения.',
                    price: 23990,
                    image: '/src/assets/images/products/3.jpg',
                },
                {
                    id: 4,
                    title: 'Кроссовки Versace',
                    description: 'Женские кроссовки от немецкого бренда Hugo Boss изготовлены из гладкой кожи и прочного текстиля. Дизайнеры украсили модель ярким контрастным логотипом. Широкая выступающая подошва с протектором не утяжеляет обувь и обеспечивает комфорт при ходьбе, а её передняя часть защищает мыс изделия.',
                    price: 57990,
                    image: '/src/assets/images/products/4.jpg',
                },
            ],
            };
        },
    };
</script>

<template>
    <div class="catalog-view">
        <div class="product-list">
            <router-link
                v-for="(product, index) in products"
                :key="index"
                :to="{ name: 'product_detail', params: { id: product.id } }"
            >

            <ProductCard :product="product" />

            </router-link>
        </div>
    </div>
</template>
  
<style scoped>
    .catalog-view {
        width: 90%;
        margin: 0 auto;
        margin-bottom: 20px;
    }

    .product-list {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
        gap: 5px;
    }
</style>
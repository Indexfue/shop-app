<script>
    import { mapGetters, mapMutations } from 'vuex'

    export default {
        name: 'cart',
        computed: {
            ...mapGetters(['cartItems', 'cartTotal'])
        },
        methods: {
            ...mapMutations(['REMOVE_FROM_CART', 'CLEAR_CART']),
            removeFromCart(productId) {
            this.REMOVE_FROM_CART(productId)
            },
            clearCart() {
            this.CLEAR_CART()
            }
        }
    }
</script>

<template>
    <div class="cart-view">
        <h1 style="color: black;">Корзина</h1>
        <div v-if="cartItems.length === 0" class="empty-cart">
            Ваша корзина пуста.
        </div>
        <div v-else class="cart-list">
            <div
            v-for="(item, index) in cartItems"
            :key="index"
            class="cart-item"
            >
            <img :src="item.image" alt="Product Image" class="cart-item-image" />
            <div class="cart-item-info">
                <h3 style="color: black;">{{ item.title }}</h3>
                <p style="color: black;">Цена: {{ item.price }} ₽</p>
                <p style="color: black;">Количество: {{ item.quantity }}</p>
                <button @click="removeFromCart(item.id)">Удалить</button>
            </div>
            </div>
            <div class="cart-total">
            <p>Общая стоимость: {{ cartTotal }} ₽</p>
            </div>
        </div>
    </div>
</template>
  
<style scoped>
    .cart-view {
        width: 90%;
        margin: 0 auto;
    }

    .empty-cart {
        font-size: 18px;
        text-align: center;
        color: black;
    }

    .cart-list {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    .cart-item {
        display: flex;
        align-items: center;
        border-bottom: 1px solid #ddd;
        padding: 10px 0;
    }

    .cart-item-image {
        width: 100px;
        height: auto;
        margin-right: 20px;
    }

    .cart-item-info h3 {
        margin: 0;
        color: black;
    }

    .cart-total {
        font-size: 18px;
        color: black;
        font-weight: bold;
        text-align: right;
    }
</style>
  
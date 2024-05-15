<script>
import axios from 'axios'
import ItemCart from '../../components/ItemCart.vue'
export default {
  components: { ItemCart },
  data() {
    return {
      cartItems: {}
    }
  },
  computed: {
    totalPrice() {
      return this.cartItems.reduce((sum, item) => {
        return sum + Number(item.price)
      }, 0)
    }
  },
  async created() {
    const response = await axios.get(
      'https://shopping-cart-web-server.vercel.app/api/orders/user/1'
    )
    let data = Object.assign(
      {},
      ...response.data.map((result) => ({
        cart_items: result.products
      }))
    )
    this.cartItems = data.cart_items
  },
  methods: {
    async removeItemCart(product) {
      await axios.delete(
        `https://shopping-cart-web-server.vercel.app/api/orders/user/1/remove/${product}`
      )
      this.cartItems = this.cartItems.filter((item) => item.code !== product)
    }
  }
}
</script>

<template>
  <div>
    <div id="page-wrap">
      <h1>Shopping Cart</h1>
      <ItemCart
        v-for="item in cartItems"
        :key="item.id"
        :item="item"
        v-on:remove-item="removeItemCart($event)"
      />
      <h3 id="total-price">Total : {{ totalPrice }} USD</h3>
      <button id="checkout-button">Checkout</button>
    </div>
  </div>
</template>

<style scoped>
h1 {
  border-bottom: 1px solid #41b883;
  margin: 0;
  margin-top: 16px;
  padding: 16px;
}
#total-price {
  padding: 16px;
  text-align: right;
}
#checkout-button {
  width: 100%;
}
</style>

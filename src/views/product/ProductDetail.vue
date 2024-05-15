<script>
import NotFound from '@/components/NotFound.vue'
import axios from 'axios'
export default {
  components: { NotFound },
  data() {
    return {
      product: {},
      notif: false
    }
  },
  async created() {
    const code = this.$route.params.id
    const response = await axios.get(
      `https://shopping-cart-web-server.vercel.app/api/products/${code}`
    )
    this.product = response.data
  },
  methods: {
    async addToCart(product) {
      await axios.post('https://shopping-cart-web-server.vercel.app/api/orders/user/1/add', {
        code: product
      })
      this.notif = true
    }
  }
}
</script>

<template>
  <div>
    <div id="page-wrap" v-if="product">
      <h4 v-if="notif" class="notif">Item added successfully</h4>
      <div id="img-wrap">
        <img
          :src="`https://shopping-cart-web-server.vercel.app${product.imageUrl}`"
          alt="{{ product.name }}"
        />
      </div>
      <div id="product-details">
        <h1>{{ product.name }}</h1>
        <h3 id="price">{{ product.price }} USD</h3>
        <p>Average Rating : {{ product.averageRating }}</p>
        <button id="add-to-cart" @click="addToCart(product.code)">Add to Cart</button>
        <p>{{ product.description }}</p>
      </div>
    </div>
    <NotFound v-else />
  </div>
</template>

<style scoped>
#page-wrap {
  margin-top: 16px;
  padding: 16px;
  max-width: 600px;
}

#img-wrap {
  text-align: center;
}

img {
  width: 400px;
}

#product-details {
  padding: 16px;
  position: relative;
}

#add-to-cart {
  width: 100%;
}

#price {
  position: absolute;
  top: 24px;
  right: 16px;
}
.notif {
  text-align: center;
  color: white;
  background-color: #41b883;
  padding: 3%;
  border-radius: 8px;
}
</style>

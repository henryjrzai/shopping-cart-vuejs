<template>
  <div>
    <div id="page-wrap">
      <div class="grid-wrap">
        <ProductItem 
          v-for="product in products"
          :key="product.id"
          :product="product"
        />
      </div>
    </div>
  </div>
</template>

<script>
// import { products } from '../../data-seed';
import axios from 'axios';
import ProductItem from '../../components/ProductItem.vue';

export default {
  components: {ProductItem},
  data() {
    return {
      products : []
    };
  },
  async created() {
    const response = await axios.get("https://shopping-cart-web-server.vercel.app/api/products");
    this.products = response.data;
  },
}
</script>

<style scoped>
.grid-wrap {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 16px;
}


</style>
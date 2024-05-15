<script>
export default {
  props: ['item']
}
</script>

<template>
  <div class="product-container">
    <img
      class="product-image"
      :src="`https://shopping-cart-web-server.vercel.app${item.imageUrl}`"
      alt="{{ item.name }}"
    />
    <div class="details-wrap">
      <h3>{{ item.name }}</h3>
      <p>{{ item.price }} USD</p>
    </div>
    <button class="remove-button" @click="$emit('remove-item', item.code)">Remove</button>
  </div>
</template>

<style scoped>
.product-container {
  align-content: center;
  border-bottom: 1px solid #ddd;
  display: flex;
  padding: 16px;
  width: 100%;
}
.product-image {
  flex: 1;
  height: 100px;
  max-width: 100px;
}
.details-wrap {
  padding: 0 16px;
  flex: 3;
}
.remove-button {
  flex: 1;
  margin: auto;
}
</style>

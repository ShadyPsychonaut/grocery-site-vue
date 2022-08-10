<script>
import ProductCard from "../components/ProductCard.vue";

export default {
  props: ["inventory", "addToCart"],
  components: { ProductCard },
};
</script>

<template>
  <main class="wrapper">
    <h1>Products</h1>

    <div class="card-container">
      <ProductCard
        v-for="product in inventory.slice(0, 6)"
        :key="product.id"
        :product="product"
        :addToCart="addToCart"
        class="card"
      />
    </div>
  </main>
</template>

<style scoped></style>

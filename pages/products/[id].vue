<template>
  <Head>
    <Title> Dojo | Product: {{ product.title }} </Title>
    <Meta name="Description" :content="product.description" />
  </Head>
  <ProductDetails :product="product" />
  <!-- <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Maiores impedit dolores omnis neque aperiam culpa itaque ducimus, veritatis numquam. 
    Placeat! </p> -->
</template>

<script setup>
// import { useRoute } from '@nuxtjs/composition-api';

// export default{
//   computed:{
//     id(){
//       return this.$route.params.id
//     }
//   }
// }

const route  = useRoute()
const id = route.params.id

const uri = 'https://fakestoreapi.com/products/' + id
const { data:product } = await useFetch(uri,{ key: id })

  if(!product){
    throw createError({ statusCode: 404, statusMessage: 'Product Not Found' , fatal:true })
  }
    
  definePageMeta({
    layout: 'products'
  })
</script>

<style>

</style>
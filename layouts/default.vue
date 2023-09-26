<template>
    <div> 
      <header class="shadow-sm bg-white">
          <nav class="container mx-auto p-4 flex justify-between"> 
              <NuxtLink to="/" class="font-bold"> <h1> Nuxt Dojo </h1> </NuxtLink>
              <ul class="flex gap-4">
                  <li> <NuxtLink to="/"> <h1> Home </h1> </NuxtLink> </li>
                  <li> <NuxtLink to="/about"> <h1> About </h1> </NuxtLink> </li>
                  <li> <h1> <NuxtLink to="/products" class="btn"> Products  </NuxtLink> </h1> </li>
              </ul>
          </nav>
      </header>
      <div class="container mx-auto p-4">
      <slot />
    </div>
    </div>
  </template>

<style  scoped>
    .router-link-exact-active{
        color: #12b488;
    }
</style>

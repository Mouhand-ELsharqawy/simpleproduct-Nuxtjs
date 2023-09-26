<template>
    <div> 
      <header class="shadow-sm bg-white">
          <nav class="container mx-auto">
              <NuxtLink to="/" class="font-bold"> <h1> Nuxt Dojo </h1> </NuxtLink>
              
          </nav>
      </header>
      <div class="container mx-auto p-4">
      <slot />
    </div>
    <footer class="container mx-auto">
        <ul>
            <li> <NuxtLink to="/"> <h1> Home </h1> </NuxtLink> </li>
            <li> <NuxtLink to="/about"> <h1> About </h1> </NuxtLink> </li>
            <li> <NuxtLink to="/products"> <h1> Products </h1> </NuxtLink> </li>
        </ul>
    </footer>
    </div>
  </template>

<style  scoped>
    .router-link-exact-active{
        color: #12b488;
    }
</style>

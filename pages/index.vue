<template>
    <h2>Home</h2>
      <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi facilis dolore ipsam 
          nesciunt numquam laboriosam nihil molestiae vero esse reiciendis praesentium, totam, 
          et officia, officiis molestias tempora at. Sapiente beatae assumenda porro magnam accusamus
           qui sequi iusto. Vitae, corrupti neque recusandae sit autem pariatur maiores labore,
            dignissimos odit minus earum. </p>
</template>

<script setup>
    definePageMeta({
        layout: 'default'
    })
    useHead({
        title: 'Dojo Home',
        meta: [
            { name: 'home description', content: 'every thing about dojo home'}
        ]
    })
</script>

<style scoped>
h2{
    margin-bottom: 20px;
    font-size: 36px;
}
p{
    margin: 20px 0;
}

</style>
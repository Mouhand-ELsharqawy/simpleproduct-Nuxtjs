<template>
    <div> 
      <h2>About</h2>
      <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi facilis dolore ipsam 
          nesciunt numquam laboriosam nihil molestiae vero esse reiciendis praesentium, totam, 
          et officia, officiis molestias tempora at. Sapiente beatae assumenda porro magnam accusamus
           qui sequi iusto. Vitae, corrupti neque recusandae sit autem pariatur maiores labore,
            dignissimos odit minus earum. </p>
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem earum provident 
            sit obcaecati dolor rem consequuntur illo alias beatae, laborum dolore, assumenda 
            doloremque vel sint eos soluta delectus velit. Esse tempora, eligendi similique aut ad 
            impedit quia fugiat accusamus incidunt fugit error sapiente dignissimos nemo. Enim, 
            aliquam, dolores libero error pariatur animi quis minima omnis autem aperiam facilis 
            eos dignissimos rerum non quibusdam ad inventore eaque dicta molestiae culpa doloremque
             reiciendis qui doloribus ab. Ipsa provident iure minus necessitatibus alias? Iure nisi 
             repellendus fugit sit dignissimos quaerat earum libero fugiat, modi magnam at, 
             accusantium provident neque similique facilis odio facere. Iste reprehenderit at vitae 
             eius ab pariatur quas tempore quo harum soluta similique possimus labore optio ipsam, 
             eveniet, aliquam illo recusandae asperiores quisquam repellendus incidunt nemo? Sunt, 
             obcaecati! Molestias velit accusantium, voluptatibus repudiandae, natus dicta
              perspiciatis laborum repellat mollitia tenetur nobis harum aut beatae, aliquam minus 
              et rerum maxime adipisci? Debitis aperiam quibusdam tempore voluptatum quaerat beatae 
              ullam porro quam laboriosam sunt omnis excepturi labore dolorem sint rerum soluta 
              distinctio velit delectus incidunt, numquam minima ad, nemo enim? Dignissimos soluta 
              non vel assumenda cum neque cumque dolorem sequi, quia, dolore quasi distinctio alias 
              hic praesentium dolorum incidunt expedita. Quos facilis ipsa quas. Excepturi 
              voluptates veritatis asperiores iure velit natus doloribus? Officia earum fuga vel 
              quae ipsum quam explicabo nihil doloribus, accusamus possimus, repellendus maxime ut 
              quia voluptatem quod fugit corrupti repellat facere reiciendis cum. Sit eius dolore, 
              perspiciatis non necessitatibus expedita voluptates iusto hic fugit sequi sint error 
              quisquam vel tenetur? Quam quo accusantium impedit libero possimus? Corrupti magnam 
              exercitationem quis sit dolores facilis! Voluptate delectus ab, ipsam nemo obcaecati 
              iusto perferendis itaque recusandae doloribus. Nesciunt eligendi earum, vitae, natus 
              ea delectus architecto doloremque repellat veritatis dignissimos iusto nostrum, 
              ducimus sed eius dolorem mollitia voluptatem. Illum porro magni eaque eum. </p>
    </div>
    <div> {{ data }} </div>
  </template>
  
  <script setup>
//   const { data } = await useFetch('/api/data',{
//     method:'POST',
//     body:{name2: 'max',age:33}
//   })
    const { data } = await useFetch('/api/data')
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
export default defineEventHandler( async (event)=>{
    // const { name } = useQuery(event)
    // const { name2 , age } = await useBody(event)
    const { data } = await $fetch('https://api.currencyapi.com/v3/latest')
    return data 
    // {
        // message: `hello to my project! your second name ${name2} and your age ${age} `
        // message: ` hello to my project`

    // }
})
<template src='./template.html'>
  
</template>

<script>
export default {
    mounted(){
        this.goTop()
    },
    methods:{
        goTop(){
            document.documentElement.scrollTop = 0;
        }
    }
}
</script>

<style>

</style>
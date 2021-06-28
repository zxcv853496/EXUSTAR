<template src='./template.html'>
  
</template>

<script>
export default {
    data(){
        return{
            pc : true,
            rotate:[false,false,false],
            footer: [
                {
                    id:0,
                    show:'false'
                },
                {
                    id:1,
                    show:'false'
                },
                {
                    id:2,
                    show:'false'
                },
            ]
        }
    },
    created(){
        console.log(123)
        var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        if(width<=992){
            console.log('mobile')
            this.pc = false
        }
    },
    mounted(){
        for(let i=0 ; i < this.footer.length ; i++){
            console.log(i)
            this.openContent(i)
        }
    },
    methods:{
        openContent(index){
            console.log(this.footer[index].show)
            this.rotate[index] =! this.rotate[index]
            this.footer[index].show =! this.footer[index].show
        }
    }
}
</script>

<style>

</style>
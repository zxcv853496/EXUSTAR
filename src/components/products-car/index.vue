<template src='./template.html'>
  
</template>

<script>
import carousel from 'vue-owl-carousel'
//vue-owl-carousel.js 被修改過 9318行 next price
export default {
    components: { carousel },
    data(){
        return{
            item:4
        }
    },
    computed:{
        main_data(){
            return{
                bicycle_data:[
                    {
                        img:require('../../../public/img/bicycle-1.png'),
                        content:'E-PM235',
                        price:'$1,500',
                        description:'產品說明簡述最多只會顯示一行........',
                        
                    },
                    {
                        img:require('../../../public/img/bicycle-2.png'),
                        content:'E-PM235',
                        price:'$1,500',
                        description:'產品說明簡述最多只會顯示一行........',
                    },
                    {
                        img:require('../../../public/img/bicycle-3.png'),
                        content:'E-PM235',
                        price:'$1,500',
                        description:'產品說明簡述最多只會顯示一行........',
                    },
                    {
                        img:require('../../../public/img/bicycle-4.png'),
                        content:'E-PM235',
                        price:'$1,500',
                        description:'產品說明簡述最多只會顯示一行........',
                    },
                ],
                motorcycle_data:[
                    {
                        img:require('../../../public/img/moto-1.png'),
                        content:'E-SBM380-BKBL',
                        price:'$1,500',
                        description:'產品說明簡述最多只會顯示一行........',
                        
                    },
                    {
                        img:require('../../../public/img/moto-2.png'),
                        content:'E-MJ 806 ',
                        price:'$1,500',
                        description:'產品說明簡述最多只會顯示一行........',
                        
                    },
                    {
                        img:require('../../../public/img/moto-3.png'),
                        content:'E-CJ104',
                        price:'$1,500',
                        description:'產品說明簡述最多只會顯示一行........',
                        
                    },
                    {
                        img:require('../../../public/img/moto-4.png'),
                        content:'E-PM235',
                        price:'$1,500',
                        description:'產品說明簡述最多只會顯示一行........',
                        
                    },
                ]
            }
        }, 
    },
    created(){
        var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        if(width<=768){
            this.item = 3
        }
        if(width<=576){
            this.item = 2
        }
        if(width<=450){
            this.item = 1
        }
    }
}
</script>

<style>

</style>
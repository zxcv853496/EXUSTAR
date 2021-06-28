<template src='./template.html'>
  
</template>

<script>
import carousel from 'vue-owl-carousel'
//vue-owl-carousel 的js被修改過
export default {
    components: { carousel },

    computed:{
        main_data(){
            return[
                    {
                        img:require('../../../public/img/banner.jpg'),
                    },
                    {
                        img:require('../../../public/img/banner.jpg'),
                    },

                    {
                        img:require('../../../public/img/banner.jpg'),
                    }
            ]
        }
    }
}
</script>

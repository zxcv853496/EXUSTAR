<template>
  <div class="home">
    <Fixedshop/>
    <Swiper />
    <div class="section1">
      <div class="top">
        <div class="content">
          五月特賣活動
        </div>
        <div class="content">
          使用優惠代碼MOM20TW，可享母親節系列8折優惠，<router-link to="/">立即選購</router-link>
        </div>
      </div>
      <div class="bottom">
        <h2>EXUSTAR   PERFORMANCE  IN  MOTION </h2>
        <p>御風展翼的淬鍊戰靴隆重登場，帶來不同以往的舒適體驗。</p>
        <div class="button-container">
          <button>
            選購男款系列
          </button>
          <button>
            選購女款系列
          </button>
        </div>
      </div>
    </div>
    <div class="section2">
      <div class="video-container">
        <div class="video-banner">
          <div  id="Player"></div>
        </div>
        <div class="cover top"></div>
        <div class="cover bottom"></div>
      </div>
    </div>
    <div class="section3">
      <h3>流行趨勢</h3>
      <div class="container">
        <div class="content" v-for="item in products" :key="item.index">
          <img :src="item.img" alt="">
          <div class="sub-content">
            <p>{{item.content}}</p>
            <button>更多</button>
          </div>
        </div>
      </div>
    </div>
    <div class="section4">
      <h3>精選商品</h3>
      <div class="container">
        <img src='../../public/img/product-big.jpg' alt="">
        <div class="content">
          <p>新品到貨</p>
          <h4>EXUSTAR STILL</h4>
          <button>更多</button>
        </div>
      </div>
    </div>
    <Products />
  </div>
</template>

<script>
import Swiper from '../components/swiper/index.vue'
import Products from '../components/products-car/index.vue'
import Fixedshop from '../components/fixedshop/index.vue'

export default {
  name: 'Home',
  data(){
    return{
      products:[
        {
          img:require('../../public/img/product-1.jpg'),
          content:'Jackets  商品組合',
        },
        {
          img:require('../../public/img/product-2.jpg'),
          content:'Exustar Bicycle  商品類別',
        },
      ]  
    }
  },
  components: {
    Swiper,
    Products,
    Fixedshop,
  },
  beforeCreate(){
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScript = document.getElementsByTagName('script')[0];
    firstScript.parentNode.insertBefore(tag, firstScript);
  },
  mounted(){

    let player
    console.log(player)
    if(window.YT){
      console.log('success page')
      player = new window.YT.Player('Player',{
        videoId: '2E8H4breJWk',
        playerVars:{ 
          autoplay:0,
          controls:0,
          showinfo:1,
          loop:1,
          playlist:'2E8H4breJWk',
          fs:0,
          iv_load_policy:3,
          modestbranding:1,
          listType:0,
          rel:0
        },
        events: {
          onReady: function(e) {
            e.target.mute();      //播放時靜音
            e.target.playVideo(); //強制播放(手機才會自動播放，但僅限於Android)
          }
        }
      })
    }
    window.onYouTubeIframeAPIReady =
    function() {
      console.log('success');
      player = new window.YT.Player('Player',{
        videoId: '2E8H4breJWk',
        playerVars:{ 
          autoplay:0,
          controls:0,
          showinfo:1,
          loop:1,
          playlist:'2E8H4breJWk',
          fs:0,
          iv_load_policy:3,
          modestbranding:1,
          listType:0,
          rel:0
        },
        events: {
          onReady: function(e) {
            e.target.mute();      //播放時靜音
            e.target.playVideo(); //強制播放(手機才會自動播放，但僅限於Android)
          }
        }
      })
    }
  },
  methods:{
    playVideo(){
      console.log('播放')
      document.getElementById('Player').play()
    }
  }
}
</script>

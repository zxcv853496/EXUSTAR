<template>
  <div class="membercenter">
      <Pagenationtopimg />
      <Pagenationtop title="會員中心" path="MemberCenter"/>
      <div class="main-container">
          <div class="left">
              <div class="title">
                  會員中心
              </div>
              <div class="content-container">
                  <div class="content active">
                      會員資料
                  </div>
                  <div class="content">
                      修改密碼
                  </div>
                  <div class="content">
                      歷史訂單
                  </div>
                  <div class="content">
                      我的折價券
                  </div>
                  <div class="content">
                      我的收藏
                  </div>
              </div>
          </div>
          <div class="right">
              <div class="title">
                  會員資料
              </div>
              <hr>
              <div class="content-container">
                  <div class="content">
                      <span>*</span>
                      <span>會員資料</span>
                      <label>A0125854652</label>
                  </div>
                  <div class="content">
                      <span>*</span>
                      <span>註冊手機</span>
                      <label>0911-999-999</label>
                  </div>
                  <div class="content connection">
                      <span>*</span>
                      <span>聯絡人</span>
                      <label>EXUSTAR</label>
                  </div>
                  <div class="content radio">
                      <span>*</span>
                      <span>性別</span>
                      <div class="radio-container">
                        <span>
                            <input type="radio" v-model="picked" id="boy" value="boy">
                        男生</span>
                        <span>
                            <input type="radio" v-model="picked" id="girl" value="girl">女生</span>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import Pagenationtopimg from '../../components/pagenationimg/index.vue'
import Pagenationtop from "../../components/pagenationtop/index.vue"

export default {
    data(){
        return{
            picked:'boy'
        }
    },
  components:{
    Pagenationtopimg,
    Pagenationtop,
  },
  props:[
    'closeLogin'
  ],
  mounted(){
      this.closeLogin()
  },
}
</script>

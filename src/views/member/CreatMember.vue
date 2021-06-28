<template>
  <div class="creatmember">
      <Pagenationtopimg />
      <Pagenationtop title="會員註冊" path="creatmember" />
      <div class="main-container">
        <div class="content-container">
          <div class="top-title">
            <div class="canvas"></div> <p>我們將發送手機驗證碼至您的手機內</p>
          </div>
          <div class="content one">
            <span class="title"><span class="after">*</span>驗證手機</span>
            <div class="sub-container"></div>
            <input class="input" type="text" placeholder="請輸入手機號碼">
            <button>
              獲取手機號碼
            </button>
          </div>
          <div class="content two">
            <span class="title"><span class="after">*</span>簡訊驗證</span>
            <input class="input" placeholder="請輸入驗證碼" type="text">
            <span class="a"><span class="after">*</span>收不到驗證碼.重發</span>
          </div>
          <div class="content">
            <span class="title"><span class="after">*</span>設定新密碼</span>
            <input class="input" type="text" placeholder="請輸入6-20碼英數字">
          </div>
          <div class="content">
            <span class="title"><span class="after">*</span>確認新密碼</span>
            <input type="text" class="input" placeholder="請輸入6-20碼英數字">
          </div>
          <div class="content">
            <span class="title"><span class="after">*</span>聯絡人</span>
            <input type="text" class="input" placeholder="請輸入聯絡人">
          </div>
          <div class="content">
            <span class="title">連絡電話</span>
            <input type="text" class="input" placeholder="請輸入市話或手機(例:0911999999、04-1234567)">
          </div>
          <div class="content">
            <span class="title"><span class="after">*</span>電子信箱</span>
            <input type="text" class="input" placeholder="請輸入電子信箱">
          </div>
          <div class="content address">
            <span class="title"><span class="after">*</span>聯絡地址</span>
            <div class="select-container">
              <select>
                <option selected>
                  請選擇
                </option>
              </select>
              <select>
                <option selected>
                  請選擇
                </option>
              </select>
              <select>
                <option selected>
                  請選擇
                </option>
              </select>
            </div>
            <input type="text" class="input" placeholder="請輸入詳細地址">
          </div>
          <div class="content number">
            <span class="title"><span class="after">*</span>驗證碼</span>
            <div class="sub-container">
              <input type="text" class="input" placeholder="請輸入驗證碼">
              <div class="number">
                <img src="../../../public/img/creatmember/number.jpg" alt="">
              </div>
              <button>
                <img src="../../../public/img/creatmember/replay.png" alt="">
              </button>
            </div>
          </div>
        </div>
        <div class="check">
          <router-link to="/">
              確定
          </router-link>
        </div>
      </div>
  </div>
</template>

<script>
import Pagenationtopimg from '../../components/pagenationimg/index.vue'
import Pagenationtop from "../../components/pagenationtop/index.vue"

export default {
  components:{
    Pagenationtopimg,
    Pagenationtop,
  }
}
</script>

<style>

</style>
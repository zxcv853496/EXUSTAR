<template>
  <div class="membercenter">
    <Pagenationtopimg />
    <Pagenationtop title="會員中心" path="MemberCenter" />
    <div class="main-container">
      <div class="left">
        <div class="title">會員中心</div>
        <div class="content-container">
          <div class="content"
          v-for="(item,item_index) in side_data"
          :key="item.index"
          :class="{active: activeindex === item_index}"
          @click="sideTo(item_index)">{{ item }}</div>
        </div>
      </div>
      <template
      v-if ="activeindex === 0">
        <div class="right">
          <div class="title">會員資料</div>
          <hr />
          <div class="content-container">
            <div class="content between">
              <span class="sub-title w-35">
                  <span class="red">*</span>
                  會員資料
              </span>
              <label>A0125854652</label>
            </div>
            <div class="content">
              <span class="sub-title w-35">
                  <span class="red">*</span>
                  註冊手機
              </span>
              <label>0911-999-999</label>
            </div>
            <div class="content connection">
              <span class="sub-title mb-10" >
                  <span class="red">*</span>
              聯絡人</span>
              <label>EXUSTAR</label>
            </div>
            <div class="content radio">
              <span class="sub-title mb-10">性別</span>
              <div class="radio-container">
                <span>
                  <input type="radio" v-model="picked" id="boy" value="boy" />
                  男生</span
                >
                <span>
                  <input
                    type="radio"
                    v-model="picked"
                    id="girl"
                    value="girl"
                  />女生</span
                >
              </div>
            </div>
            <div class="content">
              <span class="sub-title mb-10">
                  <span class="red">*</span>
                  生日</span>
              <label class="gray">日期選擇器(還沒做)</label>
            </div>
            <div class="content connection">
              <span class="sub-title mb-10">連絡電話</span>
              <input
                type="text"
                placeholder="請輸入市話或手機(例:0911999999、04-1234567)"
              />
            </div>
            <div class="content">
              <span class="sub-title mb-10">
                  <span class="red">*</span>
                  電子信箱</span>
              <input class="input" type="text" placeholder="EXUSTAR@gmail.com"/>
            </div>
            <div class="content address">
              <span class="sub-title mb-10">
                <span class="red">*</span>
                聯絡地址
              </span>
              <div class="select-container grow">
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
                <select class="grow">
                  <option selected>
                    請選擇
                  </option>
                </select>
              </div>
              <input class="input" type="text" placeholder="請輸入詳細地址"/>
            </div>
            <div class="content number">
              <span class="sub-title mb-10">
              <span class="red">*</span>
              驗證碼</span>
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
          <div class="button-container">
            <button>
              取消
            </button>
            <button>
              確認修改
            </button>
          </div>
        </div>   
      </template>
      <template
      v-if ="activeindex === 1">
        <div class="right">
          <div class="title">修改密碼</div>
          <hr>
          <div class="button-container">
            <button>
              取消
            </button>
            <button>
              確認修改
            </button>
          </div>
        </div>
      </template>
      <template
      v-if ="activeindex === 2">
        <div class="right">
          <div class="title">歷史訂單</div>
          <hr>
        </div>

      </template>
      <template
      v-if ="activeindex === 3">
        <div class="right">
          <div class="title">我的折價券</div>
          <hr>
        </div>

      </template>
      <template
      v-if ="activeindex === 4">
        <div class="right">
          <div class="title">我的收藏</div>
          <hr>
        </div>

      </template>
    </div>
  </div>
</template>

<script>
import Pagenationtopimg from "../../components/pagenationimg/index.vue";
import Pagenationtop from "../../components/pagenationtop/index.vue";

export default {
  data() {
    return {
      activeindex:0,
      picked: "boy",
    };
  },
  computed:{
    
    side_data(){
      return [
        '會員資料',
        '修改密碼',
        '歷史訂單',
        '我的折價券',
        '我的收藏'
      ]
    }
  },
  components: {
    Pagenationtopimg,
    Pagenationtop,
  },
  props: ["closeLogin"],
  mounted() {
    this.closeLogin();
  },
  methods:{
    sideTo(index){
      this.activeindex = index
    }
  }
};
</script>

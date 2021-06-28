<template>
  <div class="dealer">
    <Pagenationtopimg />
    <Pagenationtop title="經銷商" path="dealer"/>
    <div class="container">
      <div class="content" v-for="item in main_data" :key="item.index">
        <div class="title">
        ┃{{ item.title }}
        </div>
        <div class="container">
          <div class="sub-container" v-for="list in item.list" :key="list.index">
            <p class="title">
              {{ list.title }}
            </p>
            <p class="address">
              {{ list.content }}
            </p>
            <hr />
            <div
              class="connection"
              v-for="connection in list.connection"
              :key="connection.index"
            >
              <p>
                {{ connection.title }}
                {{ connection.content }}
              </p>
            </div>
            <div class="googlemap">
              <div class="google-container">
                <a :href=list.googlemap>
                </a>
                <img src="../../public/img/dealer/googlemap.jpg" alt="">
                <p>查看地圖</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Pagenationtopimg from "../components/pagenationimg/index.vue";
import Pagenationtop from '../components/pagenationtop/index.vue'

export default {
  components: {
    Pagenationtopimg,
    Pagenationtop,
  },
  computed: {
    main_data() {
      return [
        {
          title: "歐洲",
          list: [
            {
              title: "自行車冠有限公司",
              content:
                "利普卡赫(V Lipkach )78 / |||．50351捷克共和國奇德盧努河畔克盧梅芡茨",
              googlemap: "https://goo.gl/maps/bCZwCfGrtjMNc9Zx6",
              connection: [
                {
                  title: "電話：",
                  content: "420495484255",
                },
                {
                  title: "傳真：",
                  content: "420495484256",
                },
                {
                  title: "電子郵件：",
                  content: "bikerscrown",
                },
              ],
            },
          ],
        },
        {
          title: "亞洲",
          list: [
            {
              title: "Biqboi貿易",
              content:
                "#66 N.Domingo St.San Juan · 馬尼拉大都會",
              googlemap: "https://goo.gl/maps/bCZwCfGrtjMNc9Zx6",
              connection: [
                {
                  title: "電話：",
                  content: "09215458557",
                },
                {
                  title: "電子郵件：",
                  content: "sales@secmotosupply.com",
                },
              ],
            },
            {
              title: "南亞-Project Revolt LLP",
              content:
                "105 · Nahar&Seth Indl East · Chakala Andheri East · 孟買400093 · 印度",
              googlemap: "https://goo.gl/maps/bCZwCfGrtjMNc9Zx6",
              connection: [
                {
                  title: "電話：",
                  content: "09215458557",
                },
                {
                  title: "電子郵件：",
                  content: "sales@secmotosupply.com",
                },
              ],
            },
            {
              title: "東亞-山城株式會社",
              content:
                "日本東京都足立區西七井7-19-12 · 123-0841",
              googlemap: "https://goo.gl/maps/bCZwCfGrtjMNc9Zx6",
              connection: [
                {
                  title: "電話：",
                  content: "09215458557",
                },
                {
                  title: "電子郵件：",
                  content: "sales@secmotosupply.com",
                },
              ],
            },
          ],
        },
        {
          title: "北美",
          list: [
            {
              title: "Fullbore Marketing Ltd",
              content:
                "利普卡赫(V Lipkach )78 / |||．50351捷克共和國奇德盧努河畔克盧梅芡茨",
              googlemap: "https://goo.gl/maps/bCZwCfGrtjMNc9Zx6",
              connection: [
                {
                  title: "電話：",
                  content: "（905）624-0222",
                },
                {
                  title: "傳真：",
                  content: "（905）624-3509",
                },
                {
                  title: "電子郵件：",
                  content: "info@fullboremarketing.ca",
                },
              ],
            },
          ],
        },
        {
          title: "南非",
          list: [
            {
              title: "奧托賽車隊",
              content:
                "19 Plantation Road · 喬治 · 西開普6530",
              googlemap: "https://goo.gl/maps/bCZwCfGrtjMNc9Zx6",
              connection: [
                {
                  title: "電話：",
                  content: "+27 81 797 0583",
                },
                {
                  title: "傳真：",
                  content: "+27 86 525 9318",
                },
                {
                  title: "電子郵件：",
                  content: "cm@ort-online.co.za",
                },
              ],
            },
          ],
        },
        {
          title: "台灣",
          list: [
            {
              title: "北部-台北信義區，大同，士林區------KBN鐵馬堂",
              content:
                "台北市信義區信安街60號",
              googlemap: "https://goo.gl/maps/bCZwCfGrtjMNc9Zx6",
              connection: [
                {
                  title: "電話：",
                  content: "02-27325488",
                },
              ],
            },
            {
              title: "北部-台北信義區，大同，士林區------元素重車裝備精品商行",
              content:
                "台北市大同區承德路三段185號",
              googlemap: "https://goo.gl/maps/bCZwCfGrtjMNc9Zx6",
              connection: [
                {
                  title: "電話：",
                  content: "02-25957566",
                },
              ],
            },
            {
              title: "北部-台北信義區，大同，士林區------泓銘事業有限公司",
              content:
                "台北市大同區歸綏街160巷11號",
              googlemap: "https://goo.gl/maps/bCZwCfGrtjMNc9Zx6",
              connection: [
                {
                  title: "電話：",
                  content: "02-25502765",
                },
              ],
            },
            {
              title: "北部-台北信義區，大同，士林區------益隆車業有限公司",
              content:
                "台北市士林區重慶北路四段244號",
              googlemap: "https://goo.gl/maps/bCZwCfGrtjMNc9Zx6",
              connection: [
                {
                  title: "電話：",
                  content: "02-28127500",
                },
              ],
            },
            {
              title: "北部-台北市中山，北投區------威盛機車精品商行",
              content:
                "台北市中山區建國北路三段28號",
              googlemap: "https://goo.gl/maps/bCZwCfGrtjMNc9Zx6",
              connection: [
                {
                  title: "電話：",
                  content: "02-25075648",
                },
              ],
            },
            {
              title: "北部-台北市中山，北投區------普洛吉村有限公司",
              content:
                "台北市中山區建國北路一段20巷2號",
              googlemap: "https://goo.gl/maps/bCZwCfGrtjMNc9Zx6",
              connection: [
                {
                  title: "電話：",
                  content: "02-27753132",
                },
              ],
            },
            {
              title: "北部-台北市中山，北投區------端竹資訊有限公司（TALKGP）",
              content:
                "台北市北投區中央北路二段292號",
              googlemap: "https://goo.gl/maps/bCZwCfGrtjMNc9Zx6",
              connection: [
                {
                  title: "電話：",
                  content: "0910-317183",
                },
              ],
            },
            {
              title: "北部-新北市中和，永和，板橋區------伊摩多二輪部品",
              content:
                "新北市中和區景平路428號",
              googlemap: "https://goo.gl/maps/bCZwCfGrtjMNc9Zx6",
              connection: [
                {
                  title: "電話：",
                  content: "02-29496928",
                },
              ],
            },
            {
              title: "北部-新北市中和，永和，板橋區------八耐車業行",
              content:
                "新北市中和區員山路72號",
              googlemap: "https://goo.gl/maps/bCZwCfGrtjMNc9Zx6",
              connection: [
                {
                  title: "電話：",
                  content: "02-82213333",
                },
              ],
            },
            {
              title: "北部-新北市中和，永和，板橋區------天美重機-台北店",
              content:
                "新北市永和區林森路33號",
              googlemap: "https://goo.gl/maps/bCZwCfGrtjMNc9Zx6",
              connection: [
                {
                  title: "電話：",
                  content: "02-27325488",
                },
              ],
            },
            {
              title: "北部-新北市中和，永和，板橋區------以帽取人",
              content:
                "新北市板橋區四川路二段90號",
              googlemap: "https://goo.gl/maps/bCZwCfGrtjMNc9Zx6",
              connection: [
                {
                  title: "電話：",
                  content: "02-89666783",
                },
              ],
            },
            {
              title: "北部-新北市中和，永和，板橋區------裕翔安全帽-板橋分店",
              content:
                "新北市板橋區民權路222號",
              googlemap: "https://goo.gl/maps/bCZwCfGrtjMNc9Zx6",
              connection: [
                {
                  title: "電話：",
                  content: "02-89651228",
                },
              ],
            },
            {
              title: "北部-新北市中和，永和，板橋區------大柱重機坊",
              content:
                "新北市板橋區民治街45號",
              googlemap: "https://goo.gl/maps/bCZwCfGrtjMNc9Zx6",
              connection: [
                {
                  title: "電話：",
                  content: "02-22519555",
                },
              ],
            },
            {
              title: "北部-新北市新莊，五股，三重區------裕翔安全帽-新莊分店",
              content:
                "新北市新莊區中正路79號",
              googlemap: "https://goo.gl/maps/bCZwCfGrtjMNc9Zx6",
              connection: [
                {
                  title: "電話：",
                  content: "02-89918839",
                },
              ],
            },
            {
              title: "北部-台北信義區，大同，士林區------KBN鐵馬堂",
              content:
                "台北市信義區信安街60號",
              googlemap: "https://goo.gl/maps/bCZwCfGrtjMNc9Zx6",
              connection: [
                {
                  title: "電話：",
                  content: "02-27325488",
                },
              ],
            },
          ],
        },
      ];
    },
  },
};
</script>
<template>
  <div class="shopmanual">
    <Pagenationtopimg/>
    <Pagenationtop title='購物說明' path='shopmanual'/>
    <div class="container">
        <div class="btn-container">
            <button>
                購買方法
            </button>
            <button>
                付款方式
            </button>
            <button>
                物流運費
            </button>
            <button>
                退換貨服務
            </button>
        </div>
        <div class="sub-container"
        v-for="item in main_data"
        :key="item.index">
            <div class="title">
                <h3>
                    {{ item.title }}
                </h3>
            </div>
            <div class="content-container">
                <div class="content"
                v-for="content in item.content"
                :key="content.index">
                    <p>
                        {{content}}
                    </p>
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
    components:{
        Pagenationtopimg,
        Pagenationtop,
    },
    computed:{
        main_data(){
            return[
                {
                    title:'購買方法',
                    content:[
                        '(1)尋找想要的商品種類',
                        '您可以利用所有商品或是輸入商品關鍵字來搜尋'
                    ]
                },
                {
                    title:'付款方式',
                    content:[
                        '(1)【信用卡付款',
                        '可以使用VISA、MASTER和JCB。',
                        '※關於扣款請參照各信用卡公司的會員規定。詳細內容請向發卡公司詢問。',
                        '※扣款名目將記載為「ICHIRAN Online Shop」'
                    ]
                },
                {
                    title:'物流運費',
                    content:[
                        '(1)7-11的賣貨便條款',
                        '寄件者使用本服務委託配送商品時，其商品完成包裝後之材積極尺寸，需符合以下規定',
                        '(1)尺寸：最長邊≦45，長+寬+高合計≦105 (單位：公分)',
                        '(2)重量：最長邊<5',
                        '(3)包裝：自備包材：上、下方需平整的立方體且服務單可完整平貼(服務單尺寸為10*14公分)，門市販售專用包材：交貨便寄件紙箱及交貨便寄件專用袋。'
                    ]
                },
                {
                    title:'退換貨服務',
                    content:[
                        '(1)關於商品確認',
                        '當訂單商品到達後，請在7日內務必確認「商品是否有瑕疵、「訂單內容是否有誤」之狀況。',
                        '請透過聯絡下列郵件客服人員,將立即為您服務。',
                        'ichirantw.omiyage@ichiran.com'
                    ]
                },
            ]
        }
    }

}
</script>


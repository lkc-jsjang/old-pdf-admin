<template>
    <v-app id="app">
        <v-main>
            <v-container>
                <div>
                    <td>▶ PDFV4 요약보고서(GMKT)</td>
                </div>
                <div class="right">
                    <v-btn depressed>
                        조회
                    </v-btn>
                </div>
                <div id="">
                    <v-simple-table class="">
                        <tbody>
                            <tr>
                                <th>조회날짜</th>
                                <td>
                                    <v-col cols="12" lg="10">
                                        <v-menu id="s_date" ref="menu" v-model="menu" :close-on-content-click="false"
                                            transition="scale-transition" offset-y min-width="290px">
                                            <template v-slot:activator="{ on, attrs }">
                                                <v-text-field v-model="s_date" append-icon="mdi-calendar" readonly
                                                    v-bind="attrs" v-on="on"></v-text-field>
                                            </template>

                                            <v-date-picker v-model="s_date" no-title scrollable>
                                                <v-spacer></v-spacer>
                                                <v-btn text color="primary" @click="menu = false">Cancel</v-btn>
                                                <v-btn text color="primary" @click="s_date_search(s_date)">OK
                                                </v-btn>
                                            </v-date-picker>
                                        </v-menu>
                                    </v-col>
                                </td>
                                <th>파트너</th>
                                <td>
                                    <v-col cols="10">
                                        <v-select v-model="partner_m" :items="partner_i" single-line>
                                        </v-select>
                                    </v-col>
                                </td>
                                <th>카테고리</th>
                                <td>
                                    <v-col cols="10">
                                        <v-select v-model="category_m" :items="category_i" single-line>
                                        </v-select>
                                    </v-col>
                                </td>
                            </tr>
                        </tbody>
                    </v-simple-table>
                    <br>
                    <h2 class="">
                        <span>PDFV4 요약 보고서</span>
                        &nbsp;
                        <v-btn depressed>
                            Excel
                        </v-btn>
                    </h2>
                </div>
            </v-container>
        </v-main>
    </v-app>
</template>
<script>
export default {
    data() {
        const dt = new Date();
        return {
            s_date: dt.toISOString().substring(0, 10),
            menu: false,

            partner_m: '-------- 전체 --------',
            partner_i: ['-------- 전체 --------', 'NAVER', 'DAUM', 'DANAWA', '공통', 'ENURI', 'BASKET', 'M_Naver', 'M_Enuri', 'DANAWA V2', 'ENURI'],
            category_m: '-------- 전체 --------',
            category_i: ['-------- 전체 --------', '컴퓨터/게임', '여성의류/패션', '화장품/향수/이미용', '출산/유아용품/임부복', '주방/생활/이미용가전', '여행/레저/호텔/항공권', '생활/수납/욕실/청소', '등산/낚시/캠핑/스키', '쌀/과일/정육/수산물', '특판(단골찬스)', '쥬얼리/시계/선글라스', '도서/음반/DVD', '자동차용품/모터싸이클', '가구/DIY', 'TV/냉장고/세탁기/에어컨', '디카/DSLR/캠코더', '유아동의류/신발/가방', '차/음료/과자/가공식품', '스포츠/헬스/수영/자전거', '애완/악기/취미/프라모델', '침구/커튼/인테리어', '꽃배달/화분/팬시', '장난감/교육완구/인형', '스포츠의류/운동화', '문구/학용품/사무/용지', '남성의류/정장', '외식/미용실/생활쿠폰', '여성화/남성화/패션화', '중고/재고시장', '연금복권/게임/모바일상품권', 'PC부품/액세서리', '휴대폰/액세서리', '기저귀/분유/이유식', '골프클럽/의류/용품', '공연/스포츠/영화티켓', '빅사이즈/미시/커리어', '가방/지갑/패션잡화', '건강식품/다이어트/홍삼', '언더웨어/잠옷/보정속옷', '바디/헤어/목욕/위생', 'MP3/PMP/사전', '물티슈/생리대/성인패드', '세제/세면/제지/일용잡화', '저장장치/메모리', '철물/공구/안전/산업', '매트/히터/가습기/난방가전', '게임기/타이틀', '네비/하이패스/블랙박스', '물류 서비스', '모니터/프린터/잉크', '건강/안마/비데/의료용품', '백화점/제화/기타 상품권', '주방/조리기구/식기', '중고차마켓', '이베이쇼핑', '대분류TEST'],
        }
    },
    methods: {
        s_date_search(v) {
            this.s_date = v;
            this.menu = false;
            this.$refs.menu.save(v);
        },
    }
}
</script>

<style>

</style>
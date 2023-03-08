<template>
    <v-app id="app">
        <v-main>
            <v-container>
                <div>
                    <td>▶ PDFV4 요약보고서(IACC)</td>
                </div>
                <v-simple-table>
                    <tbody>
                        <tr>
                            <td class="">조회날짜</td>
                            <td class="">
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
                        </tr>
                        <tr>
                            <td class="">파트너</td>
                            <td class="">
                                <v-col>
                                    <v-select v-model="partner_m" :items="partner_i" single-line>
                                    </v-select>
                                </v-col>

                            </td>

                            <td class="" width="10%">카테고리</td>
                            <td class="">
                                <v-col>
                                    <v-select v-model="category_m" :items="category_i" single-line>
                                    </v-select>
                                </v-col>
                            </td>
                        </tr>
                    </tbody>
                </v-simple-table>

                <div class="center">
                    <v-btn depressed>조회</v-btn>
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
            partner_i: ['-------- 전체 --------', '공통', 'DANAWA', 'NAVER', 'DAUM', 'ENURI', 'M_Naver', 'M_Enuri', 'BASKET', 'DANAWA V2', 'ENURI V2'],
            category_m: '-------- 전체 --------',
            category_i: ['-------- 전체 --------', '여성의류', '패션브랜드', '건강/의료용품', '주방가전', '노트북/PC', '언더웨어', '건강식품/다이어트', '꽃/이벤트용품', '여행/항공권', '외식/미용/생활이용권', '가구/DIY', '계절가전', '스포츠의류/운동화', '타이어/오일/부품', '가방/패션잡화', '생활/욕실/수납용품', '바디/헤어', '세제/구강', '게임', '도서음반(책과음악)', '디자인/문구/사무용품', '장난감/교육완구/인형', '저장장치', '악기/취미/키덜트', '백화점/제화상품권', '화장품/향수', '쌀/과일/농수축산물', '기저귀/분유/유아식', '쥬얼리/시계/선글라스', '휘트니스/수영', '미시/빅사이즈의류', '유아동의류', '모니터/프린터', '골프클럽/의류/용품', '커피/음료', 'e콘텐츠몰', '출산/유아용품/임부복', 'PC주변기기', '카메라', '대형가전', '자동차용품/블랙박스', '자동차', '조명/인테리어', '화장지/물티슈/생리대', '신발', '도서/교육/음반', '휴대폰', '공구/안전/산업용품', '남성의류', '음향기기'],
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
.center {
    padding: 10px;
    text-align: center;
}
</style>
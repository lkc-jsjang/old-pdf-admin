<template>
    <v-app>
        <v-main>
            <v-container>
                <div>
                    <td>▶ PDF현황조회_카탈로그정보조회(IACC)</td>
                </div>
                <h2 class="">
                    <span>PDF 카탈로그 조회(IACC)</span>
                </h2>
                <v-simple-table class="">
                    <tbody>
                        <tr>
                            <th>카탈로그 조회</th>
                            <td>업체 구분 :</td>
                            <td>
                                <v-col>
                                    <v-select v-model="company_m" :items="company_i" single-line>
                                    </v-select>
                                </v-col>
                            </td>
                            <td>카탈로그 번호 :</td>
                            <td>
                                <v-col>
                                    <v-text-field></v-text-field>
                                </v-col>
                            </td>
                            <td>
                                <v-btn depressed id="">
                                    조회
                                </v-btn>
                            </td>
                            <td>
                                <v-btn id="">Open PCS</v-btn>
                            </td>
                        </tr>
                    </tbody>
                </v-simple-table>
                <br>
                <h2 class="">
                    <span>카탈로그 매칭 현황 및 가격 정보</span>
                </h2>
                <Row>
                    <Cell>상품번호</Cell>
                    <Cell>업체구분</Cell>
                    <Cell>카테고리</Cell>
                    <Cell>상품명</Cell>
                    <Cell>판매가</Cell>
                    <Cell>PCS적용가격</Cell>
                    <Cell>적용쿠폰</Cell>
                    <Cell>쿠폰할인금액</Cell>
                    <Cell>판매자쿠폰</Cell>
                    <Cell>적용EP</Cell>
                </Row>
            </v-container>
        </v-main>
    </v-app>
</template>
<script>
export default {
    data() {
        return {
            company_m: '선택',
            company_i: ['선택', 'ABOUT', 'DANAWA', 'ENURI', 'NAVER', 'M_NAVER', 'M_ENURI'],

        }
    }
}
</script>
<style>

</style>
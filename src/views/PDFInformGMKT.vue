<template>
    <v-app id="app">
        <v-main>
            <v-container>
                <div>
                    <td>▶ PDF현황조회_PDF상품정보조회V5(GMKT)</td>
                </div>
                <v-simple-table class="uxb-dns pad-bor">
                    <tbody>
                        <tr>
                            <th>상품 번호</th>
                            <td>
                                <v-col sm="6" md="6">
                                    <v-text-field label=""></v-text-field>
                                </v-col>
                            </td>
                            <td>
                                <v-btn depressed>검색</v-btn>
                            </td>
                            <td>
                                <v-btn depressed>상품Sync</v-btn>
                            </td>
                            <td>
                                <v-btn depressed>CallBack Sync</v-btn>
                            </td>
                        </tr>
                    </tbody>
                </v-simple-table>

                <br><br>

                <h2 class="">
                    <span>상품 등록정보</span>
                </h2>

                <v-simple-table class="">
                    <tbody>
                        <tr>
                            <th>상품번호</th>
                            <td>
                                <a id=""></a>
                            </td>
                            <th>판매상태</th>
                            <td width="37%">
                                <span id=""></span>
                            </td>
                        </tr>
                        <tr>
                            <th>상품명</th>
                            <td colspan="3">
                                <span id=""></span>
                            </td>
                        </tr>
                        <tr>
                            <th>카테고리코드</th>
                            <td>
                                <span id=""></span>
                            </td>
                            <th>카테고리명</th>
                            <td>
                                <span id=""></span>
                            </td>
                        </tr>
                        <tr>
                            <th>판매자ID/닉네임</th>
                            <td>
                                <a id=""></a>
                            </td>
                            <th>판매가</th>
                            <td>
                                <span id=""></span>
                            </td>
                        </tr>

                        <tr>
                            <th>낙찰수수료</th>
                            <td>
                                <span id=""></span>
                            </td>
                            <th>적용수수료</th>
                            <td>
                                <span id=""></span>
                            </td>
                        </tr>
                        <tr>
                            <th>어바웃 카탈로그</th>
                            <td>
                                <a id=""></a>
                            </td>
                            <th>모델명</th>
                            <td>
                                <span id=""></span>
                            </td>
                        </tr>
                        <tr>
                            <th>카탈로그매치타입</th>
                            <td>
                                <span id=""></span>
                            </td>
                            <th>PCS AD 사용</th>
                            <td>
                                <span id=""></span>
                            </td>
                        </tr>
                        <tr>
                            <th>쿠폰사용제한</th>
                            <td>
                                <div id="">
                                    <template v-for="(item, index) in checkList">
                                        <input v-if="(item, index) in checkList" type="checkbox" :id="item"
                                            :value="item" :key="index" />
                                        <label v-if="(item, index) in checkList" :for="item" :key="index + '1'"> {{ item
                                        }}</label>
                                    </template>
                                </div>
                            </td>
                            <th scope="row" width="12%">PCS 쿠폰 발행제한</th>
                            <td>
                                <div id="">
                                    <template v-for="(item, index) in checkList2">
                                        <input v-if="(item, index) in checkList2" type="checkbox" :id="item"
                                            :value="item" :key="index" />
                                        <label v-if="(item, index) in checkList2" :for="item" :key="index + '1'">
                                            {{ item }}</label>
                                    </template>
                                </div>

                            </td>
                        </tr>
                        <tr>
                            <th scope="row" width="12%">PDF 제한</th>
                            <td>
                                <div id="">
                                    <template v-for="(item, index) in checkList3">
                                        <input v-if="(item, index) in checkList3" type="checkbox" :id="item"
                                            :value="item" :key="index" />
                                        <label v-if="(item, index) in checkList3" :for="item" :key="index + '1'">
                                            {{ item }}</label>
                                    </template>
                                </div>
                            </td>
                            <th scope="row" width="12%">EP 발행제한</th>
                            <td>
                                <div id="">
                                    <template v-for="(item, index) in checkList4">
                                        <input v-if="(item, index) in checkList4" type="checkbox" :id="item"
                                            :value="item" :key="index" />
                                        <label v-if="(item, index) in checkList4" :for="item" :key="index + '1'">
                                            {{ item }}</label>
                                    </template>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </v-simple-table>
                <br><br>
                <h2 class="">
                    <span>쿠폰 등록정보</span>
                </h2>
                <Row>
                    <Cell>쿠폰종류 </Cell>
                    <Cell>PCS Type </Cell>
                    <Cell>쿠폰그룹번호 </Cell>
                    <Cell>쿠폰관리명 </Cell>
                    <Cell>설정TR </Cell>
                    <Cell>쿠폰할인금액 </Cell>
                </Row>
                <h2 class="">
                    <span>적용 EP정보</span>
                </h2>
                <Row Height="15" Index="0" RowItem="" BgColor="15267839" ForeColor="4423874">
                    <Cell>판매가 </Cell>
                    <Cell>PCS 적용 가격 </Cell>
                    <Cell>적용쿠폰 </Cell>
                    <Cell>쿠폰할인금액 </Cell>
                    <Cell>판매자쿠폰 </Cell>
                    <Cell>적용 EP </Cell>
                </Row>
                <h2 class="">
                    <span>PCS 매칭 현황 및 가격정보</span>
                </h2>
                <Row>
                    <Cell>업체 </Cell>
                    <Cell>카탈로그 No. </Cell>
                    <Cell>인터넷 최저가 </Cell>
                    <Cell>업체명 </Cell>
                    <Cell>지마켓 최저가 상품 </Cell>
                    <Cell>지마켓 최저가 </Cell>
                    <Cell>적용쿠폰 </Cell>
                    <Cell>옥션 최저가 상품 </Cell>
                    <Cell>옥션 최저가 </Cell>
                    <Cell>적용쿠폰 </Cell>
                </Row>
            </v-container>
        </v-main>
    </v-app>
</template>
<script>
export default {
    data() {
        return {
            checkList: ["아이템/바이어쿠폰 제한", "PCS쿠폰제한"],
            checkList2: ["상품번호", "판매자ID", "카탈로그코드"],
            checkList3: ["PDF전송제한", "PCS노출제한"],
            checkList4: ["About", "Danawa", "Daum", "Enuri", "Naver", "Basket", "공통"],
        }
    }
}
</script>
<style>

</style>
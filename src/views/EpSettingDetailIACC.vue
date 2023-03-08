<template>
    <v-app>
        <v-main>
            <v-container>
                <div>
                    <td>▶ PDF환경설정_EP환경설정_추가/상세보기(IACC)</td>
                </div>
                <h2 class="">EP 환경 설정 추가/상세보기(IACC)</h2>
                <div class="right">
                    <v-btn depressed>저장</v-btn>
                    &nbsp;&nbsp;
                    <v-btn depressed>취소</v-btn>
                    &nbsp;&nbsp;
                    <v-btn depressed>목록</v-btn>
                </div>
                <v-simple-table class="">
                    <tbody>
                        <tr>
                            <th>ID/Password</th>
                            <td colspan="1">
                                <v-col sm="6" md="10">
                                    <v-text-field label="ID :"></v-text-field>
                                </v-col>
                            </td>

                            <td colspan="1">
                                <v-col sm="6" md="10">
                                    <v-text-field label="Password :"></v-text-field>
                                </v-col>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">최단 경매 마감 시간</th>
                            <td colspan="3">
                                <v-col sm="6" md="2">
                                    <v-text-field label="예) 36 시간"></v-text-field>
                                </v-col>
                            </td>

                        </tr>
                        <tr>
                            <th scope="row">최소 물품 수량</th>
                            <td colspan="2">
                                <v-col sm="6" md="2">
                                    <v-text-field label="예) 5개"></v-text-field>
                                </v-col>
                            </td>
                        </tr>
                        <tr>
                            <th>판매자 매칭 가격 범위</th>

                            <td>
                                <v-col sm="6" md="7">
                                    <v-text-field label="예) 50%"></v-text-field>
                                </v-col>
                            </td>
                            <td>~</td>
                            <td>
                                <v-col sm="6" md="7">
                                    <v-text-field label="예) 100%"></v-text-field>
                                </v-col>
                            </td>

                        </tr>
                        <tr>
                            <th scope="row">관리자 매칭 가격 범위</th>
                            <td>
                                <v-col sm="6" md="7">
                                    <v-text-field label="예) 50%"></v-text-field>
                                </v-col>
                            </td>
                            <td>~</td>
                            <td>
                                <v-col sm="6" md="7">
                                    <v-text-field label="예) 100%"></v-text-field>
                                </v-col>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">중고물품</th>
                            <td>
                                <input type="radio" id="adjust" value="Adjust" name="ad">
                                <label for="adjust"> 적용</label>
                                &nbsp;
                                <input type="radio" id="adjust1" value="Adjust1" name="ad">
                                <label for="adjust1"> 미적용</label>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">홍보문구</th>
                            <td colspan="3">
                                <input type="radio" id="adjust3" value="Adjust3" name="ad1">
                                <label for="adjust3"> 적용</label>
                                &nbsp;
                                <input type="radio" id="adjust4" value="Adjust4" name="ad1">
                                <label for="adjust4"> 미적용</label>
                            </td>
                        </tr>
                        <tr>
                            <th>적용카테고리</th>
                            <td>
                                <select class="selectbox" size="18" name="" multiple="multiple" id="">
                                </select>
                            </td>
                            <td>
                                <v-btn depressed>&lt;추가</v-btn><br><br>
                                <v-btn depressed>삭제&gt;</v-btn>
                                <br><br><br>
                                <v-btn depressed>&lt;전체추가</v-btn><br><br>
                                <v-btn depressed>전체삭제&gt;</v-btn>
                            </td>
                            <td>
                                <select class="selectbox" size="18" name="" multiple="multiple" id="">
                                    <option value="0139">0139 (모니터/프린터 &gt; 중고/리퍼/반품/전시)</option>
                                    <option value="0160">0160 (모니터/프린터/잉크 &gt; 레이저복합기)</option>
                                    <option value="0161">0161 (모니터/프린터/잉크 &gt; 레이저프린터)</option>
                                    <option value="0162">0162 (모니터/프린터 &gt; 스캐너)</option>
                                    <option value="0166">0166 (모니터/프린터 &gt; 잉크젯복합기-정품)</option>
                                </select>
                            </td>
                        </tr>
                    </tbody>
                </v-simple-table>
            </v-container>
        </v-main>
    </v-app>
</template>
<script>

</script>
<style>
.selectbox {
    width: 410px;
    border: 1px solid black;
}
</style>

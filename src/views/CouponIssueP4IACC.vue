<template>
    <v-app id="app">
        <v-main>
            <v-container>
                <div>
                    <td>▶ PCS쿠폰발행_PCS_P4(카테고리)(승인포함)(IACC)</td>
                </div>
                <div>
                    <h2 class=""><span>PCS P4 Category 쿠폰 신규 등록(IACC)</span></h2>
                    <v-simple-table>
                        <tbody>
                            <tr>
                                <th>PCS 쿠폰 타입</th>
                                <td>PCS P4(카테고리)</td>
                                <th>내부관리명</th>
                                <td>
                                    <v-col>
                                        <v-text-field label=""></v-text-field>
                                    </v-col>
                                </td>
                            </tr>
                            <tr>
                                <th>기간</th>
                                <td>
                                    <v-row>
                                        <v-col cols="12" lg="4">
                                            <v-menu id="s_date1" ref="menu1" v-model="menu1"
                                                :close-on-content-click="false" transition="scale-transition" offset-y
                                                min-width="290px">
                                                <template v-slot:activator="{ on, attrs }">
                                                    <v-text-field v-model="s_date1" append-icon="mdi-calendar" readonly
                                                        v-bind="attrs" v-on="on"></v-text-field>
                                                </template>

                                                <v-date-picker v-model="s_date1" no-title scrollable :max="e_date1">
                                                    <v-spacer></v-spacer>
                                                    <v-btn text color="primary" @click="menu1 = false">Cancel</v-btn>
                                                    <v-btn text color="primary" @click="s_date_search1(s_date1)">OK
                                                    </v-btn>
                                                </v-date-picker>
                                            </v-menu>
                                        </v-col>

                                        <v-col cols="2">
                                            <v-select v-model="m_time" :items="minutes" single-line>
                                            </v-select>
                                        </v-col>

                                        <v-col cols="12" lg="4">
                                            <v-menu id="e_date1" ref="menu2" v-model="menu2"
                                                :close-on-content-click="false" :return-value.sync="e_date1"
                                                transition="scale-transition" offset-y min-width="290px">
                                                <template v-slot:activator="{ on, attrs }">
                                                    <v-text-field v-model="e_date1" append-icon="mdi-calendar" readonly
                                                        v-bind="attrs" v-on="on"></v-text-field>
                                                </template>
                                                <v-date-picker v-model="e_date1" no-title scrollable :min="s_date1">
                                                    <!--:max="date"-->
                                                    <v-spacer></v-spacer>
                                                    <v-btn text color="primary" @click="menu2 = false">Cancel</v-btn>
                                                    <v-btn text color="primary" @click="e_date_search2(e_date1)">OK
                                                    </v-btn>
                                                </v-date-picker>
                                            </v-menu>
                                        </v-col>

                                        <v-col cols="2">
                                            <v-select v-model="m_time2" :items="minutes2" menu-props="auto" single-line>
                                            </v-select>
                                        </v-col>
                                    </v-row>
                                </td>
                            </tr>
                            <tr>
                                <th>할인율</th>
                                <td>
                                    <v-col sm="6" md="5">
                                        <v-text-field label="% (1% ~ 50%)"></v-text-field>
                                    </v-col>
                                </td>
                            </tr>
                            <tr>
                                <th>TR 제한</th>
                                <td>
                                    <v-col sm="6" md="5">
                                        <v-text-field label="% (-50% ~ 50%)"></v-text-field>
                                    </v-col>
                                </td>
                            </tr>
                            <tr>
                                <th>PCS 채널 선택</th>
                                <td>
                                    <div id="">
                                        <input type="checkbox" value="all" v-model="allSelected" />
                                        <label for="all">전체</label>
                                        <template v-for="(item, index) in checkList">
                                            <input type="checkbox" :id="item + 'a'" :value="item" v-model="selectList"
                                                :key="index" />
                                            <label :for="item + 'a'" :key="index + '1'"> {{ item }}</label>
                                        </template>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th>첨부파일</th>
                                <td>
                                    <v-file-input truncate-length="20" counter show-size></v-file-input>
                                </td>
                                <td>
                                    <v-btn elevation="1"> <a
                                            href="http://amsnet/ams/buyerdiscount/example/catalog_example.xls">[엑셀 예제
                                            다운로드]</a></v-btn>
                                </td>
                            </tr>
                        </tbody>
                    </v-simple-table>

                    <div class="right">
                        <v-btn depressed>
                            등록
                        </v-btn>
                        <v-btn depressed>
                            엑셀로 일괄등록
                        </v-btn>
                    </div>

                    <div>
                        <h2 class=""><span>PCS P4 Category 쿠폰 발행정보 조회</span></h2>
                        <div class="right">
                            <v-btn depressed>
                                엑셀 다운로드
                            </v-btn>
                            <v-btn depressed>
                                조회
                            </v-btn>
                            <v-btn depressed>
                                승인
                            </v-btn>
                            <v-btn depressed>
                                종료
                            </v-btn>
                        </div>
                        <v-simple-table class="">
                            <tbody>

                                <tr>
                                    <th>관리번호</th>
                                    <td>
                                        <v-col sm="6" md="6">
                                            <v-text-field label=""></v-text-field>
                                        </v-col>
                                    </td>
                                    <th>내부관리명</th>
                                    <td>
                                        <v-col sm="6" md="6">
                                            <v-text-field label=""></v-text-field>
                                        </v-col>
                                    </td>
                                </tr>
                                <tr>
                                    <th>발행자</th>
                                    <td>
                                        <v-col sm="6" md="6">
                                            <v-text-field label=""></v-text-field>
                                        </v-col>
                                    </td>
                                    <th>적용업체</th>
                                    <td>
                                        <v-col sm="6" md="6">
                                            <v-text-field label=""></v-text-field>
                                        </v-col>
                                    </td>
                                </tr>

                                <tr>
                                    <th>기간</th>

                                    <td>
                                        <v-row>
                                            <v-col cols="12" lg="4">
                                                <v-menu id="s_date_searching1" ref="menu5" v-model="menu5"
                                                    :close-on-content-click="false"
                                                    :return-value.sync="s_date_searching1" transition="scale-transition"
                                                    offset-y min-width="290px">
                                                    <template v-slot:activator="{ on, attrs }">
                                                        <v-text-field v-model="s_date_searching1"
                                                            append-icon="mdi-calendar" readonly v-bind="attrs"
                                                            v-on="on"></v-text-field>
                                                    </template>
                                                    <v-date-picker v-model="s_date_searching1" no-title scrollable
                                                        :max="e_date">
                                                        <v-spacer></v-spacer>
                                                        <v-btn text color="primary" @click="menu5 = false">Cancel
                                                        </v-btn>
                                                        <v-btn text color="primary"
                                                            @click="s_date_search5(s_date_searching1)">OK
                                                        </v-btn>
                                                    </v-date-picker>
                                                </v-menu>
                                            </v-col>

                                            <v-col cols="12" lg="4">
                                                <v-menu id="e_date_searching1" ref="menu6" v-model="menu6"
                                                    :close-on-content-click="false"
                                                    :return-value.sync="e_date_searching1" transition="scale-transition"
                                                    offset-y min-width="290px">
                                                    <template v-slot:activator="{ on, attrs }">
                                                        <v-text-field v-model="e_date_searching1"
                                                            append-icon="mdi-calendar" readonly v-bind="attrs"
                                                            v-on="on"></v-text-field>
                                                    </template>
                                                    <v-date-picker v-model="e_date_searching1" no-title scrollable
                                                        :min="s_date2">
                                                        <v-spacer></v-spacer>
                                                        <v-btn text color="primary" @click="menu6 = false">Cancel
                                                        </v-btn>
                                                        <v-btn text color="primary"
                                                            @click="e_date_search6(e_date_searching1)">OK
                                                        </v-btn>
                                                    </v-date-picker>
                                                </v-menu>
                                            </v-col>
                                        </v-row>

                                    </td>

                                    <th>대분류 카테고리코드</th>
                                    <td>
                                        <v-col sm="6" md="6">
                                            <v-text-field label=""></v-text-field>
                                        </v-col>
                                    </td>
                                </tr>

                                <tr>
                                    <th>승인상태</th>
                                    <td>
                                        <v-col cols="6">
                                            <v-select v-model="assign" :items="assign_status" single-line>
                                            </v-select>
                                        </v-col>
                                    </td>
                                    <th>진행상태</th>
                                    <td>
                                        <v-col cols="6">
                                            <v-select v-model="e2" :items="items" single-line>
                                            </v-select>
                                        </v-col>
                                    </td>
                                </tr>
                            </tbody>
                        </v-simple-table>

                        <div>
                            <v-btn depressed color="primary">
                                CSV 붙여넣기
                            </v-btn>
                        </div>

                        <row height="15" index="0" rowitem="" bgcolor="15267839" forecolor="4423874">
                            <!-- 전체선택가능하게 하기 -->
                            <cell>상태</cell>
                            <cell>관리번호</cell>
                            <cell>내부관리명</cell>
                            <cell>카테고리코드</cell>
                            <cell>카테고리명</cell>
                            <cell>적용개체 수</cell>
                            <cell>할인율</cell>
                            <cell>TR제한</cell>
                            <cell>시작일</cell>
                            <cell>종료일</cell>
                            <cell>발행자</cell>
                            <cell>승인자</cell>
                            <cell>적용업체</cell>
                        </row>

                        <div id="fpsgrd" style="display: block;">
                        </div>
                    </div>
                    <br><br>
                    <div id="">
                        <h2 class=""><span>PCS P4 Category 내 Seller 쿠폰 신규 등록</span></h2>
                        <v-simple-table class="">
                            <tbody>
                                <tr>
                                    <th>PCS 쿠폰 타입</th>
                                    <td>PCS P4 카테고리 내 셀러쿠폰</td>
                                </tr>
                                <tr>
                                    <th>기간</th>
                                    <td>
                                        <v-row>
                                            <v-col cols="12" lg="4">
                                                <v-menu id="s_date2" ref="menu3" v-model="menu3"
                                                    :close-on-content-click="false" :return-value.sync="s_date2"
                                                    transition="scale-transition" offset-y min-width="290px">
                                                    <template v-slot:activator="{ on, attrs }">
                                                        <v-text-field v-model="s_date2" append-icon="mdi-calendar"
                                                            readonly v-bind="attrs" v-on="on"></v-text-field>
                                                    </template>
                                                    <v-date-picker v-model="s_date2" no-title scrollable :max="e_date">
                                                        <v-spacer></v-spacer>
                                                        <v-btn text color="primary" @click="menu3 = false">Cancel
                                                        </v-btn>
                                                        <v-btn text color="primary" @click="s_date_search3(s_date2)">OK
                                                        </v-btn>
                                                    </v-date-picker>
                                                </v-menu>
                                            </v-col>

                                            <v-col cols="2">
                                                <v-select v-model="m_time3" :items="minutes3" menu-props="auto"
                                                    single-line>
                                                </v-select>
                                            </v-col>

                                            <v-col cols="12" lg="4">
                                                <v-menu id="e_date2" ref="menu4" v-model="menu4"
                                                    :close-on-content-click="false" :return-value.sync="e_date2"
                                                    transition="scale-transition" offset-y min-width="290px">
                                                    <template v-slot:activator="{ on, attrs }">
                                                        <v-text-field v-model="e_date2" append-icon="mdi-calendar"
                                                            readonly v-bind="attrs" v-on="on"></v-text-field>
                                                    </template>
                                                    <v-date-picker v-model="e_date2" no-title scrollable :min="s_date2">
                                                        <!--:max="date"-->
                                                        <v-spacer></v-spacer>
                                                        <v-btn text color="primary" @click="menu4 = false">Cancel
                                                        </v-btn>
                                                        <v-btn text color="primary" @click="e_date_search4(e_date2)">OK
                                                        </v-btn>
                                                    </v-date-picker>
                                                </v-menu>
                                            </v-col>

                                            <v-col cols="2">
                                                <v-select v-model="m_time4" :items="minutes4" menu-props="auto"
                                                    single-line>
                                                </v-select>
                                            </v-col>
                                        </v-row>

                                    </td>
                                </tr>
                                <tr>
                                    <th>할인율</th>
                                    <td>
                                        <v-col sm="6" md="5">
                                            <v-text-field label="% (1% ~ 50%)"></v-text-field>
                                        </v-col>
                                    </td>
                                </tr>
                                <tr>
                                    <th>TR 제한</th>
                                    <td>
                                        <v-col sm="6" md="5">
                                            <v-text-field label="% (-50% ~ 50%)"></v-text-field>
                                        </v-col>
                                    </td>
                                </tr>
                                <tr>
                                    <th>PCS 채널 선택</th>
                                    <td>
                                        <div id="example-3">
                                            <input type="checkbox" value="all" v-model="allSelected2" />
                                            <label for="all">전체</label>
                                            <template v-for="(item2, index) in checkList2">
                                                <input type="checkbox" :id="item2" :value="item2" v-model="selectList2"
                                                    :key="index" />
                                                <label :for="item2" :key="index + '1'"> {{ item2 }}</label>
                                            </template>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th>첨부파일</th>
                                    <td>
                                        <v-file-input truncate-length="20" counter show-size></v-file-input>
                                    </td>
                                    <td>
                                        <v-btn elevation="1"> <a
                                                href="http://amsnet/ams/buyerdiscount/example/catalog_example.xls">[엑셀
                                                예제
                                                다운로드]</a></v-btn>
                                    </td>

                                </tr>
                            </tbody>
                        </v-simple-table>
                        <div class="right">
                            <v-btn depressed>
                                등록
                            </v-btn>
                            <v-btn depressed>
                                엑셀로 일괄등록
                            </v-btn>
                        </div>
                    </div>

                    <div id="">
                        <h2 class=""><span>PCS P4 Category 내 Seller 쿠폰 발행정보 조회</span></h2>
                        <div class="right">
                            <v-btn depressed>
                                엑셀 다운로드
                            </v-btn>
                            <v-btn depressed>
                                조회
                            </v-btn>
                            <v-btn depressed>
                                승인
                            </v-btn>
                            <v-btn depressed>
                                종료
                            </v-btn>
                        </div>
                        <v-simple-table class="">
                            <tbody>
                                <tr>
                                    <th>관리번호</th>
                                    <td>
                                        <v-col sm="6" md="6">
                                            <v-text-field label=""></v-text-field>
                                        </v-col>
                                    </td>
                                    <th>내부관리명</th>
                                    <td>
                                        <v-col sm="6" md="6">
                                            <v-text-field label=""></v-text-field>
                                        </v-col>
                                    </td>
                                </tr>
                                <tr>
                                    <th>발행자</th>
                                    <td>
                                        <v-col sm="6" md="6">
                                            <v-text-field label=""></v-text-field>
                                        </v-col>
                                    </td>
                                    <th>적용업체</th>
                                    <td>
                                        <v-col sm="6" md="6">
                                            <v-text-field label=""></v-text-field>
                                        </v-col>
                                    </td>
                                </tr>

                                <tr>
                                    <th scope="row">기간</th>
                                    <td>
                                        <v-row>
                                            <v-col cols="12" lg="4">
                                                <v-menu id="s_date_searching2" ref="menu7" v-model="menu7"
                                                    :close-on-content-click="false"
                                                    :return-value.sync="s_date_searching2" transition="scale-transition"
                                                    offset-y min-width="290px">
                                                    <template v-slot:activator="{ on, attrs }">
                                                        <v-text-field v-model="s_date_searching2"
                                                            append-icon="mdi-calendar" readonly v-bind="attrs"
                                                            v-on="on"></v-text-field>
                                                    </template>
                                                    <v-date-picker v-model="s_date_searching2" no-title scrollable
                                                        :max="e_date_searching2">
                                                        <v-spacer></v-spacer>
                                                        <v-btn text color="primary" @click="menu7 = false">Cancel
                                                        </v-btn>
                                                        <v-btn text color="primary"
                                                            @click="s_date_search7(s_date_searching2)">OK
                                                        </v-btn>
                                                    </v-date-picker>
                                                </v-menu>
                                            </v-col>

                                            <v-col cols="12" lg="4">
                                                <v-menu id="e_date_searching2" ref="menu8" v-model="menu8"
                                                    :close-on-content-click="false"
                                                    :return-value.sync="e_date_searching1" transition="scale-transition"
                                                    offset-y min-width="290px">
                                                    <template v-slot:activator="{ on, attrs }">
                                                        <v-text-field v-model="e_date_searching2"
                                                            append-icon="mdi-calendar" readonly v-bind="attrs"
                                                            v-on="on"></v-text-field>
                                                    </template>
                                                    <v-date-picker v-model="e_date_searching2" no-title scrollable
                                                        :min="s_date_searching2">
                                                        <!--:max="date"-->
                                                        <v-spacer></v-spacer>
                                                        <v-btn text color="primary" @click="menu8 = false">Cancel
                                                        </v-btn>
                                                        <v-btn text color="primary"
                                                            @click="e_date_search8(e_date_searching2)">OK
                                                        </v-btn>
                                                    </v-date-picker>
                                                </v-menu>
                                            </v-col>
                                        </v-row>

                                    </td>

                                    <th>셀러ID</th>
                                    <td>
                                        <v-col sm="6" md="6">
                                            <v-text-field label=""></v-text-field>
                                        </v-col>
                                    </td>
                                </tr>

                                <tr>
                                    <th>승인상태</th>
                                    <td>
                                        <v-col cols="6">
                                            <v-select v-model="assign" :items="assign_status" menu-props="auto"
                                                single-line>
                                            </v-select>
                                        </v-col>
                                    </td>
                                    <th scope="row">진행상태</th>
                                    <td>
                                        <v-col cols="6">
                                            <v-select v-model="e2" :items="items" menu-props="auto" single-line>
                                            </v-select>
                                        </v-col>
                                    </td>
                                </tr>

                            </tbody>
                        </v-simple-table>
                        <div>
                            <v-btn depressed color="primary">
                                CSV 붙여넣기
                            </v-btn>
                        </div>

                        <row>
                            <!-- 전체선택가능하게 하기 -->
                            <cell>상태</cell>
                            <cell>등록번호</cell>
                            <cell>셀러아이디</cell>
                            <cell>셀러명</cell>
                            <cell>카테고리명</cell>
                            <cell>할인유</cell>
                            <cell>TR제한</cell>
                            <cell>시작일</cell>
                            <cell>종료일</cell>
                            <cell>발행자</cell>
                            <cell>승인자</cell>
                            <cell>적용업체</cell>
                        </row>
                    </div>
                </div>
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
export default {
    data() {
        const dt = new Date();
        const dt1 = new Date();
        return {
            // date: new Date().toISOString().substring(0, 10),


            s_date_searching1: dt.toISOString().substring(0, 10),  //menu5
            e_date_searching1: dt.toISOString().substring(0, 10), //menu6

            s_date_searching2: dt.toISOString().substring(0, 10), //menu7
            e_date_searching2: dt.toISOString().substring(0, 10), //menu8

            s_date1: dt.toISOString().substring(0, 10), //menu1
            month: dt.setMonth(dt.getMonth() + 3),
            e_date1: dt.toISOString().substring(0, 10), //menu2

            s_date2: dt1.toISOString().substring(0, 10),  //menu3
            month: dt1.setMonth(dt1.getMonth() + 3),
            e_date2: dt1.toISOString().substring(0, 10), //menu4

            menu1: false,
            menu2: false,
            menu3: false,
            menu4: false,
            menu5: false,
            menu6: false,
            menu7: false,
            menu8: false,
            items2: ['전체', '진행전', '진행중', '종료'],

            m_time: '01',
            minutes: ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23'],

            m_time2: '00',
            minutes2: ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23'],


            m_time3: '01',
            minutes3: ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23'],

            m_time4: '00',
            minutes4: ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23'],


            e1: '전체',
            items: ['전체', '진행전', '진행중', '종료'],

            e2: '전체',
            items2: ['전체', '진행전', '진행중', '종료'],

            assign: '전체',
            assign_status: ['전체', '등록', '2차승인'],

            checkList: ['NAVER', 'DAUM', 'DANAWA', 'ENURI'],
            selectList: [],

            checkList2: ['NAVER', 'DAUM', 'DANAWA', 'ENURI'],
            selectList2: [],
        }
    },
    methods: {
        s_date_search1(v) {
            this.s_date1 = v;
            this.menu1 = false;
            this.$refs.menu1.save(v);
        },
        e_date_search2(v) {
            this.e_date1 = v;
            this.menu2 = false;
            this.$refs.menu2.save(v);
        },

        s_date_search3(v) {
            this.s_date2 = v;
            this.menu3 = false;
            this.$refs.menu3.save(v);
        },
        e_date_search4(v) {
            this.e_date2 = v;
            this.menu4 = false;
            this.$refs.menu4.save(v);
        },
        s_date_search5(v) {
            this.s_date_searching1 = v;
            this.menu5 = false;
            this.$refs.menu5.save(v);
        },
        e_date_search6(v) {
            this.e_date_searching1 = v;
            this.menu6 = false;
            this.$refs.menu6.save(v);
        },

        s_date_search7(v) {
            this.s_date_searching2 = v;
            this.menu7 = false;
            this.$refs.menu7.save(v);
        },
        e_date_search8(v) {
            this.e_date_searching2 = v;
            this.menu8 = false;
            this.$refs.menu8.save(v);
        }
    },
    computed: {
        allSelected: {
            //getter
            get: function () {
                return this.checkList.length === this.selectList.length;
            },
            //setter
            set: function (e) {
                this.selectList = e ? this.checkList : [];
            },

        },
        allSelected2: {
            //getter
            get: function () {
                return this.checkList2.length === this.selectList2.length;
            },
            //setter
            set: function (e) {
                this.selectList2 = e ? this.checkList2 : [];
            },
        }

    },
}
</script>

<style>
.right {
    padding: 10px;
    text-align: right;
}
</style>
<template>
    <v-app id="app">
        <v-main>
            <v-container>
                <div>
                    <td>▶ EP발행제한(IACC)</td>
                </div>
                <div class="right">
                    <v-btn depressed>
                        검색
                    </v-btn>
                </div>
                <div id="">
                    <v-simple-table class="">
                        <tbody>
                            <tr>
                                <th>진행</th>
                                <td>
                                    <v-col cols="10">
                                        <v-select v-model="e1" :items="process" menu-props="auto" single-line>
                                        </v-select>
                                    </v-col>
                                </td>
                                <th>구분</th>
                                <td>
                                    <v-col cols="10">
                                        <v-select v-model="e2" :items="divide" menu-props="auto" single-line>
                                        </v-select>
                                    </v-col>
                                </td>
                                <th>등록일자</th>
                                <td>
                                    <v-row>
                                        <v-col cols="12" lg="4">
                                            <v-menu id="s_date" ref="menu1" v-model="menu1"
                                                :close-on-content-click="false" :return-value.sync="s_date"
                                                transition="scale-transition" offset-y min-width="290px">
                                                <template v-slot:activator="{ on, attrs }">
                                                    <v-text-field v-model="s_date" append-icon="mdi-calendar" readonly
                                                        v-bind="attrs" v-on="on"></v-text-field>
                                                </template>
                                                <v-date-picker v-model="s_date" no-title scrollable :max="e_date">
                                                    <v-spacer></v-spacer>
                                                    <v-btn text color="primary" @click="menu1 = false">Cancel
                                                    </v-btn>
                                                    <v-btn text color="primary" @click="s_date_search(s_date)">OK
                                                    </v-btn>
                                                </v-date-picker>
                                            </v-menu>
                                        </v-col>
                                        <v-col cols="12" lg="4">
                                            <v-menu id="e_date" ref="menu2" v-model="menu2"
                                                :close-on-content-click="false" :return-value.sync="e_date"
                                                transition="scale-transition" offset-y min-width="290px">
                                                <template v-slot:activator="{ on, attrs }">
                                                    <v-text-field v-model="e_date" append-icon="mdi-calendar" readonly
                                                        v-bind="attrs" v-on="on"></v-text-field>
                                                </template>
                                                <v-date-picker v-model="e_date" no-title scrollable :min="s_date">
                                                    <!--:max="date"-->
                                                    <v-spacer></v-spacer>
                                                    <v-btn text color="primary" @click="menu2 = false">Cancel
                                                    </v-btn>
                                                    <v-btn text color="primary" @click="e_date_search(e_date)">OK
                                                    </v-btn>
                                                </v-date-picker>
                                            </v-menu>
                                        </v-col>
                                    </v-row>
                                </td>
                            </tr>
                            <tr>
                                <th>상품번호</th>
                                <td>
                                    <v-col sm="6" md="6">
                                        <v-text-field label=""></v-text-field>
                                    </v-col>
                                </td>
                                <th scope="row">판매자ID</th>
                                <td>
                                    <v-col sm="6" md="6">
                                        <v-text-field label=""></v-text-field>
                                    </v-col>
                                </td>
                            </tr>
                        </tbody>
                    </v-simple-table>
                    <br>
                    <h2 class="">
                        <span>검색결과</span>
                        &nbsp;
                        <v-btn depressed>
                            제한해제
                        </v-btn>
                    </h2>
                    <row>
                        <cell>SeqNo</cell>
                        <cell>선택</cell>
                        <cell>진행</cell>
                        <cell>제한등록일</cell>
                        <cell>제한변경일</cell>
                        <cell>구분</cell>
                        <cell>상품번호</cell>
                        <cell>상품명</cell>
                        <cell>판매자ID</cell>
                        <cell>제한사이트</cell>
                        <cell>사유</cell>
                    </row>
                </div>
                <br><br><br>
                <h2 class=""><span>EP 발행제한 등록</span></h2>
                <v-simple-table class="">
                    <tbody>
                        <tr>
                            <th rowspan="2">
                                <input type="radio" id="one" value="One" v-model="picked">
                                <label for="one"> 하나씩 등록</label>
                            </th>
                            <td>
                                <v-col cols="5">
                                    <v-select v-model="e3" :items="seller" single-line>
                                    </v-select>
                                </v-col>
                            </td>
                            <td>
                                <v-col sm="6" md="6">
                                    <v-text-field label=""></v-text-field>
                                </v-col>
                            </td>
                            <th>제한사이트</th>
                            <td>
                                <div id="">
                                    <input type="checkbox" value="all" v-model="allSelected" />
                                    <label for="all">전체</label>
                                    <template v-for="(item, index) in checkList">
                                        <input v-if="(item, index) in checkList" type="checkbox" :id="item"
                                            :value="item" v-model="selectList" :key="index" />
                                        <label v-if="(item, index) in checkList" :for="item" :key="index + '1'"> {{ item
                                        }}</label>
                                    </template>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                사유
                            </td>
                            <td>
                                <v-col sm="6" md="6">
                                    <v-text-field label=""></v-text-field>
                                </v-col>
                            </td>
                            <td colspan="2">

                                <v-btn depressed>
                                    등록
                                </v-btn>
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <input type="radio" id="two" value="Two" v-model="picked">
                                <label for="two"> 복수로 등록</label>
                            </th>
                            <td>
                                <v-col cols="5">
                                    <v-select v-model="e4" :items="seller2" single-line>
                                    </v-select>
                                </v-col>
                            </td>

                            <td>
                                <v-file-input truncate-length="20" counter show-size></v-file-input>
                            </td>
                            <td>
                                <v-btn elevation="1"> <a
                                        href="http://amsnet/ams/buyerdiscount/example/catalog_example.xls">[엑셀 예제
                                        다운로드]</a></v-btn>
                            </td>
                            <td>
                                <v-btn depressed>
                                    등록
                                </v-btn>
                            </td>
                        </tr>
                    </tbody>
                </v-simple-table>
                <div>
                    ※ 복수 등록시 사이트 ID 참조 : 415(다나와), 438(네이버), 524(다음), 589(에누리), 635(공통), 705(어바웃), 832(바스켓)
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
            e_date: dt.toISOString().substring(0, 10),

            menu1: false,
            menu2: false,

            e1: '전체',
            process: ['전체', '진행중', '종료'],
            e2: '제한판매자',
            divide: ['제한판매자', '제한상품번호'],
            e3: '제한판매자',
            seller: ['제한판매자', '제한상품번호'],
            e4: '제한판매자',
            seller2: ['제한판매자', '제한상품번호'],

            checkList: ['NAVER', 'DAUM', 'DANAWA', 'ENURI'],
            selectList: [],
        }
    },
    methods: {
        s_data_search(v) {
            this.s_date
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
    },

}
</script>

<style>
.right {
    padding: 10px;
    text-align: right;
}
</style>
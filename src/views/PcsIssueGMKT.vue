<template>
    <v-app id="app">
        <v-main>
            <v-container>
                <div>
                    <td>▶ PCS발행제한(GMKT)</td>
                </div>
                <div class="right">
                    <v-btn depressed>검색</v-btn>
                </div>
                <v-simple-table>
                    <tbody>
                        <tr>
                            <th>진행</th>
                            <td>
                                <v-col cols="6">
                                    <v-select v-model="process_m" :items="process_i" single-line>
                                    </v-select>
                                </v-col>
                            </td>
                            <th>제한범위</th>
                            <td>
                                <v-col cols="6">
                                    <v-select v-model="bound_m" :items="bound_i" single-line>
                                    </v-select>
                                </v-col>
                            </td>
                            <th scope="row">구분</th>
                            <td>
                                <v-col cols="6">
                                    <v-select v-model="divide_m" :items="divide_i" single-line>
                                    </v-select>
                                </v-col>

                            </td>
                            <th>등록일자</th>
                            <td>
                                <v-row>
                                    <v-col cols="12" lg="4">
                                        <v-menu id="s_date" ref="menu1" v-model="menu1" :close-on-content-click="false"
                                            :return-value.sync="s_date" transition="scale-transition" offset-y
                                            min-width="290px">
                                            <template v-slot:activator="{ on, attrs }">
                                                <v-text-field v-model="s_date" append-icon="mdi-calendar" readonly
                                                    v-bind="attrs" v-on="on"></v-text-field>
                                            </template>
                                            <v-date-picker v-model="s_date" no-title scrollable>
                                                <!--:max="e_date"-->
                                                <v-spacer></v-spacer>
                                                <v-btn text color="primary" @click="menu1 = false">Cancel
                                                </v-btn>
                                                <v-btn text color="primary" @click="s_date_search(s_date)">OK
                                                </v-btn>
                                            </v-date-picker>
                                        </v-menu>
                                    </v-col>

                                    <v-col cols="12" lg="4">
                                        <v-menu id="e_date" ref="menu2" v-model="menu2" :close-on-content-click="false"
                                            :return-value.sync="e_date" transition="scale-transition" offset-y
                                            min-width="290px">
                                            <template v-slot:activator="{ on, attrs }">
                                                <v-text-field v-model="e_date" append-icon="mdi-calendar" readonly
                                                    v-bind="attrs" v-on="on"></v-text-field>
                                            </template>
                                            <v-date-picker v-model="e_date" no-title scrollable>
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
                            <td colspan="3">
                                <v-col sm="6" md="6">
                                    <v-text-field label=""></v-text-field>
                                </v-col>
                            </td>
                            <th>판매자ID</th>
                            <td>
                                <v-col sm="6" md="6">
                                    <v-text-field label=""></v-text-field>
                                </v-col>
                            </td>
                            <th>카탈로그</th>
                            <td>
                                <v-col sm="6" md="6">
                                    <v-text-field label=""></v-text-field>
                                </v-col>
                            </td>
                        </tr>
                    </tbody>
                </v-simple-table>
                <br><br>
                <h2> <span>검색결과</span>
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
                    <cell>중도제한해제일</cell>
                    <cell>제한만료일</cell>
                    <cell>구분</cell>
                    <cell>제한코드</cell>
                    <cell>물품명</cell>
                    <cell>판매자ID</cell>
                    <cell>카탈로그</cell>
                    <cell>모델명</cell>
                    <cell>변경일</cell>
                    <cell>등록자</cell>
                    <cell>제한범위</cell>
                </row>
                <br><br><br><br>
                <h2><span>PCS 발행제한 등록</span></h2>
                <v-simple-table class="">
                    <tbody>
                        <tr>
                            <th scope="row">
                                <input type="radio" id="one" value="One" v-model="picked">
                                <label for="one"> 하나씩 등록</label>
                            </th>
                            <td>
                                <v-col cols="6">
                                    <v-select v-model="divide_m2" :items="divide_i2" single-line>
                                    </v-select>
                                </v-col>
                            </td>
                            <td>
                                <v-col sm="6" md="6">
                                    <v-text-field label=""></v-text-field>
                                </v-col>
                            </td>
                            <th >제한 만료일자</th>
                            <td>
                                <v-col cols="12" lg="4">
                                    <v-menu id="e_date2" ref="menu3" v-model="menu3" :close-on-content-click="false"
                                        :return-value.sync="e_date2" transition="scale-transition" offset-y
                                        min-width="290px">
                                        <template v-slot:activator="{ on, attrs }">
                                            <v-text-field v-model="e_date2" append-icon="mdi-calendar" readonly
                                                v-bind="attrs" v-on="on"></v-text-field>
                                        </template>
                                        <v-date-picker v-model="e_date2" no-title scrollable>
                                            <!--:max="e_date"-->
                                            <v-spacer></v-spacer>
                                            <v-btn text color="primary" @click="menu3 = false">Cancel
                                            </v-btn>
                                            <v-btn text color="primary" @click="e_date_search2(e_date2)">OK
                                            </v-btn>
                                        </v-date-picker>
                                    </v-menu>
                                </v-col>
                            </td>
                            <td>
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
                                <v-col cols="6">
                                    <v-select v-model="divide_m3" :items="divide_i3" menu-props="auto" single-line>
                                    </v-select>
                                </v-col>
                            </td>
                            <td>
                                <v-file-input truncate-length="20" counter show-size></v-file-input>
                            </td>
                            <th scope="row">제한 만료일자</th>
                            <td>
                                <v-col cols="12" lg="4">
                                    <v-menu id="e_date3" ref="menu4" v-model="menu3" :close-on-content-click="false"
                                        :return-value.sync="e_date3" transition="scale-transition" offset-y
                                        min-width="290px">
                                        <template v-slot:activator="{ on, attrs }">
                                            <v-text-field v-model="e_date3" append-icon="mdi-calendar" readonly
                                                v-bind="attrs" v-on="on"></v-text-field>
                                        </template>
                                        <v-date-picker v-model="e_date3" no-title scrollable>
                                            <!--:max="e_date"-->
                                            <v-spacer></v-spacer>
                                            <v-btn text color="primary" @click="menu4 = false">Cancel
                                            </v-btn>
                                            <v-btn text color="primary" @click="e_date_search3(e_date3)">OK
                                            </v-btn>
                                        </v-date-picker>
                                    </v-menu>
                                </v-col>
                            </td>
                            <td>
                                <v-btn depressed>
                                    등록
                                </v-btn>
                            </td>
                        </tr>
                    </tbody>
                </v-simple-table>
                <br><br><br>

                <h2><span>ITEM 발행제한 등록</span></h2>
                <v-simple-table class="">
                    <tbody>
                        <tr>
                            <th scope="row">
                                <input type="radio" id="one" value="One" v-model="picked">
                                <label for="one"> 하나씩 등록</label>
                            </th>
                            <td>
                                <v-col cols="6">
                                    <v-select v-model="divide_m2" :items="divide_i2" single-line>
                                    </v-select>
                                </v-col>
                            </td>
                            <td>
                                <v-col sm="6" md="6">
                                    <v-text-field label=""></v-text-field>
                                </v-col>
                            </td>
                            <th>제한 만료일자</th>
                            <td>
                                <v-col cols="12" lg="4">
                                    <v-menu id="e_date4" ref="menu5" v-model="menu5" :close-on-content-click="false"
                                        :return-value.sync="e_date4" transition="scale-transition" offset-y
                                        min-width="290px">
                                        <template v-slot:activator="{ on, attrs }">
                                            <v-text-field v-model="e_date4" append-icon="mdi-calendar" readonly
                                                v-bind="attrs" v-on="on"></v-text-field>
                                        </template>
                                        <v-date-picker v-model="e_date4" no-title scrollable>
                                            <!--:max="e_date"-->
                                            <v-spacer></v-spacer>
                                            <v-btn text color="primary" @click="menu5 = false">Cancel
                                            </v-btn>
                                            <v-btn text color="primary" @click="e_date_search4(e_date4)">OK
                                            </v-btn>
                                        </v-date-picker>
                                    </v-menu>
                                </v-col>
                            </td>
                            <td>
                                <v-btn depressed>등록</v-btn>
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <input type="radio" id="one" value="One" v-model="picked">
                                <label for="one"> 하나씩 등록</label>
                            </th>
                            <td>
                                <v-col cols="6">
                                    <v-select v-model="divide_m4" :items="divide_i4" single-line>
                                    </v-select>
                                </v-col>
                            </td>
                            <td>
                                <v-file-input truncate-length="20" counter show-size></v-file-input>
                            </td>
                            <th scope="row">제한 만료일자</th>
                            <td>
                                <v-col cols="12" lg="4">
                                    <v-menu id="e_date5" ref="menu6" v-model="menu6" :close-on-content-click="false"
                                        :return-value.sync="e_date5" transition="scale-transition" offset-y
                                        min-width="290px">
                                        <template v-slot:activator="{ on, attrs }">
                                            <v-text-field v-model="e_date5" append-icon="mdi-calendar" readonly
                                                v-bind="attrs" v-on="on"></v-text-field>
                                        </template>
                                        <v-date-picker v-model="e_date5" no-title scrollable>
                                            <!--:max="e_date"-->
                                            <v-spacer></v-spacer>
                                            <v-btn text color="primary" @click="menu6 = false">Cancel
                                            </v-btn>
                                            <v-btn text color="primary" @click="e_date_search5(e_date5)">OK
                                            </v-btn>
                                        </v-date-picker>
                                    </v-menu>
                                </v-col>
                            </td>
                            <td>
                                <v-btn depressed>등록</v-btn>
                            </td>
                        </tr>
                    </tbody>
                </v-simple-table>
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
export default {
    data() {
        const dt = new Date();
        return {
            process_m: '전체',
            process_i: ['전체', '진행중', '종료'],

            bound_m: '전체',
            bound_i: ['전체', 'PCS제한', 'ITEM제한'],

            divide_m: '제한상품번호',
            divide_i: ['제한상품번호', '제한판매자', '제한카테고리'],

            s_date: dt.toISOString().substring(0, 10),
            e_date: dt.toISOString().substring(0, 10),
            menu1: false,
            menu2: false,

            divide_m2: '제한상품번호',
            divide_i2: ['제한상품번호', '제한판매자', '제한카테고리'],

            divide_m3: '제한상품번호',
            divide_i3: ['제한상품번호', '제한판매자', '제한카테고리'],

            divide_m4: '제한상품번호',
            divide_i4: ['제한상품번호', '제한판매자', '제한카테고리'],

            e_date2: dt.toISOString().substring(0, 10),
            menu3: false,
            e_date3: dt.toISOString().substring(0, 10),
            menu4: false,
            e_date4: dt.toISOString().substring(0, 10),
            menu5: false,
            e_date5: dt.toISOString().substring(0, 10),
            menu6: false,
        }
    },
    methods: {
        s_date_search(v) {
            this.s_date = v;
            this.menu1 = false;
            this.$refs.menu1.save(v);
        },
        e_date_search(v) {
            this.e_date = v;
            this.menu2 = false;
            this.$refs.menu2.save(v);
        },
        e_date_search2(v) {
            this.e_date2 = v;
            this.menu3 = false;
            this.$refs.menu3.save
        },
        e_date_search3(v) {
            this.e_date3 = v;
            this.menu4 = false;
            this.$refs.menu4.save
        },
        e_date_search4(v) {
            this.e_date4 = v;
            this.menu5 = false;
            this.$refs.menu5.save
        },
        e_date_search5(v) {
            this.e_date5 = v;
            this.menu6 = false;
            this.$refs.menu6.save
        },
    }
}

</script>

<style>

</style>
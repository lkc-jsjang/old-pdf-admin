<template>
    <v-app id="app">
        <v-main>
            <v-container>
                <div>
                    <td>▶ PCS쿠폰발행_PCS_P3(카탈로그)(승인포함)(GMKT)</td>
                </div>
                <div>
                    <h2><span>PCS P3 쿠폰 신규 등록(GMKT)</span></h2>
                    <!--
                        <v-form ref="vForm" @submit.prevent="couponIssueP3GMKT">
                        -->
                    <v-form>
                        <v-row lazy-validation>
                            <v-simple-table>
                                <tbody>
                                    <tr>
                                        <th>PCS 쿠폰 타입</th>
                                        <td>PCS P3(카탈로그)</td>
                                        <th>내부관리명</th>
                                        <td>
                                            <v-col>
                                                <v-text-field v-model="txtGroupName" label="txtGroupName" ref="refTxtGroupName"></v-text-field>
                                            </v-col>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>기간</th>
                                        <td>
                                            <v-row>
                                                <v-col>
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
                                                    <v-select v-model="m_time" :items="minutes" menu-props="auto" single-line>
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

                                        <th>발행구분</th>
                                        <td>
                                            <v-col cols="6">
                                                <v-select v-model="e1" :items="issues" menu-props="auto" single-line></v-select>
                                            </v-col>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>TR 제한</th>
                                        <td>
                                            <v-col sm="6" md="5">
                                                <v-text-field v-model="txtTR" label="% (-50% ~ 50%)" ref="refTxtTR"></v-text-field>
                                            </v-col>
                                        </td>

                                    </tr>
                                    <tr>
                                        <th>PCS 채널 선택</th>
                                        <td>
                                            <div id="">
                                                <!-- 
                                                    <input type="checkbox" value="all" v-model="allSelected" />
                                                -->
                                                <input type="checkbox" value="all" v-model="allSelected" />
                                                <label for="all">전체</label>
                                                <template v-for="(item, index) in checkList">
                                                    <input v-if="(item, index) in checkList" type="checkbox" :id="item"
                                                        :value="item" v-model="selectList" :key="index" />
                                                    <label v-if="(item, index) in checkList" :for="item" :key="index + '1'"> {{
                                                            item
                                                    }}</label>
                                                </template>
                                            </div>

                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">첨부파일</th>
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
                        </v-row>
                    </v-form>
                    <div class="register">
                        <!--
                        <v-btn depressed v-on:click="PcsCpnGmktCatP3_Register">
                            등록
                        </v-btn>
                        -->
                        <v-btn id="pcsCpnGmktCatP3" @click="PcsCpnGmktCatP3_Register" @keyup.enter="PcsCpnGmktCatP3_Register">
                            등록
                        </v-btn>
                    </div>

                    <br><br><br>

                    <div>
                        <h2 class=""><span>PCS P3 쿠폰 발행정보 조회</span><span id=""></span></h2>
                        <div style="text-align:right">
                            <v-btn depressed>
                                엑셀 다운로드
                            </v-btn>
                            <v-btn id="pcsCpnGmktCatP3Select" @click="PcsCpnGmktCatP3_Select" @keyup.enter="PcsCpnGmktCatP3_Select">
                                조회
                            </v-btn>
                            <v-btn depressed>
                                승인
                            </v-btn>
                            <v-btn depressed>
                                종료
                            </v-btn>
                        </div>
                        <v-form>
                            <v-simple-table class="">
                                <tbody>
                                    <tr>
                                        <th>관리번호</th>
                                        <td>
                                            <v-col md="6">
                                                <v-text-field label=""></v-text-field>
                                            </v-col>
                                        </td>
                                        <th>내부관리명</th>
                                        <td>
                                            <v-col md="6">
                                                <v-text-field v-model="txtSelectGroupName" label="txtSelectGroupName" ref="refTxtSelectGroupName"></v-text-field>
                                            </v-col>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>발행자</th>
                                        <td>
                                            <v-col md="6">
                                                <v-text-field label=""></v-text-field>
                                            </v-col>
                                        </td>
                                        <th>적용업체</th>
                                        <td>
                                            <v-col md="6">
                                                <v-text-field label=""></v-text-field>
                                            </v-col>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>기간</th>
                                        <td>
                                            <v-row>
                                                <v-col lg="4">
                                                    <v-menu id="s_date2" ref="menu3" v-model="menu3"
                                                        :close-on-content-click="false" :return-value.sync="s_date2"
                                                        transition="scale-transition" offset-y min-width="290px">
                                                        <template v-slot:activator="{ on, attrs }">
                                                            <v-text-field v-model="s_date2" append-icon="mdi-calendar"
                                                                readonly v-bind="attrs" v-on="on"></v-text-field>
                                                        </template>
                                                        <v-date-picker v-model="s_date2" no-title scrollable :max="e_date2">
                                                            <v-spacer></v-spacer>
                                                            <v-btn text color="primary" @click="menu3 = false">Cancel
                                                            </v-btn>
                                                            <v-btn text color="primary" @click="s_date_search3(s_date2)">OK
                                                            </v-btn>
                                                        </v-date-picker>
                                                    </v-menu>
                                                </v-col>

                                                <v-col lg="4">
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
                                            </v-row>

                                        </td>

                                        <th>카탈로그 번호</th>
                                        <td>
                                            <v-col md="6">
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
                                                <v-select v-model="e2" :items="progress_status"  menu-props="auto" single-line>
                                                </v-select>
                                            </v-col>
                                        </td>
                                    </tr>
                                </tbody>
                            </v-simple-table>
                        </v-form>
                        <br>
                        <div>
                            <v-btn depressed color="primary">
                                CSV 붙여넣기
                            </v-btn>
                        </div>
                        <br>
                        <!--
                        <row>
                                <cell>상태 </cell>
                                <cell>관리번호 </cell>
                                <cell>내부관리명 </cell>
                                <cell>적용개체수 </cell>
                                <cell>할인금액 </cell>
                                <cell>할인율 </cell>
                                <cell>TR제한 </cell>
                                <cell>물품최소금액 </cell>
                                <cell>발행구분 </cell>
                                <cell>시작일 </cell>
                                <cell>종료일 </cell>
                                <cell>발행자 </cell>
                                <cell>승인자 </cell>
                                <cell>적용업체 </cell>
                        </row>
                        -->
                        <!--
                        <div>
                            <ag-grid-vue style="width: 100%; height: 500px; min-height: 300px" 
                            class="ag-theme-alpine"    
                            :gridOptions="gridOptions"
                            :columnDefs="columnDefs" 
                            :rowData="rowData"
                            :gridReady="gridSizeFit"
                            :gridSizeChanged="gridSizeFit">
                            </ag-grid-vue>
                        </div>
                        -->
                        <!--
                        <ag-grid-vue style="width: 100%; height: 500px; min-height: 300px" 
                            class="ag-theme-alpine"
                            :columnDefs="columnDefs" 
                            :rowData="rowData">
                        </ag-grid-vue>
                        -->
                        <div>
                            <v-data-table
                            :headers="headers"
                            :items="items"
                            :loading="loading"
                            loading-text="Loading... Please wait"
                            :items-per-page="itemsPerPage"
                            hide-default-footer
                            class="elevation-1">
                            </v-data-table>
                        </div>
                    </div>
                </div>
            </v-container>
        </v-main>
        
    </v-app>
</template>

<script>

import http from "../http-common";
import axios from 'axios';

// import {AgGridVue} from "ag-grid-vue3";

export default {
    name: 'CouponIssueP3GMKT',
    components: {
        // AgGridVue
    },
    data () {
        const dt = new Date();
        return {
            page: 1,
            pageCount: 0,
            itemPerPage: 10,
            // v-data-table에서는 기본적으로 3가지의 prop을 사용합니다.
            /* 
            headers = 필드명을 지정하는 prop로 text,align,sortable,value로 구분합니다.
            value의 경우는 향후 data를 적용시 데이터 내 DTO와 일치시키면 됩니다.
            :items = API로 받아온 결과 list가 저장되는 장소입니다.
            :items-per-page = 한 page에서 보여줄  list의 개수입니다.

            해당 항목별로 data() 에서 값을 지정해주면 됩니다.
            */

            headers: [
                { text: '상태', align: 'center', sortable: false, value:'approvalState'},
                { text: '관리번호', align: 'center', sortable: false, value:'bcGroupNo'},
                { text: '내부관리명', align: 'center', sortable: false, value:'bcGroupName'},
                { text: '적용개체수', align: 'center', sortable: false, value:'objectCount'},
                { text: '할인금액', align: 'center', sortable: false, value:''},
                { text: '할인율', align: 'center', sortable: false, value:''},
                { text: 'TR제한', align: 'center', sortable: false, value:''},
                { text: '물품최소금액', align: 'center', sortable: false, value:''},
                { text: '발행구분', align: 'center', sortable: false, value:''},
                { text: '시작일', align: 'center', sortable: false, value:'issueStartDate'},
                { text: '종료일', align: 'center', sortable: false, value:'issueEndDate'},
                { text: '발행자', align: 'center', sortable: false, value:'staffName'},
                { text: '승인자', align: 'center', sortable: false, value:'staffName'},
                { text: '적용업체', align: 'center', sortable: false, value:''},
            ],
            items: [],

            // PCS P3 쿠폰 신규 등록(GMKT) 매개변수
            txtGroupName: '',
            txtTR: '',
            s_date1: '',
            e_date1: '',

            // PCS P3 쿠폰 발행정보 조회 매개변수
            txtSelectGroupName: '',
            s_date2: dt.toISOString().substring(0, 10),
            e_date2: dt.toISOString().substring(0, 10),
            menu1: false,
            menu2: false,
            menu3: false,
            menu4: false,

            s_date1: dt.toISOString().substring(0, 10),
            month: dt.setMonth(dt.getMonth() + 3),
            e_date1: dt.toISOString().substring(0, 10),

            e1: 'Seller',
            issues: ['Seller', 'Item', 'Catalog'],

            e2: '전체',
            // items: ['전체', '진행전', '진행중', '진행종료'],
            progress_status: ['전체', '진행전', '진행중', '진행종료'],

            m_time: '01',
            minutes: ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23'],

            m_time2: '01',
            minutes2: ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23'],

            assign: '전체',
            assign_status: ['전체', '등록', '2차승인'],

            checkList: ["NAVER", "DAUM", "DANAWA", "ENURI"],
            selectList: [],

            // columnDefs: null,
            // rowData: null
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
        // 
        // columnDefs () {
        //     return [
        //         { headerName: 'AAA', field: 'aaa'},
        //         { headerName: 'BBB', field: 'bbb'},
        //         { headerName: 'CCC', field: 'ccc'},
        //     ]
        // }   
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
        async PcsCpnGmktCatP3_Register(){

            // var varTxtGroupName = '';
            // var varTxtTr = '';
            
            alert("PcsCpnGmktCatP3_Register Click");

            // value confirm check
            // 내부관리명 : txtGroupName
            // alert('this.txtGroupName = ' + this.txtGroupName); // test ok
            // alert('this.txtGroupName.length = ' + this.txtGroupName.length); // test ok

            // TR제한 : txtTR
            // alert('this.txtTr =' + this.txtTR); // test ok
            // alert('this.txtTr.length =' + this.txtTR.length); //  test ok

            // 기간시작일 : s_date1
            // alert('this.s_date1 = ' + this.s_date1); // yyyy-mm-dd , test ok

            // 기간종료일 : e_date1
            // alert('this.e_date1 = ' + this.e_date1); // yyyy-mm-dd , test ok

            if (this.txtGroupName.length == 0){
                alert('PCS P3 쿠폰 신규등록 내부관리명이 입력되지 않았습니다.');
                this.$refs.refTxtGroupName.focus();
            } else {
                if (this.txtTR.length == 0){
                    alert('TR제한을 입력하세요.');
                    this.$refs.refTxtTR.focus();
                } else {

                    console.log("this.s_date1 = " + this.s_date1);
                    console.log("this.e_date1 = " + this.e_date1);

                    if ((this.txtTR < -50) || (this.txtTR > 50)){
                        alert('TR제한은 -50% ~ 50% 까지 가능합니다.');
                        this.$refs.refTxtTR.focus();
                    } else {
                        // submit
                        http.post('/postPDFV4P3ManageRegist', null, {
                            params:{
                                txtGroupName : this.txtGroupName,
                                txtTR : this.txtTR,
                                s_date1 : this.s_date1,
                                e_date1 : this.e_date1,
                            }
                        }) 
                        .then(res=>{
                            console.log("/postPDFV4P3ManageRegist Vue JS Call Success");
                            console.log(res);
                        })
                        .catch(e=>{
                            console.log("/postPDFV4P3ManageRegist Vue JS Call Failure");
                            console.log(e);
                        })
                    }
                }
            }

            // TR제한 : txtTR
            // alert('this.txtTR = ' + this.txtTR); // test ok
            // alert('this.txtTR.length = ' + this.txtTR.length); // test ok
            
            // console.log('this.txtGroupName =' + this.txtGroupName); // test ok
            // console.log('this.txtTR =' + this.txtTR); // test ok

            // fail code
            // http.post('/postPDFV4P3ManageRegist', {
            //     txtGroupName : this.txtGroupName,
            //     txtTR : this.txtTR,
            // }) 
            // .then(res=>{
            //     console.log("/postPDFV4P3ManageRegist Vue JS Call Success");
            //     console.log(res);
            // })
            // .catch(e=>{
            //     console.log("/postPDFV4P3ManageRegist Vue JS Call Failure");
            //     console.log(e);
            // })

            // http.post('/postPDFV4P3ManageRegist', null, {
            //     params:{
            //         txtGroupName : this.txtGroupName,
            //         txtTR : this.txtTR,
            //     }
            // }) 
            // .then(res=>{
            //     console.log("/postPDFV4P3ManageRegist Vue JS Call Success");
            //     console.log(res);
            // })
            // .catch(e=>{
            //     console.log("/postPDFV4P3ManageRegist Vue JS Call Failure");
            //     console.log(e);
            // })
        },
        async PcsCpnGmktCatP3_Select(){
            alert("PcsCpnGmktCatP3_Select Click");

            if (this.txtSelectGroupName.length == 0){
                alert('PCS P3 쿠폰 발행정보 조회 내부관리명이 입력되지 않았습니다.');
                this.$refs.refTxtSelectGroupName.focus();
            } else {
                console.log("this.s_date2 = " + this.s_date2);
                console.log("this.e_date2 = " + this.e_date2);

                // submit
                http.post('/postPDFV4P3ManageSelect', null, {
                    params:{
                        txtSelectGroupName : this.txtSelectGroupName,
                        s_date2 : this.s_date2,
                        e_date2 : this.e_date2,
                    }
                }) 
                .then(res=>{
                    alert("PCS P3 쿠폰 발행정보가 조회되었습니다.");
                    console.log("/postPDFV4P3ManageSelect Vue JS Call Success");
                    console.log("res = ");
                    console.log("res.data = ", res.data);
                    console.log(res.data);
                    this.items = res.data;
                    this.loading = false;
                    console.log(res);
                })
                .catch(e=>{
                    console.log("/postPDFV4P3ManageSelect Vue JS Call Failure");
                    console.log(e);
                })
            }
        }
    }
    // computed: {
    //     allSelected: {
    //         //getter
    //         get: function () {
    //             return this.checkList.length === this.selectList.length;
    //         },
    //         //setter
    //         set: function (e) {
    //             this.selectList = e ? this.checkList : [];
    //         },
    //     },
    // },
}
</script>

<style lang="scss">

/* 
    data-grid 는 ag-grid 사용 , 설치방법 : C:\DEV\ProjectWork\A_Frontend\new_pdf_admin>npm install ag-grid-vue3 ag-grid-community vue-class-component@next --force 
*/
// @import "ag-grid-community/dist/styles/ag-grid.css";
// @import "ag-grid-community/dist/styles/ag-theme-alpine.css";

// @import "../node_modules/ag-grid-community/dist/styles/ag-grid.css";
// @import "../node_modules/ag-grid-community/dist/styles/ag-theme-alpine.css";

/*
ag-theme-alpine : 모던한 스타일, 높은 contrast, 일반적인 padding값이 적용됨.
ag-theme-apline-dark : alpine의 dark버전
ag-theme-balham : alpine보다 그리드 간격과 폰트가 좀더 작고 촘촘합니다. 데이터를 좀더 많이 보여줌.
ag-theme-balham-dark : balham의 dark버전
ag-theme-material : 구글의 material 디자인 스타일. 적은양의 데이터를 여유있게 보여줄 때 유용.
*/

table {
    border: 1px solid black;
}

.register {
    padding: 10px;
    text-align: center;
}
</style>
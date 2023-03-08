<template>
    <v-app id="app">
        <v-main>
            <v-container>
                <div>
                    <td>▶ PDFV4 인터넷 최저가 조회(GMKT)</td>
                </div>
                <div class="right">
                    <v-btn depressed>조회</v-btn>
                </div>
                <div id="">
                    <v-simple-table class="">
                        <tbody>
                            <tr>
                                <th>조회기간</th>
                                <td>
                                    <v-col>
                                        <v-menu id="s_date" ref="menu1" v-model="menu1" :close-on-content-click="false"
                                            transition="scale-transition" offset-y min-width="290px">
                                            <template v-slot:activator="{ on, attrs }">
                                                <v-text-field v-model="s_date" append-icon="mdi-calendar" readonly
                                                    v-bind="attrs" v-on="on"></v-text-field>
                                            </template>
                                            <v-date-picker v-model="s_date" no-title scrollable>
                                                <v-spacer></v-spacer>
                                                <v-btn text color="primary" @click="menu1 = false">Cancel</v-btn>
                                                <v-btn text color="primary" @click="s_date_search(s_date)">OK
                                                </v-btn>
                                            </v-date-picker>
                                        </v-menu>
                                    </v-col>
                                </td>
                                <td>~</td>
                                <td>
                                    <v-col>
                                        <v-menu id="e_date" ref="menu2" v-model="menu2" :close-on-content-click="false"
                                            :return-value.sync="e_date" transition="scale-transition" offset-y
                                            min-width="290px">
                                            <template v-slot:activator="{ on, attrs }">
                                                <v-text-field v-model="e_date" append-icon="mdi-calendar" readonly
                                                    v-bind="attrs" v-on="on"></v-text-field>
                                            </template>
                                            <v-date-picker v-model="e_date1" no-title scrollable>
                                                <!--:max="date"-->
                                                <v-spacer></v-spacer>
                                                <v-btn text color="primary" @click="menu2 = false">Cancel</v-btn>
                                                <v-btn text color="primary" @click="e_date_search(e_date)">OK
                                                </v-btn>
                                            </v-date-picker>
                                        </v-menu>
                                    </v-col>
                                </td>
                                <th scope="row">파트너</th>
                                <td>
                                    <v-col cols="10">
                                        <v-select v-model="partner_m" :items="partner_i" menu-props="auto" single-line>
                                        </v-select>
                                    </v-col>
                                </td>
                            </tr>
                        </tbody>
                    </v-simple-table>
                    <br><br>
                    <h2 class="">
                        <span>PDFV4 인터넷 최저가 조회</span>
                        &nbsp;
                        <v-btn depressed>Excel</v-btn>
                        &nbsp;
                        <span class="font">[매칭수(시간)을 더블클릭하시면 상세화면으로 전환됩니다.]</span>
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
            e_date: dt.toISOString().substring(0, 10),
            menu1: false,
            menu2: false,

            partner_m: 'ENURI(200002673)',
            partner_i: ['ENURI(200002673)', 'NAVER(200001169)', 'DANAWA(200002657)', 'ABOUT(200003556)'],
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
    },
}

</script>

<style>
.font {
    font-size:12px;
    font-weight:normal;
}
</style>
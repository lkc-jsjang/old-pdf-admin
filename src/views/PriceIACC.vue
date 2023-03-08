<template>
    <v-app id="app">
        <v-main>
            <v-container>
                <div>
                    <td>▶ PDFV4 인터넷 최저가 조회(IACC)</td>
                </div>
                <v-simple-table>
                    <tr>
                        <th width="10%">
                            조회기간
                        </th>
                        <td>
                            <v-col lg="7">
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
                            <v-col lg="7">
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
                                        <v-btn text color="primary" @click="menu2 = false">Cancel</v-btn>
                                        <v-btn text color="primary" @click="e_date_search(e_date)">OK
                                        </v-btn>
                                    </v-date-picker>
                                </v-menu>
                            </v-col>
                        </td>
                        <td>
                            <v-col cols="6">
                                <v-select v-model="partner_m" :items="partner_i" single-line>
                                </v-select>
                            </v-col>
                        </td>
                        <td width="10%">
                            <v-btn depressed :style="btnStyle">조회</v-btn>
                        </td>
                    </tr>
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
            s_date: dt.toISOString().substring(0, 10),
            e_date: dt.toISOString().substring(0, 10),
            menu1: false,
            menu2: false,

            partner_m: '에누리(589)',
            partner_i: ['에누리(589)', '네이버(438)', '다나와(415)', '어바웃(705)'],

            btnStyle: "background-color: bisque",
        }
    },
    methods: {
        s_date_search(v) {
            this.s_date = v;
            this.menu1 = false;
            this.$refs.menu1.save(v);
        },
        e_date_search(v) {
            this.s_date = v;
            this.menu2 = false;
            this.$refs.menu2.save(v);
        },
    }
}

</script>

<style>

</style>
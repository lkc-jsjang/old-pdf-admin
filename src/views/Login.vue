<template>
    <v-app id="inspire">
      <v-main class="blue-grey lighten-4">
        <!-- Login Component -->
        <v-container style="max-width: 450px" fill-height>
          <v-layout align-center row wrap>
            <v-flex xs12>
              <v-card>
                <div class="pa-10">
                  <h1 style="text-align: center" class="mb-10">NEW_CMTOOL은 ebayKorea 계정으로 접속 가능합니다</h1>
                  <v-card-text>                        
                    <v-form ref="signForm">
                      <!--
                      <v-text-field
                        label="ID"
                        prepend-inner-icon="mdi-account"
                      ></v-text-field>
                      <v-text-field
                        prepend-inner-icon="mdi-lock"
                        type="password"
                        label="Password"
                      >
                      </v-text-field>
                      -->
                      <v-text-field                                    
                        prepend-icon="mdi-account"      
                        v-model="form.domain"                       
                        :rules="domain_rule"
                        label="도메인"
                        type="text"
                        placeholder="ebayKorea 도메인을 입력해주세요."
                        ></v-text-field>
                      <v-text-field                                    
                        prepend-icon="mdi-account"      
                        v-model="form.username"                       
                        :rules="username_rule"
                        label="아이디"
                        type="text"
                        placeholder="ebayKorea ID를 입력해주세요."
                        ></v-text-field>
                        <v-text-field
                        prepend-icon="mdi-lock"
                        v-model="form.password"                                    
                        :rules="password_rule"
                        label="비밀번호"
                        type="password"
                        placeholder="ebayKorea Password를 입력해주세요."
                        @keyup.enter="signIn"
                        ></v-text-field>
                    </v-form>
                  </v-card-text>
                  <v-card-actions>
                    <v-btn
                      type="submit"
                      color="blue lighten-1 text-capitalize"
                      depressed
                      large
                      block
                      dark
                      class="mb-3"
                      @click.prevent="signIn"
                    >
                      로그인
                    </v-btn>
                    <!--
                    <v-btn
                      @click="addUserShow"
                      color="blue lighten-1 text-capitalize"
                      depressed
                      large
                      block
                      dark
                    >
                      Sign Up
                    </v-btn>
                    -->
                  </v-card-actions>
                  <v-card-actions>
                    <v-btn
                      type="mngAuth"
                      color="blue lighten-1 text-capitalize"
                      depressed
                      large
                      block
                      dark
                      class="mb-3"
                      @click="mngAuth"
                    >
                      권한관리
                    </v-btn>
                  </v-card-actions>
                </div>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-main>
    </v-app>
  </template>
  
  <script>
    import http from "../http-common";

  // import axios from 'axios'

  // export default {
  //         name: 'login',
  //         data() {
  //             return {
  //                 loginSuccess: false,
  //                 loginError: false,
  //                 user: '',
  //                 password: '',
  //                 error: false
  //             }
  //         },
  //         methods: {
  //             async login() {
  //                 try {
  //                     const result = await axios.get('/api/login', {
  //                         auth: {
  //                             username: this.user,
  //                             password: this.password
  //                         }
  //                     });
  //                     if (result.status === 200) {
  //                         this.loginSuccess = true
  //                     }
  //                 } catch (err) {
  //                     this.loginError = true;
  //                     throw new Error(err)
  //                 }
  //             }
  //         }
  //     }


  export default {
    data() {
      return {
          form: {
            domain: 'ebaykorea',
            username: '',
            password: ''
          },
          domain_rule: [
            v => !!v || 'ebayKorea DOMAIN을 입력해주세요.',
            v => !(v && v.length <= 0) || 'ebayKorea DOMAIN을 입력해주세요.'
          ],
          username_rule: [
            v => !!v || 'ebayKorea ID를 입력해주세요.',
            v => !(v && v.length <= 0) || 'ebayKorea ID를 입력해주세요.'
          ],
          password_rule: [
            v => !!v || 'ebayKorea Password를 입력해주세요.',
            v => !(v && v.length <= 0) || 'ebayKorea Password를 입력해주세요.'
          ]
      }
    },

    methods: {
      signIn() {
        const validate = this.$refs.signForm.validate()

        console.log("this.refs.signform value = " + this.$refs.signForm.$data);

        console.log("vueJs_Login.vue_domain:",this.form.domain)
        console.log("vueJs_Login.vue_username:",this.form.username)
        console.log("vueJs_Login.vue_password:",this.form.password)

        if (validate){

          http.post("/loginLdap", this.form)
          .then(res=>{
            console.log("signIn then START !!")
            console.log(res)
            if(this.$route.path!=='/auth') this.$router.push('/auth')
            console.log("signIn then END !!")
          })
          .catch(e=>{
            console.log("signIn catch !! ")
            console.log(e);
          })
        }
      },
      mngAuth() {
        console.log("vueJs_Login.vue_mngAuth Click")
        
        const url = window.location.href;
        const host = window.location.host;
        const protocol = window.location.protocol;

        console.log("vueJs_Login.vue_mngAuth url = ", url)
        console.log("vueJs_Login.vue_mngAuth host = ", host)
        console.log("vueJs_Login.vue_mngAuth protocol = ", protocol)

        // this.$router.push({path: '/auth'})  // error occured

        // this.$router.push({path: '/MenuAuthMng'});
        if(this.$route.path!=='/auth') this.$router.push('/auth')
      }
    },
    
  };
  </script>
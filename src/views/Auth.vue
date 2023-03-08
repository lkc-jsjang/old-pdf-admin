<template>
    <div id="auth">
      <p>PCS쿠폰발행(GMKT)_PCS_P3(카탈로그)(승인포함)</p>
      <input id="chk01" type="checkbox" :value="등록" v-model="pcs_cpn_pub_gmkt_p3_catalog"/>등록
      <input id="chk01" type="checkbox" :value="조회" v-model="pcs_cpn_pub_gmkt_p3_catalog"/>조회
      {{ label }}
      <p>PCS쿠폰발행(IACC)_PCS_P3(카탈로그)(승인포함)</p>
      <input id="chk02" type="checkbox" :value="checked" v-model="pcs_cpn_pub_iacc_p3_catalog"/>등록
      <input id="chk02" type="checkbox" :value="checked" v-model="pcs_cpn_pub_iacc_p3_catalog"/>조회
      {{ label }}
      <p>PCS쿠폰발행(GMKT)_PCS_P4(카테고리)(승인포함)</p>
      <input id="chk03" type="checkbox" :value="checked" v-model="pcs_cpn_pub_gmkt_p4_category"/>등록
      <input id="chk03" type="checkbox" :value="checked" v-model="pcs_cpn_pub_gmkt_p4_category"/>조회
      {{ label }}
      <p>PCS쿠폰발행(IACC)_PCS_P4(카테고리)(승인포함)</p>
      <input id="chk04" type="checkbox" :value="checked" v-model="pcs_cpn_pub_iacc_p4_category"/>등록
      <input id="chk04" type="checkbox" :value="checked" v-model="pcs_cpn_pub_iacc_p4_category"/>조회
      {{ label }}
      <p>PCS발행제한(GMKT)</p>
      <input id="chk05" type="checkbox" :value="checked" v-model="pcs_pub_limit_gmkt"/>등록
      <input id="chk05" type="checkbox" :value="checked" v-model="pcs_pub_limit_gmkt"/>조회
      {{ label }}
      <p>PCS발행제한(IACC)</p>
      <input id="chk06" type="checkbox" :value="checked" v-model="pcs_pub_limit_iacc"/>등록
      <input id="chk06" type="checkbox" :value="checked" v-model="pcs_pub_limit_iacc"/>조회
      {{ label }}
      <p>EP발행제한(GMKT)</p>
      <input id="chk07" type="checkbox" :value="checked" v-model="ep_pub_limit_gmkt"/>등록
      <input id="chk07" type="checkbox" :value="checked" v-model="ep_pub_limit_gmkt"/>조회
      {{ label }}
      <p>EP발행제한(IACC)</p>
      <input id="chk08" type="checkbox" :value="checked" v-model="ep_pub_limit_iacc"/>등록
      <input id="chk08" type="checkbox" :value="checked" v-model="ep_pub_limit_iacc"/>조회
      {{ label }}
      <p>PDF환경설정_EP환경설정(GMKT)</p>
      <input id="chk09" type="checkbox" :value="checked" v-model="pdf_env_set_ep_env_set_gmkt"/>등록
      <input id="chk09" type="checkbox" :value="checked" v-model="pdf_env_set_ep_env_set_gmkt"/>조회
      {{ label }}
      <p>PDF환경설정_EP환경설정(IACC)</p>
      <input id="chk10" type="checkbox" :value="checked" v-model="pdf_env_set_ep_env_set_iacc"/>등록
      <input id="chk10" type="checkbox" :value="checked" v-model="pdf_env_set_ep_env_set_iacc"/>조회
      {{ label }}      
    </div>
</template>
<script>
/*
  new Vue({
    el : "#auth",
    data : {
      pcs_cpn_pub_gmkt_p3_catalog : [], // value 의 값을 배열의 형태로 저장 처리
      pcs_cpn_pub_iacc_p3_catalog : [],
      pcs_cpn_pub_gmkt_p4_category : [],
      pcs_cpn_pub_iacc_p4_category : [],
      pcs_pub_limit_gmkt : [],
      pcs_pub_limit_iacc : [],
      ep_pub_limit_gmkt : [],
      ep_pub_limit_iacc : [],
      pdf_env_set_ep_env_set_gmkt : [],
      pdf_env_set_ep_env_set_iacc : []
    }
  })
  */
</script>
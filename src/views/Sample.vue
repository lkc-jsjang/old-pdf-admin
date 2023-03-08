<template>
  <v-card flat color="transparanet">
    <SampleForm class="mb-12"></SampleForm>

    <Table
      :tableData="rows"
      :pageoption="pageoption"
      :pageSelect="pageSelect"
      :tableHeader="headers"
      :option="options"
    >
      <!--칼럼 스타일 재정의 예시 -->
      <template v-slot:content="props">
        <span v-if="props.field == 'calories'">
          <v-chip
            class="ml-1 mr-2 font-weight-medium"
            small
            outlined
            color="#0062E5"
          >
            {{ props.data }}
          </v-chip>
        </span>
      </template>
    </Table>
  </v-card>
</template>

<script>
import Table from '@/components/Table.vue';
import SampleForm from './SampleForm.vue';

export default {
  components: { Table, SampleForm },

  data() {
    return {
      rows: [],
      pageoption: { no: 1, visible: 8, count: 0, per: 10 },
      pageSelect: [10, 15, 30, 50],
      headers: [
        { text: 'Name', value: 'name' },

        { text: 'Calories', value: 'calories' },
        { text: 'Fat (g)', value: 'fat' },
        { text: 'Carbs (g)', value: 'carbs' },
        { text: 'Protein (g)', value: 'protein' },
        { text: 'Iron (%)', value: 'iron' },
      ],
      options: {
        total: 0,
        loading: true,
        topOntable: true, //default 로 totalcount excel 다운로드 노출 (엑셀 기능 미구현), 해당 부분은 필요에 따라 수정하거나 삭제해서 사용하세요
      },
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      // api call
      // do something
      //if success
      this.options.loading = false; // loading false
      // table에 넘겨줄 data
      this.rows = [
        {
          name: 'Frozen Yogurt',
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          iron: '1%',
        },
        {
          name: 'Ice cream sandwich',
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          iron: '1%',
        },
        {
          name: 'Eclair',
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          iron: '7%',
        },
        {
          name: 'Cupcake',
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          iron: '8%',
        },
        {
          name: 'Gingerbread',
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
          iron: '16%',
        },
        {
          name: 'Jelly bean',
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
          iron: '0%',
        },
        {
          name: 'Frozen Yogurt',
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          iron: '1%',
        },
        {
          name: 'Ice cream sandwich',
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          iron: '1%',
        },
        {
          name: 'Eclair',
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          iron: '7%',
        },
        {
          name: 'Cupcake',
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          iron: '8%',
        },
        {
          name: 'Gingerbread',
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
          iron: '16%',
        },
        {
          name: 'Jelly bean',
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
          iron: '0%',
        },
      ];

      this.options.total = this.rows.length;
      // this.calcPageCount();
    },
  },
};
</script>

<style></style>

<template>
  <v-flex class="mx-3 my-3">
    <slot name="topOntable">
      <v-row v-if="option.topOntable" class="mx-2 my-3">
        <span class="subtitle-1">
          Total : {{ option.total > 0 ? option.total.toLocaleString() : '0' }}
        </span>
        <v-spacer></v-spacer>
        <v-btn text smal>
          <v-icon left>mdi-download</v-icon>
          Download
        </v-btn>
      </v-row>
    </slot>
    <v-data-table
      :headers="tableHeader"
      :page.sync="pageoption.no"
      :items="filteredData"
      :items-per-page="pageoption.per"
      :loading="option.loading"
      hide-default-footer
    >
      <template v-slot:item="props">
        <tr>
          <td
            v-for="(columnRow, idx) in tableHeader"
            :key="idx"
            :width="columnRow.width ? columnRow.width : ''"
            :class="columnRow.align ? columnRow.align : ''"
          >
            <slot
              name="content"
              :text="columnRow.text"
              :field="columnRow.value"
              :data="props.item[columnRow.value]"
              :row="props.item"
            >
              <span class="subtitle-3-light">
                {{ props.item[columnRow.value] }}
              </span>
            </slot>
          </td>
        </tr>
      </template>
    </v-data-table>
    <v-row no-gutters>
      <v-col cols="1">
        <v-select
          class="subtitle-2"
          v-model="pageoption.per"
          :items="pageSelect"
          @change="changePageper"
        ></v-select>
      </v-col>
      <v-col class="pt-4">
        <v-pagination
          v-model="pageoption.no"
          :total-visible="pageoption.visible"
          :length="pageCount"
          @input="clickPage"
        ></v-pagination>
      </v-col>
      <v-col cols="1" class="pt-6">
        <span class="subtitle-2 font-weight-regular float-right">
          {{ pageStart }} - {{ pageStop }} of {{ option.total }}
        </span>
      </v-col>
    </v-row>
  </v-flex>
</template>

<script>
import { mapState } from 'vuex';
export default {
  props: ['tableHeader', 'tableData', 'option', 'pageoption', 'pageSelect'],
  computed: {
    ...mapState(['project', 'event', 'msg', 'user']),
    filteredData() {
      return this.tableData;
    },
    pageStart() {
      return (this.pageoption.no - 1) * this.pageoption.per + 1;
    },
    pageStop() {
      const stop = this.pageoption.no * this.pageoption.per;
      return stop > this.option.total ? this.option.total : stop;
    },
    pageCount() {
      let remainder = this.tableData.length % this.pageoption.per;
      return remainder != 0
        ? parseInt(this.tableData.length / this.pageoption.per) + 1
        : parseInt(this.tableData.length / this.pageoption.per);
    },
  },
  data() {
    return {
      pagination: {},
      loading: false,
    };
  },
  methods: {
    changePageper(val) {
      this.disabled = Array(this.pageoption.per).fill(true);
      this.$emit('changePageper', val);
    },
    clickPage(no) {
      this.disabled = Array(this.pageoption.per).fill(true);
      this.$emit('clickPage', no);
    },
  },
};
</script>

<style></style>

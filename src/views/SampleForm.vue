<template>
  <v-card outlined class="mx-3 mb-6">
    <v-card-title class="mx-5 font-weight-bold">쿠폰등록</v-card-title>
    <v-form v-model="valid">
      <v-container>
        <v-row dense>
          <v-col class="mx-3">
            <v-combobox
              v-model="select"
              :items="items"
              label="Combobox"
              dense
            ></v-combobox>
          </v-col>

          <v-col class="mx-3">
            <v-checkbox
              v-model="checkbox"
              :label="`Checkbox`"
              dense
            ></v-checkbox>
          </v-col>
        </v-row>
        <v-row dense>
          <v-col class="mx-3">
            <v-text-field
              v-model="firstname"
              label="First name"
              required
              dense
            ></v-text-field>
          </v-col>

          <v-col class="mx-3">
            <v-text-field
              v-model="lastname"
              label="Last name"
              required
              dense
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row dense>
          <v-col class="mx-3">
            <v-text-field
              v-model="team"
              label="team"
              required
              dense
            ></v-text-field>
          </v-col>

          <v-col class="mx-3">
            <v-text-field
              v-model="event"
              label="event"
              required
              dense
            ></v-text-field>
          </v-col>
        </v-row>
      </v-container>
    </v-form>

    <v-card-actions>
      <v-row justify="center" class="ma-0">
        <v-btn small dark outlined color="primary" @click="sendForm()">
          SEND
        </v-btn>
      </v-row>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      valid: true,
      select: [],
      items: ['Programming', 'Design', 'Vue', 'Vuetify'],
      checkbox: false,
      firstname: '',
      lastname: '',
      team: '',
      event: '',
    };
  },
  methods: {
    sendForm() {
      console.log(
        'send:',
        this.select,
        this.checkbox,
        this.firstname,
        this.lastname,
        this.team,
        this.event
      );
    },
  },
};
</script>

<style></style>

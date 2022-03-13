<template>
  <div class="classSchedule">
    <div class="container">
      <div class="title">
        <span class="icon">
          <fa icon="dharmachakra" />  
          <i class="fi fi-rr-user"></i>
        </span>
        <h2> Class Schedule</h2>
      </div>
      <div class="Schedule">
        <table>
          <thead>
              <tr>
                <th v-for="col in columns">{{col}}</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="row in rows">
                <td v-for="col in columns">{{row[col]}}
                </td>
              </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        rows: [
          { "": '09.00', Monday: "Body Balance", Tuesday: '', Wednesday: 'Hatha Yoga', Thursday: 'Yoga Dance',Friday: 'Children Yoga', Saturday: '', Sunday: 'Yoga Dance', },
          { "": '10.00',Monday: "", Tuesday: 'Body Balance', Wednesday: 'Pilates Yoga', Thursday: '',Friday: 'Hatha Yoga', Saturday: 'Pilates Yoga', Sunday: '' },
          { "": '11.00',Monday: "Chandler Bing", Tuesday: 'Hatha Yoga', Wednesday: '', Thursday: 'Children Yoga',Friday: '', Saturday: 'Hatha Yoga', Sunday: 'Yoga Dance'},
          { "": '12.00', Monday: "", Tuesday: 'Body Balance', Wednesday: 'Pilates Yoga', Thursday: '',Friday: 'Children Yoga', Saturday: '', Sunday: 'Yoga Dance'},
        ],

      }
    },
    computed: {
      "columns": function columns() {
        if (this.rows.length == 0) {
          return [];
        }
        return Object.keys(this.rows[0])
      }
    }
  }
</script>
<style>
.classSchedule{
    padding-top: 50px
}
.Schedule{
   display: flex;
   padding-top: 50px;
   justify-content: center;
}
table {
  font-family: 'Open Sans', sans-serif;
  width: 750px;
  border-collapse: collapse;
  border: 2px solid #e5e5e5;
  margin: 10px 10px 0 10px;
}

table th {
  background: #fff;
  color: #888;
  border-right: 2px solid #e5e5e5;
  padding: 20px;
}
table tr{
  border-bottom: 1px solid #e5e5e5;
}
table td {
  text-align: center;
  padding: 25px;
  border-right: 2px solid #e5e5e5;
  color: #7b6cd5;
  font-size: 15px;
  font-weight: bold;
}
table td:first-child {
  color: #888;
}
</style>
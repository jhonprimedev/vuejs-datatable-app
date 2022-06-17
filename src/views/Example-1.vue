<template>
  <div class="container">
      <jl-datatable
        :url='url'
        :columns="columns"  
      />
  </div>
</template>

<script>
// @ is an alias to /src

import JlDatatable from 'jl-datatable';
import { reactive, toRefs } from 'vue';
export default {
  name: 'Home',
  components: {
    JlDatatable
  },
    setup(){
    const data = reactive({
      url: 'http://laravel-datatable.test/api/users',
      columns: [
        {
          label: 'ID',
          data: 'id',
          searchable: false          
        },
        {
          label: 'Name',
          data: 'name'          
        },
        {
          label: 'Last Name',
          data: 'last_name'
        },
        {
          label: 'Address',
          data: 'address'
        },
        {
          label: 'Email',
          data: 'email',
          orderable: false
        },
        {
          label: 'Cell Phone',
          data: 'cell_phone'
        }
      ],

    });


    return {...toRefs(data)};
  }
}
</script>

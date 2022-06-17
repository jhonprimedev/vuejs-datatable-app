<template>
  <div class="container">
      <jl-datatable 
        :url="url"
        :columns="columns"
        :order="order"
        :lengthMenu="lengthMenu"
        :pageLength="pageLength"
        :reset="reset"
      />
  </div>  
</template>
<script>
import JlDatatable from 'jl-datatable';
import Buttons from '../components/Buttons.vue';
import { reactive, toRefs, shallowRef } from 'vue';
export default {
  name: 'App',
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
        },
        {
          label: 'Actions',
          data: 'actions',
          orderable: false,
          searchable: false,
          component: shallowRef(Buttons)
        }
      ],
      order: {
        column: 2,
        dir: 'DESC'
      },
      lengthMenu: [10, 20, 40, 80, 160],
      pageLength: 10,      
    });


    return {...toRefs(data)};
  }
}
</script>

<template>
  <div class="container">
      <JlDatatable
        :url='datatable.url'
        :columns="datatable.columns"  
      />
  </div>
</template>

<script>
// @ is an alias to /src

import JlDatatable from 'jl-datatable';
export default {
  name: 'Home',
  components: {
    JlDatatable
  },
    data() {
    return {
      datatable: {
        url: 'https://www.jhonpride.ybdweb.com/api/users',
        columns: [       
            {
            title: 'ID',
            key: 'id',
            isSort: true,            
            width: '5%'
          },   
          {
            title: 'Name',
            key: 'name',
            isSort: true,
            isSearch: true,
            // width: '10%'
          },
          {
            title: 'Last Name',
            key: 'last_name',
            isSort: false,
            isSearch: false,
            // width: '10%'
          },
          {
            title: 'Email',
            key: 'email',
            isSort: false,
            isSearch: true,
            // width: '10%'
          },
          {
            title: 'Address',
            key: 'address',                        
          },
          {
            title: 'Cell Phone',
            key: 'cell_phone',  
            width: '10%'                      
          }
        ]
      }
    }
  },
}
</script>

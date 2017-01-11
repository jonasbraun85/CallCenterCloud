<template>
  <div class="row">
    <div class="col-xs-12">
      <simple-table></simple-table>
    </div>
    <div class="col-xs-12">
      <data-table-section></data-table-section>
    </div>
  </div>
</template>

<script>
  import SimpleTable from './simpletable.vue'
  import DataTableSection from './datatablesection.vue'

  export default {
    name: 'Table',
    components: {
      SimpleTable,
      DataTableSection
    }
  }
</script>
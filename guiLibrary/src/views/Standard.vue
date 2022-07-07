<template>
  <span>Test</span>
  <MDBContainer></MDBContainer>
</template>
<script>
import { MDBContainer } from 'mdb-vue-ui-kit';
export default {
  name: 'Standard',
  components: {
    MDBContainer,
  },
  props: {
    appParameters: null,
  },
};
</script>

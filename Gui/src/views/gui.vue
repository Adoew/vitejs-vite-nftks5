<template>
  <Standard :appParameters="AppParameters" ref="standard" />
</template>
<script>
import { Standard } from 'library';
export default {
  components: {
    Standard,
  },
  data() {
    return {
      AppParameters: null,
    };
  },
};
</script>

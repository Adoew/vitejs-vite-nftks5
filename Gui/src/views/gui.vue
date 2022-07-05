<template>
  <Standard :appParameters="AppParameters" ref="standard" />
</template>
<script>
import { Standard } from 'library';
export default {
  components: {
    Standard,
  },
  methods: {
    UpdateComponent() {
      console.log(this.$refs['standard']);
    },
  },
  mounted() {
    this.UpdateComponent();
  },
  data() {
    return {
      AppParameters: null,
    };
  },
};
</script>

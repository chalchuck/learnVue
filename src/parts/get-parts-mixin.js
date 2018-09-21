export default {
  created() {
    return this.$store.dispatch('getParts');
  },
  /* eslint-disable */
  computed: {
    parts() {
      return this.$store.state.robots.parts || {
        heads: [],
        arms: [],
        torsos: [],
        bases: []
      };
    },
  },
};

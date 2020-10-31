export default {
  computed: {
    title() {
      return this.page.title || this.$store.getters.head.title;
    },
    description() {
      return this.page.description || this.$store.getters.head.description;
    },
  },
  data() {
    return {
      headData: {},
    };
  },
  head() {
    return Object.assign(
      {},
      {
        title: this.title,
        meta: [
          {
            hid: "description",
            name: "description",
            content: this.description,
          },
          // Open Graph
          {
            hid: "og:title",
            property: "og:title",
            content: this.title,
          },
          {
            hid: "og:description",
            property: "og:description",
            content: this.description,
          },
          // Twitter Card
          {
            hid: "twitter:title",
            name: "twitter:title",
            content: this.title,
          },
          {
            hid: "twitter:description",
            name: "twitter:description",
            content: this.description,
          },
        ],
      },
      this.headData
    );
  },
};

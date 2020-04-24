<template>
  <div class="article">
    <nuxt-link :to="articleLink" class="article--hover">
      <div class="article--image">
        <figure class="article--figure">
          <img :src="article.image" alt="Artikel Hauptbild">
        </figure>
      </div>
    </nuxt-link>
    <div class="article--bottom">
      <div class="article--content">
        <nuxt-link :to="articleLink" class="article--hover">
          <h2 class="article--title">{{ article.title }}</h2>
        </nuxt-link>
        <nuxt-link :to="articleLink" class="article--hover">
          {{ article.description }}
        </nuxt-link>
        <span v-for="(tag, index) in article.tags" :key="index">#{{ tag }}</span>
      </div>
      <div class="article--author">
        <div class="article--author-image">
          <figure class="article--author-figure">
            <img :src="article.author.image" alt="Author Bild">
          </figure>
        </div>
        <div class="article--author-content">
          <p class="article--author-name">{{ article.author.name }}</p>
          <time class="article--date" :datetime="article.date">{{ articleDate }}</time>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ArticleCard",
  props: {
    article: {
      required: true
    }
  },
  data() {
    return { 
      months: ["Jan", "Feb", "Mär", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"]
    }
  },
  computed: {
    articleLink() {
      return "blog/" + this.article.slug
    },
    articleDate() {
      const date = new Date(this.article.date)
      return date.getDate() + ". " + this.months[date.getMonth()] + " " + date.getFullYear()
    }
  }
}

</script>

<style lang="scss"> 
.article {
  @extend .card;
  @extend .is-hoverable;
  height: 100%;
  display: flex;
  flex-direction: column;
  &--image {
    @extend .card-image;
  }
  &--title {
    @extend .title;
    @extend .is-3;
    margin-bottom: 1rem;
  }
  &--content {
    margin-bottom: 1.8rem;
  }
  &--bottom {
    @extend .card-content;
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: space-between;
  }
  &--figure {
    @extend .image;
    @extend .is-5by3;
  }
  &--hover {
    display: block;
    color: $dark;
    &:hover {
      * {
        color: $black;
      }
    }
  }
  &--author {
    @extend .media;
  }
  &--author-image {
    @extend .media-left;
  }
  &--author-figure {
    @extend .is-48x48;
    @extend .image;
    border-radius: 100%;
    overflow: hidden;
  }
  &--author-content {
    @extend .media-content;
  }
  &--author-name {
    @extend .title;
    @extend .is-5;
  }
  &--date {
    @extend .subtitle;
    @extend .is-6;
    @extend .is-block;
  }
  &:hover {
    box-shadow: 0 0.5em 1em -0.125em rgba(10, 10, 10, 0.5), 0 0 0 1px rgba(10, 10, 10, 0.02);
  }
}
</style>
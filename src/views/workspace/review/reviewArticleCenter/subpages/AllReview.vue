<template>
  <div class="all-review" v-if="hasReview">
    <review-list :reviewList="reviewList"></review-list>
  </div>
  <div v-else>
    该文章还未收到任何评论！
  </div>
</template>

<script>
import reviewList from "../../../../../components/common/review_list";

export default {
  name: "reviewArticleCenter-AllReview",
  props: ['rid'],
  components: {
    reviewList
  },
  data() {
    return {
      reviewList: [],
      hasReview: false,
    }
  },
  created() {
    const formData = new FormData();
    formData.append('rid', this.rid);
    this.$axios({
      method: 'post',
      url: '/article_remark/',
      data: formData,
    })
    .then(res => {
      switch (res.data.status_code) {
        case '2000':
          this.reviewList = JSON.parse(res.data.data);
          this.hasReview = true;
          break;
        case '4003':
          this.hasReview = false;
          break;
      }
    })
    .catch(err => {
      console.log(err);
    })
  },
  methods: {

  }
}
</script>

<style scoped>

</style>
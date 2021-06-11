<template>
  <div class="all-review">
    <review-list :reviewList="reviewList"></review-list>
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
      reviewList: []
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
      if (res.data.status_code === '2000') {
        this.reviewList = JSON.parse(res.data.data);
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
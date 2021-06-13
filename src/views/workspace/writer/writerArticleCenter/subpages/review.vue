<template>
  <div class="article-review" v-if="hasRemark">
    <review-list :reviewList="reviewList"></review-list>
  </div>
  <div v-else>
    您的文章还未有评论，请耐心等待！
  </div>
</template>

<script>
import reviewList from "../../../../../components/common/review_list";

export default {
  name: "review",
  props: ['aid'],
  components: {
    reviewList
  },
  data() {
    return {
      reviewList: [],
      hasRemark: false,
    }
  },
  mounted() {
    const formData = new FormData();
    formData.append('aid', this.aid);
    this.$axios({
      method: 'post',
      url: '/get_remark/',
      data: formData,
    })
    .then(res => {
      switch (res.data.status_code) {
        case '2000':
          this.hasRemark = true;
          this.reviewList = JSON.parse(res.data.data);
          break;
        case '4001':
          this.hasRemark = false;
          break;
      }
    })
    .catch(err => {
      console.log(err);
    })
  },
  methods: {

  },
}
</script>

<style>
.article-review {
  padding: 0 100px;
}
</style>
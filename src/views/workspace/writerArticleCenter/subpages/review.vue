<template>
  <div class="article-review">
    <review-list :reviewList="reviewList"></review-list>
  </div>
</template>

<script>
import reviewList from "../../../../components/common/review_list";

export default {
  name: "review",
  components: {
    reviewList
  },
  data() {
    return {
      reviewList: [
        {
          reviewer: "Zuo_zuo",
          content: "见义勇为、匡扶正义、扶危济困，是中华民族的传统美德，也是弘扬社会正能量的具体体现。" +
              "近几年来，全国涌现出了一大批见义勇为者，他们为维护社会治安、保护国家和人民群众生命财产安全尽心尽力，他们有的负伤致残，" +
              "有的甚至献出自己宝贵的生命。正是因为有了这种“路见不平一声吼”的英雄气概，才使一些违法犯罪分子不敢嚣张，不敢胡作非为。",
          time: "2021/06/07",
          portrait: "../../../../assets/portrait.png",
        },
        {
          reviewer: "Zuo_zuo",
          content: "见义勇为、匡扶正义、扶危济困，是中华民族的传统美德，也是弘扬社会正能量的具体体现。" +
              "近几年来，全国涌现出了一大批见义勇为者，他们为维护社会治安、保护国家和人民群众生命财产安全尽心尽力，他们有的负伤致残，" +
              "有的甚至献出自己宝贵的生命。正是因为有了这种“路见不平一声吼”的英雄气概，才使一些违法犯罪分子不敢嚣张，不敢胡作非为。",
          time: "2021/06/07",
          portrait: "../../../../assets/portrait.png",
        },
        {
          reviewer: "Zuo_zuo",
          content: "见义勇为、匡扶正义、扶危济困，是中华民族的传统美德，也是弘扬社会正能量的具体体现。" +
              "近几年来，全国涌现出了一大批见义勇为者，他们为维护社会治安、保护国家和人民群众生命财产安全尽心尽力，他们有的负伤致残，" +
              "有的甚至献出自己宝贵的生命。正是因为有了这种“路见不平一声吼”的英雄气概，才使一些违法犯罪分子不敢嚣张，不敢胡作非为。",
          time: "2021/06/07",
          portrait: "../../../../assets/portrait.png",
        },
        {
          reviewer: "Zuo_zuo",
          content: "见义勇为、匡扶正义、扶危济困，是中华民族的传统美德，也是弘扬社会正能量的具体体现。" +
              "近几年来，全国涌现出了一大批见义勇为者，他们为维护社会治安、保护国家和人民群众生命财产安全尽心尽力，他们有的负伤致残，" +
              "有的甚至献出自己宝贵的生命。正是因为有了这种“路见不平一声吼”的英雄气概，才使一些违法犯罪分子不敢嚣张，不敢胡作非为。",
          time: "2021/06/07",
          portrait: "../../../../assets/portrait.png",
        },
        {
          reviewer: "Zuo_zuo",
          content: "见义勇为、匡扶正义、扶危济困，是中华民族的传统美德，也是弘扬社会正能量的具体体现。" +
              "近几年来，全国涌现出了一大批见义勇为者，他们为维护社会治安、保护国家和人民群众生命财产安全尽心尽力，他们有的负伤致残，" +
              "有的甚至献出自己宝贵的生命。正是因为有了这种“路见不平一声吼”的英雄气概，才使一些违法犯罪分子不敢嚣张，不敢胡作非为。",
          time: "2021/06/07",
          portrait: "../../../../assets/portrait.png",
        }
      ],
    }
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
<template>
<div class="messenger">
  <el-form inline size="small" label-width="60px">
    <el-form-item label="角色" prop="character">
      <el-select v-model="character">
        <el-option label="全部" value=""></el-option>
        <el-option v-for="(c, key) in characters" :key="key" :value="key" :label="c.cn"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="星级" prop="star">
      <el-select v-model="star">
        <el-option label="全部" value=""></el-option>
        <el-option :value="1" label="一星"></el-option>
        <el-option :value="2" label="二星"></el-option>
        <el-option :value="3" label="三星"></el-option>
        <el-option :value="4" label="四星"></el-option>
        <el-option :value="5" label="五星"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="主属性" prop="property">
      <el-select v-model="property">
        <el-option label="全部" value=""></el-option>
        <el-option v-for="p in properties" :key="p.id" :value="p.key" :label="p.cn"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item>
      <el-button icon="el-icon-search" @click="search"></el-button>
    </el-form-item>
  </el-form>

  <CardBox id="star1" title="一星" :data="stars.one"></CardBox>
  <CardBox id="star2" title="二星" :data="stars.two"></CardBox>
  <CardBox id="star3" title="三星" :data="stars.three"></CardBox>
  <CardBox id="star4" title="四星" :data="stars.four"></CardBox>
  <CardBox id="star5" title="五星" :data="stars.five"></CardBox>
</div>
</template>

<script>
import CardBox from '@/components/CardBox';
import { messengerCardList } from '@/store/modules/card.js';
import _ from 'lodash';
import propertyArray from '@/data/property.json'
import character from '@/data/character.json'

export default {
  name: `Messenger`,
  components: {
    CardBox,
  },
  data() {
    return {
      character: '',
      characters: character,
      cards: messengerCardList,
      property: '',
      properties: propertyArray,
      star: '',
      stars: {
        one: [],
        two: [],
        three: [],
        four: [],
        five: [],
      },
    };
  },
  methods: {
    search() {
      // 匹配人物
      let matchCharacter = this.cards;
      if (this.character != null && this.character != "") {
        matchCharacter = _.filter(this.cards, ["character", this.character]);
      }

      // 匹配属性
      let matchProperty = this.cards;
      if (this.property != null && this.property != "") {
        matchProperty = _.filter(this.cards, [`main`, this.property]);
      }

      // 匹配星级
      let matchStar = this.cards;
      if (this.star != null && this.star != "") {
        matchStar = _.filter(this.cards, [`star`, this.star]);
      }

      // 取交集
      let result = _.intersection(matchCharacter, matchProperty, matchStar);

      // 筛选星级
      this.stars.one = _.filter(result, [`star`, 1]);
      this.stars.two = _.filter(result, [`star`, 2]);
      this.stars.three = _.filter(result, [`star`, 3]);
      this.stars.four = _.filter(result, [`star`, 4]);
      this.stars.five = _.filter(result, [`star`, 5]);
    },

    init() {
      this.stars.one = _.filter(this.cards, [`star`, 1]);
      this.stars.two = _.filter(this.cards, [`star`, 2]);
      this.stars.three = _.filter(this.cards, [`star`, 3]);
      this.stars.four = _.filter(this.cards, [`star`, 4]);
      this.stars.five = _.filter(this.cards, [`star`, 5]);
    },
  },
  mounted() {
    this.init();
  },
};
</script>

<style>
.messenger {
  padding-top: 10px;
}
</style>
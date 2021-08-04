<template>
<div class="level-up">
  <el-row :gutter="10">
    <el-col :xs="24" :sm="24" :md="12" :lg="12">
      <!-- 左侧 当前的卡牌情况 -->
      <table style="width: 100%;">
        <tbody>
          <tr>
            <td width="50">
              <span class="button-like-prefix">当前</span>
            </td>
            <td class="table-flex">
              <select-level label="星级" :options="levelRange(1, 7)" v-model:value="current.starLevel"></select-level>
              <select-level label="品质" :options="levelRange(0, 6)" v-model:value="current.quality"></select-level>
              <select-level label="等级" :options="currentLevelArray" v-model:value="current.level" class="width-72">
              </select-level>
            </td>
          </tr>
          <tr>
            <td></td>
            <td class="table-flex">
              <select-ming-ji-level label="铭迹1" :starLevelArray="levelRange(0, 5)" :levelArray="
                      calMingjiLevelArray(current.mingji[`1`].starLevel)
                    " v-model:starLevel="current.mingji[`1`].starLevel" v-model:level="current.mingji[`1`].level">
              </select-ming-ji-level>
            </td>
          </tr>
          <tr v-if="current.quality >= 1">
            <td></td>
            <td class="table-flex">
              <select-ming-ji-level label="铭迹2" :starLevelArray="levelRange(0, 5)" :levelArray="
                      calMingjiLevelArray(current.mingji[`2`].starLevel)
                    " v-model:starLevel="current.mingji[`2`].starLevel" v-model:level="current.mingji[`2`].level">
              </select-ming-ji-level>
            </td>
          </tr>
          <tr v-if="current.quality >= 2">
            <td></td>
            <td class="table-flex">
              <select-ming-ji-level label="铭迹3" :starLevelArray="levelRange(0, 5)" :levelArray="
                      calMingjiLevelArray(current.mingji[`3`].starLevel)
                    " v-model:starLevel="current.mingji[`3`].starLevel" v-model:level="current.mingji[`3`].level">
              </select-ming-ji-level>
            </td>
          </tr>
          <tr>
            <td>
              <span class="button-like-prefix">目标</span>
            </td>
            <td class="table-flex">
              <select-level label="星级" :options="targetStarLevelRange" v-model:value="target.starLevel" :disabled="current.starLevel > 3 ? false: true" />
              <select-level label="品质" :options="levelRange(0, 6)" v-model:value="target.quality" />
              <select-level label="等级" :options="targetLevelArray" v-model:value="target.level" class="width-72">
              </select-level>
            </td>
          </tr>
          <tr>
            <td></td>
            <td class="table-flex">
              <select-ming-ji-level label="铭迹1" :starLevelArray="levelRange(0, 5)" :levelArray="
                      calMingjiLevelArray(target.mingji[`1`].starLevel)
                    " v-model:starLevel="target.mingji[`1`].starLevel" v-model:level="target.mingji[`1`].level">
              </select-ming-ji-level>
            </td>
          </tr>
          <tr v-if="target.quality >= 1">
            <td></td>
            <td class="table-flex">
              <select-ming-ji-level label="铭迹2" :starLevelArray="levelRange(0, 5)" :levelArray="
                      calMingjiLevelArray(target.mingji[`2`].starLevel)
                    " v-model:starLevel="target.mingji[`2`].starLevel" v-model:level="target.mingji[`2`].level">
              </select-ming-ji-level>
            </td>
          </tr>
          <tr v-if="target.quality >= 2">
            <td></td>
            <td class="table-flex">
              <select-ming-ji-level label="铭迹3" :starLevelArray="levelRange(0, 5)" :levelArray="
                      calMingjiLevelArray(target.mingji[`3`].starLevel)
                    " v-model:starLevel="target.mingji[`3`].starLevel" v-model:level="target.mingji[`3`].level">
              </select-ming-ji-level>
            </td>
          </tr>
          <tr>
            <td>
              <span class="button-like-prefix">已有</span>
            </td>
            <td class="table-flex">
              <input-level v-model:value="have.coins" label="金币" type="text" class="width-72"></input-level>
            </td>
          </tr>
          <tr>
            <td></td>
            <td class="table-flex">
              <input-level v-model:value="have.blueBottle" label="初心" type="text"></input-level>
              <input-level v-model:value="have.yellowBottle" label="慕心" type="text"></input-level>
              <input-level v-model:value="have.pinkBottle" label="恋心" type="text"></input-level>
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <input-level v-model:value="have.sand" label="眩光沙砾" type="text"></input-level>
              <input-level v-model:value="have.treasure" label="稀愿珍宝" type="text"></input-level>
              <input-level v-model:value="have.conch" label="心愿海螺" type="text"></input-level>
            </td>
          </tr>
        </tbody>
      </table>
    </el-col>

    <!-- 右侧 计算结果 -->
    <el-col :xs="24" :sm="24" :md="12" :lg="12">
      <div class="title-2" style="font-weight: bold">仍需要</div>
      <table style="margin-bottom: 0">
        <tbody>
          <tr>
            <td class="table-flex">
              <input-level v-model:value="need.coins" label="金币" type="text" :disabled="true" class="width-72">
              </input-level>
              <input-level v-model:value="need.exp" label="经验" type="text" :disabeld="true" class="width-72">
              </input-level>
              <input-level v-model:value="need.yellowBottle" label="慕心" :disabled="true" type="text"></input-level>
            </td>
          </tr>
          <tr>
            <td class="table-flex">
              <input-level v-model:value="need.sand" label="眩光沙砾" type="text" :disabled="true"></input-level>
              <input-level v-model:value="need.treasure" label="稀愿珍宝" type="text" :disabled="true"></input-level>
              <input-level v-model:value="need.conch" label="心愿海螺" type="text" :disabled="true"></input-level>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="title-2" style="margin-top: 20px; font-weight: bold">
        筹备计划
      </div>
      <div class="description-tips">
        默认刷取
        <ul>
          <li>遇见极光 5，每局获取 7200 极光币</li>
          <li>遇见初心 5，每局获取 4 个慕心（黄瓶子）</li>
          <li>遇见铭迹 5，每局获取 30 个眩光沙砾</li>
          <li>外婆小铺 3-7，每局至少获取 1 个稀愿珍宝</li>
          <li>外婆小铺 6-7，每局至少获取 1 个眩光砂砾，每 5 局至少 1 个心愿海螺</li>
        </ul>
      </div>
      <ul class="plan-ui">
        <li>
          <p>
            遇见极光_05：需要刷
            <span class="plan-result">{{ plan.coins }}</span> 次，
          </p>
          共计获得极光币 <span style="color: #409EFF;">{{plan.coins * 7200}}</span> 个。
        </li>
        <li>
          <p>遇见初心_05：需要刷
            <span class="plan-result">{{ plan.bottles }}</span> 次，
          </p>
          共计获得慕心 <span style="color: #409EFF;">{{plan.bottles * 4}}</span> 个。
        </li>
        <li>
          <p>
            遇见铭迹_05：需要刷
            <span class="plan-result">{{ plan.sand }}</span> 次，
          </p>
          共计获得眩光砂砾 <span style="color: #409EFF;">{{plan.sand * 30}}</span> 个。
        </li>
        <li>
          <p>
            外婆小铺_3-7：需要刷
            <span class="plan-result">{{ plan.grandma3_7 }}</span> 次，
          </p>
          共计获得 <span style="color: #409EFF;">{{plan.grandma3_7}}</span> 个稀愿珍宝。
        </li>
        <li>
          <p>
            外婆小铺_6-7：需要刷
            <span class="plan-result">{{ plan.grandma6_7 }}</span> 次，
          </p>
          共计获得 <span style="color: #409EFF;">{{need.conch}}</span> 个心愿海螺，
          <span style="color: #409EFF;">{{plan.grandma6_7}}</span> 个眩光沙砾。
        </li>
      </ul>
      <div></div>
    </el-col>
  </el-row>
</div>
</template>

<script>
import {
  levelUp,
  starLevelBreak,
  mingjiLevel
} from "@/store/modules/level.js";
import SelectLevel from "@/components/SelectLevel";
import SelectMingJiLevel from "@/components/SelectMingJiLevel";
import InputLevel from "@/components/InputLevel";

export default {
  name: `level-up`,
  components: {
    SelectLevel,
    SelectMingJiLevel,
    InputLevel,
  },
  watch: {
    // 监控当前的星级，同步更新目标的星级
    // TODO 判断当前的等级是否属于当前星级范围内(TARGET 同理)
    "current.starLevel": {
      handler(val) {
        this.targetStarLevelRange = this.levelRange(val, 7)
        if (val > 3) {
          if (val > this.target.starLevel) {
            this.target.starLevel = val;
          }
        } else {
          this.target.starLevel = val;
        }

        if(this.current.level > this.maxLevelRangeByStar[val]) {
          this.current.level = this.maxLevelRangeByStar[val]
        }
      },
    },
    "target.starLevel": {
      handler(val) {
        if(this.target.level > this.maxLevelRangeByStar[val]) {
          this.target.level = this.maxLevelRangeByStar[val]
        }
      }
    },
    // 监听品质等级，更新铭迹等级
    "current.quality": {
      handler(n, o) {
        if (n < o && n == 0) {
          this.current.mingji[2].starLevel = 0;
          this.current.mingji[2].level = 0;
          this.current.mingji[3].starLevel = 0;
          this.current.mingji[3].level = 0;
        } else if (n < o && val == 1) {
          this.current.mingji[3].starLevel = 0;
          this.current.mingji[3].level = 0;
        }
      },
    },
    "target.quality": {
      handler(n, o) {
        if (n < o && n == 0) {
          this.target.mingji[2].starLevel = 0;
          this.target.mingji[2].level = 0;
          this.target.mingji[3].starLevel = 0;
          this.target.mingji[3].level = 0;
        } else if (n < o && val == 1) {
          this.target.mingji[3].starLevel = 0;
          this.target.mingji[3].level = 0;
        }
      },
    },
    // 监听铭迹星级，更新铭迹等级 和 范围Array
    "current.mingji": {
      handler(val) {
        for (let i = 1; i <= 3; i++) {
          if (val[i].starLevel == 0) {
            val[i].level = 0;
          } else {
            val[i].level = this.watchMingjiLevelRange(val[i]);
          }
        }
      },
      // 深度监听，否则watch不会监听Obj内部值的变化; 若不带上深度监听，它仅监听 Obj 本身的地址是否变化
      deep: true,
    },
    "target.mingji": {
      handler(val) {
        for (let i = 1; i <= 3; i++) {
          if (val[i].starLevel == 0) {
            val[i].level = 0;
          } else {
            val[i].level = this.watchMingjiLevelRange(val[i]);
          }
        }
      },
      deep: true,
    },
  },
  computed: {
    currentLevelArray: function () {
      return this.calLevelArray(this.current.starLevel);
    },
    targetLevelArray: function () {
      return this.calLevelArray(this.target.starLevel);
    },
    need: function () {
      let coins = 0;
      let exp = 0;
      let sand = 0;
      let treasure = 0;
      let conch = 0;

      try {
        // 计算等级需要的金币和经验
        if (this.current.level < this.target.level) {
          for (let i = this.current.level + 1; i <= this.target.level; i++) {
            let obj = levelUp[i];
            coins = coins + obj.coins;
            exp = exp + obj.exp;
          }
        }

        // 升星突破 需要的金币数量
        if (this.current.starLevel < this.target.starLevel) {
          for (let key in starLevelBreak) {
            if (this.current.starLevel < key && this.target.starLevel >= key) {
              coins = coins + starLevelBreak[key].coins;
            }
          }
        }

        // 计算铭迹1, 铭迹2, 铭迹3 等级需要的金币和经验 & 突破材料
        for (let i = 1; i <= 3; i++) {
          const mingji = this.calMingji(
            this.current.mingji[i].starLevel,
            this.current.mingji[i].level,
            this.target.mingji[i].starLevel,
            this.target.mingji[i].level
          );
          sand = mingji.sand + sand;
          coins = mingji.coins + coins;
          treasure = mingji.treasure + treasure;
          conch = mingji.conch + conch;
        }

        // 扣除已有的金币, exp, sand, treasure, conch 计算所需要的经验瓶数量 统计出来的结果优先计算黄瓶子的数量
        coins = this.minus(coins, this.have.coins);
        const haveExp =
          500 * this.have.blueBottle +
          2000 * this.have.yellowBottle +
          5000 * this.have.pinkBottle;
        exp = this.minus(exp, haveExp);
        sand = this.minus(sand, this.have.sand);
        treasure = this.minus(treasure, this.have.treasure);
        conch = this.minus(conch, this.have.conch);
      } catch (err) {
        console.error(err);
      }

      return {
        coins: coins,
        yellowBottle: Math.ceil(exp / 2000), // 黄瓶子
        sand: sand, // 砂子
        treasure: treasure, // 珍宝
        conch: conch, // 海螺
        exp: exp,
      };
    },
    // 计算规划, 应该打出需要多少经验和黄瓶子，规划中的计算不包括蓝瓶子和粉瓶子的获取
    plan: function () {
      let p = {
        coins: 0,
        bottles: 0,
        sand: 0,
        grandma3_7: 0,
        grandma6_7: 0,
      };
      // 向上取整,有小数就整数部分加 1
      p.coins = Math.ceil(this.need.coins / 7200);
      p.bottles = Math.ceil(this.need.yellowBottle / 4);
      p.grandma3_7 = this.need.treasure;
      // 5 掉 1的概率，每一次必掉 1 砂子，考虑如果刷海螺的时候砂子够了，则不需要去刷铭迹-05
      p.grandma6_7 = this.need.conch * 5;
      if (p.grandma6_7 < this.need.sand) {
        const m = this.need.sand - p.grandma6_7
        p.sand = Math.ceil(m / 30);
      }
      return p;
    },
  },
  data() {
    return {
      current: {
        quality: 0,
        level: 0,
        starLevel: 1,
        mingji: {
          1: {
            starLevel: 0,
            level: 0,
          },
          2: {
            starLevel: 0,
            level: 0,
          },
          3: {
            starLevel: 0,
            level: 0,
          },
        },
      },
      have: {
        coins: 0, // 金币
        blueBottle: 0, // 蓝瓶子
        yellowBottle: 0, // 黄瓶子
        pinkBottle: 0, // 粉瓶子
        sand: 0, // 砂子
        treasure: 0, // 珍宝
        conch: 0, // 海螺
      },
      target: {
        quality: 0,
        level: 0,
        starLevel: 1,
        mingji: {
          1: {
            starLevel: 0,
            level: 0,
          },
          2: {
            starLevel: 0,
            level: 0,
          },
          3: {
            starLevel: 0,
            level: 0,
          },
        },
      },
      targetStarLevelRange: this.levelRange(1, 7),
      maxLevelRangeByStar: {
        1: 20,
        2: 20,
        3: 20,
        4: 61,
        5: 72,
        6: 82
      }
    };
  },
  methods: {
    // 根据输入的范围自动生成对应的等级Array
    levelRange(x = 1, y = 1) {
      let r = _.range(x, y);
      return _.map(r, (obj) => {
        if (obj == 0) {
          return {
            value: obj,
            label: "未激活",
          };
        }
        return {
          value: obj,
          label: `${obj}`,
        };
      });
    },
    // 根据卡牌的星级自动计算等级的范围
    calLevelArray(val) {
      if (val != null) {
        if (val <= 3) {
          return _.take(levelUp, 20);
        } else if (val == 4) {
          return _.take(levelUp, 62);
        } else if (val == 5) {
          return _.take(levelUp, 73);
        } else if (val == 6) {
          return _.take(levelUp, 83);
        }
      }
      return _.take(levelUp, 20);
    },
    // 判断铭迹等级是否属于区间, 属于区间则不变化, 若不属于区间, 最小值为1, 最大值为计算出来的值
    watchMingjiLevelRange(val) {
      if (val.starLevel == 0) {
        return 0;
      } else {
        const min = 1;
        const max = val.starLevel * 10 + 20;
        if (val.level < min) {
          return min;
        }
        if (val.level > max) {
          return max;
        }
        return val.level
      }
    },
    calMingjiLevelArray(val) {
      if (val != null && val > 0) {
        return this.levelRange(1, val * 10 + 21);
      }
      return this.levelRange(0, 1);
    },
    /**
     * 单纯计算铭迹同星级时，等级提升的逻辑
     */
    calMingjiLevelUp(currentLevel, targetLevel, array) {
      let sand = 0;
      let coins = 0;
      if (currentLevel < targetLevel) {
        for (let l = currentLevel + 1; l <= targetLevel; l++) {
          sand = sand + array[l - 1].sand;
          coins = coins + array[l - 1].coins;
        }
      }
      return {
        sand: sand,
        coins: coins,
      };
    },
    // 计算铭迹等级逻辑
    calMingji(currentStarLevel, currentLevel, targetStarLevel, targetLevel) {
      let sand = 0;
      let coins = 0;
      let treasure = 0;
      let conch = 0;

      // 当前星级 = 目标星级
      if (currentStarLevel == targetStarLevel && currentStarLevel > 0) {
        const result = this.calMingjiLevelUp(
          currentLevel,
          targetLevel,
          mingjiLevel[`mingjiStar${currentStarLevel}`].levelArray
        );
        sand = sand + result.sand;
        coins = coins + result.coins;
      }

      // 当前星级 < 目标星级
      else if (currentStarLevel < targetStarLevel) {
        for (let i = currentStarLevel; i <= targetStarLevel; i++) {
          // 若是i = 当前星级，则直接计算铭迹的等级提升需要消耗的砂子和金币 (min = currentLevel, max = 前铭迹星级的最大level). 若是当前等级为 0, 代表未激活, 不需要消耗材料
          if (i == currentStarLevel && i > 0) {
            const array = mingjiLevel[`mingjiStar${i}`].levelArray;
            const result = this.calMingjiLevelUp(
              currentLevel,
              array.length,
              array
            );
            sand = sand + result.sand;
            coins = coins + result.coins;
            continue;
          }

          // 若是 当前等级 < i < 目标等级，则遍历循环(min = 1, max = 当前铭迹星级的最大level)全部相加 & 突破材料
          if (currentStarLevel < i && i < targetStarLevel) {
            // 等级
            const array = mingjiLevel[`mingjiStar${i}`].levelArray;
            const result = this.calMingjiLevelUp(1, array.length, array);
            sand = sand + result.sand;
            coins = coins + result.coins;

            // 突破材料
            const active = mingjiLevel[`mingjiStar${i}`].active;
            treasure = treasure + active.treasure;
            conch = conch + active.conch;
            coins = coins + active.coins;
            sand = sand + active.sand;
            continue;
          }

          // 若是 i = 目标星级，则计算铭迹等级提升需要消耗的砂子和金币 (min = 1, max = targetLevel) & 突破材料
          if (i == targetStarLevel) {
            // 等级
            const array = mingjiLevel[`mingjiStar${i}`].levelArray;
            const result = this.calMingjiLevelUp(1, targetLevel, array);
            sand = sand + result.sand;
            coins = coins + result.coins;

            // 突破材料
            const active = mingjiLevel[`mingjiStar${i}`].active;
            treasure = treasure + active.treasure;
            conch = conch + active.conch;
            coins = coins + active.coins;
            sand = sand + active.sand;
          }
        }
      }

      return {
        sand: sand,
        coins: coins,
        treasure: treasure,
        conch: conch,
      };
    },
    minus(need, have) {
      // 若是已有的材料 > 需要的材料，则直接返回 0
      if (have >= need) {
        return 0;
      } else {
        return need - have;
      }
    },
  },
};
</script>

<style>
.level-up .el-form {
  margin-top: 10px;
}

.level-up .button-like-prefix {
  background-color: #009688;
  color: #fff;
  cursor: default;
  text-align: center;
  font-size: 14px;
  padding: 5px 5px;
  border-radius: 2px;
}

.width-72 input.el-input__inner {
  width: 72px !important;
}

.width-72 {
  width: 72px !important;
}

.level-up td.table-flex {
  /* 行内元素 */
  display: flex;
  flex-wrap: wrap;
  padding-top: 8px !important;
}

.level-up ul.plan-ui {
  padding-inline-start: 35px;
  padding-right: 25px;
}

.level-up ul.plan-ui li {
  margin-bottom: 12px;
  font-size: 14px;
  color: #606266;
  line-height: 20px;
}

.level-up ul.plan-ui .plan-result {
  display: inline-block;
  min-width: 24px;
  border-bottom: 1px solid #dcdfe6;
  margin: 0 5px;
  font-size: 16px;
  font-weight: bold;
  color: #303133;
  text-align: center;
}

.level-up .description-tips {
  border: 1px solid rgb(198, 226, 255);
  border-radius: 10px;
  margin-top: 10px;
  /* top right bottom left */
  padding: 15px 10px 0 10px;
  padding-left: 10px;
  font-size: 14px;
  max-width: 400px;
  background-color: rgb(217, 236, 255);
  color: #606266;
}

.level-up .description-tips ul {
  padding-inline-start: 25px;
  margin-block-start: 0.5em;
}

/* 响应式布局 */
@media screen and (max-width: 992px) {
  .level-up table {
    margin-bottom: 70px;
  }

  .level-up .plan-ui {
    margin-bottom: 60px;
  }
}
</style>

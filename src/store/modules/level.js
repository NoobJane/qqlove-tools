import _ from 'lodash'
import data from '@/data/levelUpMaterial.json'

/**
 * Expand mingji level array.
 * For example, object.levelArray
 *
 *   { startLevel: 2, endLevel:3, sand: 4, coins: 240 } 
 * 
 * will be expanded to Array:
 * 
 *   [
 *    {
 *        level: 2, sand: 4, coins: 240
 *    }, 
 *    {
 *        level: 2, sand: 4, coins: 240
 *    }, 
 *    {
 *        level: 3, sand: 4, coins: 240
 *    } ]
 * @param {*} obj Mingji star level material array, import from data.
 * @returns Expanded material array.
 */
const expandMingjiLevel = obj => {
  let t = _.flatMap(obj.levelArray, item => {
    let array = new Array()
    for (let i = item.startLevel; i <= item.endLevel; i++) {
      array.push({
        level: i,
        sand: item.sand,
        coins: item.coins
      })
    }
    return array
  })

  return {
    active: obj.active,
    levelArray: _.concat({ level: 1, sand: 0, coins: 0 }, t)
  }
}

const expandLevelUp = array => {
  array.forEach((item, index) => {
    item.value = index
  })
  return array
}

const mingjiStar1 = expandMingjiLevel(data.mingjiUp.starLevelOne);
const mingjiStar2 = expandMingjiLevel(data.mingjiUp.starLevelTwo);
const mingjiStar3 = expandMingjiLevel(data.mingjiUp.starLevelThree);
const mingjiStar4 = expandMingjiLevel(data.mingjiUp.starLevelFour);
export const mingjiLevel = {
  mingjiStar1,
  mingjiStar2,
  mingjiStar3,
  mingjiStar4
}
export const levelUp = expandLevelUp(data.levelUp)

export const starLevelBreak = {
  5: {
    coins: 30000
  },
  6: {
    coins: 60000
  }
}

export default {
  levelUp,
  mingjiLevel,
  starLevelBreak
}
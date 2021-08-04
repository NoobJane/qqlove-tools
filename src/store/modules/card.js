import _ from 'lodash'
import card from '@/data/card.json'

function convert2MessengerFormatList(obj, key) {
  return {
    key: key,
    name: obj.cname,
    character: obj.character,
    star: obj.star,
    main: obj.main,
    messenger: obj.messenger
  }
}

function toMessengerCardList(obj) {
  const cardList = _.flatMap(obj, convert2MessengerFormatList)
  return _.filter(cardList, [`messenger`, true])
}

export const cardTable = _.mapValues(card, (obj, name) => ({name, ...obj}))
export const messengerCardList = toMessengerCardList(cardTable)

export default {
  cardTable,
  messengerCardList
}
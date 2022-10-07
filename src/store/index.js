import { createStore } from 'vuex'

import auth from './auth'
import newObj from './newObj'
import newCheck from './newCheck'

export default createStore({
  modules: {
    auth,
    newObj,
    newCheck,
  },
})

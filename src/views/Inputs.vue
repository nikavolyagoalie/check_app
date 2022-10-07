<template>
  <div>
    <div class="inputs">
      <input v-model.trim="city" ref="mod"/>
      <input v-model.trim="phone" ref="mod"/>
      <input v-model.trim="fn" ref="mod"/>
      <input v-model.trim="ln" ref="mod"/>

      <div>
        Guests<button @click="addGuests" :disabled="allFields">+</button>
      </div>

      <div v-if="newInputs.length > 0">
        <div class="newInp" v-for="(item, i) in newInputs" :key="i">
            <span>{{ item.name }}</span>
            <input v-model.trim="item.model" ref="mod"/> 
            <div @click="delInp(i)">X</div>
        </div>
      </div>
      <hr/>
      <button class="submit" @click="sendData" :disabled="allData">Send data</button>
    </div>

    <div class="table" v-if="showTable">
      All done!
      <table>
        <tbody>
          <tr>
            <td>city</td>
            <td>{{city}}</td>
          </tr>
          <tr>
            <td>phone</td>
            <td>{{phone}}</td>
          </tr>
          <tr>
            <td>fullname</td>
            <td>{{fn}} {{ln}}</td>
          </tr>
          <tr>
            <td>guests</td>
            <td>
              <table>
                  <tbody>
                    <tr v-for="(item, i) in $refs.mod" :key="i">
                        <td>{{ item.value }}</td>
                    </tr>
                  </tbody>
                </table>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>

export default {
  name: "Inputs",
  data() {
    return {
      city: "",
      phone: "",
      fn: "",
      ln: "",
      showTable: false,
      newInputs: [],
      count: 0,
    };
  },
  methods: {
    addGuests() {
        this.allFields = true
        let txt = 'Guest'
        let c = this.count++
        this.newInputs.push({
            name: `${txt} ${c}`,
            model: '',
            id: c,
        })
    },
    sendData() {
      this.showTable = true;
    },

    delInp(id) {
        this.newInputs = this.newInputs.filter(item => item.id !== id)
    }
  },
  computed: {
    allFields() {
      if (this.city && this.phone && this.fn && this.ln) {
        return false;
      }
      return true;
    },
    allData() {
        if (this.allFields === false && this.newInputs.every(item => item.model !== '')) {
            return false;
        }
        return true
    }
  },
};
</script>

<style lang="scss" scoped>
</style>
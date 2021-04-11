Vue.use(VueI18n);

// Ready translated locale messages
const messages = {
  en: {
    about: {
      title: 'About Takuhigama',
      text: 'Sixty kilometers north of the Shimane peninsula, floating in the Sea of Japan, is the Oki Islands archipelago.\
              And in the Dōzen region of the Oki Islands, in the southern part of Nishinoshima Town, stands Mt. Takuhi.<br>\
              Looking down from atop this mountain is Takuhi Shrine.<br> \
              Sailors have prayed to the powerful diety here for safe voyages since long, long ago.<br>\
              Our kiln and studio, Takuhi Gama, sits at the base of this Mt. Takuhi.'
    }
  },
  ja: {
    about: {
      title: '焼火窯について',
      line1: '島根半島の北方６０キロ、日本海に浮かぶ隠岐諸島。',
      line2: '焼火山は隠岐諸島の島前、西ノ島町南部に位置し',
      line3: 'その8合目に鎮座する焼火神社は、遥か昔から',
      line4: '海上安全の守護神として崇められてきました。',
      line5: '私たちが営む「焼火窯」は、この焼火山の麓にあります。'
    }
  }
}

// Create VueI18n instance with options
const i18n = new VueI18n({
  locale: 'en', // set locale
  messages, // set locale messages
})


// Create a Vue instance with `i18n` option
const app = new Vue({
  el: '#app',
  i18n: i18n,
  data: {},
  created() {},
  methods: {
    handleClick_changeLanguage(lang) {
      this.$i18n.locale = lang;
    }
  }
});

// Now the app has started!

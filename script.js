// Функциональная видимость
// Видимость в блоке кода

// if (true) {
//   var a = 'Var';
//   let b = 'Let';
//   console.log(a);
//   console.log(b);
// }

// console.log(a);
// console.log(b);

Vue.createApp({
  data() {
    return {
      input: {
        value: '',
        placeholder: 'Enter your name',
      },
      notes: [],
    };
  },
  mounted() {
    this.getNotes();
  },
  methods: {
    onSubmit() {
      //   localStorage.setItem('notes', this.input.value);
      if (this.input.value !== '') {
        this.notes.push({
          id: this.notes.length,
          title: this.input.value,
        });
        this.input.value = '';
      }
    },
    getNotes() {
      const localNotes = localStorage.getItem('notes');
      if (localNotes) {
        this.notes = JSON.parse(localNotes);
      }
    },
    removeNotes(index) {
      this.notes.splice(index, 1);
    },
  },
  watch: {
    notes: {
      handler(updateList) {
        localStorage.setItem('notes', JSON.stringify(updateList));
      },
      deep: true,
    },
  },
}).mount('#app');

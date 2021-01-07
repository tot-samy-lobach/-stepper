// вы можете как угодно изменять программу и код
// добавлять любые переменные и модели
// ваша задача реализовать так, как показано на видео, чтобы оно работало

const App = {
  data() {
    return {
      activeIndex: 0, // то, что позволяет определить текущий активный шаг
      steps: [
        {
          title: 'Основы',
          text:
            'В блоке вы познакомитесь со всеми основами Vue.js на практике. На протяжении блока мы напишем реактивное приложение, в процессе разработки которого разберем вся базу фреймворка.',
        },
        {
          title: 'Компоненты',
          text:
            'Один из самых важных блоков в курсе, где вы узнаете все о компонентах. В блоке мы напишем 2 разных приложения и создадим более 5 различных UI компонентов как в реальной разработке. Блок расскажет про абсолютно все составляющие, которые есть в компонентах: взаимодействие, slots, асинхронные и динамические компоненты и тонна примеров.',
        },
        {
          title: 'Роутер',
          text:
            'В данном блоке вы узнаете все о том, как работает мультиязычность во Vue. Мы создадим миниклон Gmail в данном блоке, где вы на практике увидите как работать с динамическим роутером.',
        },
        {
          title: 'Vuex',
          text:
            'В блоке вы узнаете абсолютно все про Vuex. Вы узнаете как работать с данными, какие есть лучшие практики по их программированию и структурированию. Все на практике.',
        },
        {
          title: 'Composition',
          text:
            'Одним из наиболее важных обновлений в Vue 3 является появление альтернативного синтаксиса Composition API. В этом блоке вы узнаете все, чтобы полностью пользоваться данными синтаксисом на практических примерах. Помимо этого вы узнаете как работать совместно с Vue Router и Vuex.',
        },
      ],
      btnBackName: 'Назад',
      btnNextName: '',
      buttonState: true,
    };
  },
  methods: {
    prev() {
      // когда нажимаем кнопку назад
      if (this.activeIndex !== 0) {
        this.activeIndex = this.activeIndex - 1;
      }
    },
    nextOfFinish() {
      if (this.activeIndex != this.steps.length - 1) {
        this.activeIndex = this.activeIndex + 1;
      }
    },
    reset() {
      // начать заново
      this.activeIndex = 0;
      this.buttonState = true;
    },
    setActive(i) {
      // когда нажимаем на определенный шаг
      this.activeIndex = i;
    },
    test() {
      if (
        this.activeIndex === this.steps.length - 1 &&
        this.btnNextName === 'Завершить'
      ) {
        this.buttonState = false;
      } else {
        this.buttonState = true;
      }
    },
  },
  computed: {
    // тут стоит определить несколько свойств:
    // 1. текущий выбранный шаг
    currentStep() {
      //console.log(this.activeIndex, 'currentStep');
      return this.activeIndex;
    },
    // 2. выключена ли кнопка назад
    offBack() {
      if (this.activeIndex === 0) {
        return true;
      }
    },
    // 3. находимся ли мы на последнем шаге
    ifLastStep() {
      if (this.activeIndex === this.steps.length - 1) {
        return (this.btnNextName = 'Завершить');
      } else {
        return (this.btnNextName = 'Вперед');
      }
    },
  },
};

Vue.createApp(App).mount('#app');

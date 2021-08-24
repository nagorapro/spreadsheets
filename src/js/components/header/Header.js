import {SsComponent} from '@core/SsComponent'

export class Header extends SsComponent {
  static className = 'tb__header'
  constructor($root) {
    super($root, {
      name: 'Header',
      listeners: ['click']
    })
  }

  toHTML() {
    return `
      <a class="logo" href=""><img src="assets/img/svg/logo.svg" alt="logo"></a>
      <input class="input" type="text" value="Новая таблица">
      <button class="button">
        <span class="material-icons"> exit_to_app </span>
      </button>
      <button class="button">
        <span class="material-icons"> delete_forever </span>
      </button>
    `
  }

  onClick() {}
}
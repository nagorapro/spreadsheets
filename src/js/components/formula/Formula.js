import {SsComponent} from '@core/SsComponent'

export class Formula extends SsComponent {
  static className = 'tb__formula'

  constructor($root) {
    super($root, {
      name: 'Formula',
      listeners: ['input', 'click']
    })
  }

  toHTML() {
    return `
      <div class="info"><img src="assets/img/svg/fx.svg" alt="icon"></div>
      <div class="input" contenteditable="true" spellcheck="false"></div>
    `
  }

  onInput(e) {}

  onClick() {}
}
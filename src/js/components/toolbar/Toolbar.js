import {SsComponent} from '@core/SsComponent'

export class Toolbar extends SsComponent {
  static className = 'tb__toolbar'
  constructor($root) {
    super($root, {
      name: 'Toolbar',
      listeners: ['click']
    })
  }

  toHTML() {
    return `
      <button class="button">
        <span class="material-icons"> format_align_left </span>
      </button>
      <button class="button">
        <span class="material-icons"> format_align_center </span>
      </button>
      <button class="button">
        <span class="material-icons"> format_align_right </span>
      </button>
      <button class="button">
        <span class="material-icons"> format_bold </span>
      </button>
      <button class="button">
        <span class="material-icons"> format_italic </span>
      </button>
      <button class="button">
        <span class="material-icons"> format_underline </span>
      </button>
      <button class="button">
        <span class="material-icons"> strikethrough_s </span>
      </button>
    `
  }

  onClick(e) {}
}
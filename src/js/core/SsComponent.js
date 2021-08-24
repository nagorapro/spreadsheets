import {DomListener} from '@core/DomListener'

export class SsComponent extends DomListener {
  constructor($root, options = {}) {
    super($root, options.listeners)
    this.name = options.name || ''

    this.prepaire()
  }

  prepaire() {}

  toHTML() {
    return ''
  }

  init() {
    this.initDOMListeners()
  }

  destroy() {
    this.removeDOMListeners()
  }
}
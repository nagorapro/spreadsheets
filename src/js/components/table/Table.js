import {$} from '@core/dom'
import {SsComponent} from '@core/SsComponent'
import {createTable} from './table.template'
import {resizeHandler} from './table.resize'
import {isCell, shuldResize, matrix} from './table.functions'
import {TableSelection} from './TableSelection'

export class Table extends SsComponent {
  static className = 'tb__table'

  constructor($root) {
    super($root, {
      name: 'Table',
      listeners: [
        'click',
        'mousedown',
        'mousemove',
        'mouseup'
      ]
    })
  }

  toHTML() {
    return createTable(100)
  }

  prepaire() {
    this.selection = new TableSelection()
  }

  onClick() {}

  init() {
    super.init()
    const $cell = this.$root.find('[data-id="0:0"]')
    this.selection.select($cell)
  }

  onMousedown(event) {
    if (shuldResize(event)) {
      resizeHandler(this.$root, event)
    } else if (isCell(event)) {
      const $target = $(event.target)
      if (event.shiftKey) {
        // select group
        const $cells = matrix(this.selection.current, $target)
          .map(id => this.$root.find(`[data-id="${id}"]`))
        this.selection.selectGroup($cells)
      } else {
        // select
        this.selection.select($target)
      }
    }
  }

  onMousemove() {}

  onMouseup() {}
}
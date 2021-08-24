import {$} from '@core/Dom'

export function resizeHandler($root, event) {
  const $resizer = $(event.target)
  const dataType = '[data-type="resize"]'
  const $parent = $resizer.closest(dataType)
  const coords = $parent.getCoords()
  const type = $resizer.data.resize
  let value

  document.onmousemove = e => {
    if (type === 'col') {
      const delta = e.pageX - coords.right
      value = coords.width + delta
      document.body.style.cursor = 'col-resize'
      $resizer.css({right: -delta + 'px', bottom: '-1000vh'})
    } else {
      const delta = e.pageY - coords.bottom
      value = coords.height + delta
      document.body.style.cursor = 'row-resize'
      $resizer.css({width: '100vw', bottom: -delta + 'px'})
    }
  }

  document.onmouseup = () => {
    document.onmousemove = null
    document.onmouseup = null
    document.body.style.cursor = 'default'

    if (type === 'col') {
      $parent.css({width: value + 'px'})
      $resizer.css({right: 0, bottom: 0})
      $root
        .findAll(`[data-col="${$parent.data.col}"]`)
        .forEach(el => el.style.width = value + 'px')
    } else {
      const $info = $resizer.closest('[data-type="info"]')
      $resizer.css({width: 0, bottom: 0})
      $parent.css({height: value + 'px'})
      $info.css({height: value + 'px'})
    }
  }
}
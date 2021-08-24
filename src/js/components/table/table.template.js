const CODES = {
  A: 65,
  Z: 90
}

function toCell(row) {
  return function(_, col) {
    return `
      <div class="cell"
      contenteditable="true"
      spellcheck="false"
      data-row="${row}"
      data-col="${col}"
      data-id="${row}:${col}"
      data-type="cell"
      ></div>
    `
  }
}

function toColumn(el, index) {
  return `
    <div class="column"
      data-type="resize"
      data-col="${index}">
      <span>${el}</span>
      <div class="col-resize"
      data-resize="col"></div>
    </div>
  `
}

function createRow(index, content) {
  const s = `<span></span>`
  const i = `<span>${index}</span>`
  const r = `
    <div class="row-resize"
    data-resize="row"></div>
  `
  return `
    <div class="row" data-type="resize">
      <div class="row-info" data-type="info">
        ${!index ? s : i + r}
      </div>
      <div class="row-data">${content}</div>
    </div>
  `
}

function toChar(_, index) {
  return String.fromCharCode(CODES.A + index)
}

export function createTable(rowsCount = 20) {
  const colsCount = CODES.Z - CODES.A + 1
  const rows = []

  // create header row content (A B C ...)
  const cols = new Array(colsCount)
    .fill('')
    .map((el, index) => toChar(el, index))
    .map((el, index) => toColumn(el, index))
    .join('')

  // create header row
  rows.push(createRow(null, cols))

  // create body row content
  for (let row = 0; row < rowsCount; row++) {
    const cells = new Array(colsCount)
      .fill('')
      .map(toCell(row))
      .join('')
    rows.push(createRow(row + 1, cells))
  }
  return rows.join('')
}
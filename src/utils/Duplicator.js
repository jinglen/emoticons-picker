


class Duplicator {
  constructor (onCopyEnd = () => {}) {
    const span = document.createElement('span')
    const parentBox = document.createElement('div')
    parentBox.style.height = '1px'
    parentBox.style.overflow = 'hidden'
    parentBox.style.opacity = '0'
    parentBox.appendChild(span)
    document.body.appendChild(parentBox)

    this.span = span

    this.onCopyEnd = onCopyEnd
  }

  copy (value) {
    const {
      span,
    } = this
    span.textContent = value
    const range = document.createRange();
    range.selectNode(span);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);

    document.execCommand('copy')

    this.onCopyEnd(value)
  }
}

export default Duplicator;



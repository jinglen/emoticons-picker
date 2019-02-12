

class EmoticonHistory {
  constructor () {
    this.keyName = 'emoticon-history'
    const tempStr = localStorage.getItem(this.keyName)
    this.data = tempStr ? JSON.parse(tempStr) : {}
  }

  record (content) {
    if (this.data[content]) {
      this.data[content] += 1
      this._setStorage()
    } else {
      this.data[content] = 1
      this._setStorage()
    }
  }

  _setStorage () {
    const tempStr = JSON.stringify(this.data)
    localStorage.setItem(this.keyName, tempStr)
  }

  // 取得最近频繁使用的项
  getFrequetlyUsedItems (count = 8) {
    return Object.entries(this.data)
      .sort((a, b) => b[1] - a[1])
      .map(c => c[0])
      .slice(0, count)
  }
}

export default EmoticonHistory




class Rectangle {
  /**
   * 
   * @param {number} height 
   * @param {number} width 
   */
  constructor(height, width) {
    this.height = height
    this.width = width
  }

  toString () {
    return ('X'.repeat(this.width) + '\n').repeat(this.height)
  }
}

module.exports = {
  Rectangle
}
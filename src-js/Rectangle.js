class Rectangle {
  /**
   * @type {number}
   */
  height
  /**
   * @type {number}
   */
  width 
  /**
   * Normalize the given `type`, for example "html" becomes "text/html".
   *
   * @param {number} height
   * @param {number} width
   * @return {Rectangle}
   * @api private
  */
  constructor(height, width) {
    this.height = Math.floor(Math.abs(height))
    this.width = Math.floor(Math.abs(width))
  }

  toString () {
    return ('X'.repeat(this.width) + '\n').repeat(this.height)
  }
}

module.exports = {
  Rectangle
}
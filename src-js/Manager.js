class Manager {
  /**
   * @type {URL}
   */
  url
  /**
   * @param {URL} url 
   * @param {string} apiKey 
   */
  constructor(url, apiKey) {
    this.url = url
    this.url.searchParams.append('apiKey', apiKey)
  }
}

module.exports = {
  Manager
}
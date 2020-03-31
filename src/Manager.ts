export interface RequestHandler {
  request(id: string): any
}

export class Manager {
  url: URL
  handler: RequestHandler
  constructor(url: URL, apiKey: string, handler: RequestHandler) {
    this.url = url
    this.url.searchParams.append('apiKey', apiKey)
    this.handler = handler
  }
}
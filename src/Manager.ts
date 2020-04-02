export type RequestHandler<ResponseType> = {
  request: (id: string) => ResponseType
  toString: (response: ResponseType) => string 
}

export class Manager<ResponseType> {
  url: URL
  handler: RequestHandler<ResponseType>
  constructor(url: URL, apiKey: string, handler: RequestHandler<ResponseType>) {
    this.url = url
    this.url.searchParams.append('apiKey', apiKey)
    this.handler = handler
  }
}
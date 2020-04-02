export type RequestHandler<TResult> = {
  request: (id: string) => TResult
  responseToString: (response: TResult) => string 
}

export class Manager<TResult> {
  url: URL
  handler: RequestHandler<TResult>
  constructor(url: URL, apiKey: string, handler: RequestHandler<TResult>) {
    this.url = url
    this.url.searchParams.append('apiKey', apiKey)
    this.handler = handler
  }
}
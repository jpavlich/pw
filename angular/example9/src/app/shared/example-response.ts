export class ExampleResponse<T> {

  constructor(
    public status: string,
    public data: T
  ) {}
}

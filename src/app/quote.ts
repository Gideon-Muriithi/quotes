export class Quote {
  showDescrption = false;
  constructor(
  public id: number,
  public name: string,
  public description: string,
  public submssion: string,
  public completeDate: Date ) {}
}

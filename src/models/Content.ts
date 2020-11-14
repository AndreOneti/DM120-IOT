export default class Content {

  private temperatura: string = "0";

  constructor(
    temperatura: string
  ) {
    this.temperatura = temperatura
  }

  /**
   * Getter $temperatura
   * @return {string }
   */
  public get $temperatura(): string {
    return this.temperatura;
  }

  /**
   * Setter $temperatura
   * @param {string } value
   */
  public set $temperatura(value: string) {
    this.temperatura = value;
  }
}

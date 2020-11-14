import Content from './Content';

export default class With {

  private _thing: string;
  private _created: string;
  private _content: Content;
  private _date: string;
  private _time: string;

  constructor(
    thing: string,
    created: string,
    content: Content,
    date: string,
    time: string
  ) {
    this._thing = thing;
    this._created = created;
    this._content = content;
    this._date = date;
    this._time = time;
  }

  /**
   * Getter thing
   * @return {string}
   */
  public get thing(): string {
    return this._thing;
  }

  /**
   * Getter created
   * @return {string}
   */
  public get created(): string {
    return this._created;
  }

  /**
   * Getter content
   * @return {Content}
   */
  public get content(): Content {
    return this._content;
  }

  /**
   * Getter date
   * @return {string}
   */
  public get date(): string {
    return this._date;
  }

  /**
   * Getter time
   * @return {string}
   */
  public get time(): string {
    return this._time;
  }

  /**
   * Setter thing
   * @param {string} value
   */
  public set thing(value: string) {
    this._thing = value;
  }

  /**
   * Setter created
   * @param {string} value
   */
  public set created(value: string) {
    this._created = value;
  }

  /**
   * Setter content
   * @param {Content} value
   */
  public set content(value: Content) {
    this._content = value;
  }

  /**
   * Setter date
   * @param {string} value
   */
  public set date(value: string) {
    this._date = value;
  }

  /**
   * Setter time
   * @param {string} value
   */
  public set time(value: string) {
    this._time = value;
  }
}

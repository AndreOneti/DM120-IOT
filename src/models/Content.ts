export default class Content {

  private temperatura: string = "0";
  private temperaturaMax: string = "0";
  private temperaturaMin: string = "0";

  private luminosidade: string = "0";
  private luminosidadeMax: string = "0";
  private luminosidadeMin: string = "0";

  private umidade: string = "0";
  private umidadeMax: string = "0";
  private umidadeMin: string = "0";

  private buzzer: string = "0";
  private color: string = "0";

  constructor(
    data: ConstructorData,
  ) {
    let {
      luminosidadeMax,
      luminosidadeMin,
      temperaturaMax,
      temperaturaMin,
      luminosidade,
      temperatura,
      umidadeMax,
      umidadeMin,
      umidade,
      buzzer,
      color,
    } = data;

    this.temperatura = temperatura;
    this.temperaturaMax = temperaturaMax;
    this.temperaturaMin = temperaturaMin;

    this.luminosidade = luminosidade;
    this.luminosidadeMax = luminosidadeMax;
    this.luminosidadeMin = luminosidadeMin;

    this.umidade = umidade;
    this.umidadeMax = umidadeMax;
    this.umidadeMin = umidadeMin;

    this.buzzer = buzzer;
    this.color = color;
  }

  /**
   * Getter $temperatura
   * @return {string }
   */
  public get $temperatura(): string {
    return this.temperatura;
  }

  /**
   * Getter $temperaturaMax
   * @return {string }
   */
  public get $temperaturaMax(): string {
    return this.temperaturaMax;
  }

  /**
   * Getter $temperaturaMin
   * @return {string }
   */
  public get $temperaturaMin(): string {
    return this.temperaturaMin;
  }

  /**
   * Getter $luminosidade
   * @return {string }
   */
  public get $luminosidade(): string {
    return this.luminosidade;
  }

  /**
   * Getter $luminosidadeMax
   * @return {string }
   */
  public get $luminosidadeMax(): string {
    return this.luminosidadeMax;
  }

  /**
   * Getter $luminosidadeMin
   * @return {string }
   */
  public get $luminosidadeMin(): string {
    return this.luminosidadeMin;
  }

  /**
   * Getter $umidade
   * @return {string }
   */
  public get $umidade(): string {
    return this.umidade;
  }

  /**
   * Getter $umidadeMax
   * @return {string }
   */
  public get $umidadeMax(): string {
    return this.umidadeMax;
  }

  /**
   * Getter $umidadeMin
   * @return {string }
   */
  public get $umidadeMin(): string {
    return this.umidadeMin;
  }

  /**
   * Getter $buzzer
   * @return {string }
   */
  public get $buzzer(): string {
    return this.buzzer;
  }

  /**
   * Getter $color
   * @return {string }
   */
  public get $color(): string {
    return this.color;
  }

  /**
   * Setter $temperatura
   * @param {string } value
   */
  public set $temperatura(value: string) {
    this.temperatura = value;
  }

  /**
   * Setter $temperaturaMax
   * @param {string } value
   */
  public set $temperaturaMax(value: string) {
    this.temperaturaMax = value;
  }

  /**
   * Setter $temperaturaMin
   * @param {string } value
   */
  public set $temperaturaMin(value: string) {
    this.temperaturaMin = value;
  }

  /**
   * Setter $luminosidade
   * @param {string } value
   */
  public set $luminosidade(value: string) {
    this.luminosidade = value;
  }

  /**
   * Setter $luminosidadeMax
   * @param {string } value
   */
  public set $luminosidadeMax(value: string) {
    this.luminosidadeMax = value;
  }

  /**
   * Setter $luminosidadeMin
   * @param {string } value
   */
  public set $luminosidadeMin(value: string) {
    this.luminosidadeMin = value;
  }

  /**
   * Setter $umidade
   * @param {string } value
   */
  public set $umidade(value: string) {
    this.umidade = value;
  }

  /**
   * Setter $umidadeMax
   * @param {string } value
   */
  public set $umidadeMax(value: string) {
    this.umidadeMax = value;
  }

  /**
   * Setter $umidadeMin
   * @param {string } value
   */
  public set $umidadeMin(value: string) {
    this.umidadeMin = value;
  }

  /**
   * Setter $buzzer
   * @param {string } value
   */
  public set $buzzer(value: string) {
    this.buzzer = value;
  }

  /**
   * Setter $color
   * @param {string } value
   */
  public set $color(value: string) {
    this.color = value;
  }
}

interface ConstructorData {
  luminosidadeMin: string,
  luminosidadeMax: string,
  temperaturaMin: string,
  temperaturaMax: string,
  luminosidade: string,
  temperatura: string,
  umidadeMax: string,
  umidadeMin: string,
  umidade: string,
  buzzer: string,
  color: string,
}

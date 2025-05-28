import { parseString } from 'xml2js';
import { TxtHandling } from './txt-handling';
export class XmlHandling extends TxtHandling {

  /**
   * Convert xml format text to javascript object
   * @param filepath
   * @returns return javascript object or undefined value if any error
   */
  static async parseXmlDataToObject(filepath: string): Promise<object | undefined> {
    try {
      let xmlData;
      const rawdata = await this.readRawFile(filepath)
      parseString(rawdata, (err, result) => {
        xmlData = result;
      });
      return xmlData;
    } catch (error) {
        return undefined;
    }
  }

}
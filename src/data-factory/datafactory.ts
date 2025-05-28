import { DataHandling } from "../data-handling/data-handling";
import User from "../objects/user";
import { Constants } from "../utilities/constants";


export class DataFactory{

 /**
   * Get User Ino
   * @returns object
   */
 static async getLoginUserInfo():Promise< object | undefined> {
  let user = await DataHandling.parseDataFromFile(Constants.USER_FILE_NAME);

  if (!user) return undefined;
    return new User().initiateUserInfo(user);
}
}

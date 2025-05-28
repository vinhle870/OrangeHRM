import { DataHandling } from "../data-handling/data-handling";
export default class User {

    /**
     * Get Dealer Login Account
     * @param user
     * @returns
     */
    initiateUserInfo(user:object):object {

        if(user['UserName'] ==="")
            user['UserName'] = "Ora1234 Smiths";

        if(user['ImgSrc'] ==="")
            user['ImgSrc'] = "/web/index.php/pim/viewPhoto/empNumber/7";

        console.log("Expected src:"+ user['ImgSrc']);
        return user;
    }

}
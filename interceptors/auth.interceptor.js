const auth = require("basic-auth");
const bcrypt = require("bcrypt");
const db = require("../files/in.memory.db");
const { apiAccess } = db;

exports.authenticateBangerClient = async (req, res) => {
    //secured using basic auth
    //Authorization Header = Basic Base64(username:password)
    //sample - Basic MTIzMTIzOjEyMzEyMzEyMw==
    const passedInUser = auth(req); //pass into the basic auth to decode from base 64 to java obj with name & password properties.
    const registrationNumber = req.headers.registration //retrieve the registration number from request header

    if (passedInUser) {
        //valid user from basic auth
        validationObj = await authenticateUser(passedInUser.name, passedInUser.pass, registrationNumber); //authenticate user by checking access list
        if (validationObj.code === 401) {
            //not authenticated
            res.status(401).json({
                message: validationObj.message
            });
        } else {
            req.next(); //pass request along filter chain
        }
    } else {
        //user not authorized to access api.
        res.status(401).json({
            message: "Access Denied"
        });
    }
}

const authenticateUser = async (username, providedPassword, registrationNumber) => {
    //check if username exists
    let user;
    apiAccess.forEach((eachClient) => {
        if (eachClient.username === username) {
            user = eachClient;
        }
    })

    if (user) {
        //check if entered password matches the password for client
        const isAuthenticated = await bcrypt.compare(providedPassword, user.password);
        //check if registration number for user is same as header passed
        const isRegistrationNumberValid = user.registration === registrationNumber ? true : false;
        if (isAuthenticated === true && isRegistrationNumberValid) {
            //is username and password match and the registration number belongs to the user, authenticate.
            return {
                code: 200,
                message: "authenticated"
            }
        } else {
            return {
                code: 401,
                message: "invalid username or password or registration number"
            }
        }
    } else {
        //return false as username does not exist
        return {
            code: 401,
            message: "user does not exist"
        };
    }
}
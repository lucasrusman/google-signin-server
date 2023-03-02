const {OAuth2Client} = require('google-auth-library');
const CLIENT_ID = '687858484622-2vmqvtk9pmimons6c23gsq65m8cop82a.apps.googleusercontent.com';
const client = new OAuth2Client(CLIENT_ID);
const validarGoogleIdToken = async (token) => {
    try {
        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: [
                CLIENT_ID,
                '687858484622-q0ia7r3d9m3mt2ctagct08ht8gkdp7n6.apps.googleusercontent.com'
            ],  
        });
        const payload = ticket.getPayload();
        // const userid = payload['sub'];
        console.log(payload);
        // If request specified a G Suite domain:
        // const domain = payload['hd'];
        return {
            name : payload['name'],
            picture : payload['picture'],
            email : payload['email']
        }
    } catch (e) {
        return null;
    }

}
module.exports = {
    validarGoogleIdToken
}
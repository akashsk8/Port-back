const CCodes = require('../model/CCodes');
const CCode = async (Name,Code)=>{
    let NewCode = new CCodes({
        Name,
        Code
    })
    await NewCode.save();
}
module.exports = CCode;
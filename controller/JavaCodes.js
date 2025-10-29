const JavaCodes = require('../model/JavaCodes');
const JavaCode = async (Name,Code)=>{
    let NewCode = new JavaCodes({
        Name,
        Code
    })
    await NewCode.save();
}
module.exports = JavaCode;
const CPPCodes = require('../model/CPPCodes');
const CPPCode = async (Name,Code)=>{
    let NewCode = new CPPCodes({
        Name,
        Code
    })
    await NewCode.save();
}
module.exports = CPPCode;
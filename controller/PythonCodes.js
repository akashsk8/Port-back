const PythonCodes = require('../model/PythonCodes');
const PythonCode = async (Name,Code)=>{
    let NewCode = new PythonCodes({
        Name,
        Code
    })
    await NewCode.save();
}
module.exports = PythonCode;
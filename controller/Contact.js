const ContactSchema = require('../model/Contact')

const Contact = async (Name,Email,Message)=>{
    let NewMassage = new ContactSchema({
        Name,
        Email,
        Message
    })
    await NewMassage.save();
}

module.exports = Contact;
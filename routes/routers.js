const express = require('express');
const router = express.Router();
const  JavaCode  = require('../controller/JavaCodes');
const JavaCodes = require('../model/JavaCodes');
const CCodes = require('../model/CCodes');
const CCode = require('../controller/CCodes');
const CPPCodes = require('../model/CPPCodes');
const CPPCode = require('../controller/CPPCodes');
const PythonCodes = require('../model/PythonCodes');
const PythonCode = require('../controller/PythonCodes');
const Contact = require('../controller/Contact')

// router.get('/Java', async (req, res) => {
//     try {
//         const javaCodes = await Java();
//         res.json(javaCodes);
//     } catch (error) {
//         res.status(500).json({ error: 'Failed to fetch Java codes' });
//     }
// });
router.get("/", (req, res) => {
    res.send("API is running...");
});

router.get('/Java', async (req, res) => {
    await JavaCodes.find({}).then((data)=>{
        res.json(data);
    }).catch((error)=>{
        res.status(500).json({ error: 'Failed to fetch Java codes' });
    })
});

router.post('/addJava', async (req, res) => {
    try {
        const { Name, Code } = req.body;
        await JavaCode(Name,Code);
        res.status(201).json({ message: 'Java code added successfully'});
    } catch (error) {
        res.status(500).json({ error: 'Failed to add Java code' });
    }
});

router.get('/C', async (req, res) => {
    await CCodes.find({}).then((data)=>{
        res.json(data);
    }).catch((error)=>{
        res.status(500).json({ error: 'Failed to fetch C codes' });
    })
});

router.post('/addC', async (req, res) => {
    try {
        const { Name, Code } = req.body;
        await CCode(Name,Code);
        res.status(201).json({ message: 'C code added successfully'});
    } catch (error) {
        res.status(500).json({ error: 'Failed to add C code' });
    }
});

router.get('/CPP', async (req, res) => {
    await CPPCodes.find({}).then((data)=>{
        res.json(data);
    }).catch((error)=>{
        res.status(500).json({ error: 'Failed to fetch C++ codes' });
    })
});

router.post('/addCPP', async (req, res) => {
    try {
        const { Name, Code } = req.body;
        await CPPCode(Name,Code);
        res.status(201).json({ message: 'C++ code added successfully'});
    } catch (error) {
        res.status(500).json({ error: 'Failed to add C++ code' });
    }
});

router.get('/Python', async (req, res) => {
    await PythonCodes.find({}).then((data)=>{
        res.json(data);
    }).catch((error)=>{
        res.status(500).json({ error: 'Failed to fetch Python codes' });
    })
});

router.post('/addPython', async (req, res) => {
    try {
        const { Name, Code } = req.body;
        await PythonCode(Name,Code);
        res.status(201).json({ message: 'Python code added successfully'});
    } catch (error) {
        res.status(500).json({ error: 'Failed to add Python code' });
    }
});

router.post('/Send', async (req,res)=>{
  try{
    const {Name,Email,Message} = req.body;
    await Contact(Name,Email,Message);
    res.redirect('http://10.131.108.196:3000/contact');
  }
  catch(error){
    res.status(500).json({ error: 'Failed to send contact message' });
  }
})
module.exports = router;
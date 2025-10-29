const express = require('express');
const connectDB = require('./Db/ConnectionDb');
const Router = require('./routes/routers');
const app = express();
const PORT = process.env.PORT || 5000;
const cors = require('cors');
app.use(cors({origin:{['Access-Control-Allow-Origin']: '*'},
methods:["GET","POST","PUT","DELETE"],
credentials:true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', Router);
app.use('/addJava',Router);
app.use('/Java',Router);
app.use('/C',Router);
app.use('/addC',Router);
app.use('/CPP',Router);
app.use('/addCPP',Router);
app.use('/Python',Router);
app.use('/addPython',Router);
app.use('/Send',Router);

const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
  }
};

startServer();

const   express    = require('express'),
        app        = express(),
        business=require('./businessVod/business_management'),
        bodyParser = require('body-parser'),
        port       = process.env.PORT || 3000;

 app.use(bodyParser.json());
 app.use(bodyParser.urlencoded({extend: true}));


app.get('/getAllData',
   (req,res)=>{
      business.allCompanies().then(docs => res.json(docs));
});

app.post('/getCompany',(req,res) =>{
    business.getCompByProfile(req.body.Profile).then(docs => res.json(docs));
     });

app.get ('/getCompanyByCity&Devices/:city/:devices' , 
    (req,res) =>{ 
      res.status(200).json(business.getCompByCityAndDev(req.params.city,req.params.devices));
 });
  
 app.all('*',
     (req,res) =>{ 
         console.log("alllll");
     });  

  app.get('/', (req, res) => {
   res.sendFile(`${__dirname}/index.html`);
 });

app.get('/includes/style.css', (req, res) => {
   res.sendFile(`${__dirname}/includes/style.css`);
}); 

app.listen(port,
    () => {
        console.log(`listening on port ${port}`);
    });
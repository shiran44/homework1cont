

const companies = require('./companiesData');
var consts   = require('./consts'),
    mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect(consts.MLAB_KEY);
const conn   = mongoose.connection;


conn.on('error',
(err) => {
console.log(`connection error: ${err}`);
});

mongoose.connection.on('open',
    () => console.log('Connected'));


module.exports={

    allCompanies(){
        return companies.find();
    },

    getCompByProfile(Profile){
        return companies.findOne({Profile:Profile});
    },


    getCompByCityAndDev(city,devices){
        companies.find({}, {"Profile": 0},
        (err, companies) => {
            for (let i = 0; i < companies.length; i++) {
                if(companies[i].Quantity_of_devices >= devices){
                    console.log(companies[i].Quantity_of_devices);
                    for (let j = 0; j < companies[i].Branches.length; j++) {
                        if (companies[i].Branches[j].city == city) {
                            return("hhhhhhhh");
                            console.log(companies[i].name);
                        }
                    }
                }
            }
        });
    }

};

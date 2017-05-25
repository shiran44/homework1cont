

const mongoose = require('mongoose'),
    schema = mongoose.Schema;

    brancheSchema = new schema({
    city:{type:String},
    id:{type:Number},
    address:{type:String}
});

    companySchema = new schema({
    name: {type:String, index:1, required:true, unique:true},
    Profile: Number,
    classification: {type:String, required:true},
    Branches: [brancheSchema],
    Quantity_of_devices: Number,
    Monthly_amount: Number
}, {collection: 'companies'});


const companies= mongoose.model('companies',companySchema);
module.exports=companies;


console.log(`required paths: ${companySchema.requiredPaths()}`);
console.log(`indexes: ${JSON.stringify(companySchema.indexes())}`);


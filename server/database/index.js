const mongoose = require("mongoose");
mongoose
  .connect("mongodb+srv://root:root@cluster0.ph4vvm6.mongodb.net/mvp", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((res) => console.log("database connected"))
  .catch((err) => console.log(err));
  
  mongoose.Promise = global.Promise;

let doctors = mongoose.Schema({
  doctorimage:{type:String},
    doctorname:{type:String,require :true,},
   
    speciality:{type:Array,require :true,} ,
    
   
    patientslist:{type:Array,require :false,},
    
   score:{type:Number}
});
let patients = mongoose.Schema({
  patientname: { type: String, require: true },
  doctorname:{type:String}, 
  patientimage:{type:String},
  case: { type: String },
  gender: { type: String },
 state:{type:String,default:'testing'}  
});
let admins = mongoose.Schema({
  adminName: {type:String},

  adminPassword: String,
  
});
let users=mongoose.Schema({
  username: {type:String},
  userPassword:String
})

let admin = mongoose.model("admins",admins);
let patient = mongoose.model("patients", patients);
let user = mongoose.model("users", users);
let doctor = mongoose.model("doctors", doctors);

module.exports = {admin,user,patient,doctor};

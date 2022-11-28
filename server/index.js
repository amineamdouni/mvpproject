const express = require("express");
const cors = require("cors");
const { admin, user, patient, doctor } = require("./database/index.js");
const app = express();
app.use(cors());
app.use(express.json());
const PORT = 4000;


//admin 
app.post("/admin", (req, res) => {
  doctor.create(req.body, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});
app.get(`/admin/alldoc`, (req, res) => {
  doctor.find({}, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});
app.get(`/admin/allPat`, (req, res) => {
  patient.find({}, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});


app.get(`/admin/onePat/:name`, (req, res) => {
  doctor.find({ patientname: req.params.name }, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});


app.delete("/admin/:doctorname", (req, res) => {
  doctor.deleteOne({ doctorname: req.params.doctorname }, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});
app.put(`/admin/:doctorname`, (req, res) => {
  doctor.updateOne(
    { doctorname: req.params.doctorname },
    req.body,
    (err, result) => {
      if (err) {
        res.json(err);
      } else {
        res.json(result);
      }
    }
    );
  });
  app.put("/admin/score/:doctorname", (req, res) => {
    
    
    doctor.findOneAndUpdate(
      { doctorname: req.params.doctorname },
      { $inc: { score: 1 } },
      (err, result) => {
        if (err) {
          res.json(err);
        } else {
          res.json(result);
        }
      }
      );
    })
    
    
    //login
    app.get(`/login/admin/:lolo`, (req, res) => {
       console.log(req.params.lolo );
      const please=JSON.parse(req.params.lolo)
      admin.find({ adminName: please.name,adminPassword :please.password}, (err, result) => {
        if (err) {
          res.json(err);
        } else {
         
          res.json(result);
        }
      });
    });
    
    
    app.listen(PORT,()=>{
      console.log(`server yemchi 3la:${PORT}`)
    })
    
    
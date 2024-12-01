const express = require("express");
const router = express.Router();
const Gyroid = require("../models/gyroidModel");
const gyroidController = require("../controllers/gyroidController");

router.get('/new',(req,res)=>{
    res.render('new');
});

router.get('/gyroid/:id/update', async (req,res)=>{
    try{
        const gyroid = await Gyroid.findById(req.params.id);
        res.render('edit',{gyroid});
    }catch(error){
        res.status(500).send("Fejl ved hentning af gyroid.");
    }
});



router.get('/', gyroidController.getAllGyroids);
router.post('/gyroid', gyroidController.createGyroid)
router.post('/gyroid/:id/update',gyroidController.updateGyroid)
router.post('/gyroid/:id/delete',gyroidController.deleteGyroid);

module.exports = router
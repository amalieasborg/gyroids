const Gyroid = require('../models/gyroidModel');

exports.createGyroid = async (req, res) => {
    try {
        const newGyroid = new Gyroid({
            name: req.body.name,
            colour: req.body.colour,
        });
        await newGyroid.save();
        res.redirect('/');
    }catch (error) {
        res.status(500).send('Fejl ved oprettelse af gyroid');}
}

exports.getAllGyroids = async (req, res) => {
    try {
        const gyroids = await Gyroid.find();
        res.render('index', { gyroids });
    } catch (error) {
        res.status(500).send("Fejl ved hentning af gyroids");
    }
}

exports.updateGyroid = async (req, res) => {
    try {
        await Gyroid.findByIdAndUpdate(req.params.id,{
            name: req.body.name,
            colour: req.body.colour,
        })
        res.redirect('/')
    } catch (error) {
        res.status(500).send("Fejl ved opdatering af gyroid");
    }
};

exports.deleteGyroid = async (req, res) => {
    try {
        await Gyroid.findByIdAndDelete(req.params.id);
        res.redirect('/');
    } catch (error) {
        res.status(500).send("Fejl ved sletning af gyroid");
    }
};

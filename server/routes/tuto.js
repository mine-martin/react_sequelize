const router = require("express").Router();
const db = require("../models");

//get all tutos
router.get("/get", (req, res) => {
  db.tutorials
    .findAll()
    .then((tutos) => res.json(tutos))
    .catch((err) => console.error(err.message));
});

//get one tutorial
router.get("/get/:id", (req, res) => {
  let { id } = req.params;

  db.tutorials
    .findAll({
      where: { id },
    })
    .then((tuto) => res.json(tuto))
    .catch((err) => console.error(err.message));
});

//add tuto
router.post("/add", (req, res) => {
  let { name, text } = req.body;

  db.tutorials
    .create({
      name,
      text,
    })
    .then((tutorial) => res.json(tutorial))
    .catch((err) => console.error(err.message));
});

//update tutorial
router.put("/update/:id", (req, res) => {
  let { id } = req.params;
  let { name, text } = req.body;

  db.tutorials
    .update({ name, text }, { where: { id } })
    .then((tutorial) => res.json(tutorial));
});

//delete tutorial
router.delete('/delete/:id', (req, res) => {
  let { id } = req.params

  db.tutorials.destroy({ where: { id } })
    .then(tutorial => res.send('Data deleted'))
    .catch((err) => console.error(err.message))
})


module.exports = router;

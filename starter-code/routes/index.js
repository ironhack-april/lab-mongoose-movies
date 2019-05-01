const express = require('express');
const router  = express.Router();
const Celebrity = require('../models/celebrity.js')
/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/celebrities', (req,res,next) => {
  Celebrity.find().then(celebs => {
    res.render('celebrities.hbs', { celebs })
  })
})


router.post("/saveActorToTheDatabase", (req,res,next) =>{
  console.log('did we make it????', req.body)
  Celebrity.create(req.body).then(result => {
    res.redirect('celebrities')
  })

})

          ///details/5cc9e9a3329be1f82a23c0da
router.get('/details/:celebID', (req,res,next)=>{
  Celebrity.findById(req.params.celebID).then(celeb=>{
    res.render("celebDetail.hbs", { celeb })
  })
})


router.get('/delete/:id', (req, res, next)=>{
  Celebrity.findByIdAndDelete(req.params.id).then(r=>{
    console.log(r)
    res.redirect('/celebrities')
  }).catch(err => console.log(err) )
})


router.get('/edit/:id', (req, res,next) => {
  Celebrity.findById(req.params.id).then(celeb=>{
    res.render("edit.hbs", { celeb })
  })
})
//http://localhost:3000/edit/5cc9ee3d420635faac3fd7df
router.post('/edit/:id', (req, res,next) => {
  Celebrity.findByIdAndUpdate(req.params.id, req.body).then(ifItWOrKs=>{
    res.redirect(`/details/${req.params.id}`)
  })
})

module.exports = router;

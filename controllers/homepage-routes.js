const router = require('express').Router();

router.get('/', async (req, res) => {
    res.render('homepage');
  });
module.exports = router;

router.get('/work', async (req, res) => {
  res.render('work');
});
module.exports = router;



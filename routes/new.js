const express = require('express');
const router = express.Router();
const models = require('../models');

router.get('/', (request, response) => {
  response.render('newMemo', { pageTitle: "メモを新規作成"});
});

router.post('/', (request, response) => {
  models.Memo.create({
    title: request.body.title,
    memo: request.body.memo
  }).then(() => {
    response.redirect('/')
  })
})

module.exports = router;
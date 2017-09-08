const express = require('express');
const router = express.Router();
const models = require('../models');


router.get('/:memoId', (request, response) => {
  const memoId = request.params.memoId;

  models.Memo.findOne({
    where: {id: memoId}
  }).then(targetMemo => {
    response.render('editMemo', { pageTitle: 'メモ更新', targetMemo: targetMemo });
  })
});

router.post('/:memoId', (request, response) => {
  const memoId = request.params.memoId;

  models.Memo.update({
    title: request.body.title,
    memo: request.body.memo
  }, {
    where: {id: memoId}
  }).then(() => {
    response.redirect('/')
  })
});

module.exports = router;
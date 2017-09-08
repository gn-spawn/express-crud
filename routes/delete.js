const express = require('express');
const router = express.Router();
const models = require('../models');

router.get('/:memoId', (request, response) => {
  const memoId = request.params.memoId;
  
  models.Memo.findOne({
    where: {id: memoId}
  }).then(targetMemo => {
    response.render('deleteMemo', { pageTitle: 'メモ更新', targetMemo: targetMemo});
  })
});

router.post('/:memoId', (request, response) => {
  const memoId = request.params.memoId;

  models.Memo.destroy({
    where: {id: memoId}
  }).then(() => {
    response.redirect('/')
  })
})

module.exports = router;
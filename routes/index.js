const express = require('express');
const router = express.Router();
const getmac = require('getmac');
const models = require('../models');

// const memoItems = [
//   {id: 1, title:"initial", memo: "初期メモ", created:"2016-02-16 15:58:58", modified:"2016-02-17 11:20:59"},
//   {id: 2, title:"メール送付", created:"2016-04-01 08:38:49", modified:""},
//   {id: 3, title:"ツールお試し", created:"2016-11-22 23:01:25", modified:"2016-11-23 23:01:25"}
// ];

/* GET home page. */
router.get('/', (req, res, next) => {
  models.Memo.findAll().then(memoItems => {
    res.render('index', { pageTitle: 'メモ一覧', memoItems: memoItems });
  })
});

router.get('/:memoId(\\d+)', (request, response) => {
  const memoId = request.params.memoId;
  
  models.Memo.findOne({
    where: {id: memoId}
  }).then(targetMemo => {
      response.render('memoDetail', {
        pageTitle: 'メモ詳細',
        targetMemo: targetMemo,
    });
  })
});


module.exports = router;

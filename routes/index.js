const express = require('express');
const router = express.Router();
const getmac = require('getmac');

const memoItems = [
  {id: 1, title:"initial", memo: "初期メモ", created:"2016-02-16 15:58:58", modified:"2016-02-17 11:20:59"},
  {id: 2, title:"メール送付", created:"2016-04-01 08:38:49", modified:""},
  {id: 3, title:"ツールお試し", created:"2016-11-22 23:01:25", modified:"2016-11-23 23:01:25"}
];

/* GET home page. */
router.get('/', (req, res, next) => {
  getmac.getMac((err, macAddress) => {
    if (err) {
      throw err
    }
    console.log(macAddress);
  })
  res.render('index', { pageTitle: 'メモ一覧', memoItems: memoItems });
});

router.get('/:memoId(\\d+)', (request, response) => {
  const memoId = request.params.memoId;
  const memo = memoItem(memoId);
  const targetMemo = {
    id: memoId,
    title: memo.title,
    created: memo.created,
    modified: memo.modified,
  };
  
  response.render('memoDetail', {
    pageTitle: 'メモ詳細',
    targetMemo: targetMemo,
  });
});

function memoItem (memoId) {
  return memoItems[memoId - 1];
}

module.exports = router;

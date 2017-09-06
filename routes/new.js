const express = require('express');
const router = express.Router();

router.get('/', (request, response) => {
  response.render('newMemo', { pageTitle: "メモを新規作成"});
});

module.exports = router;
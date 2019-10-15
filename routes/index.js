const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

const url = require('./assets/list.js');

// Function
listData = (category) => {
  let list = [];
  url.forEach(item => {
    if (item.category === category) list.push(item);
  });
  return list;
}

// Routes
router.get('/', (req, res) => {
  const page = "Home";
  res.render('index', { title: page });
});

router.get('/frontend', (req, res) => {
  const page = "Front End";
  let list = listData("frontend");
  res.render('pages/frontend', { title: page, list: list });
});

router.get('/backend', (req, res) => {
  const page = "Back End";
  let list = listData("backend");
  res.render('pages/backend', { title: page, list: list });
});

router.get('/about', (req, res) => {
  const page = "About";
  res.render('pages/about', { title: page });
});

router.get('/limit', (req, res) => {
  fetch('https://api.github.com/rate_limit')
    .then(response => response.json())
    .then(json => res.send(json));
});

router.get('/:url', (req, res) => {
  // If Req Param Matches A Name In Array
  if (url.some(e => e.url === req.params.url.toLowerCase())) {
    const value = url.find(e => e.url === req.params.url.toLowerCase());
    // If Object Has Wiki
    if (value.hasOwnProperty('wiki')) {
      Promise.all([
        fetch('https://en.wikipedia.org/api/rest_v1/page/summary/' + value.wiki).then(wiki => wiki.json()),
        fetch('https://api.github.com/repos/' + value.git).then(git => git.json())
      ]).then(([wiki, git]) => {
        res.render('pages/tech', { wiki: wiki, git: git, unit: value });
      }).catch((err) => {
        let msg = 'The request could not be made...';
        res.render('index', { msg: msg });
      });
    } else {
      fetch('https://api.github.com/repos/' + value.git)
        .then(response => response.json())
        .then(git => res.render('pages/tech', { git: git, unit: value }))
        .catch((err) => {
          let msg = 'The GitHub request could not be made...';
          res.render('index', { msg: msg })
        });
    }
  } else {
    const page = "Page Not Found";
    res.render('pages/404', { title: page });
  }
});

module.exports = router;
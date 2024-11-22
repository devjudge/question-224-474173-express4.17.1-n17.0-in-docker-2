var express = require('express');
var router = express.Router();
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// router.post('/api/process-interval ', async (req, res) => {
//   const { video_link, interval } = req.body;
//   console.log(req.body)
//   const duration = await videoDuration(video_link);
//   try {
//     if (!video_link || !interval) {
//       return res.status(400).send('Missing required fields');
//     }
//     if (duration < interval) {
//       return res.status(400).send('invalid interval duration');
//     }
//     var arrayOfResponse = [];
//     var slice = duration / interval;
//     for (var i = 0; i < slice; i++) {
//       arrayOfResponse.push({ video_link, slice });
//     }
//     return res.status(200).send(arrayOfResponse);
//   } catch (error) {
//     res.status(422).send('could not process file');
//   }
// });

module.exports = router;

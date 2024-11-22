var express = require('express');
var router = express.Router();
const { videoDuration } = require("@numairawan/video-duration");

console.log("Dive into process router");

router.post('/process-interval ', async (req, res) => {
  const { video_link, interval_duration } = req.body;
  console.log(req.body)
  const duration = await videoDuration(video_link);
  try {
    if (!video_link || !interval_duration) {
      return res.status(400).send('Missing required fields');
    }
    if (duration < interval_duration) {
      return res.status(400).send('invalid interval duration');
    }
    var arrayOfResponse = [];
    var slice = duration / interval_duration;
    for (var i = 0; i < slice; i++) {
      arrayOfResponse.push({ video_link, slice });
    }
    return res.status(200).send(arrayOfResponse);
  } catch (error) {
    res.status(422).send('could not process file');
  }
});

module.exports = router;

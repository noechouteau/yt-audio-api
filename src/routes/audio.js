// src/routes/audio.js
const express = require('express');
const router = express.Router();
const youtubeStream = require('youtube-audio-stream');

router.get('/stream/:videoId', (req, res) => {
  try {
    const videoId = req.params.videoId;

    // Set appropriate response headers
    res.setHeader('Content-Type', 'audio/mpeg');
    res.setHeader('Content-Disposition', `inline; filename=${videoId}.mp3`);

    // Pipe the YouTube audio stream to the response
    youtubeStream(videoId).pipe(res);
  } catch (error) {
    console.error('Error streaming YouTube audio:', error);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;

const { Router } = require("express");
const showVideo = require("./query/showVideo");
const getComment = require("./query/getComment");
const postComment = require("./query/postComment");
const getVideos = require('./query/getVideos')
const getSubscriptionsVideos = require('./query/getSubscriptionsVideos');
const getChannelVideos = require("./query/getChannelVideos");
const getChannelVideosAccueil = require("./query/getChannelVideosAccueil");
const postLike = require('./query/postLike')
const verifLike = require('./query/verifLike')
const deleteLike = require('./query/deleteLike')
const addToHistory = require('./query/addToHistory')
const videoInHistory = require('./query/videoInHistory')
const getHistory = require('./query/getHistory')

const router = Router()

//lance la fonction createChannel lorsqu'un post est effecté à /channels/createChannel
//router.post('/createChannel', createChannel)

router.get('/showVideo/:id', showVideo)
router.get('/getComment/:id_video', getComment)
router.post('/postComment', postComment)
router.get('/getVideos', getVideos)  // --> chercher toutes les videos
router.get('/getSubscriptionsVideos/:user', getSubscriptionsVideos)
router.get('/getChannelVideos/:name', getChannelVideos)
router.get('/getChannelVideosAccueil/:name', getChannelVideosAccueil)
router.post('/likes', postLike)
router.get('/verifLike', verifLike)
router.delete('/deleteLike', deleteLike)
router.post('/addHistory', addToHistory)
router.post('/videoInHistory', videoInHistory)
router.get('/getHistory/:user', getHistory )




module.exports.routes = router
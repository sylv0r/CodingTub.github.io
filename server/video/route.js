const { Router } = require("express");
const showVideo = require("./query/showVideo");
const getComment = require("./query/getComment");
const postComment = require("./query/postComment");
const getVideos = require('./query/getVideos')
const getSubscriptionsVideos = require('./query/getSubscriptionsVideos')

const router = Router()

//lance la fonction createChannel lorsqu'un post est effecté à /channels/createChannel
//router.post('/createChannel', createChannel)

router.get('/showVideo/:id', showVideo)
router.get('/getComment/:id_video', getComment)
router.post('/postComment', postComment)
router.get('/getVideos', getVideos)  // --> chercher toutes les videos
router.get('/getSubscriptionsVideos', getSubscriptionsVideos)



module.exports.routes = router
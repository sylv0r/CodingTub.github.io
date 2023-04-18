const { con } = require('../../../db/connection')

module.exports = async (req, res) => {
    result = await con.query2('SELECT videos.*, channels.name, channels.image_link FROM `videos` INNER JOIN `tags-videos` on videos.id = `tags-videos`.id_video INNER JOIN channels ON videos.channel_id = channels.id WHERE `tags-videos`.`id_tag` = ?;', [req.params.id_tag])
    console.log(result)

    res.json(result).status(200)
}
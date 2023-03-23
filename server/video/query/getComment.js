const { con } = require('../../db/connection')


    
module.exports = async (req, res) => {
  result = await con.query2('SELECT comment.id, comment.comment, users.pseudo FROM comment INNER JOIN users ON comment.id_user = users.id WHERE comment.id_video = ?;',[req.params.id_video])
  console.log(result)

  res.json(result).status(200)
}
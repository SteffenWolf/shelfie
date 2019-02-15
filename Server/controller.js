module.exports = {
    getAll: (req, res) => {
      const dbInstance = req.app.get('db');
      
      dbInstance.getAll().then((response) => {
        res.send(response)
      }).catch((err) => {
          res.sendStatus(500)
          console.log(err)
      })
    },

    getProduct: (req, res) => {
        const db = req.app.get('db')
        const id = +req.params.id
        db.getProduct(id).then((response) =>{
            if(response[0]) {
                res.status(200).send(response[0])
            } else {
                res.sendStatus(404)
            }
        })
    }



}
module.exports = {
    getAllProducts: (req, res) => {
        const db = req.app.get('db')

        db.getAllProducts().then(response => {
            res.status(200).send(response)
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
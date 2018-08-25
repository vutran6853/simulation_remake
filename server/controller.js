module.exports = {
  getAll: (req, res, next) => {
    //  console.log(req)
    const dbInstance = req.app.get('db');

    dbInstance.read_products()
    .then((products) => {
     console.log(products)
      res.status(200).send(products);
    })
    .catch((error) => {
      res.status(500).send('Opp! Something went wrong. Our Engineers have been informed');
    });  
  },

  addProduct: (req, res, next) => {
    // console.log(req)
    const db= req.app.get('db');

    const {products_name,products_price,imgurl} = req.body;

    db.add_products( [products_name,products_price,imgurl])
    .then((response) => {
      res.status(200).send('Item have been add');
    })
    .catch(error => res.status(500).send('Fail to add Item'))
  }

}
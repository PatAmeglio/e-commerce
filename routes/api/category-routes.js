const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening...'));
  });
});

router.get('/:id', (req, res) => {
  Category.findOne({
    where: {
      id: req.params.id,
    },
    include: [
      {
        model: Product,
      },
    ],
  }).then((categoryData) => {
    res.json(categoryData);
  });
});

router.post('/', (req, res) => {
  Category.create({
    category_name: req.body.category_name
  }).then((categoryData) => {
      res.json(categoryData);
    });
});

router.put('/:id', (req, res) => {
  Category.update(
    {
      category_name: req.body.category_name
    },
    {
      where: {
        id: req.params.id
      }
    })
    .then((categoryData) => {
      res.json(categoryData);
    });
});

router.delete('/:id', (req, res) => {
  Category.destroy({
    where: {
      id: req.params.id
    }
  }).then((categoryData) => {
    res.json(categoryData);
  });
});

module.exports = router;

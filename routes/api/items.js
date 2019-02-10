const express = require('express');
const router = express.Router();
const validateInput = require('../../validation/itemFormValidator');
const Item = require('../../models/Item');

// @route   GET api/items
// @desc    Get all items
// @access  Public
router.get('/',
  (req, res) => {
  const errors = {};

  Item.find()
    .then(items => {
      if (!items) {
        errors.noitem = 'There are no items';
        return res.status(404).json(errors);
      }

      res.json(items.filter(item => (
        item.active == true
      )));
    })
    .catch(err => res.status(404).json({ item: 'There are no items' }));
});

// @route   POST api/items
// @desc    Post a item
// @access  Public
router.post('/',
  (req, res) => {
  let body = req.body;
  const { errors, isValid } = validateInput(body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  let item = new Item({
    description: body.description,
    active: body.active
  });

  item.save((err, itemDB) => {
    if (err) {
      return res.status(400).json({
        ok: false,
        err
      });
    }

    res.json({
      ok: true,
      item: itemDB
    });
    console.log('New item posted!!!');
  })
});

// @route   PUT api/items/archive/:id
// @desc    Archive a item by changing state
// @access  Public
router.put('/archive/:id',
  (req, res) => {
  let id = req.params.id;
  let body = {
    active: false
  };
  Item.findByIdAndUpdate(id, body, (err, itemDB) => {
    if (err) {
      return res.status(400).json({
        ok: false,
        err
      });
    }

    res.json({
      ok: true,
      item: itemDB
    });
    console.log('Item archived!!!');
  })
});

module.exports = router;
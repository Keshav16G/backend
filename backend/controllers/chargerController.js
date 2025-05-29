const Charger = require('../models/Charger');

exports.getAll = async (req, res) => {
  const filters = req.query;
  const chargers = await Charger.find(filters);
  res.json(chargers);
};

exports.create = async (req, res) => {
  const newCharger = new Charger({ ...req.body, createdBy: req.user });
  const saved = await newCharger.save();
  res.json(saved);
};

exports.update = async (req, res) => {
  const updated = await Charger.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
};

exports.remove = async (req, res) => {
  await Charger.findByIdAndDelete(req.params.id);
  res.json({ message: 'Deleted successfully' });
};
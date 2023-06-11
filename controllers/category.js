const slugify = require("slugify");
const Category = require("../models/category");

exports.create = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name.trim()) {
      return res.status(400).json({ error: "Name is required" });
    }

    const existingCategory = await Category.findOne({ name });

    if (existingCategory) {
      return res.status(409).json({ error: "Category already exists" });
    }

    const category = await new Category({ name, slug: slugify(name) }).save();
    res.status(201).json(category);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.update = async (req, res) => {
  try {
    const { name } = req.body;
    const { categoryId } = req.params;

    const category = await Category.findByIdAndUpdate(
      categoryId,
      {
        name,
        slug: slugify(name),
      },
      { new: true }
    );

    res.status(200).json(category);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.remove = async (req, res) => {
  try {
    const removed = await Category.findByIdAndDelete(req.params.categoryId);
    res.json(removed);
  } catch (error) {
    return res.status(400).json({ error: error });
  }
};

exports.list = async (req, res) => {
  try {
    const all = await Category.find({});
    res.json(all);
  } catch (error) {
    res.json(error);
  }
};

exports.read = async (req, res) => {
  try {
    const category = await Category.findOne({ slug: req.params.slug });
    res.status(200).json(category);
  } catch (error) {
    res.json({ message: error });
  }
};

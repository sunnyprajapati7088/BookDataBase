const Books = require("../module/bookSchema");

exports.addBook = async(req,res)=>{
    try {
        const result = await Books.create(req.body);
        res.json(result)
    } catch(err) {
        console.error(err.message);
        res.json({message: err.message})
    }
}
exports.getAllBook = async (req, res) => {
  try {
    const results = await Books.find();
    res.json(results);
  } catch (err) {
    res.json({ message: err.message });
  }
};
exports.getBookByGenre = async (req, res) => {
  try {
    const results = await Books.find({ genre: req.params.genre });
    res.json(results);
  } catch (err) {
    res.json({ message: err.message });
  }
};
exports.deleteBookByTitle = async (req, res) => {
  try {
    const results = await Books.findOneAndDelete({ title: req.params.title });
    res.json(results);
  } catch (err) {
    res.json({ message: err.message });
  }
};
exports.updateBook = async (req, res) => {
    try {
            const { title, author, published, genre, price } = req.body;
            const results = await Books.findOneAndUpdate(
              { title: req.params.title },
              { title: title, author, published, genre, price },
              { required: true }
            );

    res.json(results);
  } catch (err) {
    res.json({ message: err.message });
  }
};

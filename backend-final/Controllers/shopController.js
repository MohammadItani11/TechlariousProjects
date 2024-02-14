const Song = require("../Models/Song");

module.exports.getSongs = async (req, res, next) => {
  try {
    const Songs = await Song.find();

    if (!Songs || Songs === undefined || Songs === null || Songs.length === 0) {
      return res.status(404).json({
        Exception: "",
        result: "No songs found, please try again later",
      });
    }

    return res.status(200).json({
        Exception: '',
        result: Songs
    })
  } catch (error) {
    //error handling
    console.log(error);
    return res.status(500).json({
      Exception: "Internal Server Error: couldn't login",
      result: null,
    });
  }
};

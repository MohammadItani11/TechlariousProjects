const Song = require("../Models/Song");

module.exports.addMusic = async (req,res,next) => {
    const artist= req.body.artist;
    const description = req.body.description;
    const name = req.body.name;
    const language = req.body.language;

    //create new song
    let newSong = new Song({
        name,
        description,
        language,
        artist
    });

    //song save
    await newSong.save()

    return res.status(201).json({
        Exception: '',
        result: 'Song created succesfully'
    })

}
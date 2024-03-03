const Song = require("../Models/Song");

module.exports.addMusic = async (req,res,next) => {
    //authentication
    if(!req.user){
        //not authenticated
        return res.status(401).json({Exception: "Unauthorized access" ,result:null})
    }

    const audio = req.file;
    if (!audio) {
        return res.status(400).json({Exception: "No song was uploaded", result:null});
    }

    const artist= req.body.artist;
    const description = req.body.description;
    const name = req.body.name;
    const language = req.body.language;

    //create new song
    let newSong = new Song({
        userId: req.user.id,
        name,
        description,
        language,
        artist,
        songPath: audio.path
    });

    //song save
    await newSong.save()

    return res.status(201).json({
        Exception: '',
        result: 'Song created succesfully'
    })

}
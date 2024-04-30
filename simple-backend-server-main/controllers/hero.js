const Hero = require("../models/heroSchema");
const { uploadImage, deleteImage } = require("./heroHelpers");
const heroSchema = require("./heroValSchema")





const uploadHero = async (req, res) => {
    const { description, punchline } = req.body;
    // Convert the buffer to base6
    const { error, value } = heroSchema.validate({ description, punchline })


    if (error) {
        return res.status(400).json({
            message: error.details[0].message
        })
    }





    let imageBase64 = req.file ? Buffer.from(req.file.buffer).toString("base64") : null;
    // console.log(imageBase64)


    if (imageBase64 === null) {
        return res.status(400).json({
            message: "Image not uploaded null image"
        })
    }

    imageBase64 = "data:" + req.file.mimetype + ";base64," + imageBase64;

    let imageUrl;
    try {

        imageUrl = await uploadImage(imageBase64)

        console.log(imageUrl)

        if (!imageUrl) {
            return res.status(400).json({
                message: "Image not uploaded upload image"
            })
        }
    } catch (error) {
        console.log(error)

        return res.status(400).json({
            message: "internal server error upload catch"
        })

    }
    try {


        const hero = new Hero({ description: value.description, punchLine: value.punchline, heroImage: imageUrl })
        await hero.save()

        if (!hero) {
            return res.status(400).json({
                message: "internal server error not uplaod"
            })
        }
        return res.status(200).json({
            message: "Hero created successfully",
            data: hero
        })
    } catch (error) {

        console.log(error)
        return res.status(400).json({

            message: "internal server error main catch"
        })
    }


}



const getHeros = async (req, res) => {



    try {


        const heros = await Hero.find()
        if (!heros) {
            return res.status(400).json({
                message: "heros not found"
            })

        }
        return res.status(200).json(
            heros)
    } catch (error) {


        return res.status(400).json({
            message: "internal server error"
        })


    }


}



const getHeroById = async (req, res) => {

    const { id } = req.query;
    try {
        const hero = await Hero.findById(id);
        if (!hero) {
            return res.status(400).json({
                message: "hero not found"
            })
        }
        return res.status(200).json(hero)
    } catch (error) {
        return res.status(400).json({
            message: "internal server error"
        })
    }
}


const updateHero = async (req, res) => {
    const { id } = req.query;
    const { description, punchline } = req.body;
    const { error, value } = heroSchema.validate({ description, punchline })
    if (error) {
        return res.status(400).json({
            message: error.details[0].message
        })
    }
    try {
        const hero = await Hero.findByIdAndUpdate(id, {description:value.description,punchLine:value.punchline}, { new: true })
        if (!hero) {
            return res.status(400).json({
                message: "hero not found"
            })
        }
        return res.status(200).json(hero)
    }
    catch (error) {
        return res.status(400).json({
            message: "internal server error"
        })
    }
}



const deleteHero = async (req, res) => {
    const { id } = req.query;
    try {
        const response = await Hero.findById(id)
        if (!response) {
            return res.status(400).json({
                message: "hero not found"
            })
        }
        const deleteImageReponse = await deleteImage(response.heroImage)
        console.log(deleteImageReponse)
        if (!deleteImageReponse) {
            return res.status(400).json({
                message: "hero image not deleted please try again"
            })
        }
        const hero = await Hero.findByIdAndDelete(id);
        if (!hero) {
            return res.status(400).json({
                message: "hero not found"
            })
        }
        return res.status(200).json(hero)
    } catch (error) {
        return res.status(400).json({
            message: "internal server error"
        })
    }
}




module.exports = { uploadHero, getHeros, getHeroById, updateHero, deleteHero }
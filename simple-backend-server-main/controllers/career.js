const Career = require("../models/careerSchema")

const careerSchema = require("./careerValSchema")

const createCareer = async (req, res) => {
    const { error, value } = careerSchema.validate(req.body)
    if (error) {
        return res.status(400).send(error.details[0].message)
    }
    const career = new Career(value)
    try {
        await career.save()
        res.status(201).json({
            message: "career created successfully",
            data: career
        })
    }
    catch (error) {
        console.log(error)
        return res.status(400).json({
            error: "internal server error",
        })
    }


}



const getCareers = async (req, res) => {
    try {
        const careers = await Career.find()
        if (!careers) {
            return res.status(400).json({ message: "no careers found" })
        }
        console.log(careers)
        return res.status(200).json(careers)
    } catch (error) {
        console.log(error)
        return res.status(400).json({ error: "internal server error" })
    }


}



const getCareerById = async (req, res) => {
    const { id } = req.query
    console.log(id)
    try {
        const career = await Career.findById(id)
        if (!career) {
            return res.status(400).json({ message: "no career found" })
        }
        console.log(career)
        return res.status(200).json(career)
    } catch (error) {
        console.log(error)
        return res.status(400).json({ error: "internal server error" })
    }
}


const updateCareer = async (req, res) => {

    const { id } = req.query
    const { heading, description } = req.body;
    try {
        const career = await Career.findByIdAndUpdate(id, { heading, description }, { new: true });
        if (!career) {
            return res.status(400).json({ message: "no career found" })
        }
        console.log(career)
        return res.status(200).json(career)
    } catch (error) {
        console.log(error)
        return res.status(400).json({ error: "internal server error" })
    }
}


const deleteCareer = async (req, res) => {


    const { id } = req.query
    try {
        const career = await Career.findByIdAndDelete(id)
        if (!career) {
            return res.status(400).json({ message: "no career found" })
        }
        console.log(career)
        return res.status(200).json(career)
    }
    catch (error) {
        console.log(error)
        return res.status(400).json({ error: "internal server error" })
    }

}


module.exports = {
    createCareer,
    getCareers,
    getCareerById,
    updateCareer,
    deleteCareer
}
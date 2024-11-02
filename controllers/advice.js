const { Advice } = require("../models");
const ApiError = require("../utils/apiError");

const getAllAdvice = async (req, res, next) => {
    const allAdvice = await Advice.findAll();
    res.status(200).json({
        status: "Success",
        message: "All Advice Successfully Retrieved",
        data: allAdvice
    });
};
const createAdvice = async (req, res, next) => {
  try {
    const { name, solia_age, job, workplace } = req.body;
    const data = {
      name,
      solia_age,
      job,
      workplace,
    };

    const newAdvice = await Advice.create(data);

    res.status(201).json({
        status : "Success",
        message: "Advice created successfully",
        data: newAdvice
    })
  } catch (err) {
    return next (new ApiError(err.message, 400));
  }
};
const updateAdvice = async (req, res, next) => {
    try {
        const id = req.params.id;
        const {name, solia_age, job, workplace} = req.body;

        const findAdvice = await Advice.findOne ({
            where:{
                id,
            },
        });

        res.status(200).json({
            status : "Success",
            message: "Advice updated successfully",
            data: {
                name: name,
                solia_age: solia_age,
                job: job,
                workplace:workplace
            }
        })
    } catch (err) {
        return next(new ApiError(err.message, 400));
    }
};
const deleteAdvice = async (req, res, next) => {
    try {
        const id = req.params.id;
        const findAdvice = await Advice.findByPk(id);

        if (!findAdvice) {
            return next (new ApiError (`Advice with id ${id} not found`));
        }

        await Advice.destry ({
            where:{
                id,
            },
        });
    } catch (err) {
        return next ( new ApiError(err.message, 400));
    }
};
module.exports = {
    getAllAdvice,
    createAdvice,
    updateAdvice,
    deleteAdvice
}
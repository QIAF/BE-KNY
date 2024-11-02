const { Solia } = require("../models");
const ApiError = require("../utils/apiError");
const handleUploadImage = require("../utils/handelUpload");

const getAllSolia = async (req, res, next) => {
    try {
        const allSolia = await Solia.findAll();
        res.status(200).json({
            status: "Success",
            message: "All Solia Successfully Retrieved",
            data: allSolia
        })
    } catch (err) {
        return next (new ApiError(err.message, 400))
    }
};
const createSolia = async (req, res, next) => {
  try {
    const { name, description } = req.body;
    const files = req.files;
    console.log(files)
    if (!files || !files.solia_picture) {
      return next(new ApiError("No file uploaded", 422));
    };

    const soliaPicture = await handleUploadImage (files.solia_picture);
    console.log(soliaPicture)
    const data = {
        name,
        description,
        solia_picture:soliaPicture.imagesUrl
    }
    console.log("Dataaa", data)
    const newSolia = await Solia.create(data);
    console.log(newSolia)

    res.status(201).json({
        status: "Success",
        message: "Solia created successfully",
        data: newSolia,
    })
  } catch (err) {
    return next (new ApiError(err.message, 400))
  }
};
const updateSolia = async (req, res, next) => {
    try {
        const id = req.params.id;
        const {name, description} = req.body;
        const files = req.files;
        const image = files.solia_picture;

        const findSolia = await Solia.findOne ({
            where: {
                id,
            },
        });
        console.log (findSolia);
        if (!findSolia) {
            return next (new ApiError(`Solia with id ${id} is not found`, 404));
        }
        const soliaPicture = await handleUploadImage(image);
        await Solia.update({
            name, description, solia_picture:soliaPicture.imagesUrl,
        },{
            where: {
                id,
            },
        });
        res.status(200).json({
            status: "Success",
            message: "Solia successfully updated",
            data:{
                name:name,
                description:description,
                solia_picture:soliaPicture.imagesUrl,
            }
        })
    } catch (err) {
        return next(new ApiError(err.message, 400));
    }
};
const deleteSolia = async (req, res, next) => {
    try {
        const id = req.params.id
        const findSolia = await Solia.findByPk(id);
        if (!findSolia) {
            return next (new ApiError (`Solia with id ${id} not found`));
        }
        await Solia.destroy({
            where:{
                id,
            },
        });
        res.status(200).json({
            status: "Success",
            message: "Solia Successfully deleted"
        })
    } catch (err) {
        return next ( new ApiError(err.message, 400));
    }
};
module.exports = {
    getAllSolia,
    createSolia,
    updateSolia,
    deleteSolia,
}
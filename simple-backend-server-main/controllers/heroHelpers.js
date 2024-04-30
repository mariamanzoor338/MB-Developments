const cloudinary = require("cloudinary").v2
require('dotenv').config()
cloudinary.config({
    cloud_name: 'dejumkjlj',
    api_key: '416783695699952',
    api_secret: process.env.CLOUDINARY_API_SECRET,
});



async function uploadImage(imageBuffer) {
    try {
        const result = await cloudinary.uploader.upload(imageBuffer, {
            folder: 'data_dir', // Optional: Set the folder where the image will be stored
            public_id: `image-${generateUniqueString()}`, // Optional: Set a unique public ID for the image
            overwrite: true, // Optional: Allow overwriting if a file with the same name already exists
            resource_type: "auto"
        });

        // Return the Cloudinary image URL
        return result.secure_url;
    } catch (error) {
        console.error('Error uploading to Cloudinary:', error);
        throw error;
    }
}


const deleteImage = async (ImageUrl) => {

    try {
        const result = await cloudinary.uploader.destroy(getPublicIdFromUrl(ImageUrl), { resource_type: "image" });
        return result.result === "ok" ? true : false;
    } catch (error) {
        throw error
    }
}






const getPublicIdFromUrl = (imageUrl) => {
    const name = imageUrl.split("/").pop().split(".")[0]
    return `data_dir/${name}`
}

function generateUniqueString() {
    const timestamp = new Date().getTime();
    const randomPart = Math.random().toString(36).substring(2, 8); // Use a random string
    return `${timestamp}-${randomPart}`;
}

module.exports = { uploadImage, deleteImage }
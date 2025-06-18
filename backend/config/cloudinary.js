import {v2 as cloudinary} from "cloudinary"
const connectCloudinary = async () => {
    cloudinary.config({
        cloud_name:"ds05t0bd0",
        api_key:"763961537585924",
        api_secret:"Re8IST4AjmTm8zLpJwGbK8VFXcs" 
    })
}
export default connectCloudinary
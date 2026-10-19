import axios from "axios";

export const uploadImageToCloudinary = async (file) => {

  const formData = new FormData();

  formData.append("file", file);

  formData.append(
    "upload_preset",
    "Blog-Hub"
  );

  const response = await axios.post(
    "https://api.cloudinary.com/v1_1/jblb5zoo/image/upload", formData
  );
  
console.log(response);

  return response.data.secure_url;
};
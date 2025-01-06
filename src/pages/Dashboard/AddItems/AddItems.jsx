import { useForm } from "react-hook-form";
import SectionTitle from "../../Home/Category/SectionTitle/SectionTitle";
import { FaUtensils } from "react-icons/fa";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";


const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`
const AddItems = () => {
  const { register, handleSubmit } = useForm();
  const axiosPublic = useAxiosPublic()
  const axiosSecure = useAxiosSecure()

  const onSubmit = async(data) => {
    console.log(data);
    // image upload to imabb and then get url
    const imageFile = {image: data.image[0]}
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
        headers: {
            "Content-Type" : "multipart/form-data"
        }
    })

    if(res.data.success){
        //now send the menu item data to the server with the img
        const menuItem = {
            name:data.name,
            category:data.category,
            price:parseFloat(data.price),
            recipe:data.recipe,
            image:res.data.data.display_url
        }
        //
        const menuRes = await axiosSecure.post('/menu', menuItem)
        console.log(menuRes.data)
    }
    console.log(res.data)
  };
  return (
    <div>
      <SectionTitle
        heading="Add an Item"
        subHeading="What's new"
      ></SectionTitle>

      <form onSubmit={handleSubmit(onSubmit)}>
        <label className="form-control w-full my-6">
          <div className="label">
            <span className="label-text">Recipe Name*</span>
          </div>
          <input
            type="text"
            placeholder="Recipe Name"
            {...register("name", {required: true})}
            required
            className="input input-bordered w-full"
          />
        </label>

        <div className="flex gap-6">
          {/* category */}
          <label className="form-control w-full my-6">
            <div className="label">
              <span className="label-text">Category*</span>
            </div>
            <select 
            defaultValue="default"
              {...register("category", {required: true})}
              className="select select-bordered w-full"
            >
              <option disabled value="default">
                Select a category
              </option>
              <option value="salad">Salad</option>
              <option value="pizza">Pizza</option>
              <option value="soup">Soup</option>
              <option value="dessert">Dessert</option>
              <option value="drink">Drink</option>
            </select>
          </label>

          {/* price  */}
          <label className="form-control w-full my-6">
            <div className="label">
              <span className="label-text">Price*</span>
            </div>
            <input
              type="number"
              placeholder="Price"
              {...register("price", {required: true})}
              className="input input-bordered w-full"
            />
          </label>
        </div>
        {/* recipe detail  */}
        <label className="form-control">
          <div className="label">
            <span className="label-text">Recipe Details</span>
          </div>
          <textarea
          {...register("recipe", {required: true})}
            className="textarea textarea-bordered h-24"
            placeholder="Recipe Details"
          ></textarea>
        </label>

        <div className="form-control w-full my-6">
        <input {...register("image", {required: true})} type="file" className="file-input w- border-none max-w-xs" />
        </div>

        <button className="btn">Add Items <FaUtensils className="ml-2"></FaUtensils></button>
      </form>
    </div>
  );
};

export default AddItems;

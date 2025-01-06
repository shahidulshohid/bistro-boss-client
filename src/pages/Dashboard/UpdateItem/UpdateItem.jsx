import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../Home/Category/SectionTitle/SectionTitle";

const UpdateItem = () => {
    const item = useLoaderData()
    console.log(item)
    return (
        <div>
           <SectionTitle heading="Update an Item" subHeading="Refresh Info"></SectionTitle> 
        </div>
    );
};

export default UpdateItem;
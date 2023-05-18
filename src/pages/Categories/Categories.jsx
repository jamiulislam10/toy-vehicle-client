import { useLoaderData } from "react-router-dom";

const Categories = () => {
    const service = useLoaderData();
    const{title,}=service
    return (
        <div>
            <h1>holor</h1>
            <h1>title{title}</h1>
        </div>
    );
};

export default Categories;
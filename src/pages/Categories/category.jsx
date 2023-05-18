// import { useEffect, useState } from "react";
// import Categories from "./Categories";

// const category = () => {
//     const [services, setServices] = useState([]);
//     useEffect(() => {
//         fetch('http://localhost:5000/services')
//             .then(res => res.json())
//             .then(data => setServices(data))
//     }, [])
//     return (
//         <div>
//             {
//                 services.map(servic=> <Categories
//                 key={servic._id}
//                 servic={servic}
//                 ></Categories>)
//             }
//         </div>
//     );
// };

// export default category;
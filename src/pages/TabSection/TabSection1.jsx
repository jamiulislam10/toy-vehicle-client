
const TabSection1 = ({toy}) => {
    
                const { name, img, price, rating,  } = toy
    return (
      
                <div>
                    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                        <div className="gap-8 sm:max-w-sm sm:mx-auto lg:max-w-96">
                            <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
                                <img
                                    src={img}
                                    className=" w-full h-80"
                                    alt=""
                                />
                                <div className="p-5 border border-t-0">
                                    <h1
                                        aria-label="Category"
                                        title="Visit the East"
                                        className="inline-block mb-3 text-2xl font-bold leading-7 transition-colors duration-200 hover:text-deep-purple-accent-700"
                                    >
                                       Name:  {name} <br />
                                       Price: ${price} <br />
                                      Rating:   {rating} <br />
                                    </h1>
                                    <button className="btn btn-primary">View details</button>
                                
                                </div>
                            </div>
        
        
                        </div>
                    </div>
                </div>
      

    );
};

export default TabSection1;
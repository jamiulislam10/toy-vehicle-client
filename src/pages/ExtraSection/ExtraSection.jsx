
const ExtraSection = () => {
    return (
        
              <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                  <div>
                    <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                    Toy Gallery
                    </p>
                  </div>
                  <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                    <span className="relative inline-block">
                    
                      <span className="relative">The</span>
                    </span>{' '}
                   suitable Gallery in my toy
                  </h2>
                  <p className="text-base text-gray-700 md:text-lg">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                    accusantium doloremque rem aperiam, eaque ipsa quae.
                  </p>
                </div>
                <div className="grid max-w-screen-lg gap-8 row-gap-5 mb-8 sm:grid-cols-2 lg:grid-cols-4 sm:mx-auto">
                  <img
                    className="object-cover w-full h-56 rounded shadow-lg"
                    src="https://i.ibb.co/J5TWjN2/colorful-car-toys.jpg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                    alt=""
                  />
                  <img
                    className="object-cover w-full h-56 rounded shadow-lg"
                    src="https://i.ibb.co/5k8gCBg/toy-red-car-with-pinecone-top.jpg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                    alt=""
                  />
                  <img
                    className="object-cover w-full h-56 rounded shadow-lg"
                    src="https://i.ibb.co/87DVFtC/vintage-miniature-car-fake-landscape-2.jpg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"
                    alt=""
                  />
                  <img
                    className="object-cover w-full h-56 rounded shadow-lg"
                    src="https://i.ibb.co/LvdtYHX/little-toy-truck-carrying-christmas-tree.jpg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                    alt=""
                  />
                </div>
                <div className="flex items-center sm:justify-center">
              
                  <a
                    href="/"
                    aria-label=""
                    className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                  >
                   View Gallery
                  </a>
                </div>
              </div>
            
    );
};

export default ExtraSection;
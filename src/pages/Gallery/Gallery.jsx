
const Gallery = () => {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <div>
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
              Brand new toy
            </p>
          </div>
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
              >
                <defs>
                  <pattern
                    id="2feffae2-9edf-414e-ab8c-f0e6396a0fc1"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                </defs>
                <rect
                  fill="url(#2feffae2-9edf-414e-ab8c-f0e6396a0fc1)"
                  width="52"
                  height="24"
                />
              </svg>
              <span className="relative">The</span>
            </span>{' '}
            quick,Toy set has realistic detailed compartments. 
          </h2>
          <p className="text-base text-gray-700 md:text-lg">
          The toy car is made of high quality plastic and alloy that are 100% Safe & Non-Toxic, BPA and Lead-Free.
          </p>
        </div>
        <div className="grid max-w-screen-lg gap-8 lg:grid-cols-2 sm:mx-auto">
          <div className="grid grid-cols-2 gap-5">
            <img
              className="object-cover w-full h-56 col-span-2 rounded shadow-lg"
              src="https://i.ibb.co/HBFFJsD/red-car-with-christmas-ball-top.jpg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              alt=""
            />
            <img
              className="object-cover w-full h-48 rounded shadow-lg"
              src="https://i.ibb.co/2tFpbbK/closeup-small-toy-cars-table-with-small-christmas-trees-background.jpg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              alt=""
            />
            <img
              className="object-cover w-full h-48 rounded shadow-lg"
              src="https://i.ibb.co/qWvtGMd/small-red-car-toy-kid-child-playing-with-it.jpg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              alt=""
            />
          </div>
          <div className="flex flex-col justify-center">
            <div className="pb-4 mb-4 border-b">
              <h6 className="mb-2 font-semibold leading-5">
              SLIDING FORWARD & CUTE MINI SIZE
              </h6>
              <p className="text-sm text-gray-900">
              NO batteries required, just push, these little toy cars go a good distance forward, perfect to stimulate baby’s curiosity,
              </p>
            </div>
            <div className="pb-4 mb-4 border-b">
              <h6 className="mb-2 font-semibold leading-5">
              DEVELOP EARLY INTELLIGENCE FOR CHILDREN 
              </h6>
              <p className="text-sm text-gray-900">
              It can stimulate kids imagination and encourage hand-eye interaction. These toys can also be added to Easter baskets or given as prizes for an Easter egg hunt.
              </p>
            </div>
            <div>
              <h6 className="mb-2 font-semibold leading-5">
              Tank Truck, Asphalt Car and Excavator. 
              </h6>
              <p className="text-sm text-gray-900">
              An amazing funny time to playing a different role to drive different car with friends for kids.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Gallery;
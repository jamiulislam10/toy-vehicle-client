
const Blog = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-5 lg:grid-cols-2 sm:max-w-sm sm:mx-auto lg:max-w-full">
        <div className="overflow-hidden transition-shadow duration-300 bg-white rounded">
          <a href="/" aria-label="Article">
            <img
              src="https://i.ibb.co/FxZrKtW/supply-chain-representation-with-yellow-truck.jpg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
              className="object-cover w-full h-64 rounded"
              alt=""
            />
          </a>
          <div className="py-5">
            <p className="mb-2 text-xs font-semibold text-gray-600 uppercase">
              13 Jul 2020
            </p>
            <a
              href="/"
              aria-label="Article"
              className="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
            >
              <p className="text-2xl font-bold leading-5">What is an access token and refresh token? How do they work and where should we store them on the client-side?</p>
            </a>
            <p className="mb-4 text-gray-700">

              An access token and a refresh token are commonly used in authentication and authorization systems, particularly in web applications or APIs. They serve different purposes and have different lifetimes.
            </p>
            <div className="flex space-x-4">
              <a
                href="/"
                aria-label="Likes"
                className="flex items-start text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700 group"
              >
                <div className="mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5 text-gray-600 transition-colors duration-200 group-hover:text-deep-purple-accent-700"
                  >
                    <polyline
                      points="6 23 1 23 1 12 6 12"
                      fill="none"
                      strokeMiterlimit="10"
                    />
                    <path
                      d="M6,12,9,1H9a3,3,0,0,1,3,3v6h7.5a3,3,0,0,1,2.965,3.456l-1.077,7A3,3,0,0,1,18.426,23H6Z"
                      fill="none"
                      stroke="currentColor"
                      strokeMiterlimit="10"
                    />
                  </svg>
                </div>
                <p className="font-semibold">7.4K</p>
              </a>
              <a
                href="/"
                aria-label="Comments"
                className="flex items-start text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700 group"
              >
                <div className="mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="w-5 h-5 text-gray-600 transition-colors duration-200 group-hover:text-deep-purple-accent-700"
                  >
                    <polyline
                      points="23 5 23 18 19 18 19 22 13 18 12 18"
                      fill="none"
                      strokeMiterlimit="10"
                    />
                    <polygon
                      points="19 2 1 2 1 14 5 14 5 19 12 14 19 14 19 2"
                      fill="none"
                      stroke="currentColor"
                      strokeMiterlimit="10"
                    />
                  </svg>
                </div>
                <p className="font-semibold">81</p>
              </a>
            </div>
          </div>
        </div>
        <div className="overflow-hidden transition-shadow duration-300 bg-white rounded">
          <a href="/" aria-label="Article">
            <img
              src="https://i.ibb.co/rvnh91P/vintage-miniature-car-fake-landscape.jpg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
              className="object-cover w-full h-64 rounded"
              alt=""
            />
          </a>
          <div className="py-5">
            <p className="mb-2 text-xs font-semibold text-gray-600 uppercase">
              2 July 2020
            </p>
            <a
              href="/"
              aria-label="Article"
              className="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
            >
              <p className="text-2xl font-bold leading-5">Compare SQL and NoSQL databases?
</p>
            </a>
            <p className="mb-4 text-gray-700">
            SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.
            </p>
            <div className="flex space-x-4">
              <a
                href="/"
                aria-label="Likes"
                className="flex items-start text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700 group"
              >
                <div className="mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5 text-gray-600 transition-colors duration-200 group-hover:text-deep-purple-accent-700"
                  >
                    <polyline
                      points="6 23 1 23 1 12 6 12"
                      fill="none"
                      strokeMiterlimit="10"
                    />
                    <path
                      d="M6,12,9,1H9a3,3,0,0,1,3,3v6h7.5a3,3,0,0,1,2.965,3.456l-1.077,7A3,3,0,0,1,18.426,23H6Z"
                      fill="none"
                      stroke="currentColor"
                      strokeMiterlimit="10"
                    />
                  </svg>
                </div>
                <p className="font-semibold">7.4K</p>
              </a>
              <a
                href="/"
                aria-label="Comments"
                className="flex items-start text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700 group"
              >
                <div className="mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="w-5 h-5 text-gray-600 transition-colors duration-200 group-hover:text-deep-purple-accent-700"
                  >
                    <polyline
                      points="23 5 23 18 19 18 19 22 13 18 12 18"
                      fill="none"
                      strokeMiterlimit="10"
                    />
                    <polygon
                      points="19 2 1 2 1 14 5 14 5 19 12 14 19 14 19 2"
                      fill="none"
                      stroke="currentColor"
                      strokeMiterlimit="10"
                    />
                  </svg>
                </div>
                <p className="font-semibold">81</p>
              </a>
            </div>
          </div>
        </div>
        <div className="overflow-hidden transition-shadow duration-300 bg-white rounded">
          <a href="/" aria-label="Article">
            <img
              src="https://images.pexels.com/photos/1576937/pexels-photo-1576937.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"
              className="object-cover w-full h-64 rounded"
              alt=""
            />
          </a>
          <div className="py-5">
            <p className="mb-2 text-xs font-semibold text-gray-600 uppercase">
              4 Nov 2020
            </p>
            <a
              href="/"
              aria-label="Article"
              className="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
            >
              <p className="text-2xl font-bold leading-5">What is express js? What is Nest JS?</p>
            </a>
            <p className="mb-4 text-gray-700">
            js and Express. js are two different frameworks that are used to build different sets of applications. While ExpressJs is a Node. js-based web application framework to build APIs and server-side applications, NextJs on the other hand is a react-based framework used for creating static websites and SEO optimizations.
            </p>
            <div className="flex space-x-4">
              <a
                href="/"
                aria-label="Likes"
                className="flex items-start text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700 group"
              >
                <div className="mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5 text-gray-600 transition-colors duration-200 group-hover:text-deep-purple-accent-700"
                  >
                    <polyline
                      points="6 23 1 23 1 12 6 12"
                      fill="none"
                      strokeMiterlimit="10"
                    />
                    <path
                      d="M6,12,9,1H9a3,3,0,0,1,3,3v6h7.5a3,3,0,0,1,2.965,3.456l-1.077,7A3,3,0,0,1,18.426,23H6Z"
                      fill="none"
                      stroke="currentColor"
                      strokeMiterlimit="10"
                    />
                  </svg>
                </div>
                <p className="font-semibold">7.4K</p>
              </a>
              <a
                href="/"
                aria-label="Comments"
                className="flex items-start text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700 group"
              >
                <div className="mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="w-5 h-5 text-gray-600 transition-colors duration-200 group-hover:text-deep-purple-accent-700"
                  >
                    <polyline
                      points="23 5 23 18 19 18 19 22 13 18 12 18"
                      fill="none"
                      strokeMiterlimit="10"
                    />
                    <polygon
                      points="19 2 1 2 1 14 5 14 5 19 12 14 19 14 19 2"
                      fill="none"
                      stroke="currentColor"
                      strokeMiterlimit="10"
                    />
                  </svg>
                </div>
                <p className="font-semibold">81</p>
              </a>
            </div>
          </div>
        </div>
        <div className="overflow-hidden transition-shadow duration-300 bg-white rounded">
          <a href="https://www.facebook.com/" aria-label="Article">
            <img
              src="https://i.ibb.co/HBFFJsD/red-car-with-christmas-ball-top.jpg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              className="object-cover w-full h-64 rounded"
              alt=""
            />
          </a>
          <div className="py-5">
            <p className="mb-2 text-xs font-semibold text-gray-600 uppercase">
              28 Dec 2020
            </p>
            <a
              href="/"
              aria-label="Article"
              className="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
            >
              <p className="text-2xl font-bold leading-5">
              What is MongoDB aggregate and how does it work?
              </p>
            </a>
            <p className="mb-4 text-gray-700">
            What is Aggregation in MongoDB? Aggregation is a way of processing a large number of documents in a collection by means of passing them through different stages. The stages make up what is known as a pipeline. The stages in a pipeline can filter, sort, group, reshape and modify documents that pass through the pipeline.
            </p>
            <div className="flex space-x-4">
              <a
                href="/"
                aria-label="Likes"
                className="flex items-start text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700 group"
              >
                <div className="mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5 text-gray-600 transition-colors duration-200 group-hover:text-deep-purple-accent-700"
                  >
                    <polyline
                      points="6 23 1 23 1 12 6 12"
                      fill="none"
                      strokeMiterlimit="10"
                    />
                    <path
                      d="M6,12,9,1H9a3,3,0,0,1,3,3v6h7.5a3,3,0,0,1,2.965,3.456l-1.077,7A3,3,0,0,1,18.426,23H6Z"
                      fill="none"
                      stroke="currentColor"
                      strokeMiterlimit="10"
                    />
                  </svg>
                </div>
                <p className="font-semibold">7.4K</p>
              </a>
              <a
                href="/"
                aria-label="Comments"
                className="flex items-start text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700 group"
              >
                <div className="mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="w-5 h-5 text-gray-600 transition-colors duration-200 group-hover:text-deep-purple-accent-700"
                  >
                    <polyline
                      points="23 5 23 18 19 18 19 22 13 18 12 18"
                      fill="none"
                      strokeMiterlimit="10"
                    />
                    <polygon
                      points="19 2 1 2 1 14 5 14 5 19 12 14 19 14 19 2"
                      fill="none"
                      stroke="currentColor"
                      strokeMiterlimit="10"
                    />
                  </svg>
                </div>
                <p className="font-semibold">81</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
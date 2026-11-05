function Hello() {
  return (
    <>
      <h1>Learning React is Easy</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis,
        sunt.
      </p>
    </>
  );
}
function Product({ name, image, price, rating, review }) {
  return (
    <div className="max-w-sm rounded-2xl bg-white p-5 shadow-md border border-gray-100 transition-all hover:shadow-lg">
      <div className="overflow-hidden rounded-xl bg-gray-100 aspect-square">
        <img
          src={image || "https://via.placeholder.com/300"}
          alt={name}
          className="h-full w-full object-cover object-center transition-transform duration-300 hover:scale-105"
        />
      </div>

      <div className="mt-4 space-y-2">
        <h2 className="text-lg font-semibold text-gray-900 line-clamp-1">
          {name}
        </h2>

        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-gray-900">₹{price}</span>
          <span className="inline-flex items-center rounded-full bg-amber-50 px-2.5 py-1 text-xs font-medium text-amber-800">
            ★ {rating}
          </span>
        </div>

        <p className="text-sm text-gray-500 italic line-clamp-2">
          &ldquo;{review}&rdquo;
        </p>
      </div>

      <button className="mt-4 w-full rounded-xl bg-indigo-600 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-colors">
        Add to Cart
      </button>
    </div>
  );
}

function App() {
  const item = {
    name: "Mobile Phone",
    price: 25000,
    rating: 4.6,
    review: 1500,
  };
  return (
    <>
      <Product {...item} />
      <Hello />
      <h1>Hello React</h1>
      <Product />
      <h2> I am a component</h2>
      <Hello />
    </>
  );
}

export default App;

export default function Empty() {
    return (
      <>
       <div className="p-1 m-4">
<div className=" w-full flex flex-col justify-center items-center ">
	<h1 className="text-9xl font-extrabold text-white tracking-widest">404</h1>
	<div className="bg-blue-600 px-2 text-sm rounded rotate-12 absolute">
		404
	</div>
	<button className="mt-5">
      <a
        className="relative inline-block text-sm font-medium text-white group active:text-blue-500 focus:outline-none focus:ring"
      >
        <span
          className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-blue-600 group-hover:translate-y-0 group-hover:translate-x-0"
        ></span>

        <span className="relative block px-8 py-3 bg-green-600 border border-current">
        Empty
        </span>
      </a>
    </button>
</div>

      </div>
        
      </>
    );
  }
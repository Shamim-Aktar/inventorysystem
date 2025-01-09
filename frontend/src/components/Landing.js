import React from "react";

const Landing = () => {
  const bgImage =
    "https://images.pexels.com/photos/4481258/pexels-photo-4481258.jpeg?auto=compress&cs=tinysrgb&w=600";
 return(
  <div className="min-h-screen bg-gray-100 flex flex-col">
    <header className="bg-white shadow">
      <div className=" max-auto py-3 px-6 sm:px-6 flex items-center justify-between lg:px-6 flex items-center justify-between">
        <h1 className="text=3xl font-bold text-gray-800">inventory Mangement System</h1>
        <button className="px-5 bg-orange-700 p-2 text-slate-700 hover;text-slate-200 rounded-2xl">
          <a href="/login">Login</a>
        </button>
      </div>
    </header>

    <main className="flex-grow" style={{background:`url(${bgImage})`}}>
      <div className='max-w-7xl mx-auto py-6 sm:px-6 lg:px-8'>
        <div className="px-4 py-6 sm:px-0">
        <div className='border-4 border-dashed border-gray-200 rounded-lg h-96 flex items-center justify-center'>
        <h3 className="text-2xl font-semibold text-gray-200">
          {""}
          Warehouse department{""}
          </h3>
        </div>
        </div>
      </div>
   
    </main>
    <footer className="bg-white shadow mt-8">
      <div className="max w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
        <p className="text-center text-graay-500">
          &copy; 2024 Inventory Management system. all right Reserve
        </p>
      </div>
    </footer>

  </div>
 )
};

export default Landing;

function App() {
  return (
    <>
      <main className="max-w-2xl flex mx-auto px-4 gap-11 justify-center ">
        <div className="py-8 flex flex-col justify-center ">
       
          <h1 className="text-4xl font-bold uppercase mb-8">
            <span className="text-emerald-500 text-5xl">
              Generate&nbsp;Video
            </span>
            <br /> with the power of ai
          </h1>
          <p className="text-2xl mb-5"></p>
          <form action="" className="grid  gap-2">
            <input
              className="w-full bg-transparent px-4 py-2 border-2 rounded-full text-white grow"
              type="url"
              placeholder="https://..."
            />
            <button
              className="w-full bg-emerald-500 text-white  rounded-full  px-4 py-2 font-bold"
              type="submit">
              Create Video
            </button>
          </form>
        </div>
        <div className="py-8">
          <div className=" bg-gray-500 w-[240px] h-[380px] rounded-2xl p-8">
            video here 
          </div>
        </div>
      </main>
    </>
  );
}

export default App;

const Index = () => {
  return (
    <div className="px-20 py-10 bg-[rgba(255,255,255,0.3)] rounded-lg flex justify-center items-center flex-col gap-8">
      <h1>URL Shortner</h1>
      <div className="w-[40rem] flex gap-12 justify-evenly items-end">
        <div className="min-w-96 w-fit flex flex-col">
          <label htmlFor="longUrl" className="text-lg font-medium ps-2">
            Paste your url
          </label>
          <input
            type="text"
            id="longUrl"
            placeholder="Paste your long URL here.."
            className="rounded-lg p-1.5 px-2.5 text-lg transition-all outline-0 focus:outline-0 font-medium border border-transparent min-w-96 w-fit focus:border-[#252525] me-8"
          />
        </div>
        <button className="bg-green-700 px-4 py-1.5 rounded-lg text-green-50 font-medium text-lg hover:bg-green-600 active:bg-green-500 transition-all">
          Shorten URL
        </button>
      </div>

      <div className="w-[40rem] flex gap-12 justify-evenly items-end">
        <div className="min-w-96 w-fit flex flex-col">
          <label htmlFor="longUrl" className="text-lg font-medium ps-2">
            Paste your url
          </label>
          <input
            type="text"
            id="longUrl"
            placeholder="Paste your long URL here.."
            className="rounded-lg p-1.5 px-2.5 text-lg transition-all outline-0 focus:outline-0 font-medium border border-transparent min-w-96 w-fit focus:border-[#252525] me-8"
          />
        </div>
        <button className="bg-green-700 px-4 py-1.5 rounded-lg text-green-50 font-medium text-lg hover:bg-green-600 active:bg-green-500 transition-all">
          Shorten URL
        </button>
      </div>
    </div>
  );
};

export default Index;

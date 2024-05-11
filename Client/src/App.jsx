import { useState } from "react";
import axios from "axios";

function App() {
  const [longUrl, setLongUrl] = useState("");
  const [shortId, setShortId] = useState(null);
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const headers = { "Content-Type": "application/json" };

  const shortenUrl = async () => {
    try {
      let body = { url: longUrl };
      console.log(body);
      const resp = await axios.post(`${baseUrl}/url`, body, headers);
      setShortId(resp.data?.data.shortId);
      console.log(resp.data.data.shortId);
    } catch (err) {
      console.log(err);
    }
  };

  const handleCopyUrl = async () => {
    try {
      await navigator.clipboard.writeText(
        `https://urlshortner-wjpl.onrender.com/${shortId}`
      );
      console.log("URL copied to clipboard successfully!");
    } catch (err) {
      console.error("Failed to copy URL to clipboard:", err);
    }
  };

  return (
    <>
      <div className="text-xl font-bold w-full h-[100svh] flex justify-center items-center bg-[#252525]">
        <div className="p-4 md:px-10 lg:px-20 md:py-10 bg-[rgba(255,255,255,0.3)] rounded-lg flex justify-center items-center flex-col gap-8 text-white w-[80vw]">
          <h1>URL Shortner</h1>

          <div className="w-full flex flex-col gap-4 md:gap-6 md:flex-row ">
            <div className="flex flex-col w-full">
              <label htmlFor="longUrl" className="text-lg font-medium pb-1.5">
                Paste a long Url
              </label>
              <input
                type="text"
                id="longUrl"
                placeholder="Example: https://www.very-long-link/short-it"
                className="rounded-lg p-1.5 px-2.5 text-base transition-all outline-0 focus:outline-0 font-normal border border-transparent  focus:border-[#252525] text-black w-[100%]"
                onChange={(e) => setLongUrl(e.target.value)}
              />
            </div>
            <button
              className=" bg-[#172fb6] px-4 py-1.5 rounded-lg text-green-50 font-medium text-base md:text-lg hover:bg-[#143ae1] active:bg-[#2455f5] transition-all w-[100%] md:w-[35%] self-end disabled:opacity-60 disabled:pointer-events-none"
              onClick={shortenUrl}
              disabled={!longUrl.length}
            >
              Shorten URL
            </button>
          </div>

          <div className="w-full flex flex-col rounded-xl bg-[rgba(255,255,255,0.1)] p-2 py-3">
            <p htmlFor="longUrl" className="text-lg font-medium ps-2 pb-2">
              Shortend Url
            </p>

            <div className="flex gap-2 flex-col md:flex-row w-full justify-start items-center">
              {!shortId ? (
                <p className="text-base md:text-lg text-center w-full pb-4">
                  {" "}
                  No Shortend Urls{" "}
                </p>
              ) : (
                <>
                  <div className="w-full md:w-[50%] text-base md:text-lg font-medium p-1.5 ps-2 bg-[rgba(255,255,255,0.2)] rounded">
                    {`https://urlshortner-wjpl.onrender.com/${shortId}`}{" "}
                  </div>

                  <div className="flex gap-4 w-full md:w-[50%]">
                    <button
                      className="bg-[#172fb6] px-4 py-2 rounded-lg text-green-50 font-medium text-base hover:bg-[#143ae1] active:bg-[#2455f5] transition-all flex-1"
                      onClick={handleCopyUrl}
                    >
                      Copy URL
                    </button>
                    <a
                      className="bg-[#172fb6] px-4 py-2 rounded-lg text-green-50 font-medium text-base hover:bg-[#143ae1] active:bg-[#2455f5] transition-all flex-1 text-center"
                      href={`https://urlshortner-wjpl.onrender.com/${shortId}`}
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      Go to URL
                    </a>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* bg-gradient-to-tl from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% */}
    </>
  );
}

export default App;

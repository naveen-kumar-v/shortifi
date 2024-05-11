import { useState } from "react";
import axios from "axios";

const Index = () => {
  const [longUrl, setLongUrl] = useState("");
  const [shortId, setShortId] = useState("");
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

  return (
    <div className="p-4 md:px-10 lg:px-20 md:py-10 bg-[rgba(255,255,255,0.3)] rounded-lg flex justify-center items-center flex-col gap-8 text-white w-[80vw]">
      <h1>URL Shortner</h1>

      <div className="w-full flex flex-col gap-4 md:gap-6 md:flex-row ">
        <div className="flex flex-col w-full">
          <label htmlFor="longUrl" className="text-lg font-medium ">
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
          className=" bg-green-700 px-4 py-1.5 rounded-lg text-green-50 font-medium text-base md:text-lg hover:bg-green-600 active:bg-green-500 transition-all w-[100%] md:w-[35%] self-end"
          onClick={shortenUrl}
        >
          Shorten URL
        </button>
      </div>

      <div className="w-full flex flex-col rounded-xl bg-[rgba(255,255,255,0.1)] p-2">
        <p htmlFor="longUrl" className="text-lg font-medium ps-2 pb-2">
          Your Shortend Url
        </p>

        <div className="flex gap-2 flex-col md:flex-row w-full justify-start items-center">
          <div className="w-full md:w-[50%] text-base md:text-lg font-medium p-1.5 bg-[rgba(255,255,255,0.2)] rounded">
            {`www.shortifi.netlify.app/${shortId}`}{" "}
          </div>

          <div className="flex gap-4 w-full md:w-[50%]">
            <button className="bg-green-700 px-4 py-2 rounded-lg text-green-50 font-medium text-base hover:bg-green-600 active:bg-green-500 transition-all flex-1">
              Copy URL
            </button>
            <button className="bg-green-700 px-4 py-2 rounded-lg text-green-50 font-medium text-base hover:bg-green-600 active:bg-green-500 transition-all flex-1">
              <a
                href={`http://localhost:3000/${shortId}`}
                target="_blank"
                rel="noreferrer noopener"
              >
                Go to URL
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;

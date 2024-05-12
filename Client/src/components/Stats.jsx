import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Stats = () => {
  const [shortUrl, setShortUrl] = useState("");
  const [longUrl, setLongUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [totalClicks, setTotalClicks] = useState(0);
  const navigate = useNavigate();

  const trackUrl = async () => {
    try {
      const baseUrl = `https://urlshortner-wjpl.onrender.com/analytics`;
      const shortId = shortUrl.split("/").pop();
      setLoading(true);
      const resp = await axios.get(`${baseUrl}/${shortId}`);
      console.log(resp.data);
      setTotalClicks(resp?.data.totalClicks);
      setLongUrl(resp?.data.data.longUrl);
      setLoading(false);
    } catch (err) {
      console.log(err.response.data);
      toast.error(err.response?.data.message);
      setLoading(false);
    }
  };

  return (
    <div className="p-4 md:px-10 lg:px-20 md:py-10 bg-[rgba(255,255,255,0.3)] rounded-lg flex justify-center items-center flex-col gap-8 text-white w-[80vw] text-base md:text-lg lg:text-xl font-medium">
      <h1>Track your short URLs</h1>
      <p>Enter the URL to find out how many clicks it has received so far.</p>
      <div className="w-full flex flex-col gap-4 md:gap-6 md:flex-row ">
        <div className="flex flex-col w-full">
          <input
            type="text"
            id="longUrl"
            placeholder="Example: https://urlshortner-wjpl.onrender.com/shorturl"
            className="rounded-lg p-1.5 px-2.5 text-base transition-all outline-0 focus:outline-0 font-normal border border-transparent  focus:border-[#252525] text-black w-[100%]"
            onChange={(e) => setShortUrl(e.target.value)}
          />
          <label
            htmlFor="longUrl"
            className="text-[0.75rem] md:text-sm font-medium py-1"
          >
            {longUrl ? `(${longUrl})` : ""}
          </label>
        </div>
        <button
          className=" bg-[#172fb6] px-4 py-1.5 rounded-lg text-green-50 font-medium text-base md:text-lg hover:bg-[#143ae1] active:bg-[#2455f5] transition-all w-[100%] md:w-[35%] self-start disabled:opacity-60 disabled:pointer-events-none"
          onClick={trackUrl}
          disabled={!shortUrl.length}
        >
          {loading ? (
            <div className="flex flex-row gap-2 w-full h-full justify-center items-center py-[8px]">
              <div className="w-3 h-3 rounded-full bg-gray-300 animate-bounce [animation-delay:.3s]"></div>
              <div className="w-3 h-3 rounded-full bg-gray-300 animate-bounce [animation-delay:.1s]"></div>
              <div className="w-3 h-3 rounded-full bg-gray-300 animate-bounce [animation-delay:.3s]"></div>
            </div>
          ) : (
            "View Clicks"
          )}
        </button>
      </div>

      <div className="flex gap-2 w-full justify-center items-center ">
        <p htmlFor="longUrl" className="text-lg font-medium pb-1 md:pb-0">
          Total clicks :
        </p>
        <p>{totalClicks}</p>
      </div>
      <button
        className="bg-[#172fb6] px-4 py-2 rounded-lg text-green-50 font-medium text-base hover:bg-[#143ae1] active:bg-[#2455f5] transition-all flex-1 flex justify-center items-center gap-3"
        onClick={() => navigate("/")}
      >
        Shorten Another URL
      </button>

      <div className="animate-pulse">Timestamps: Coming soon</div>
    </div>
  );
};

export default Stats;

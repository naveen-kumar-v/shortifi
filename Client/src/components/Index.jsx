import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { Copy, ExternalLink } from "lucide-react";
import { useNavigate } from "react-router-dom";
import logo from "../../public/logo-no-background.svg";

const Index = () => {
  const [longUrl, setLongUrl] = useState("");
  const [shortId, setShortId] = useState(null);
  const [loading, setLoading] = useState(false);
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const headers = { "Content-Type": "application/json" };
  const navigate = useNavigate();
  const shortenUrl = async () => {
    try {
      setLoading(true);
      setShortId(null);
      let body = { url: longUrl };
      console.log(body);
      const resp = await axios.post(`${baseUrl}/url`, body, headers);
      setShortId(resp.data?.data.shortId);
      console.log(resp.data.data.shortId);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
      toast.error(err.response.data?.message);
    }
  };

  const handleCopyUrl = async () => {
    try {
      await navigator.clipboard.writeText(
        `https://urlshortner-wjpl.onrender.com/${shortId}`
      );
      toast.success("URL copied to clipboard successfully!");
    } catch (err) {
      toast.error("Failed to copy URL to clipboard");
    }
  };

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="w-full ps-10 py-6">
        <img
          src={logo}
          alt="Shortifi logo"
          className="transition-all w-[24svw] md:w-[16svw] lg:w-[12svw] h-fit "
        />
      </div>
      <div className="w-[80%] text-white flex flex-col gap-3">
        <div className="flex justify-center items-center flex-col md:flex-row gap-2">
          <h1 className="text-2xl md:text-3xl">Free URL Shortener </h1>{" "}
          <span className="text-base md:text-lg md:self-end">
            {" "}
            - Shorten your long URLs with ease
          </span>
        </div>

        <p className="text-base md:text-lg font-normal text-justify">
          Shortifi simplifies lengthy URLs, making them easier to share and
          manage. Once shortened, these links can be shared with anyone,
          providing quick access to the original content. Shortifi also provides
          valuable insights by tracking the number of clicks and site accesses
          for each link. Stay tuned for upcoming features like timestamps to
          further enhance your URL management experience with Shortifi. Start
          shortening your URLs with Shortifi today!
        </p>
      </div>
      <div className="p-4 md:px-10 lg:px-20 md:py-8 bg-[rgba(255,255,255,0.3)] rounded-lg flex justify-center items-center flex-col gap-8 text-white w-[80vw] mt-6">
        <div className="w-full flex flex-col gap-4 md:gap-6 md:flex-row ">
          <div className="flex flex-col w-full">
            <label htmlFor="longUrl" className="text-lg font-medium pb-1.5">
              Paste a long Url{" "}
              <span className="text-sm from-neutral-400">(with https://)</span>
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
            {loading ? (
              <div className="flex flex-row gap-2 w-full h-full justify-center items-center py-[8px]">
                <div className="w-3 h-3 rounded-full bg-gray-300 animate-bounce [animation-delay:.3s]"></div>
                <div className="w-3 h-3 rounded-full bg-gray-300 animate-bounce [animation-delay:.1s]"></div>
                <div className="w-3 h-3 rounded-full bg-gray-300 animate-bounce [animation-delay:.3s]"></div>
              </div>
            ) : (
              "Shorten URL"
            )}
          </button>
        </div>

        <div className="w-full flex flex-col rounded-xl bg-[rgba(255,255,255,0.1)] p-2 py-3">
          <p htmlFor="longUrl" className="text-lg font-medium ps-2 pb-2">
            Shortened Url
          </p>

          <div className="flex gap-2 flex-col md:flex-row w-full justify-start items-center">
            {!shortId ? (
              <p className="text-base md:text-lg text-center w-full pb-4">
                {" "}
                No Shortened Urls{" "}
              </p>
            ) : (
              <>
                <div className="w-full md:w-[50%] text-base md:text-lg font-medium p-1.5 ps-2 bg-[rgba(255,255,255,0.2)] rounded">
                  {`https://urlshortner-wjpl.onrender.com/${shortId}`}
                  {/*production*/}
                  {/* {`http://localhost:3000/${shortId}`} dev */}
                </div>

                <div className="flex gap-4 w-full md:w-[50%]">
                  <button
                    className="bg-[#172fb6] px-4 py-2 rounded-lg text-green-50 font-medium text-base hover:bg-[#143ae1] active:bg-[#2455f5] transition-all flex-1 flex justify-center items-center gap-3"
                    onClick={handleCopyUrl}
                  >
                    <Copy size={20} color="#ffffff" strokeWidth={2} />
                    Copy URL
                  </button>
                  <a
                    className="bg-[#172fb6] px-4 py-2 rounded-lg text-green-50 font-medium text-base hover:bg-[#143ae1] active:bg-[#2455f5] transition-all flex-1 flex justify-center items-center gap-3"
                    href={`https://urlshortner-wjpl.onrender.com/${shortId}`}
                    // href={`http://localhost:3000/${shortId}`}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <ExternalLink size={20} color="#ffffff" />
                    Go to URL
                  </a>
                </div>
              </>
            )}
          </div>
        </div>

        <button
          className="bg-[#172fb6] px-4 py-2 rounded-lg text-green-50 font-medium text-base hover:bg-[#143ae1] active:bg-[#2455f5] transition-all flex-1 flex justify-center items-center gap-3 w-full md:w-fit"
          onClick={() => navigate("/stats")}
        >
          Track your short Url
        </button>
        {/* bg-gradient-to-tl from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% */}
      </div>
    </div>
  );
};

export default Index;

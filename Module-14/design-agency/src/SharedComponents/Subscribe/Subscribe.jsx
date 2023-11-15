import React from "react";

const Subscribe = () => {
  return (
    <form className="static px-3 bg-white text-black">
      <div className="text-center flex flex-col justify-center items-center py-20 space-y-3">
        <h5 className="text-lg font-medium text-[#20B15A]">SUBSCRIBE</h5>
        <h3 className="text-2xl font-medium w-80">
          Subscribe to get the latest news about us
        </h3>
        <fieldset className="form-control w-96 ">
          <label className="label">
            <span className="label-text text-[#8B8B8B]">
              Please drop your email below to get daily update about what we do
            </span>
          </label>
          <div className="join relative space-y-3">
            <input
              type="text"
              placeholder="Enter your email here......."
              className="input input-bordered border-[#000000] w-full h-11 rounded-lg bg-white"
            />
            <button className="btn btn-sm bg-[#F55F1D] border-none rounded-lg absolute -top-[0.35rem] bottom-0 left-[17.5rem] text-white">
              Subscribe
            </button>
          </div>
        </fieldset>
      </div>
    </form>
  );
};

export default Subscribe;

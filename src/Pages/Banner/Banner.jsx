import PropTypes from "prop-types";
const Banner = () => {
  return (
    <div>
      {/* <div className="">
        <div className="my-8 relative container mx-auto">
          <img
            src="https://i.ibb.co/Cwh6Lzj/All-Car-Logos-With-Wings.jpg"
            alt=""
            className="mb-[-20px] sm:mb-0 "
          />
          <div className="absolute top-0 bottom-0 w-full  bg-white opacity-90 ">
            <h1 className="text-center text-[#0B0B0B] text-sm md:text-3xl lg:text-5xl font-medium md:mt-20 mt-2 lg:mt-32 xl:mt-52">
              Cars You Need
            </h1>

            <form>
              <div className="flex flex-row justify-center items-center my-5 md:my-10 gap-1 ">
                <div className="form-control   md:w-3/6">
                  <input
                    type="text"
                    placeholder="Search Brand Here"
                    
                    className="input input-bordered"
             
                  />
                </div>
                <button
                 
                  className="btn-primary rounded-xl btn text-[#FFF] outline-none border-none"
                >
                  Search
                </button>
              </div>
            </form>
          </div>
        </div>
      </div> */}

      <div>
        <div className="">
          <div className="my-8 relative container mx-auto">
            <img
              src="https://i.ibb.co/Cwh6Lzj/All-Car-Logos-With-Wings.jpg"
              alt=""
              className="mb-[-10px] sm:mb-0 h-auto w-full max-h-60 sm:max-h-80 md:max-h-96 lg:max-h-120 xl:max-h-150"
              // Adjust the max-height and max-width according to your needs
            />
            <div className="absolute top-0 bottom-0 w-full bg-white opacity-90">
              <h1 className="text-center text-[#0B0B0B] text-sm md:text-3xl lg:text-5xl font-medium md:mt-20 mt-2 lg:my-20 xl:my-10">
                Cars You Need
              </h1>

              <form>
                <div className="flex flex-row justify-center items-center my-5 md:my-10 gap-1 ">
                  <div className="form-control md:w-3/6">
                    <input
                      type="text"
                      placeholder="Search Brand Here"
                      className="input input-bordered"
                    />
                  </div>
                  <button className="btn-primary rounded-xl btn text-[#FFF] outline-none border-none">
                    Search
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
Banner.propTypes = {
  inputText: PropTypes.string,
  handleSearch: PropTypes.func,
};
export default Banner;

import { useLoaderData } from "react-router-dom";


const DonaitonDetails = () => {
    const donationDetails = useLoaderData();
   console.log(donationDetails);
    return (
        <div className="relative min-h-screen flex w-full flex-col bg-gray-900 bg-clip-border p-8 text-white shadow-md shadow-pink-500/40">
  <div className="relative pb-8 m-0 mb-8 overflow-hidden text-center text-gray-700 bg-transparent border-b rounded-none shadow-none border-white/10 bg-clip-border">
    <p className="block font-sans text-sm antialiased font-normal leading-normal text-white uppercase">
      standard
    </p>
    <h1 className="flex justify-center gap-1 mt-6 font-sans antialiased font-normal tracking-normal text-white text-7xl">
      <span className="mt-2 text-4xl">$</span>29
      <span className="self-end text-4xl">/mo</span>
    </h1>
  </div>
  <div className="p-0 max-w-6xl mx-auto">
    <ul className="flex flex-col gap-4">
      <li className="flex items-center gap-4">
        <span className="p-1 border rounded-full border-white/20 bg-white/20">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            
            stroke="currentColor"
            aria-hidden="true"
            className="w-3 h-3"
          >
            <path
              
              
              d="M4.5 12.75l6 6 9-13.5"
            ></path>
          </svg>
        </span>
        <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
          5 team members
        </p>
      </li>
      <li className="flex items-center gap-4">
        <span className="p-1 border rounded-full border-white/20 bg-white/20">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            
            stroke="currentColor"
            aria-hidden="true"
            className="w-3 h-3"
          >
            <path
              
              
              d="M4.5 12.75l6 6 9-13.5"
            ></path>
          </svg>
        </span>
        <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
          200+ components
        </p>
      </li>
      <li className="flex items-center gap-4">
        <span className="p-1 border rounded-full border-white/20 bg-white/20">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            
            stroke="currentColor"
            aria-hidden="true"
            className="w-3 h-3"
          >
            <path
              
              
              d="M4.5 12.75l6 6 9-13.5"
            ></path>
          </svg>
        </span>
        <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
          40+ built-in pages
        </p>
      </li>
      <li className="flex items-center gap-4">
        <span className="p-1 border rounded-full border-white/20 bg-white/20">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            
            stroke="currentColor"
            aria-hidden="true"
            className="w-3 h-3"
          >
            <path
              
              
              d="M4.5 12.75l6 6 9-13.5"
            ></path>
          </svg>
        </span>
        <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
          1 year free updates
        </p>
      </li>
      <li className="flex items-center gap-4">
        <span className="p-1 border rounded-full border-white/20 bg-white/20">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            
            stroke="currentColor"
            aria-hidden="true"
            className="w-3 h-3"
          >
            <path
              
              d="M4.5 12.75l6 6 9-13.5"
            ></path>
          </svg>
        </span>
        <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
          Life time technical support
        </p>
      </li>
    </ul>
  </div>
  <div className="p-0  mt-12">
    <button
      className="block mx-auto w-3/4 select-none rounded-lg bg-red-500 hover:bg-red-400 py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-blue-gray-500/10 transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-gray-500/20 focus:scale-[1.02] focus:opacity-[0.85] focus:shadow-none active:scale-100 active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      type="button"
      data-ripple-dark="true"
    >
      Donate
    </button>
  </div>
</div>
    );
};

export default DonaitonDetails;
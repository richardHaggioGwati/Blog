const Banner: React.FC = () => {
  return (
    <div
      className="flex flex-col lg:flex-row lg:space-x-5
    justify-between font-bold px-10 py-5 mb-10"
    >
      <div>
        <h1 className="text-7xl mb-5">Daily Blog</h1>
        <h2 className="mt-5 md:mt-0">
          Welcome to{' '}
          <span className="underline decoration-4 decoration-[#F7AB0A]">
            Every Developer&lsquo;s
          </span>{' '}
          favorite blog in the Devosphere
        </h2>
      </div>

      <p className="mt-5 md:mt-2 text-gray-400 max-w-sm">
        New products features | The latest in technology | The weekly debugging
        nightmare and More!
      </p>
    </div>
  );
};

export default Banner;

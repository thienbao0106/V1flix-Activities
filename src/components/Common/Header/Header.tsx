const Navbar = () => {
  return (
    <nav className="z-[800] flex justify-between items-start w-full sticky top-0 bg-bgColor bg-gradient-to-b from-black to-transparent  text-white sm:py-7 py-5 lg:px-32 px-10">
      <div className="w-1/3 gap-x-8 flex flex-row justify-center items-center">
        <span>Logo</span>

        <div className="w-full flex justify-center items-center bg-gray-500 bg-opacity-40 px-2 py-3 rounded-md no-underline text-white gap-3">
          <svg className="search-icon" viewBox="0 0 20 20">
            <path d="M18.125,15.804l-4.038-4.037c0.675-1.079,1.012-2.308,1.01-3.534C15.089,4.62,12.199,1.75,8.584,1.75C4.815,1.75,1.982,4.726,2,8.286c0.021,3.577,2.908,6.549,6.578,6.549c1.241,0,2.417-0.347,3.44-0.985l4.032,4.026c0.167,0.166,0.43,0.166,0.596,0l1.479-1.478C18.292,16.234,18.292,15.968,18.125,15.804 M8.578,13.99c-3.198,0-5.716-2.593-5.733-5.71c-0.017-3.084,2.438-5.686,5.74-5.686c3.197,0,5.625,2.493,5.64,5.624C14.242,11.548,11.621,13.99,8.578,13.99 M16.349,16.981l-3.637-3.635c0.131-0.11,0.721-0.695,0.876-0.884l3.642,3.639L16.349,16.981z" />
          </svg>

          <input
            type="text"
            className=" w-full bg-transparent px-2 focus:outline-none caret-transparent border-0 text-white placeholder:text-white placeholder:font-bold"
            placeholder="Search"
            v-model="keyword"
          />
        </div>
      </div>
      <div className="w-2/3 flex flex-row justify-end items-end">
        <div className="px-2 py-3">Hello world</div>
      </div>
    </nav>
  );
};

export default Navbar;

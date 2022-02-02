function Navbar() {
  return (
    <div className="flex justify-between bg-slate-600 items-center fixed w-full">
      <div className="m-3">
        <span className="font-extrabold logo text-white text-3xl">Do!t</span>
      </div>
      <div className="mx-5 m-2">
        <img
          src="/images/avatar.jpeg"
          alt="username"
          className="rounded-full w-10"
        />
      </div>
    </div>
  );
}

export default Navbar;

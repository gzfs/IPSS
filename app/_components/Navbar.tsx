export default function Navbar() {
  return (
    <div className="flex fixed justify-between items-center border-b-[1px] border-black pl-10 w-full bg-white z-10">
      <div className="font-Unbounded text-4xl font-bold">IPSS</div>
      <button className="bg-black h-full font-semibold text-sm font-Unbounded text-white py-5 px-10 outline-none">
        UPLOAD
      </button>
    </div>
  );
}

import Image from "next/image"

export default function Page() {
  return (
    <div className="w-full grid grid-cols-10">
      <div className="col-span-2 bg-gray-950">
        <div className="grid p-7">
          <a className="p-2 m-1" href="">Dashboard</a>
          <a className="p-2 m-1 bg-slate-300 text-gray-950 rounded-md" href="">Change Password</a>
        </div>

      </div>
      <form className="grid col-span-8 h-screen place-items-center " >
        <div className="w-4/5 grid grid-rows-3 gap-4 place-items-center p-10 bg-slate-950 rounded-xl">
          <input className="w-full p-3 text-stone-950 rounded-md" type="password" placeholder="Mật khẩu cũ" />
          <input className="w-full p-3 text-stone-950 rounded-md" type="password" placeholder="Mật khẩu mới" />
          <input className="w-full p-3 text-stone-950 rounded-md" type="password" placeholder="Xác nhận mật khẩu mới" />
          <button className="w-full p-3 bg-gray-500 rounded-md">
            <div>Đổi mật khẩu</div>
          </button>
        </div>

      </form>

    </div>
  )
}
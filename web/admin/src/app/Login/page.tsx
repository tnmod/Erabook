import Image from "next/image"

export default function Page() {
  return (
    <div className="w-full grid grid-cols-10">
      <div className="grid col-span-7 h-screen bg-gray-950 place-items-center">
        <Image className="object-cover h-90 w-150"
          src="/banner2.png"
          width={1000}
          height={500}
          alt="Picture of the author"
        />
      </div>
      <form className="grid col-span-3 h-screen place-items-center " >
        <div className="w-4/5 grid grid-rows-3 gap-4 place-items-center p-10 bg-slate-950 rounded-xl">
          <input className="w-full p-3 text-stone-950 rounded-md" type="text" placeholder="Tài khoản" />
          <input className="w-full p-3 text-stone-950 rounded-md" type="password" placeholder="Mật khẩu" />
          <button className="w-full p-3 bg-gray-500 rounded-md">
            <div>Đăng nhập</div>
          </button>
        </div>

      </form>

    </div>
  )
}
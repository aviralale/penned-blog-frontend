import { ArrowLeft02Icon, ArrowRight02Icon } from "../../assets/icons/Icons";

export default function Popular() {
  return (
    <div className="flex flex-col px-4">
      <div className="flex justify-between gap-7">
        <div className="flex-1 mt-24 h-full">
          <img
            src="https://images.unsplash.com/photo-1722104628969-6c7961f69b8f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="object-cover h-[34rem] aspect-[3/4]"
            alt=""
          />
          <p className="mt-2">
            Written by <b>Aviral Ale</b>
          </p>
        </div>
        <div className="flex-1">
          <div className="flex gap-6">
            <button className="px-4 uppercase rounded-full border border-black hover:bg-black hover:text-white">
              Science
            </button>
            <span>OCT 11, 2004</span>
          </div>
          <h1 className="text-6xl font-bold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            porro sint perferendis.
          </h1>
          <p className="pl-56">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid sit
            molestiae commodi repellat! Aperiam facere hic maxime sint a
            accusamus fuga voluptatem laudantium nulla placeat. Error quos
            beatae, nihil commodi facere, vero id, aspernatur doloremque fugiat
            repellendus numquam dolorum sunt! Rem molestiae repellat accusantium
            rerum!
          </p>
        </div>
        <div className="flex-1">
          <img
            src="https://images.unsplash.com/photo-1722104628969-6c7961f69b8f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="object-cover h-[34rem] aspect-[3/4]"
            alt=""
          />
          <div className="flex justify-center mt-8 gap-2">
            <button className="rounded-full border hover:border-black p-2">
              <ArrowLeft02Icon />
            </button>
            <button className="rounded-full border hover:border-black p-2">
              <ArrowRight02Icon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

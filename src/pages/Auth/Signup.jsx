import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <div className="flex justify-center items-center w-full m-24">
      <div className="flex flex-col items-center">
        <h1 className="text-9xl uppercase ThunderHC text-custom-orange">
          Signup
        </h1>
        <form className="flex m-2  flex-col w-full">
          <div className="flex flex-col mt-2">
            <label htmlFor="displayName">What do you want to be called?</label>
            <input
              type="text"
              placeholder="John Doe"
              className=" p-2 border border-custom-bg-dark bg-transparent hover:outline-none active:outline-none focus:outline-none"
              required
              id="displayName"
            />
          </div>
          <div className="flex flex-col mt-2">
            <label htmlFor="username">Enter username (a-z,0-9,_)</label>
            <input
              type="text"
              placeholder="johndoe"
              className=" p-2 border border-custom-bg-dark bg-transparent hover:outline-none active:outline-none focus:outline-none"
              required
              id="username"
            />
          </div>
          <div className="flex flex-col mt-2">
            <label htmlFor="email">Enter e-mail address</label>
            <input
              type="email"
              placeholder="johndoe@example.com"
              className=" p-2 border border-custom-bg-dark bg-transparent hover:outline-none active:outline-none focus:outline-none"
              required
              id="email"
            />
          </div>
          <div className="flex flex-col mt-2">
            <label htmlFor="password">Enter password</label>
            <input
              type="password"
              className=" p-2 border border-custom-bg-dark bg-transparent hover:outline-none active:outline-none focus:outline-none"
              required
              id="password"
            />
          </div>
          <div className="flex flex-col mt-2">
            <label htmlFor="password">Repeat password</label>
            <input
              type="password"
              className=" p-2 border border-custom-bg-dark bg-transparent hover:outline-none active:outline-none focus:outline-none"
              required
              id="password"
            />
          </div>
          <button
            type="submit"
            className="bg-custom-orange text-white filter active:saturate-200 hover:saturate-200 w-full p-2 transition
        duration-200 ease-in-out mt-1"
          >
            Signup
          </button>
        </form>
        <p>
          Already a user? <Link to="/login">Login now!</Link>
        </p>
      </div>
    </div>
  );
}

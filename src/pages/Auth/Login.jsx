import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="flex justify-center items-center w-full m-24">
      <div className="flex flex-col items-center">
        <h1 className="text-9xl uppercase ThunderHC text-custom-orange">
          Login
        </h1>
        <form className="flex m-2  flex-col w-full">
          <div className="flex flex-col mt-2">
            <label htmlFor="username">Enter username</label>
            <input
              type="text"
              placeholder="johndoe"
              className=" p-2 border border-custom-bg-dark bg-transparent hover:outline-none active:outline-none focus:outline-none"
              required
              id="username"
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
          <button
            type="submit"
            className="bg-custom-orange text-white filter active:saturate-200 hover:saturate-200 w-full p-2 transition
          duration-200 ease-in-out mt-1"
          >
            Login
          </button>
        </form>
        <p>
          New to Penned? <Link to="/signup">Signup now!</Link>
        </p>
      </div>
    </div>
  );
}

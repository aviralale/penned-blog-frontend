import { Eye, EyeClosed } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../../api/api";
import { toast } from "sonner";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = (e) => {
    e.preventDefault();
    setIsPasswordVisible(!isPasswordVisible);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const user = {
      username,
      password,
    };
    try {
      loginUser(user);
      toast.success("Logged in successfully!");
      navigate("/dashboard");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex justify-center items-center w-full m-24">
      <div className="flex flex-col items-center">
        <h1 className="text-9xl uppercase ThunderHC text-custom-orange">
          Login
        </h1>
        <form onSubmit={handleLogin} className="flex m-2  flex-col w-full">
          <div className="flex flex-col mt-2">
            <label htmlFor="username">Enter username</label>
            <input
              type="text"
              placeholder="johndoe"
              className=" p-2 border border-custom-bg-dark bg-transparent outline-none "
              required
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="flex flex-col mt-2">
            <label htmlFor="password">Enter password</label>
            <div className="relative">
              <input
                type={isPasswordVisible ? "text" : "password"}
                className=" p-2 border w-full border-custom-bg-dark bg-transparent outline-none"
                required
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                className="absolute right-2 top-2"
                onClick={togglePasswordVisibility}
              >
                {isPasswordVisible ? <EyeClosed /> : <Eye />}
              </button>
            </div>
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
          New to Penned?{" "}
          <Link
            to="/signup"
            className="text-custom-orange hover:brightness-125"
          >
            Signup now!
          </Link>
        </p>
      </div>
    </div>
  );
}

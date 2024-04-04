const Login = () => {
  return <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
    <div className="w-full p-6 rounded-lg shadow-md bg-indigo-400 bg-clip-padding backdrop-filter background-blur-lg 
    bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">Login 
            <span className='text-pink-200'> ChatApp</span>
        </h1>
        <form>
            <div>
                <label className="label p-2 ">
                    <span className="text-base label-text text-pink-200">Username</span>
                </label>
                <input type="text" placeholder="Enter username" className="w-full input input-bordered h-10"/>
            </div>
                <div>
                <label className="label">
                    <span className="text-base label-text text-pink-200">Password</span>
                </label>
                <input 
                    type="password" 
                    placeholder="Enter Password" 
                    className="w-full input input-bordered h-10 "/>
                </div>
                <a href='#' className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block text-pink-200'>
                    {"Don't"} have an account?
                </a>
                <div>
                    <button className="btn btn-block btn-sm mt-2">Login</button>
                </div>
        </form>
    </div>

  </div>;
}

export default Login;
/* 
const login = () => {
    return <div classname="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div classname="w-full p-6 rounded-lg shadow-md bg-indigo-400 bg-clip-padding backdrop-filter background-blur-lg 
      bg-opacity-0">
          <h1 classname="text-3xl font-semibold text-center text-gray-300">login 
              <span classname='text-pink-200'> chatapp</span>
          </h1>
          <form>
              <div>
                  <label classname="label p-2 ">
                      <span classname="text-base label-text text-pink-200">username</span>
                  </label>
                  <input type="text" placeholder="enter username" classname="w-full input input-bordered h-10"/>
              </div>
                  <div>
                  <label classname="label">
                      <span classname="text-base label-text text-pink-200">password</span>
                  </label>
                  <input 
                      type="password" 
                      placeholder="enter password" 
                      classname="w-full input input-bordered h-10 "/>
                  </div>
                  <a href='#' classname='text-sm hover:underline hover:text-blue-600 mt-2 inline-block text-pink-200'>
                      {"don't"} have an account?
                  </a>
                  <div>
                      <button classname="btn btn-block btn-sm mt-2">login</button>
                  </div>
          </form>
      </div>
  
    </div>;
  }
  
  export default login;
  
   */
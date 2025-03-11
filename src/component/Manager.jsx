import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import { v4 as uuidv4 } from 'uuid';

const Manager = () => {
  const [form, setForm] = useState({ site: "", username: "", password: "" });
  const ref = useRef();
  const [passwrdArray, setpasswordArray] = useState([]);

  useEffect(() => {
    let passowrds = localStorage.getItem("passowrds");
    if (passowrds) {
      setpasswordArray(JSON.parse(passowrds));
    }
  }, []);

  const showPassword = () => {
    if (ref.current.src.includes("/eye-cross-1024.webp")) {
      ref.current.src = "/eye.webp";
    } else {
      ref.current.src = "/eye-cross-1024.webp";
    }
  };

  const savePassowrd = () => {
    if(form.site.length > 3 && form.username.length > 3 && form.password.length > 3){
    setpasswordArray([...passwrdArray, {...form, id: uuidv4()}]);
    localStorage.setItem("passowrds", JSON.stringify([...passwrdArray, {...form, id: uuidv4()}]));
    console.log([...passwrdArray, form]);
    setForm({ site: "", username: "", password: "" })
    toast("Password saved!", {
      position: "top-right",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }
  else{
    toast("Please fill all fields!", )
  }
  };


  const editpassword = (id) => {
    setForm(passwrdArray.filter(item=>item.id === id)[0]);
    setpasswordArray(passwrdArray.filter(item=>item.id != id));
    
  };
  const deletePassowrd = (id) => {
    let confirm = window.confirm("Are you sure you want to delete this password?");
    if(confirm){
    setpasswordArray(passwrdArray.filter(item=>item.id != id));
    localStorage.setItem("passowrds", JSON.stringify(passwrdArray.filter(item=>item.id != id)));
    toast("Password Deleted!", {
      position: "top-right",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const copyText = (text) => {
    toast("Copy to clipboard!", {
      position: "top-right",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    navigator.clipboard.writeText(text);
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#C9EBFF,transparent)]"></div>
      </div>
      <div className="p-20 mx-auto  md:mycontainer min-h-[90vh]">
        
      <div >
        <h1 className="text-xl font-bold text-center">
          <span className="text-green-500">&lt;</span>
          <span>Pass</span>
          <span className="text-green-500">OP/&gt;</span>
        </h1>
        <p className="text-green-900 text-lg text-center">
          Your own password manager
        </p>
        <div className="text-black flex flex-col  p-4 gap-4 items-center">
          <input
            value={form.site}
            onChange={handleChange}
            placeholder="Enter website URL"
            className="rounded-full border border-green-400 w-full p-4 py-1"
            type="text"
            name="site"
            id="site"
          />
          <div className="flex w-full justify-between gap-3">
            <input
              value={form.username}
              onChange={handleChange}
              placeholder="Enter Username"
              className="rounded-full border border-green-400 w-full p-4 py-1"
              type="text"
              name="username"
              id="username"
            />
            <div className="relative">
              <input
                value={form.password}
                onChange={handleChange}
                placeholder="Enter Password"
                className="rounded-full border border-green-400 w-full p-4 py-1"
                type="text"
                name="password"
                id="password"
              />
              <span
                className="absolute right-2 top-1 cursor-pointer"
                onClick={showPassword}
              >
                <img
                  ref={ref}
                  className=""
                  width={25}
                  src="/eye.webp"
                  alt="eye"
                />
              </span>
            </div>
          </div>
          <button
            onClick={savePassowrd}
            className="flex justify-center text-lg items-center bg-green-500 hover:bg-green-700 rounded-full px-2 py-2 w-fit border border-green-900 gap-2"
          >
            <lord-icon
              src="https://cdn.lordicon.com/hqymfzvj.json"
              trigger="hover"
            ></lord-icon>
            Save 
          </button>
        </div>

        <div className="password ">
          <h2 className="font-bold py-4">&lt;Your Password/&gt;</h2>
          {passwrdArray.length === 0 && <div>No Password to show</div>}
          {passwrdArray.length != 0 && (
            <table className="shadow-md min-w-full divide-y divide-green-500 justify-center ">
              <thead className=" bg-gray-200 r">
                <tr>
                  <th className="px-6 py-3 font-bold text-gray-500 uppercase tracking-wider">
                    URL
                  </th>
                  <th className="px-6 py-3 font-bold text-gray-500 uppercase tracking-wider">
                    Username
                  </th>
                  <th className="px-6 py-3 font-bold text-gray-500 uppercase tracking-wider">
                    Password
                  </th>
                  <th className="px-6 py-3 font-bold text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-green-500">
                {passwrdArray.map((item, index) => {
                  return (
                    <tr key={index} className="hover:bg-gray-50 ">
                      <td className=" px-6 py-4 whitespace-nowrap text-sm text-gray-900 ">
                        <div className="flex items-center justify-center">
                          <a href={item.site} target="_blank">
                            {item.site}
                          </a>
                          <div
                            className="itemCopy ml-2 cursor-pointer w-5 h-5 text-gray-500"
                            onClick={() => {
                              copyText(item.site);
                            }}
                          >
                            <span className="material-symbols-outlined ">
                              content_copy
                            </span>
                          </div>
                        </div>
                      </td>
                      <td className=" px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        <div className="flex items-center justify-center">
                          <span> {item.username}</span>
                          <div
                            className="itemCopy ml-2 cursor-pointer w-5 h-5 text-gray-500"
                            onClick={() => {
                              copyText(item.username);
                            }}
                          >
                            <span className="material-symbols-outlined ">
                              content_copy
                            </span>
                          </div>
                        </div>
                      </td>
                      <td className=" px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        <div className="flex items-center justify-center">
                          <span> {"*".repeat(item.password.length)}</span>
                          <div
                            className="itemCopy ml-2 cursor-pointer w-5 h-5 text-gray-500"
                            onClick={() => {
                              copyText(item.password);
                            }}
                          >
                            <span className="material-symbols-outlined ">
                              content_copy
                            </span>
                          </div>
                        </div>
                      </td>
                      <td className=" px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        <div className="flex items-center justify-center">
                          <span className="cursor-pointer mx-1" onClick={()=>{editpassword(item.id)}}>
                            <script src="https://cdn.lordicon.com/lordicon.js"></script>
                            <lord-icon
                              src="https://cdn.lordicon.com/exymduqj.json"
                              trigger="hover"
                              style={{"width":"25px", "height":"25px"}}
                            ></lord-icon>
                          </span>
                          <span className="cursor-pointer mx-1" onClick={()=>{deletePassowrd(item.id)}}>
                            <script src="https://cdn.lordicon.com/lordicon.js"></script>
                            <lord-icon
                              src="https://cdn.lordicon.com/hwjcdycb.json"
                              trigger="hover"
                              style={{"width":"25px", "height":"25px"}}
                            ></lord-icon>
                          </span>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>
      </div>
      </div>
    </>
  );
};

export default Manager;

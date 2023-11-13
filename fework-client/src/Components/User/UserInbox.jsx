import {React,useState,useEffect} from "react";
import "../style/inbox.css"

const UserInbox = () => {

    // const [message, setMessage] = useState([])
    
    // //////////////////////// baseurl///////////////////

    // const baseURL = "http://127.0.0.1:8000/api"

    // const axios = useAxios()

    // useEffect(() =>{
    //     try {
    //         axios.get
    //     } catch (error) {
    //         console.log(error)
            
    //     }
    // })

    
  return (
    <div>
      <main className="content" style={{ marginTop: "100px" }}>
        <div className="container mx-auto sm:px-4 p-0">
          <h1 className="h3 mb-3">Messages</h1>
          <div className="relative flex flex-col min-w-0 h-[600px] rounded break-words border bg-white  border-gray-300">
            <div className="flex flex-wrap  g-0">
            {/* this is side nav bar */}
              <div className="w-full lg:w-2/5 pr-4 pl-4 xl:w-1/4  border-r h-[600px]  overflow-x-scroll">
                <div className="px-4 hidden md:block">
                  <div className="flex items-center">
                    <div className="flex-grow-1">
                      <input
                        type="text"
                        className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded my-3"
                        placeholder="Search..."
                      />
                    </div>
                    
                  </div>
                </div>
                
                <a
                  href="#"
                  className="relative block py-3 px-6 -mb-px border border-r-0 border-l-0 border-gray-300 no-underline w-fill "
                >
                  <div className="inline-block p-1 text-center font-semibold text-sm align-baseline leading-none rounded bg-green-500 float-right">2</div>
                  <div className="flex items-start">
                    <img
                      src="https://bootdey.com/img/Content/avatar/avatar2.png"
                      className="rounded-full mr-1"
                      alt="William Harris"
                      width={40}
                      height={40}
                    />
                    <div className="flex-grow-1 ml-3">
                      William Harris
                      <div className="text-xs">
                        <span className="fas fa-circle chat-online" /> Online
                      </div>
                    </div>
                  </div>
                </a>
               
                <hr className="block lg:hidden mt-1 mb-0" />
              </div>

              {/* this is right side */}
              <div className="w-full lg:w-3/5 pr-4 pl-4 xl:w-3/4 h-[600px] ">
                <div className="py-2 px-4 border-b hidden lg:block">
                  <div className="flex items-center py-1">
                    <div className="relative">
                      <img
                        src="https://bootdey.com/img/Content/avatar/avatar3.png"
                        className="rounded-full mr-1"
                        alt="Sharon Lessman"
                        width={40}
                        height={40}
                      />
                    </div>
                    <div className="flex-grow-1 pl-3">
                      <strong>Sharon Lessman</strong>
                      <div className="text-gray-700 text-xs">
                        <em>Online</em>
                      </div>
                    </div>
                    <div>
                      <button className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded  no-underline bg-blue-600 text-white hover:bg-blue-600 py-3 px-4 leading-tight text-xl mr-1 ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-phone feather-lg"
                        >
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                        </svg>
                      </button>
                      <button className=" align-middle text-center select-none border font-normal whitespace-no-wrap rounded  no-underline bg-teal-500 text-white hover:bg-teal-600 py-3 px-4 leading-tight text-xl mr-1  hidden md:inline-block">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-video feather-lg"
                        >
                          <polygon points="23 7 16 12 23 17 23 7" />
                          <rect
                            x={1}
                            y={5}
                            width={15}
                            height={14}
                            rx={2}
                            ry={2}
                          />
                        </svg>
                      </button>
                      <button className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded  no-underline bg-gray-100 text-gray-800 hover:bg-gray-200  py-3 px-4 leading-tight text-xl ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-more-horizontal feather-lg"
                        >
                          <circle cx={12} cy={12} r={1} />
                          <circle cx={19} cy={12} r={1} />
                          <circle cx={5} cy={12} r={1} />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="relative bg-cyan-700 overflow-x-scroll h-[450px] ">
                  <div className="chat-messages p-6">
                    <div className="chat-message-right pb-4">
                      <div>
                        <img
                          src="https://bootdey.com/img/Content/avatar/avatar1.png"
                          className="rounded-full mr-1"
                          alt="Chris Wood"
                          width={40}
                          height={40}
                        />
                        <div className="text-gray-700 text-xs whitespace-no-wrap mt-2">
                          2:33 am
                        </div>
                      </div>
                      <div className="flex-shrink-1 bg-gray-100 rounded py-2 px-3 mr-3">
                        <div className="font-bold mb-1">You</div>
                        Lorem ipsum dolor sit amet, vis erat denique in, dicunt
                        prodesset te vix.
                      </div>
                    </div>
                    <div className="chat-message-left pb-4">
                      <div>
                        <img
                          src="https://bootdey.com/img/Content/avatar/avatar3.png"
                          className="rounded-full mr-1"
                          alt="Sharon Lessman"
                          width={40}
                          height={40}
                        />
                        <div className="text-gray-700 text-xs whitespace-no-wrap mt-2">
                          2:34 am
                        </div>
                      </div>
                      <div className="flex-shrink-1 bg-gray-100 rounded py-2 px-3 ml-3">
                        <div className="font-bold mb-1">
                          Sharon Lessman
                        </div>
                        Sit meis deleniti eu, pri vidit meliore docendi ut, an
                        eum erat animal commodo.
                      </div>
                    </div>
                    <div className="chat-message-right mb-4">
                      <div>
                        <img
                          src="https://bootdey.com/img/Content/avatar/avatar1.png"
                          className="rounded-full mr-1"
                          alt="Chris Wood"
                          width={40}
                          height={40}
                        />
                        <div className="text-gray-700 text-xs whitespace-no-wrap mt-2">
                          2:35 am
                        </div>
                      </div>
                      <div className="flex-shrink-1 bg-gray-100 rounded py-2 px-3 mr-3">
                        <div className="font-bold mb-1">You</div>
                        Cum ea graeci tractatos.
                      </div>
                    </div>
                    <div className="chat-message-left pb-4">
                      <div>
                        <img
                          src="https://bootdey.com/img/Content/avatar/avatar3.png"
                          className="rounded-full mr-1"
                          alt="Sharon Lessman"
                          width={40}
                          height={40}
                        />
                        <div className="text-gray-700 text-xs whitespace-no-wrap mt-2">
                          2:36 am
                        </div>
                      </div>
                      <div className="flex-shrink-1 bg-gray-100 rounded py-2 px-3 ml-3">
                        <div className="font-bold mb-1">
                          Sharon Lessman
                        </div>
                        Sed pulvinar, massa vitae interdum pulvinar, risus
                        lectus porttitor magna, vitae commodo lectus mauris et
                        velit. Proin ultricies placerat imperdiet. Morbi varius
                        quam ac venenatis tempus.
                      </div>
                    </div>
                    <div className="chat-message-left pb-4">
                      <div>
                        <img
                          src="https://bootdey.com/img/Content/avatar/avatar3.png"
                          className="rounded-full mr-1"
                          alt="Sharon Lessman"
                          width={40}
                          height={40}
                        />
                        <div className="text-gray-700 text-xs whitespace-no-wrap mt-2">
                          2:37 am
                        </div>
                      </div>
                      <div className="flex-shrink-1 bg-gray-100 rounded py-2 px-3 ml-3">
                        <div className="font-bold mb-1">
                          Sharon Lessman
                        </div>
                        Cras pulvinar, sapien id vehicula aliquet, diam velit
                        elementum orci.
                      </div>
                    </div>
                    <div className="chat-message-right mb-4">
                      <div>
                        <img
                          src="https://bootdey.com/img/Content/avatar/avatar1.png"
                          className="rounded-full mr-1"
                          alt="Chris Wood"
                          width={40}
                          height={40}
                        />
                        <div className="text-gray-700 text-xs whitespace-no-wrap mt-2">
                          2:38 am
                        </div>
                      </div>
                      <div className="flex-shrink-1 bg-gray-100 rounded py-2 px-3 mr-3">
                        <div className="font-bold mb-1">You</div>
                        Lorem ipsum dolor sit amet, vis erat denique in, dicunt
                        prodesset te vix.
                      </div>
                    </div>
                    <div className="chat-message-left pb-4">
                      <div>
                        <img
                          src="https://bootdey.com/img/Content/avatar/avatar3.png"
                          className="rounded-full mr-1"
                          alt="Sharon Lessman"
                          width={40}
                          height={40}
                        />
                        <div className="text-gray-700 text-xs whitespace-no-wrap mt-2">
                          2:39 am
                        </div>
                      </div>
                      <div className="flex-shrink-1 bg-gray-100 rounded py-2 px-3 ml-3">
                        <div className="font-bold mb-1">
                          Sharon Lessman
                        </div>
                        Sit meis deleniti eu, pri vidit meliore docendi ut, an
                        eum erat animal commodo.
                      </div>
                    </div>
                    <div className="chat-message-right mb-4">
                      <div>
                        <img
                          src="https://bootdey.com/img/Content/avatar/avatar1.png"
                          className="rounded-full mr-1"
                          alt="Chris Wood"
                          width={40}
                          height={40}
                        />
                        <div className="text-gray-700 text-xs whitespace-no-wrap mt-2">
                          2:40 am
                        </div>
                      </div>
                      <div className="flex-shrink-1 bg-gray-100 rounded py-2 px-3 mr-3">
                        <div className="font-bold mb-1">You</div>
                        Cum ea graeci tractatos.
                      </div>
                    </div>
                    <div className="chat-message-right mb-4">
                      <div>
                        <img
                          src="https://bootdey.com/img/Content/avatar/avatar1.png"
                          className="rounded-full mr-1"
                          alt="Chris Wood"
                          width={40}
                          height={40}
                        />
                        <div className="text-gray-700 text-xs whitespace-no-wrap mt-2">
                          2:41 am
                        </div>
                      </div>
                      <div className="flex-shrink-1 bg-gray-100 rounded py-2 px-3 mr-3">
                        <div className="font-bold mb-1">You</div>
                        Morbi finibus, lorem id placerat ullamcorper, nunc enim
                        ultrices massa, id dignissim metus urna eget purus.
                      </div>
                    </div>
                    <div className="chat-message-left pb-4">
                      <div>
                        <img
                          src="https://bootdey.com/img/Content/avatar/avatar3.png"
                          className="rounded-full mr-1"
                          alt="Sharon Lessman"
                          width={40}
                          height={40}
                        />
                        <div className="text-gray-700 text-xs whitespace-no-wrap mt-2">
                          2:42 am
                        </div>
                      </div>
                      <div className="flex-shrink-1 bg-gray-100 rounded py-2 px-3 ml-3">
                        <div className="font-bold mb-1">
                          Sharon Lessman
                        </div>
                        Sed pulvinar, massa vitae interdum pulvinar, risus
                        lectus porttitor magna, vitae commodo lectus mauris et
                        velit. Proin ultricies placerat imperdiet. Morbi varius
                        quam ac venenatis tempus.
                      </div>
                    </div>
                    <div className="chat-message-right mb-4">
                      <div>
                        <img
                          src="https://bootdey.com/img/Content/avatar/avatar1.png"
                          className="rounded-full mr-1"
                          alt="Chris Wood"
                          width={40}
                          height={40}
                        />
                        <div className="text-gray-700 text-xs whitespace-no-wrap mt-2">
                          2:43 am
                        </div>
                      </div>
                      <div className="flex-shrink-1 bg-gray-100 rounded py-2 px-3 mr-3">
                        <div className="font-bold mb-1">You</div>
                        Lorem ipsum dolor sit amet, vis erat denique in, dicunt
                        prodesset te vix.
                      </div>
                    </div>
                    <div className="chat-message-left pb-4">
                      <div>
                        <img
                          src="https://bootdey.com/img/Content/avatar/avatar3.png"
                          className="rounded-full mr-1"
                          alt="Sharon Lessman"
                          width={40}
                          height={40}
                        />
                        <div className="text-gray-700 text-xs whitespace-no-wrap mt-2">
                          2:44 am
                        </div>
                      </div>
                      <div className="flex-shrink-1 bg-gray-100 rounded py-2 px-3 ml-3">
                        <div className="font-bold mb-1">
                          Sharon Lessman
                        </div>
                        Sit meis deleniti eu, pri vidit meliore docendi ut, an
                        eum erat animal commodo.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-grow-0 py-3 px-4 border-t">
                  <div className="relative flex items-stretch w-full">
                    <input
                      type="text"
                      className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded"
                      placeholder="Type your message"
                    />
                    <button className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline bg-blue-600 text-white hover:bg-blue-600">Send</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default UserInbox;

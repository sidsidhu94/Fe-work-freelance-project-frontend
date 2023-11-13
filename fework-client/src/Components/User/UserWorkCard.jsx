import { React, useState, useEffect } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Button,
} from "@nextui-org/react";
import { useSelector } from "react-redux";
import axios from "axios";

const UserWorkCard = () => {
  const [userwork, setUserwork] = useState([]);

  const { userInfo } = useSelector((state) => state.user);
  const userId = userInfo?.user_id;

  useEffect(() => {
    const userwork = async () => {
      const response = await axios.get(
        `http://127.0.0.1:8000/api/account/user-work/${userId}`
      );
      console.log(response.data, ">>>>>>>>>>>>this.");
      setUserwork(response.data);
    };
    userwork();
  }, []);

  useEffect(() => {
    console.log(userwork, "stateeee");
    let res = userwork?.images?.map((obj) => obj.image);
    console.log(res, "imagesss");
    console.log(Array.isArray(userwork?.images));
  }, [userwork]);

  return (
    <div className="flex flex-wrap gap-10">
      {userwork?.map((data) => {
        return (
          <>
            <div  className="w-72 h-72">
              <Card
                isFooterBlurred
                className="w-full h-full col-span-12 sm:col-span-7 rounded-lg"
              >
                {/* <CardHeader className="absolute z-10 top-1 flex-col items-start">
        
        <p className="text-tiny text-white uppercase font-bold">Your day your way</p>
        <h4 className="text-white font-bold uppercase  text-xl">Your checklist for better sleep</h4>
      </CardHeader> */}

                <Image
                  removeWrapper
                  alt="Relaxing app background"
                  className="z-0 w-full h-full object-cover rounded-lg"
                  src={data?.images?.[0].image}
                />
                <CardHeader className="absolute z-10 bottom-1 flex-col items-start ">
                  <p className="text-tiny text-cyan-700 uppercase font-bold">
                    {data.work_caption}
                  </p>
                  <h4 className="text-cyan-700 uppercase text-xl">
                    {data.work_description}
                  </h4>
                </CardHeader>
              </Card>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default UserWorkCard;

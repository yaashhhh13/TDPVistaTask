// import React, { useEffect } from "react";
// import axios from "axios"
// import { Navigate } from "react-router-dom";
// import { useUserContext } from "../context/UserContext";

// export default function ProtectedRoute({ children }) {
//   const { user, setUser } = useUserContext();

// //   const getUser = async () => {
// //     try {
// //       const res = await axios.post(
// //         "http://localhost:8000/api/v1/user/get-user",
// //         {
// //           token: localStorage.getItem("token"),
// //         },
// //         {
// //           headers: {
// //             Authorization: `Bearer ${localStorage.getItem("token")}`,
// //           },
// //         }
// //       );
// //       console.log(res)
// //       if (res.data.success) {
// //         setUser(res.data.data);
// //       } else {
// //         <Navigate to="/login" />;
// //         localStorage.clear();
// //       }
// //     } catch (error) {
// //       localStorage.clear();
// //       console.log(error);
// //     }
// //   };

//   useEffect(() => {
//     if (!user) {
//       getUser();
//     }
//   }, [user]);

//   if (localStorage.getItem("token")) {
//     return children;
//   } else {
//     return <Navigate to="/login" />;
//   }
// }

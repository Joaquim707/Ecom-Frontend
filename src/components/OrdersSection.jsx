// import React, { useEffect, useState } from "react";
// import {
//   Box,
//   Typography,
//   Paper,
//   Button,
//   CircularProgress,
//   Divider,
// } from "@mui/material";
// import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
// import { useNavigate } from "react-router-dom";

// const OrdersSection = () => {
//   const navigate = useNavigate();
//   const [orders, setOrders] = useState([]);
//   const [loading, setLoading] = useState(true);

//   // Pagination state
//   const [currentPage, setCurrentPage] = useState(1);
//   const ordersPerPage = 5;

//   const fetchOrders = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       if (!token) return;

//       const res = await fetch("http://localhost:5000/api/orders/my-orders", {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       const data = await res.json();
//       console.log("Fetched orders:", data);

//       setOrders(data.orders || []);
//     } catch (err) {
//       console.log("Error fetching orders", err);
//       setOrders([]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchOrders();
//   }, []);

//   // Calculate total quantity for an order
//   const getTotalQuantity = (order) => {
//     return order.items.reduce((total, item) => total + item.quantity, 0);
//   };

//   // Get paginated orders
//   const indexOfLastOrder = currentPage * ordersPerPage;
//   const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
//   const paginatedOrders = orders.slice(indexOfFirstOrder, indexOfLastOrder);

//   const handleNext = () => {
//     if (currentPage < Math.ceil(orders.length / ordersPerPage)) {
//       setCurrentPage((prev) => prev + 1);
//     }
//   };

//   const handlePrev = () => {
//     if (currentPage > 1) {
//       setCurrentPage((prev) => prev - 1);
//     }
//   };

//   if (loading) {
//     return (
//       <Box textAlign="center" mt={5}>
//         <CircularProgress />
//       </Box>
//     );
//   }

//   if (!Array.isArray(orders) || orders.length === 0) {
//     return (
//       <Box>
//         <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
//           Orders & Returns
//         </Typography>

//         <Paper
//           sx={{
//             p: 3,
//             textAlign: "center",
//             minHeight: 300,
//             border: "1px solid #e9e9eb",
//             borderRadius: 0,
//             boxShadow: "none",
//           }}
//         >
//           <ShoppingBagIcon sx={{ fontSize: 80, color: "#696e79", mb: 2 }} />
//           <Typography variant="h6" sx={{ mb: 1 }}>
//             No Orders Yet
//           </Typography>
//           <Typography color="text.secondary" sx={{ mb: 3 }}>
//             You haven't placed any orders yet.
//           </Typography>
//           <Button
//             variant="contained"
//             onClick={() => navigate("/")}
//             sx={{
//               bgcolor: "#ff3f6c",
//               "&:hover": { bgcolor: "#e63960" },
//               borderRadius: 0,
//             }}
//           >
//             Start Shopping
//           </Button>
//         </Paper>
//       </Box>
//     );
//   }

//   return (
//     <Box sx={{ width: "100%" }}>
//       <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
//         Orders & Returns
//       </Typography>

//       {paginatedOrders.map((order) => (
//         <Paper
//           key={order._id}
//           sx={{
//             p: 3,
//             mb: 2,
//             border: "1px solid #e9e9eb",
//             borderRadius: 0,
//             boxShadow: "none",
//             width: "800px",
//           }}
//         >
//           <Box sx={{ display: "flex", justifyContent: "space-between" }}>
//             <Typography sx={{ fontWeight: 700 }}>
//               Order #{order._id.slice(-6).toUpperCase()}
//             </Typography>

//             <Typography sx={{ fontWeight: 600, color: "#ff3f6c" }}>
//               ₹{order.pricing.totalAmount}
//             </Typography>
//           </Box>

//           <Typography color="text.secondary" sx={{ mt: 1 }}>
//             {new Date(order.createdAt).toLocaleDateString()}
//           </Typography>

//           <Box sx={{ mt: 2 }}>
//             <Box sx={{ display: "flex", gap: 1, mt: 1 }}>
//               {order.items.map((item) => (
//                 <Typography
//                   key={item._id}
//                   component="img"
//                   src={item.image}
//                   alt="product"
//                   sx={{
//                     width: 60,
//                     height: 46,
//                     cursor: "pointer",
//                   }}
//                 />
//               ))}
//             </Box>
//           </Box>

//           <Divider sx={{ my: 2 }} />

//           <Box
//             sx={{
//               display: "flex",
//               justifyContent: "space-between",
//               mb: 1,
//             }}
//           >
//             <Typography sx={{ fontWeight: 600 }}>Total Items:</Typography>
//             <Typography sx={{ fontWeight: 600 }}>
//               {getTotalQuantity(order)}{" "}
//               {getTotalQuantity(order) === 1 ? "item" : "items"}
//             </Typography>
//           </Box>

//           <Button
//             variant="outlined"
//             fullWidth
//             sx={{
//               mt: 2,
//               borderRadius: 0,
//               borderColor: "#d4d5d9",
//             }}
//             onClick={() =>
//               navigate(`/order-confirmation/${order._id}`, {
//                 state: { fromProfile: true },
//               })
//             }
//           >
//             View Order Details
//           </Button>
//         </Paper>
//       ))}

//       {/* PAGINATION BUTTONS */}
//       <Box sx={{ display: "flex", justifyContent: "space-between", mt: 3 }}>
//         <Button
//           variant="outlined"
//           disabled={currentPage === 1}
//           onClick={handlePrev}
//         >
//           Previous
//         </Button>

//         <Typography sx={{ mt: 1 }}>
//           Page {currentPage} of {Math.ceil(orders.length / ordersPerPage)}
//         </Typography>

//         <Button
//           variant="outlined"
//           disabled={currentPage === Math.ceil(orders.length / ordersPerPage)}
//           onClick={handleNext}
//         >
//           Next
//         </Button>
//       </Box>
//     </Box>
//   );
// };

// export default OrdersSection;

import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Paper,
  Button,
  CircularProgress,
  Divider,
} from "@mui/material";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { useNavigate } from "react-router-dom";

const OrdersSection = () => {
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const ordersPerPage = 5;

  const fetchOrders = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) return;

      const res = await fetch("http://localhost:5000/api/orders/my-orders", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();
      console.log("Fetched orders:", data);

      setOrders(data.orders || []);
    } catch (err) {
      console.log("Error fetching orders", err);
      setOrders([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  // Calculate total quantity for an order
  const getTotalQuantity = (order) => {
    return order.items.reduce((total, item) => total + item.quantity, 0);
  };

  // Get paginated orders
  const indexOfLastOrder = currentPage * ordersPerPage;
  const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
  const paginatedOrders = orders.slice(indexOfFirstOrder, indexOfLastOrder);

  const handleNext = () => {
    if (currentPage < Math.ceil(orders.length / ordersPerPage)) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  if (loading) {
    return (
      <Box textAlign="center" mt={5}>
        <CircularProgress />
      </Box>
    );
  }

  if (!Array.isArray(orders) || orders.length === 0) {
    return (
      <Box sx={{ px: { xs: 2, sm: 3 } }}>
        <Typography
          variant="h5"
          sx={{
            fontWeight: 700,
            mb: 2,
            fontSize: { xs: "1.25rem", sm: "1.5rem" },
          }}
        >
          Orders & Returns
        </Typography>

        <Paper
          sx={{
            p: { xs: 2, sm: 3 },
            textAlign: "center",
            minHeight: { xs: 250, sm: 300 },
            border: "1px solid #e9e9eb",
            borderRadius: 0,
            boxShadow: "none",
          }}
        >
          <ShoppingBagIcon
            sx={{
              fontSize: { xs: 60, sm: 80 },
              color: "#696e79",
              mb: 2,
            }}
          />
          <Typography
            variant="h6"
            sx={{
              mb: 1,
              fontSize: { xs: "1rem", sm: "1.25rem" },
            }}
          >
            No Orders Yet
          </Typography>
          <Typography
            color="text.secondary"
            sx={{
              mb: 3,
              fontSize: { xs: "0.875rem", sm: "1rem" },
            }}
          >
            You haven't placed any orders yet.
          </Typography>
          <Button
            variant="contained"
            onClick={() => navigate("/")}
            sx={{
              bgcolor: "#ff3f6c",
              "&:hover": { bgcolor: "#e63960" },
              borderRadius: 0,
              px: { xs: 3, sm: 4 },
              py: { xs: 1, sm: 1.5 },
              fontSize: { xs: "0.875rem", sm: "1rem" },
            }}
          >
            Start Shopping
          </Button>
        </Paper>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        width: { xs: "100%", sm: "100%", md: "800px" },
        px: { xs: 2, sm: 3, md: 0 },
      }}
    >
      <Typography
        variant="h5"
        sx={{
          fontWeight: 700,
          mb: 2,
          fontSize: { xs: "1.25rem", sm: "1.5rem" },
        }}
      >
        Orders & Returns
      </Typography>

      {paginatedOrders.map((order) => (
        <Paper
          key={order._id}
          sx={{
            p: { xs: 2, sm: 3 },
            mb: 2,
            border: "1px solid #e9e9eb",
            borderRadius: 0,
            boxShadow: "none",
            width: "100%",
            maxWidth: { xs: "100%", sm: "100%", md: "800px", lg: "100%" },
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: { xs: "column", sm: "row" },
              gap: { xs: 1, sm: 0 },
            }}
          >
            <Typography
              sx={{
                fontWeight: 700,
                fontSize: { xs: "0.875rem", sm: "1rem" },
              }}
            >
              Order #{order._id.slice(-6).toUpperCase()}
            </Typography>

            <Typography
              sx={{
                fontWeight: 600,
                color: "#ff3f6c",
                fontSize: { xs: "1rem", sm: "1.125rem" },
              }}
            >
              ₹{order.pricing.totalAmount}
            </Typography>
          </Box>

          <Typography
            color="text.secondary"
            sx={{
              mt: 1,
              fontSize: { xs: "0.75rem", sm: "0.875rem" },
            }}
          >
            {new Date(order.createdAt).toLocaleDateString()}
          </Typography>

          <Box sx={{ mt: 2 }}>
            <Box
              sx={{
                display: "flex",
                gap: 1,
                mt: 1,
                flexWrap: "wrap",
                justifyContent: { xs: "flex-start", sm: "flex-start" },
              }}
            >
              {order.items.map((item, index) => (
                <Box
                  key={item._id}
                  component="img"
                  src={item.image}
                  alt="product"
                  sx={{
                    width: { xs: 50, sm: 60 },
                    height: { xs: 38, sm: 46 },
                    cursor: "pointer",
                    border: "1px solid #e0e0e0",
                    objectFit: "cover",
                  }}
                />
              ))}
            </Box>
          </Box>

          <Divider sx={{ my: 2 }} />

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              mb: 1,
            }}
          >
            <Typography
              sx={{
                fontWeight: 600,
                fontSize: { xs: "0.875rem", sm: "1rem" },
              }}
            >
              Total Items:
            </Typography>
            <Typography
              sx={{
                fontWeight: 600,
                fontSize: { xs: "0.875rem", sm: "1rem" },
              }}
            >
              {getTotalQuantity(order)}{" "}
              {getTotalQuantity(order) === 1 ? "item" : "items"}
            </Typography>
          </Box>

          <Button
            variant="outlined"
            fullWidth
            sx={{
              mt: 2,
              borderRadius: 0,
              borderColor: "#d4d5d9",
              fontSize: { xs: "0.875rem", sm: "1rem" },
              py: { xs: 1, sm: 1.5 },
            }}
            onClick={() =>
              navigate(`/order-confirmation/${order._id}`, {
                state: { fromProfile: true },
              })
            }
          >
            View Order Details
          </Button>
        </Paper>
      ))}

      {/* PAGINATION BUTTONS */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mt: 3,
          flexDirection: { xs: "column", sm: "row" },
          gap: { xs: 2, sm: 0 },
        }}
      >
        <Button
          variant="outlined"
          disabled={currentPage === 1}
          onClick={handlePrev}
          sx={{
            width: { xs: "100%", sm: "auto" },
            fontSize: { xs: "0.875rem", sm: "1rem" },
          }}
        >
          Previous
        </Button>

        <Typography
          sx={{
            mt: { xs: 0, sm: 1 },
            fontSize: { xs: "0.875rem", sm: "1rem" },
          }}
        >
          Page {currentPage} of {Math.ceil(orders.length / ordersPerPage)}
        </Typography>

        <Button
          variant="outlined"
          disabled={currentPage === Math.ceil(orders.length / ordersPerPage)}
          onClick={handleNext}
          sx={{
            width: { xs: "100%", sm: "auto" },
            fontSize: { xs: "0.875rem", sm: "1rem" },
          }}
        >
          Next
        </Button>
      </Box>
    </Box>
  );
};

export default OrdersSection;

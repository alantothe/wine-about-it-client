import React from "react";
import { Card, CardBody, Typography, Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

export default function OrderHistory({ orders }) {
  if (!orders || orders.length === 0) {
    return (
      <Card className="w-full">
        <div className="bg-black text-white text-center py-6 font-bold text-3xl">
          Order History
        </div>
        <CardBody>
          <div className="text-center py-4 text-gray-600">
            No order history available.
          </div>
        </CardBody>
      </Card>
    );
  }

  const handleReorder = (order) => {
    // Handle reorder logic here!
    console.log("Reordering:", order);
  };

  const lastThreeOrders = orders.slice(Math.max(orders.length - 3, 0));

  return (
    <Card className="w-full">
      <div className="bg-black text-white text-center py-6 font-bold text-3xl">
        Order History
      </div>
      <CardBody className="flex flex-col">
        {lastThreeOrders.map((order, index) => (
          <div key={index} className="mb-4">
            <div className="flex items-center justify-between">
              <Link
                to={`/wine/${order.productId}`}
                className="block text-gray-500 hover:underline"
              >
                <Typography color="blue-gray" className="font-medium">
                  {order.productName}
                </Typography>
              </Link>
              <Button
                onClick={() => handleReorder(order)}
                className="bg-black hover:bg-red-800 border-none rounded-none text-white ml-4"
                ripple="light"
              >
                Reorder
              </Button>
            </div>
            <div className="flex mt-2">
              <Typography color="blue-gray" className="font-medium">
                ${order.total}
              </Typography>
              <Typography
                variant="small"
                color="gray"
                className="font-normal opacity-75 ml-4"
              >
                Order Number: {order.orderNumber}
              </Typography>
              <Typography
                variant="small"
                color="gray"
                className="font-normal opacity-75 ml-4"
              >
                Status: {order.status}
              </Typography>
            </div>
            <hr className="w-full h-0.5 bg-gray-300 mt-2" /> {/* Line break */}
          </div>
        ))}
      </CardBody>
      <div className="flex justify-center mt-4">
        <Button
          color="gray"
          className="bg-black hover:bg-red-800 border-none mb-5 rounded-none text-white hover:text-black-500"
          ripple="light"
        >
          <Link to="/order-history">View Order History</Link>
        </Button>
      </div>
    </Card>
  );
}

"use-client";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Modal, Rating } from "@mui/material";
import { useState } from "react";

export default function ProductCards({
  id,
  title,
  image,
  description,
  rating,
  price,
  category,
}) {
  return (
    <>
      <Card sx={{ width: 345, height: 580 }} onClick={() => setShowModal(true)}>
        <CardMedia sx={{ height: 300 }} image={image} title="green iguana" />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {title}
          </Typography>
          <CardContent className="flex space-x-12 items-center">
            <div className="font-semibold">
              Rs. <span className="text-green-600 text-3xl">{price}</span>
            </div>
            <div
              className={`text-white font-normal p-0.5 rounded-lg ${
                category === "electronics"
                  ? "bg-pink-500"
                  : category === "men's clothing"
                  ? "bg-green-500"
                  : category === "women's clothing"
                  ? "bg-blue-500"
                  : category === "jewelery"
                  ? "bg-yellow-500"
                  : ""
              }`}
            >
              {category}
            </div>
          </CardContent>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {description}
          </Typography>
          <Rating name="read-only" value={rating.rate} readOnly />
        </CardContent>
      </Card>
    </>
  );
}

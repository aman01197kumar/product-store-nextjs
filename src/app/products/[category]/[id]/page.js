"use client";

import { Card, CardContent, Modal, Typography } from "@mui/material";
import React, { useState } from "react";

const modal = ({ params }) => {
  const { category, id } = params;

  const correctedCategory = (str) => {
    return str.split("%20").join(" ");
  };

  const [open, setOpen] = useState(true);
  const handleClose = () => {
    setOpen(false);
    router.back(); // Close modal and navigate back
  };
  return (
    <Modal open={open} onClose={handleClose}>
      <Card sx={{ width: 400, margin: "auto", marginTop: "20vh", p: 4 }}>
        <CardContent>
          <Typography variant="h5">Modal Product Details</Typography>
          <Typography variant="body1">
            Category: {correctedCategory(category)}
          </Typography>

          <Typography variant="body1">ID: {id}</Typography>
          <button className='font-bold mt-10' onClick={handleClose}>Close</button>
        </CardContent>
      </Card>
    </Modal>
  );
};

export default modal;

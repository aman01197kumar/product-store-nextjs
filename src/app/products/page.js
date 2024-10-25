"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductCards from "../components/ProductCards";
import Link from "next/link";
import Filters from "../components/Filters";

const Products = () => {
  const [data, setData] = useState([]);
  const [sortBy, setSortBy] = useState("");
  const [fetchedData, setFetchedData] = useState([]); // Store the fetched data

  const fetchData = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      setFetchedData(response.data); // Store fetched data
      setData(response.data); // Set initial data
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    let sortedData = [...fetchedData]; // Create a copy of the fetched data

    if (sortBy === "Ascending") {
      sortedData.sort((a, b) => a.price - b.price);
    } else if (sortBy === "Descending") {
      sortedData.sort((a, b) => b.price - a.price);
    }

    setData(sortedData);
  }, [sortBy, fetchedData]); // Add fetchedData as a dependency

  return (
    <>
      <Filters sortBy={sortBy} setSortBy={setSortBy} />
      <div className="flex flex-wrap justify-center gap-4 p-4">
        {data?.map(
          ({ id, title, image, description, rating, price, category }) => (
            <Link
              key={id}
              href={{
                pathname: `/products/${category}/${id}`,
              }}
            >
              <ProductCards
                id={id}
                title={title}
                image={image}
                description={description}
                rating={rating}
                price={price}
                category={category}
              />
            </Link>
          )
        )}
      </div>
    </>
  );
};

export default Products;

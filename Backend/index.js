import express from "express";

const app = express();

app.get("/api/products", (req, res) => {
  const products = [
    {
      id: 1,
      name: "table wooden",
      price: 200,
      image: "https://picsum.photos/seed/picsum/200/300",
    },
    {
      id: 2,
      name: "metal table",
      price: 300,
      image: "https://picsum.photos/seed/picsum/200/300",
    },
    {
      id: 3,
      name: "Lamp",
      price: 400,
      image: "https://picsum.photos/seed/picsum/200/300",
    },
    {
      id: 4,
      name: "Chair",
      price: 500,
      image: "https://picsum.photos/seed/picsum/200/300",
    },
  ];

  if (req.query.search) {
    const FilterProducts = products.filter((product) =>
      product.name.includes(req.query.search)
    );
    res.send(FilterProducts);
    return;
  }

  setTimeout(() => {
    res.send(products);
  }, 3000);
});

const port = process.env.PORT || 5250;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

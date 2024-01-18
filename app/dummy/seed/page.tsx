import stripe from "@/lib/stripe";
import { DummyProduct } from "@/types";

async function getDummmy() {
  const response = await fetch("https:///dummyjson.com/products?limit=9");
  const dummyData = await response.json();
  const products = dummyData.products.map((product: DummyProduct) => {
    return {
      id: product.id,
      name: product.title,
      description: product.description,
      images: product.images,
      default_price_data: {
        unit_amount_decimal: product.price,
        currency: "BRL",
      },
    };
  });

  return products;
}

export default function Seed() {
  return (
    <div className="container flex items-center justify-center my-10">
      <h1 className="text-3xl text-green-600 font-extrabold">
        Dummy data created in your Stripe inventory.If oyu don't see it on your
        products Dashboard. Take a look at you console.log
      </h1>
    </div>
  );
}

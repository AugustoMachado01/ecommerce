import stripe from "@/lib/stripe";
import { DummyProduct } from "@/types";

async function getDummmyProduct() {
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

async function seedDummyData() {
  const products = await getDummmyProduct();
  await products.map(async (product: any) => {
    try {
      const productCreated = await stripe.products.create(product);

      console.log("entrou nigga ===", productCreated);
    } catch (error: any) {
      console.log("STRIPE_CREATE_ERROR:", error.message);
    }
  });
}

export default async function Seed() {
  await seedDummyData();
  return (
    <div className="container flex items-center justify-center my-10">
      <h1 className="text-3xl text-green-600 font-extrabold">
        Dummy data created in your Stripe inventory.If oyu don't see it on your
        products Dashboard. Take a look at you console.log
      </h1>
    </div>
  );
}

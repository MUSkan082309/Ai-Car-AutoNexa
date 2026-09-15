/*require("dotenv").config({ path: ".env.local" });
/*
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const { PrismaClient, Prisma } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  await prisma.car.createMany({
    data: [
      {
        make: "Honda",
        model: "City",
        year: 2022,
        price: 1200000,
        mileage: 15000,
        color: "White",
        fuelType: "Petrol",
        transmission: "Manual",
        bodyType: "Sedan",
        description: "Well maintained Honda City",
        images: ["https://example.com/car1.jpg"],
        seats: 5,
        featured: true,
        status: "AVAILABLE",
      },
      {
        make: "Toyota",
        model: "Innova",
        year: 2021,
        price: 1800000,
        mileage: 30000,
        color: "Black",
        fuelType: "Diesel",
        transmission: "Automatic",
        bodyType: "SUV",
        description: "Family car",
        images: ["https://example.com/car2.jpg"],
        seats: 7,
        featured: false,
        status: "AVAILABLE",
      }
    ],
  });
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });*/

/*require("dotenv").config({ path: require("path").resolve(__dirname, "../.env.local") });

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Seeding started...");

  await prisma.car.createMany({
    data: [
      {
        make: "Honda",
        model: "City",
        year: 2022,
        price: 1200000,
        mileage: 15000,
        color: "White",
        fuelType: "Petrol",
        transmission: "Manual",
        bodyType: "Sedan",
        description: "Well maintained Honda City",
        images: ["https://example.com/car1.jpg"],
        seats: 5,
        featured: true,
        status: "AVAILABLE",
      },
      {
        make: "Toyota",
        model: "Innova",
        year: 2021,
        price: 1800000,
        mileage: 30000,
        color: "Black",
        fuelType: "Diesel",
        transmission: "Automatic",
        bodyType: "SUV",
        description: "Family car",
        images: ["https://example.com/car2.jpg"],
        seats: 7,
        featured: false,
        status: "AVAILABLE",
      }
    ],
  });

  console.log("✅ Seeding completed");
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error("❌ Error:", e);
    await prisma.$disconnect();
    process.exit(1);
  });*/
 /* 
require("dotenv").config({ path: require("path").resolve(__dirname, "../.env.local") });

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Seeding started...");

  // ⚠️ optional but recommended: clean old data first
  await prisma.car.deleteMany();

  await prisma.car.createMany({
    data: [
      {
        make: "Honda",
        model: "City",
        year: 2022,
        price: 1200000,
        mileage: 15000,
        color: "White",
        fuelType: "Petrol",
        transmission: "Manual",
        bodyType: "Sedan",
        description: "Well maintained Honda City",
        images: [
          "https://images.unsplash.com/photo-1542362567-b07e54358753?w=800"
        ],
        seats: 5,
        featured: true,
        status: "AVAILABLE",
      },
      {
        make: "Toyota",
        model: "Innova",
        year: 2021,
        price: 1800000,
        mileage: 30000,
        color: "Black",
        fuelType: "Diesel",
        transmission: "Automatic",
        bodyType: "SUV",
        description: "Family car",
        images: [
          "https://images.unsplash.com/photo-1493238792000-8113da705763?w=800"
        ],
        seats: 7,
        featured: false,
        status: "AVAILABLE",
      },
      // 👉 NEW DATA ADDED
      {
        make: "Hyundai",
        model: "i20",
        year: 2024,
        price: 950000,
        mileage: 5000,
        color: "Red",
        fuelType: "Petrol",
        transmission: "Automatic",
        bodyType: "Hatchback",
        description: "Brand new Hyundai i20 added via seed",
        images: [
          "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800"
        ],
        seats: 5,
        featured: true,
        status: "AVAILABLE",
      }
    ],
  });

  console.log("✅ Seeding completed");
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error("❌ Error:", e);
    await prisma.$disconnect();
    process.exit(1);
  });*/

require("dotenv").config();

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Seeding started...");

  // Purana data delete
  await prisma.car.deleteMany();

  // Naya data insert
  await prisma.car.createMany({
  data: [
    {
      make: "Honda",
      model: "City",
      year: 2023,
      price: 18000,
      mileage: 13,
      color: "Blue",
      fuelType: "Diesel",
      transmission: "Semi-Automatic",
      bodyType: "Sedan",
      description: "Honda City in excellent condition",
      images: ["/car/honda city.JPG"],
      seats: 5,
      featured: true,
      status: "AVAILABLE",
    },
    {
      make: "Hyundai",
      model: "i20",
      year: 2023,
      price: 14000,
      mileage: 16,
      color: "Red",
      fuelType: "Petrol",
      transmission: "Automatic",
      bodyType: "Hatchback",
      description: "Hyundai i20 with low mileage",
      images: ["/car/hyundai i20.JPG"],
      seats: 5,
      featured: true,
      status: "AVAILABLE",
    },
    {
      make: "Mercedes-Benz",
      model: "G-Class",
      year: 2023,
      price: 200000,
      mileage: 0,
      color: "Dark Blue",
      fuelType: "Gasoline",
      transmission: "Automatic",
      bodyType: "SUV",
      description: "Luxury Mercedes G-Class",
      images: ["/car/g wagon1.JPG"],
      seats: 5,
      featured: true,
      status: "AVAILABLE",
    },
  ],
});

console.log("✅ Seeding completed");
}

main()
  .catch((e) => {
    console.error("❌ Error:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
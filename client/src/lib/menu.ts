export type Category = {
  slug: string;
  name: string;
  eyebrow: string;
  description: string;
  image: string;
  accent: string;
};

export type FoodItem = {
  slug: string;
  name: string;
  category: string;
  categorySlug: string;
  description: string;
  price: string;
  image: string;
  tag?: string;
};

const image = (id: string, width = 900) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=84`;

export const categories: Category[] = [
  {
    slug: "pizza",
    name: "Pizza",
    eyebrow: "Wood-fired favourites",
    description: "Golden crusts, generous toppings, and the right amount of stretch.",
    image: image("photo-1579751626657-72bc17010498"),
    accent: "#f5c84b",
  },
  {
    slug: "burgers",
    name: "Burgers",
    eyebrow: "Stacked with intention",
    description: "Juicy, messy, and built for that first impossible-to-resist bite.",
    image: image("photo-1568901346375-23c9450c58cd"),
    accent: "#e77a3d",
  },
  {
    slug: "fried-chicken",
    name: "Fried Chicken",
    eyebrow: "Crisp comfort",
    description: "Crackle, spice, and tender pieces made for sharing—or not.",
    image: image("photo-1626082927389-6cd097cdc6ec"),
    accent: "#e9934f",
  },
  {
    slug: "rice-dishes",
    name: "Rice Dishes",
    eyebrow: "A bowl of joy",
    description: "Fragrant rice, bold sauces, and satisfying one-bowl comfort.",
    image: image("photo-1516685018646-549198525c1b"),
    accent: "#c5d96a",
  },
  {
    slug: "ghanaian-foods",
    name: "Ghanaian Foods",
    eyebrow: "Home-style soul",
    description: "Familiar flavours with a Pizzaman Chickenman touch, from jollof to kelewele.",
    image: image("photo-1601050690597-df0568f70950"),
    accent: "#89a847",
  },
  {
    slug: "sandwiches",
    name: "Sandwiches",
    eyebrow: "Between good bread",
    description: "Fresh fillings, punchy sauces, and no sad desk lunches allowed.",
    image: image("photo-1528735602780-2552fd46c7af"),
    accent: "#8ec7be",
  },
  {
    slug: "pasta",
    name: "Pasta",
    eyebrow: "Saucy business",
    description: "Silky, twirly, and generously finished with all the good stuff.",
    image: image("photo-1551183053-bf91a1d81141"),
    accent: "#dd9b63",
  },
  {
    slug: "snacks",
    name: "Snacks",
    eyebrow: "Little cravings",
    description: "Bites, sides, and crunchy distractions for every kind of pause.",
    image: image("photo-1601050690117-94f5f6fa8bd7"),
    accent: "#d8b48a",
  },
  {
    slug: "drinks",
    name: "Drinks",
    eyebrow: "Sip something good",
    description: "Bright coolers, creamy blends, and easygoing refreshment.",
    image: image("photo-1544145945-f90425340c7e"),
    accent: "#85c8dc",
  },
  {
    slug: "desserts",
    name: "Desserts",
    eyebrow: "Sweet finish",
    description: "A little indulgence is always a good idea, especially after dinner.",
    image: image("photo-1551024506-0bccd828d307"),
    accent: "#f2a8b5",
  },
];

export const foodItems: FoodItem[] = [
  {
    slug: "garden-party-pizza",
    name: "Garden Party Pizza",
    category: "Pizza",
    categorySlug: "pizza",
    description: "Roasted peppers, mushrooms, basil oil, mozzarella, and a bright tomato base.",
    price: "From GHS 85",
    image: image("photo-1579751626657-72bc17010498"),
    tag: "Vegetarian",
  },
  {
    slug: "suya-fire-pizza",
    name: "Suya Fire Pizza",
    category: "Pizza",
    categorySlug: "pizza",
    description: "Spiced beef suya, red onion, peppers, mozzarella, and a smoky pepper drizzle.",
    price: "From GHS 105",
    image: image("photo-1574071318508-1cdbab80d002"),
    tag: "Pizzaman Chickenman pick",
  },
  {
    slug: "pepperoni-after-dark",
    name: "Pepperoni After Dark",
    category: "Pizza",
    categorySlug: "pizza",
    description: "Cupped pepperoni, chilli honey, parmesan, and a chewy, blistered crust.",
    price: "From GHS 95",
    image: image("photo-1565299624946-b28f40a0ae38"),
  },
  {
    slug: "smashhouse-classic",
    name: "Smashhouse Classic",
    category: "Burgers",
    categorySlug: "burgers",
    description: "Double smashed beef, cheddar, pickles, house sauce, and a toasted brioche bun.",
    price: "From GHS 80",
    image: image("photo-1568901346375-23c9450c58cd"),
    tag: "Best seller",
  },
  {
    slug: "crispy-chicken-burger",
    name: "Crispy Chicken Burger",
    category: "Burgers",
    categorySlug: "burgers",
    description: "Crunchy chicken, slaw, pepper jam, and cool ranch in a sesame bun.",
    price: "From GHS 75",
    image: image("photo-1594212699903-ec8a3eca50f5"),
  },
  {
    slug: "green-room-burger",
    name: "Green Room Burger",
    category: "Burgers",
    categorySlug: "burgers",
    description: "Crispy plant-based patty, lettuce, tomato relish, and avocado crema.",
    price: "From GHS 72",
    image: image("photo-1520072959219-c595dc870360"),
    tag: "Plant-based",
  },
  {
    slug: "pepper-crisp-chicken",
    name: "Pepper Crisp Chicken",
    category: "Fried Chicken",
    categorySlug: "fried-chicken",
    description: "Buttermilk-marinated chicken, pepper crust, and a sticky hot honey glaze.",
    price: "From GHS 78",
    image: image("photo-1626082927389-6cd097cdc6ec"),
    tag: "Spicy",
  },
  {
    slug: "coconut-crunch-wings",
    name: "Coconut Crunch Wings",
    category: "Fried Chicken",
    categorySlug: "fried-chicken",
    description: "Golden wings finished with toasted coconut, lime, and a cool herb dip.",
    price: "From GHS 68",
    image: image("photo-1567620832903-9fc6debc209f"),
  },
  {
    slug: "jollof-and-joy",
    name: "Jollof & Joy",
    category: "Ghanaian Foods",
    categorySlug: "ghanaian-foods",
    description: "Smoky party jollof, fried plantain, house slaw, and a choice of protein.",
    price: "From GHS 75",
    image: image("photo-1516685018646-549198525c1b"),
    tag: "Local favourite",
  },
  {
    slug: "kelewele-cups",
    name: "Kelewele Cups",
    category: "Ghanaian Foods",
    categorySlug: "ghanaian-foods",
    description: "Warm spiced plantain, roasted peanuts, ginger, and a bright lime finish.",
    price: "From GHS 42",
    image: image("photo-1601050690597-df0568f70950"),
    tag: "Vegetarian",
  },
  {
    slug: "coconut-rice-bowl",
    name: "Coconut Rice Bowl",
    category: "Rice Dishes",
    categorySlug: "rice-dishes",
    description: "Coconut rice, grilled vegetables, herbs, and a silky green pepper sauce.",
    price: "From GHS 68",
    image: image("photo-1516685018646-549198525c1b"),
    tag: "Fresh pick",
  },
  {
    slug: "creamy-tomato-rigatoni",
    name: "Creamy Tomato Rigatoni",
    category: "Pasta",
    categorySlug: "pasta",
    description: "Slow-cooked tomato, roasted garlic, parmesan, basil, and rigatoni.",
    price: "From GHS 74",
    image: image("photo-1551183053-bf91a1d81141"),
  },
  {
    slug: "clubhouse-crush",
    name: "Clubhouse Crush",
    category: "Sandwiches",
    categorySlug: "sandwiches",
    description: "Peppered chicken, smoked cheese, tomato, lettuce, and mustard mayo.",
    price: "From GHS 65",
    image: image("photo-1528735602780-2552fd46c7af"),
  },
  {
    slug: "salted-caramel-cloud",
    name: "Salted Caramel Cloud",
    category: "Desserts",
    categorySlug: "desserts",
    description: "Soft vanilla cream, caramel sauce, toasted biscuit, and sea salt.",
    price: "From GHS 48",
    image: image("photo-1551024506-0bccd828d307"),
    tag: "Sweet finish",
  },
  {
    slug: "pineapple-ginger-cooler",
    name: "Pineapple Ginger Cooler",
    category: "Drinks",
    categorySlug: "drinks",
    description: "Fresh pineapple, ginger, mint, citrus, and plenty of ice.",
    price: "From GHS 35",
    image: image("photo-1544145945-f90425340c7e"),
    tag: "Refreshing",
  },
  {
    slug: "crave-bites",
    name: "Crave Bites",
    category: "Snacks",
    categorySlug: "snacks",
    description: "A shareable box of crispy bites, smoky dip, and house pickles.",
    price: "From GHS 52",
    image: image("photo-1601050690117-94f5f6fa8bd7"),
  },
];

export const popularItems = [
  foodItems.find((item) => item.slug === "suya-fire-pizza")!,
  foodItems.find((item) => item.slug === "smashhouse-classic")!,
  foodItems.find((item) => item.slug === "jollof-and-joy")!,
  foodItems.find((item) => item.slug === "pepper-crisp-chicken")!,
  foodItems.find((item) => item.slug === "pineapple-ginger-cooler")!,
  foodItems.find((item) => item.slug === "salted-caramel-cloud")!,
];

export const getCategory = (slug?: string) => categories.find((category) => category.slug === slug);
export const getItemsForCategory = (slug?: string) => foodItems.filter((item) => item.categorySlug === slug);

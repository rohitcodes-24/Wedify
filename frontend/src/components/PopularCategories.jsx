import React from "react";

const categories = [
  {
    name: "Caterers",
    vendors: "120+ Vendors",
    image:
      "https://images.unsplash.com/photo-1555244162-803834f70033",
  },
  {
    name: "Photographers",
    vendors: "150+ Vendors",
    image:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32",
  },
  {
    name: "Decorators",
    vendors: "100+ Vendors",
    image:
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed",
  },
  {
    name: "DJs",
    vendors: "80+ Vendors",
    image:
      "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2",
  },
  {
    name: "Car Rentals",
    vendors: "50+ Vendors",
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70",
  },
  {
    name: "Makeup",
    vendors: "70+ Vendors",
    image:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9",
  },
  {
    name: "Venues",
    vendors: "90+ Vendors",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552",
  },
  {
    name: "Invitations",
    vendors: "40+ Vendors",
    image:
      "https://images.unsplash.com/photo-1525253086316-d0c936c814f8",
  },
];

const features = [
  {
    icon: "❤",
    title: "Trusted Vendors",
    desc: "Verified professionals reviewed by real couples.",
  },
  {
    icon: "🛡",
    title: "Best Prices",
    desc: "Compare options and choose what fits your budget.",
  },
  {
    icon: "📅",
    title: "Easy Booking",
    desc: "Book vendors quickly with a simple process.",
  },
  {
    icon: "📍",
    title: "Great Support",
    desc: "24/7 assistance to guide you at every step.",
  },
];

const WeddingSections = () => {
  return (
    <>
      {/* Popular Categories */}
      <section className="bg-gray-50 py-16 px-6 md:px-16">
        <div className="max-w-7xl mx-auto">

          {/* Heading */}
          <div className="flex flex-col sm:flex-row justify-between items-end sm:items-center mb-10 gap-2">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">
                Popular Categories
              </h2>

              <p className="text-gray-500 mt-1">
                Explore top-rated wedding services
              </p>
            </div>

            <a
              href="#"
              className="text-pink-600 text-sm font-semibold hover:text-pink-700 transition-colors flex items-center gap-1"
            >
              View All Categories
              <span>&rarr;</span>
            </a>
          </div>

          {/* Categories Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">

            {categories.map((category, index) => (
              <div
                key={index}
                className="group bg-white border border-gray-100 rounded-3xl p-5 text-center shadow-sm hover:shadow-xl hover:border-pink-200 transition-all duration-300 cursor-pointer"
              >
                <div className="overflow-hidden rounded-2xl mb-4">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-32 mx-auto object-cover group-hover:scale-110 transition duration-500"
                  />
                </div>

                <h3 className="font-bold text-gray-800">
                  {category.name}
                </h3>

                <p className="text-xs font-medium text-pink-500 bg-pink-50 inline-block px-2 py-1 rounded-full mt-2">
                  {category.vendors}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* Why Choose Wedify */}
      <section className="bg-pink-50 py-14 px-6 md:px-16">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">
            Why Choose <span className="text-pink-500">Wedify?</span>
          </h2>

          <p className="text-gray-500 mt-2 text-sm">
            Making your wedding planning smooth, trusted & beautiful ✨
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">

          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300 border border-pink-100"
            >
              <div className="w-14 h-14 flex items-center justify-center bg-pink-100 text-pink-500 text-2xl rounded-full mb-4 mx-auto">
                {feature.icon}
              </div>

              <h3 className="font-semibold text-lg text-gray-700 text-center">
                {feature.title}
              </h3>

              <p className="text-sm text-gray-500 mt-2 text-center">
                {feature.desc}
              </p>
            </div>
          ))}

        </div>
      </section>
    </>
  );
};

export default WeddingSections;
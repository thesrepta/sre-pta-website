import { ShoppingBag, ExternalLink, Info } from "lucide-react";

const products = [
  {
    id: "tees",
    name: "School Spirit Tees",
    price: "$15",
    image: "/sre-pta-website/images/shop/Sangaree Elementary Stars Tees.png",
    link: "https://stars.givebacks.com/shop/items/6cb45941dbf645",
    description: [
      "Show your Sangaree Elementary pride with our official school spirit shirt! Featuring our colorful Leading Under the Stars school theme, this shirt is a fun way for students to represent SRE throughout the school year.",
      "Youth sizes are currently in stock and available while supplies last. Orders will be prepared for pickup, and families will be notified when their shirts are ready.",
      "Looking for a different size? If you don't see the youth size you need or would like to order an adult size, please visit our School Spirit Shirt Pre-Order product. Pre-orders allow you to order additional youth sizes and all adult sizes that are not currently in stock.",
    ]
  },
  {
    id: "long-sleeves",
    name: "School Spirit Long Sleeves",
    price: "$22",
    image: "/sre-pta-website/images/shop/Long Sleeve Shirt.jpg",
    link: "https://stars.givebacks.com/shop/items/f3e0035d3d",
    description: [
      "This is a pre-order item, and shirts are not kept in stock.",
      "Once the pre-order closes, all shirts will be submitted to our printer as a single bulk order. Please allow approximately 4 weeks after the pre-order closes for production and delivery.",
      "When the shirts are ready, families will be notified with pickup information. We appreciate your patience as we work with our local printer to ensure every shirt is produced with care.",
      "Pre-orders will be accepted through Friday, November 13, 2026."
    ]
  },
  {
    id: "hoodies",
    name: "School Spirit Hoodies",
    price: "$27",
    image: "/sre-pta-website/images/shop/Hoodie.jpg",
    link: "https://stars.givebacks.com/shop/items/d5b2477042f855",
    description: [
      "This is a pre-order item, and hoodies are not kept in stock.",
      "Once the pre-order closes, all hoodies will be submitted to our printer as a single bulk order. Please allow approximately 4 weeks after the pre-order closes for production and delivery.",
      "When the shirts are ready, families will be notified with pickup information. We appreciate your patience as we work with our local printer to ensure every hoodie is produced with care.",
      "Pre-orders will be accepted through Friday, November 13, 2026."
    ]
  },
  {
    id: "creepy-grams",
    name: "Creepy Campfire Grams",
    price: "$5",
    image: "/sre-pta-website/images/shop/Boo Grams.png",
    link: "https://stars.givebacks.com/shop/items/45f1e4e9685355",
    description: [
      "🎃 Send a little Halloween surprise to your favorite SRE Star! 🎃",
      "Creepy Campfire Grams are Halloween-themed goodie bags delivered right at school. Parents, grandparents, family members, and friends can purchase a Gram to surprise an SRE student with a fun treat during the school day.",
      "Each $5 Creepy Campfire Gram includes a festive assortment of Halloween goodies, packed with a little spooky fun by the SRE PTA. When ordering, please be sure to include the student's first and last name, grade, and teacher so we can make sure each Gram finds the right Star!",
      "⭐ Price: $5 per Gram",
      "🎃 Delivery: Delivered to students at SRE on 10/30",
      "👻 Hosted by: Sangaree Elementary School PTA",
      "All proceeds from Creepy Campfire Grams support the SRE PTA and help fund programs, events, and experiences for our students and school community."
    ]
  }
];

export default function ShopPage() {
  return (
    <div className="flex flex-col gap-16 md:gap-24 pb-20 bg-gray-50/30">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-midnight-navy text-white px-4 py-16 md:py-24">
        {/* Background Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-10 right-10 md:top-20 md:right-32 w-24 h-24 md:w-32 md:h-32 bg-golden-yellow/20 rounded-full blur-2xl"></div>
          <div className="absolute bottom-10 left-10 w-32 h-32 bg-campfire-orange/20 rounded-full blur-2xl"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-6 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 mb-4">
            <ShoppingBag className="h-5 w-5 text-golden-yellow" />
            <span className="font-bold text-sm tracking-wide uppercase text-golden-yellow">Official PTA Store</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight">
            School <span className="text-transparent bg-clip-text bg-gradient-to-r from-golden-yellow to-campfire-orange">Store</span>
          </h1>
          <p className="text-lg md:text-xl max-w-2xl text-white/80 leading-relaxed font-medium mt-6">
            Show your Sangaree Elementary pride! Shop official spirit wear, gifts, and more. All purchases directly support the SRE PTA.
          </p>
          <div className="pt-6">
            <a 
              href="https://stars.givebacks.com/shop"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white text-midnight-navy hover:bg-gray-100 font-bold py-4 px-8 rounded-full transition-all hover:scale-105 active:scale-95 duration-200 shadow-xl"
            >
              Visit Full Store
              <ExternalLink className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="px-4 max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-midnight-navy/5 flex flex-col group"
            >
              <div className="aspect-square sm:aspect-video w-full bg-gray-100 relative overflow-hidden flex items-center justify-center p-8">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none"></div>
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 relative z-0" 
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-midnight-navy font-black text-xl px-4 py-2 rounded-full shadow-lg z-20">
                  {product.price}
                </div>
              </div>
              
              <div className="p-8 flex flex-col flex-1">
                <h2 className="text-3xl font-extrabold text-midnight-navy mb-4 group-hover:text-forest-green transition-colors">
                  {product.name}
                </h2>
                
                <div className="space-y-4 mb-8 flex-1">
                  {product.description.map((paragraph, index) => (
                    <p key={index} className="text-midnight-navy/70 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
                
                <div className="mt-auto pt-6 border-t border-gray-100">
                  <a 
                    href={product.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-campfire-orange hover:bg-orange-500 text-white font-bold py-4 px-8 rounded-xl transition-all hover:scale-105 active:scale-95 duration-200 w-full shadow-md text-lg"
                  >
                    <ShoppingBag className="h-5 w-5" />
                    Buy Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Info Section */}
      <section className="px-4 max-w-4xl mx-auto w-full mb-10">
        <div className="bg-soft-sage/30 rounded-3xl p-8 flex items-start gap-4 border border-forest-green/20">
          <Info className="h-6 w-6 text-forest-green flex-shrink-0 mt-1" />
          <div>
            <h3 className="font-bold text-midnight-navy text-lg mb-2">Shopping Information</h3>
            <p className="text-midnight-navy/70 leading-relaxed">
              All transactions are processed securely through our Givebacks store. Proceeds from all sales go directly towards funding Sangaree Elementary PTA initiatives, events, and classroom support. Thank you for your support!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

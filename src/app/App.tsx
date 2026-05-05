import { useState } from 'react';
import { motion } from 'motion/react';
import { Zap } from 'lucide-react';
import freakLabLogo from './assets/FREAKLAB-LOGO.png';
import 'font-awesome/css/font-awesome.min.css';

const products = [
  {
    id: 1,
    name: "Umbrella Cat",
    description: "A cat that shouldn't hold umbrellas... but does",
    price: "$29.99",
    image: "https://images.unsplash.com/photo-1725404780796-ccfefc4bf202?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600"
  },
  {
    id: 2,
    name: "Blue Mystery Man",
    description: "No one knows who he is. You need him anyway.",
    price: "$34.99",
    image: "https://images.unsplash.com/photo-1604028450747-1d7c8dbf787a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600"
  },
  {
    id: 3,
    name: "Painted Face Doll",
    description: "Definitely haunted. Definitely worth it.",
    price: "$39.99",
    image: "https://images.unsplash.com/photo-1675309829096-7bdc08101a40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600"
  },
  {
    id: 4,
    name: "Dark Figure",
    description: "Whimsical chaos in physical form",
    price: "$44.99",
    image: "https://images.unsplash.com/photo-1741034495171-07740c878283?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600"
  },
  {
    id: 5,
    name: "Rat King",
    description: "Your new desk guardian. Probably.",
    price: "$27.99",
    image: "https://images.unsplash.com/photo-1709104714240-423311434171?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600"
  },
  {
    id: 6,
    name: "Porcelain Mystery",
    description: "Elegant. Strange. Yours.",
    price: "$49.99",
    image: "https://images.unsplash.com/photo-1560603331-79f9495ce9b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600"
  }
];

const reviews = [
  { text: "I didn't need this… but I love it", stars: 5 },
  { text: "My friends think I'm weird now. Worth it.", stars: 5 },
  { text: "What even is this? I bought 3.", stars: 5 }
];

export default function App() {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <motion.section
        className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#39FF14] rounded-full blur-[120px]"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#39FF14] rounded-full blur-[120px]"></div>
        </div>

        <div className="relative z-10 max-w-5xl text-center space-y-8">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              {/* <Zap className="text-[#39FF14]" size={40} /> */}
              {/* <h1 className="text-6xl md:text-8xl font-black tracking-tight">
                FreakLab
              </h1> */}
              <img
                src={freakLabLogo}
                alt="FreakLab Logo"
                className="w-128"
              />
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              This shouldn't exist…<br />
              <span className="text-[#A0F435]">but you want it</span>
            </h2>
          </motion.div>

          <motion.p
            className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Weird, viral collectibles delivered to your door
          </motion.p>

          <motion.button
            className="group relative px-12 py-5 bg-[#A0F435] text-black text-xl font-bold rounded-full overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(57,255,20,0.6)]"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Get yours now</span>
          </motion.button>
        </div>
      </motion.section>

      {/* Products Section */}
      <section className="px-6 py-24 bg-gradient-to-b from-black to-gray-950">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-5xl md:text-6xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            The <span className="text-[#A0F435]">Collection</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                className="group relative bg-gray-900 rounded-2xl overflow-hidden cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onMouseEnter={() => setHoveredProduct(product.id)}
                onMouseLeave={() => setHoveredProduct(null)}
                whileHover={{ y: -8 }}
              >
                <div className="relative overflow-hidden aspect-square">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div
                    className={`absolute inset-0 bg-[#A0F435] mix-blend-multiply transition-opacity duration-300 ${
                      hoveredProduct === product.id ? 'opacity-20' : 'opacity-0'
                    }`}
                  />
                </div>

                <div className="p-6 space-y-3">
                  <h3 className="text-2xl font-bold">{product.name}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{product.description}</p>
                  <div className="flex items-center justify-between pt-4">
                    <span className="text-2xl font-bold text-[#A0F435]">{product.price}</span>
                    <button className="px-6 py-2 bg-[#A0F435] text-black font-bold rounded-full transition-all duration-300 hover:shadow-[0_0_20px_rgba(57,255,20,0.6)]">
                      Add
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="px-6 py-24 bg-black">
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              People are <span className="text-[#A0F435]">obsessed</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {reviews.map((review, index) => (
              <motion.div
                key={index}
                className="bg-gray-900 p-8 rounded-2xl border border-gray-800 hover:border-[#A0F435] transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(review.stars)].map((_, i) => (
                    <span key={i} className="text-[#A0F435] text-2xl">⭐</span>
                  ))}
                </div>
                <p className="text-gray-300 text-lg italic">"{review.text}"</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="flex flex-wrap justify-center gap-8 items-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 text-gray-400">
              <div className="w-8 h-8 bg-[#A0F435] rounded-full flex items-center justify-center">
                <span className="text-black font-bold">✓</span>
              </div>
              <span>Secure Payment</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <div className="w-8 h-8 bg-[#A0F435] rounded-full flex items-center justify-center">
                <span className="text-black font-bold">✓</span>
              </div>
              <span>Shipping to Colombia</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="px-6 py-24 bg-gradient-to-b from-black to-gray-950">
        <motion.div
          className="max-w-4xl mx-auto text-center space-y-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            What is <img
                src={freakLabLogo}
                alt="FreakLab Logo"
                className="w-32 inline-block -mt-2"
              />?
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            FreakLab is where weird ideas become real products.
            We find the strangest, most viral-worthy collectibles from around the internet
            and bring them to life. No explanation. No rules. Just pure chaos.
          </p>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-32 bg-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#A0F435] rounded-full blur-[150px]"></div>
        </div>

        <motion.div
          className="relative z-10 max-w-4xl mx-auto text-center space-y-12"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-7xl font-black leading-tight">
            Don't think too much.<br />
            <span className="text-[#A0F435]">Just get one.</span>
          </h2>

          <motion.button
            className="px-16 py-6 bg-[#A0F435] text-black text-2xl font-bold rounded-full transition-all duration-300 hover:shadow-[0_0_60px_rgba(160,244,53,0.8)]"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Order via DM
          </motion.button>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 bg-gray-950 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-3">
              <img
                src={freakLabLogo}
                alt="FreakLab Logo"
                className="w-24"
              />
            </div>

            <div className="flex flex-wrap gap-8 text-gray-400">
              <a
                href="https://www.instagram.com/freaklab.co"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#A0F435] transition-colors flex items-center gap-2"
              >
                <i className="fa fa-instagram text-lg" aria-hidden="true"></i>
                @freaklab.co
              </a>
              <a href='mailto:freaklab.co@gmail.com'>Contact: freaklab.co@gmail.com</a>
              <span>🇨🇴 Shipping Colombia</span>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
            © 2026 FreakLab. Donde lo raro se vuelve real.
          </div>
        </div>
      </footer>
    </div>
  );
}

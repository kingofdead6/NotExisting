import { motion } from "framer-motion";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 to-gray-900 text-white flex items-center justify-center px-6">
      <motion.div
        className="max-w-2xl text-center bg-gray-800/60 backdrop-blur-md rounded-2xl shadow-2xl p-8 space-y-6 border border-gray-700"
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-red-500"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          🚫 Code Unavailable
        </motion.h1>

        <motion.p
          className="text-lg text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          Sorry, I can’t share the code for this project.
        </motion.p>

        <motion.p
          className="text-gray-400 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          Due to <span className="font-semibold text-white">client confidentiality</span>,{" "}
          <span className="font-semibold text-white">private collaboration</span>, or{" "}
          <span className="font-semibold text-white">business restrictions</span>,
          the source code is not publicly accessible.
        </motion.p>

        <motion.p
          className="text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          Feel free to reach to Us for more info or a live demo.
        </motion.p>
      </motion.div>
    </div>
  );
}

export default App;

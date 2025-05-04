"use client"

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const features = [
    {
      title: "Multiple Question Types",
      description: "Text, choice, rating, and more - all the question types you need.",
      icon: "📝"
    },
    {
      title: "Real-time Analytics",
      description: "See responses as they come in with visual analytics.",
      icon: "📊"
    },
    {
      title: "Easy Sharing",
      description: "Share your surveys with a simple link. No account required.",
      icon: "🔗"
    }
  ];

  return (
    <div className="flex flex-col items-center space-y-12">
      <motion.div 
        className="space-y-6 text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1 
          className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl"
          animate={{ scale: [1, 1.02, 1] }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        >
          Create Beautiful Surveys
        </motion.h1>
        <motion.p 
          className="mx-auto max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400"
          variants={fadeInUp}
          initial="initial"
          animate="animate"
        >
          Design, share, and analyze surveys with our simple yet powerful tool. Get started in seconds.
        </motion.p>
        <motion.div 
          className="flex justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.95 }}>
            <Button asChild size="lg">
              <Link href="/create">Create Survey</Link>
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.95 }}>
            <Button variant="outline" size="lg">
              <Link href="/surveys">View Demos</Link>
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div 
        className="grid gap-8 md:grid-cols-3"
        variants={staggerChildren}
        initial="initial"
        animate="animate"
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="rounded-lg border p-6 relative overflow-hidden"
            variants={fadeInUp}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 30px rgba(0,0,0,0.1)"
            }}
            transition={{ duration: 0.2 }}
          >
            <motion.span
              className="text-4xl mb-4 block"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5 + (index * 0.1) }}
            >
              {feature.icon}
            </motion.span>
            <h3 className="text-xl font-bold">{feature.title}</h3>
            <p className="text-gray-500 dark:text-gray-400 mt-2">
              {feature.description}
            </p>
            <motion.div
              className="absolute bottom-0 left-0 h-1 bg-primary"
              initial={{ width: 0 }}
              whileHover={{ width: "100%" }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
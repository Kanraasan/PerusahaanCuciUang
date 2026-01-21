"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase";

interface Collaborator {
  id: string;
  name: string;
  logoUrl: string;
}

// Dummy data if DB is empty
const DUMMY_COLLABORATORS = [
  { id: "1", name: "Google", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png" },
  { id: "2", name: "Microsoft", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/2560px-Microsoft_logo_%282012%29.svg.png" },
  { id: "3", name: "Tokopedia", logoUrl: "https://assets.tokopedia.net/assets-tokopedia-lite/v2/zeus/kratos/60f5899b.png" },
  { id: "4", name: "Gojek", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Gojek_logo_2019.svg/2560px-Gojek_logo_2019.svg.png" },
  { id: "5", name: "Shopee", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Shopee.svg/2560px-Shopee.svg.png" },
];

export default function Collaborators() {
  const [collaborators, setCollaborators] = useState<Collaborator[]>(DUMMY_COLLABORATORS);

  useEffect(() => {
    const fetchCollaborators = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "collaborators"));
        if (!querySnapshot.empty) {
            const fetched = querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            } as Collaborator));
            setCollaborators(fetched);
        }
      } catch (error) {
        console.error("Error fetching collaborators:", error);
      }
    };
    fetchCollaborators();
  }, []);

  return (
    <section id="collaborators" className="py-20 bg-white dark:bg-zinc-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-gray-900 dark:text-white"
        >
          Mitra Industri Kami
        </motion.h2>
        <p className="mt-4 text-gray-600 dark:text-gray-400">
          Bekerjasama dengan perusahaan teknologi terkemuka
        </p>
      </div>

      <div className="flex w-full overflow-hidden">
        <motion.div
          className="flex space-x-16 whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 20,
          }}
          style={{ width: "max-content" }}
        >
          {/* Double the array to create seamless loop */}
          {[...collaborators, ...collaborators].map((collab, index) => (
            <div key={`${collab.id}-${index}`} className="flex items-center justify-center h-24 min-w-[200px] bg-gray-50 dark:bg-zinc-800 rounded-xl p-6 grayscale hover:grayscale-0 transition-all duration-300">
               {/* Use standard img tag for external URLs without configuring next/image domains */}
               <img src={collab.logoUrl} alt={collab.name} className="h-full object-contain max-w-full" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
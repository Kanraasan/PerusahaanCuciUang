"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase";

interface Teacher {
  id: string;
  name: string;
  role: string;
  photoUrl: string;
}

const DUMMY_TEACHERS = [
  { id: "1", name: "Budi Santoso", role: "Kepala Program", photoUrl: "" },
  { id: "2", name: "Siti Aminah", role: "Guru Produktif", photoUrl: "" },
  { id: "3", name: "Ahmad Rizki", role: "Guru Game Dev", photoUrl: "" },
];

export default function Teachers() {
  const [teachers, setTeachers] = useState<Teacher[]>(DUMMY_TEACHERS);

  useEffect(() => {
    const fetchTeachers = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "teachers"));
        if (!querySnapshot.empty) {
            const fetched = querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            } as Teacher));
            setTeachers(fetched);
        }
      } catch (error) {
        console.error("Error fetching teachers:", error);
      }
    };
    fetchTeachers();
  }, []);

  return (
    <section id="teachers" className="py-20 bg-zinc-50 dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-gray-900 dark:text-white"
          >
            Tim Pengajar Kami
          </motion.h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            Dibimbing oleh praktisi dan akademisi berpengalaman
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {teachers.map((teacher, index) => (
            <motion.div
              key={teacher.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-zinc-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow text-center p-6 group"
            >
              <div className="w-32 h-32 mx-auto bg-gray-200 dark:bg-zinc-800 rounded-full mb-4 overflow-hidden relative">
                {teacher.photoUrl ? (
                  <img src={teacher.photoUrl} alt={teacher.name} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-3xl font-bold text-gray-400">
                    {teacher.name.charAt(0)}
                  </div>
                )}
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{teacher.name}</h3>
              <p className="text-blue-600 dark:text-blue-400 font-medium text-sm">{teacher.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
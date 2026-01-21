"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Instagram, Twitter, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer id="footer" className="bg-zinc-100 dark:bg-zinc-950 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Hubungi Kami</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <MapPin className="text-blue-600 mt-1" />
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">Alamat</p>
                  <p className="text-gray-600 dark:text-gray-400">Jl. Adi Sucipto No.33, Manahan, Kec. Banjarsari, Kota Surakarta, Jawa Tengah 57139</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="text-blue-600 mt-1" />
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">Telepon</p>
                  <p className="text-gray-600 dark:text-gray-400">0271714901</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Sosial Media</h4>
              <div className="flex gap-4">
                <a href="#" className="p-3 bg-white dark:bg-zinc-800 rounded-full hover:text-blue-600 transition-colors shadow-sm">
                  <Instagram size={20} />
                </a>
                <a href="#" className="p-3 bg-white dark:bg-zinc-800 rounded-full hover:text-blue-600 transition-colors shadow-sm">
                  <Twitter size={20} />
                </a>
                <a href="#" className="p-3 bg-white dark:bg-zinc-800 rounded-full hover:text-blue-600 transition-colors shadow-sm">
                   {/* Using MessageCircle as a placeholder for TikTok if Lucide doesn't have it, usually they don't have branded icons for everything */}
                  <div className="font-bold text-xs">TK</div> 
                </a>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="h-[300px] w-full rounded-2xl overflow-hidden shadow-lg border border-gray-200 dark:border-zinc-800">
             <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d247.19888966917893!2d110.80125245971348!3d-7.555098901156577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a14234667a3fd%3A0xc2dc8c1f0bdce20f!2sSMK%20Negeri%202%20Surakarta!5e0!3m2!1sid!2sid!4v1768961971738!5m2!1sid!2sid" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy"
             ></iframe>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-zinc-800 pt-8 text-center">
          <p className="text-gray-500 dark:text-gray-400">
            &copy; {new Date().getFullYear()} PPLG Vocational School. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
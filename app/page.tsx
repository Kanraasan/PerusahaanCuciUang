import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Collaborators from "./components/collaborators";
import Teachers from "./components/teachers";
import Footer from "./components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-black overflow-x-hidden">
      <Navbar />
      <Hero />
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Tentang Jurusan</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Jurusan Pengembangan Perangkat Lunak dan Gim (PPLG) berfokus pada penguasaan teknologi pemrograman, 
              pengembangan aplikasi mobile, web, dan game development.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Siswa diajarkan keterampilan teknis mendalam serta soft skill seperti pemecahan masalah dan kerja tim 
              untuk mempersiapkan mereka menghadapi industri 4.0.
            </p>
          </div>
          <div className="bg-gray-200 dark:bg-zinc-800 rounded-2xl h-80 w-full animate-pulse flex items-center justify-center text-gray-500">
             {/* Placeholder for an image */}
             <span>Video / Image Profile</span>
          </div>
        </div>
      </section>

      <Teachers />
      <Collaborators />
      <Footer />
    </main>
  );
}
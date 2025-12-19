import { Link } from "react-router-dom";

function Home() {
  return (
    <div
      id="about"
      className="bg-white rounded-xl shadow-md p-6 flex flex-col md:flex-row items-center gap-6"
    >
      <img
        src="./public/sahroni.webp"
        alt="Profil Ahmad Rizki"
        className="w-36 h-36 object-cover rounded-full shadow-md"
      />
      <div>
        <h2 className="text-2xl font-bold text-gray-900">
          Halo, Saya Ahmad Sahroni
        </h2>
        <p className="mt-2 text-gray-600">
          Web Developer & UI/UX Designer — Saya berdedikasi untuk membangun pengalaman digital yang sederhana, cepat, dan elegan. Dengan keahlian dalam pengembangan web modern dan desain antarmuka yang user-centric, saya membantu bisnis di Indonesia menciptakan solusi digital yang tidak hanya fungsional tetapi juga menarik secara visual. Berpengalaman dalam mengembangkan aplikasi web responsif menggunakan teknologi terkini seperti React, serta merancang interface yang intuitif dengan mempertimbangkan kebutuhan lokal dan global.
        </p>
        <div className="mt-4 flex gap-3">
          <Link
            to="/projects"
            className="inline-block px-4 py-2 bg-white text-indigo-600 rounded-lg text-sm shadow-md hover:bg-indigo-600 hover:text-white transition transform hover:scale-105"
          >
            Lihat Project
          </Link>
          <Link
            to="/contact"
            className="inline-block px-4 py-2 bg-white text-indigo-600 rounded-lg text-sm shadow-md hover:bg-indigo-600 hover:text-white transition transform hover:scale-105"
          >
            Hubungi
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;

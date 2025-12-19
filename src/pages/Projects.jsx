function Projects() {
  return (
    <section id="projects" className="p-8">
      <h3 className="text-3xl font-semibold mb-8">Project Saya</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <article className="bg-white rounded-xl overflow-hidden shadow hover:shadow-md transition">
          <img
            src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="E-Commerce Website"
            className="w-full h-40 object-cover"
          />
          <div className="p-4">
            <h4 className="font-medium text-gray-900">E-Commerce Website</h4>
            <p className="text-sm text-gray-600 mt-1">
              Platform jual beli online dengan desain modern dan performa cepat.
            </p>
          </div>
        </article>

        <article className="bg-white rounded-xl overflow-hidden shadow hover:shadow-md transition">
          <img
            src="https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Mobile Banking App"
            className="w-full h-40 object-cover"
          />
          <div className="p-4">
            <h4 className="font-medium text-gray-900">Mobile Banking App</h4>
            <p className="text-sm text-gray-600 mt-1">
              Antarmuka ramah pengguna dengan fokus keamanan.
            </p>
          </div>
        </article>

        <article className="bg-white rounded-xl overflow-hidden shadow hover:shadow-md transition">
          <img
            src="https://images.pexels.com/photos/3184656/pexels-photo-3184656.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Creative Portfolio"
            className="w-full h-40 object-cover"
          />
          <div className="p-4">
            <h4 className="font-medium text-gray-900">Creative Portfolio</h4>
            <p className="text-sm text-gray-600 mt-1">
              Menampilkan karya desain dengan layout bersih dan elegan.
            </p>
          </div>
        </article>

        <article className="bg-white rounded-xl overflow-hidden shadow hover:shadow-md transition">
          <img
            src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Social Media Dashboard"
            className="w-full h-40 object-cover"
          />
          <div className="p-4">
            <h4 className="font-medium text-gray-900">Social Media Dashboard</h4>
            <p className="text-sm text-gray-600 mt-1">
              Dashboard analitik media sosial dengan visualisasi data real-time.
            </p>
          </div>
        </article>

        <article className="bg-white rounded-xl overflow-hidden shadow hover:shadow-md transition">
          <img
            src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Task Management App"
            className="w-full h-40 object-cover"
          />
          <div className="p-4">
            <h4 className="font-medium text-gray-900">Task Management App</h4>
            <p className="text-sm text-gray-600 mt-1">
              Aplikasi manajemen tugas dengan kolaborasi tim yang seamless.
            </p>
          </div>
        </article>

        <article className="bg-white rounded-xl overflow-hidden shadow hover:shadow-md transition">
          <img
            src="https://images.pexels.com/photos/3183148/pexels-photo-3183148.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Learning Platform"
            className="w-full h-40 object-cover"
          />
          <div className="p-4">
            <h4 className="font-medium text-gray-900">Learning Platform</h4>
            <p className="text-sm text-gray-600 mt-1">
              Platform pembelajaran online dengan konten interaktif dan engaging.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Projects;

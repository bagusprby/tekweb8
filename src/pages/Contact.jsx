function Contact() {
  return (
    <section id="contact" className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-lg font-semibold">Hubungi Saya</h3>
        <div className="mt-4 grid grid-cols-1 gap-4">
          <div className="flex items-start gap-3">
            <svg className="w-6 h-6 text-indigo-600 mt-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3.75 6.75A2.25 2.25 0 016 4.5h12a2.25 2.25 0 012.25 2.25v10.5A2.25 2.25 0 0118 19.5H6a2.25 2.25 0 01-2.25-2.25V6.75z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3.75 6.75l8.25 5.25L20.25 6.75" />
            </svg>
            <div>
              <p className="text-sm text-gray-600">Email</p>
              <a className="text-sm font-medium text-gray-900" href="mailto:ahmadsahroni@gmail.com">ahmadsahroni@gmail.com</a>
            </div>
          </div>

          <div className="flex items-start gap-3">
        <svg className="w-6 h-6 text-indigo-600 mt-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.517 4.55a1 1 0 01-.272 1.027l-2.012 2.012a11.042 11.042 0 005.516 5.516l2.012-2.012a1 1 0 011.027-.272l4.55 1.517a1 1 0 01.684.948V19a2 2 0 01-2 2h-1" />
        </svg>
        <div>
          <p className="text-sm text-gray-600">Whatsapp</p>
          <a className="text-sm font-medium text-gray-900" href="#">+62 812 5927 5313</a>
        </div>
          </div>

          <div className="flex items-start gap-3">
        <svg className="w-6 h-6 text-indigo-600 mt-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c1.104 0 2-.896 2-2s-.896-2-2-2-2 .896-2 2 .896 2 2 2z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 22s8-7.582 8-12A8 8 0 104 10c0 4.418 8 12 8 12z" />
        </svg>
        <div>
          <p className="text-sm text-gray-600">Lokasi</p>
          <div className="flex items-center">
            <p className="text-sm font-medium text-gray-900">Jakarta, Indonesia</p>
          </div>
        </div>
          </div>
        </div>
      </section>
  );
}

export default Contact;

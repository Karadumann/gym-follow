import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">GymFollow</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Fitness yolculuğunuzda size rehberlik edecek kişisel antrenman asistanınız
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <Link href="/exercises" className="card p-6 hover:shadow-lg transition-shadow duration-200">
          <div className="flex items-center space-x-4">
            <div className="bg-blue-100 dark:bg-blue-900 p-4 rounded-lg">
              <svg className="w-8 h-8 text-blue-600 dark:text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-semibold mb-2">Egzersizler</h2>
              <p className="text-gray-600 dark:text-gray-300">
                Detaylı egzersiz kütüphanesini keşfedin
              </p>
            </div>
          </div>
        </Link>

        <Link href="/workouts" className="card p-6 hover:shadow-lg transition-shadow duration-200">
          <div className="flex items-center space-x-4">
            <div className="bg-green-100 dark:bg-green-900 p-4 rounded-lg">
              <svg className="w-8 h-8 text-green-600 dark:text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-semibold mb-2">Antrenman Programları</h2>
              <p className="text-gray-600 dark:text-gray-300">
                Seviyenize uygun antrenman programlarını inceleyin
              </p>
            </div>
          </div>
        </Link>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-center">Özellikler</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="card p-6">
            <h3 className="text-lg font-medium mb-2">Detaylı Egzersizler</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Her egzersiz için detaylı açıklamalar ve görsel rehberler
            </p>
          </div>
          <div className="card p-6">
            <h3 className="text-lg font-medium mb-2">Özel Programlar</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Farklı seviyelere uygun antrenman programları
            </p>
          </div>
          <div className="card p-6">
            <h3 className="text-lg font-medium mb-2">Offline Kullanım</h3>
            <p className="text-gray-600 dark:text-gray-300">
              İnternet bağlantısı olmadan da erişim imkanı
            </p>
          </div>
        </div>
      </section>

      <nav className="bottom-nav">
        <Link href="/" className="nav-link">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
          <span className="text-xs">Ana Sayfa</span>
        </Link>
        <Link href="/exercises" className="nav-link">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
          <span className="text-xs">Egzersizler</span>
        </Link>
        <Link href="/workouts" className="nav-link">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
          </svg>
          <span className="text-xs">Programlar</span>
        </Link>
      </nav>
    </main>
  );
}

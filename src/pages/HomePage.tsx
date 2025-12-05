const HomePage: React.FC = () => {
  return (
    <div className="page">
      <header className="page-header">
        <h1>🌐 WebLab2 — React + TypeScript</h1>
        <p className="muted">
          Версия второй лабораторной работы на React, TypeScript и Vite.
        </p>
      </header>

      <section className="card">
        <h2>Что реализовано</h2>
        <ul className="list">
          <li>
            📚 <strong>Поиск книг</strong> — Open Library API.
          </li>
          <li>
            💱 <strong>Конвертер валют</strong> — Frankfurter API.
          </li>
          <li>
            ☁️ <strong>Погода</strong> — Open-Meteo API.
          </li>
        </ul>
        <p className="muted">
          Используй ссылки в шапке, чтобы перейти к нужному разделу.
        </p>
      </section>
    </div>
  );
};

export default HomePage;

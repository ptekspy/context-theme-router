import './Home.css';

export default function Home() {
  return (
    <>
      <main className="page-main">
        <h2>Home page clicked</h2>
        <p>switch pages to "about" to use router</p>
        <p>refresh page and state remains</p>
        <p> TODO add a state reset to clear local storage </p>
      </main>
    </>
  );
}

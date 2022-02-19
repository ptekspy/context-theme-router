import './About.css';
import Mode from '../Mode/Mode';

export default function About() {

  return (
    <>
      <main>
        <h2>About page clicked</h2>
        <p>
          You can set dark and light mode icon (stles don't adjust yet) and verify state is changed (the ocon adjusts).
          If you refresh the page you can verify that local storage is being used to persist
        </p>
        <Mode />
      </main>
    </>
  );
}

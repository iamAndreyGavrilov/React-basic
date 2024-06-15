import Header from './components/Header.jsx';
import WayToTeach from './components/WayToTeach.jsx';
import { ways } from './data.js';

export default function App() {
  return (
    <div>
      <Header />
      <main>
        <section>
          <h3>Main</h3>
          <ul>
            {/*<WayToTeach {...ways[0]} />*/}
            {ways.map((way, index) => (
              <WayToTeach key={index} {...way} />
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}

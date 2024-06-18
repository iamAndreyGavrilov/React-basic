import WayToTeach from './WayToTeach.jsx';
import { ways } from '../data.js';

export default function TeachingSection() {
  return (
    <section>
      <h3>Main</h3>
      <ul>
        {ways.map((way, index) => (
          <WayToTeach key={index} {...way} />
        ))}
      </ul>
    </section>
  );
}

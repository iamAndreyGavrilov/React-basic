import Header from './components/Header';
import TeachingSection from './components/TeachingSection';
import SectionActions from './components/SectionActions';

export default function App() {
  return (
    <div>
      <Header />
      <main>
        <TeachingSection />
        <SectionActions />
      </main>
    </div>
  );
}

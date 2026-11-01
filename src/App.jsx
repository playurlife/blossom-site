// App is the top-level component. It just stacks the page sections in order,
// the same way you'd stack frames in Figma.
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import SettingsButton from './components/SettingsButton.jsx';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
      </main>
      <SettingsButton />
    </>
  );
}

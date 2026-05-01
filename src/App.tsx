/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navigation from './components/Navigation';
import Hero from './components/Hero';
import FeaturedWork from './components/FeaturedWork';
import About from './components/About';
import WhatIBring from './components/WhatIBring';
import Stack from './components/Stack';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="bg-obsidian min-h-screen text-ivory selection:bg-gold/30 selection:text-ivory font-sans overflow-x-hidden">
      <Navigation />
      <main>
        <Hero />
        <FeaturedWork />
        <About />
        <WhatIBring />
        <Stack />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

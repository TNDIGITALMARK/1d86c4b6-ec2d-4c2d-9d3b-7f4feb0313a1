import { Header } from '@/components/synapse/Header';
import { Hero } from '@/components/synapse/Hero';
import { FeaturesGrid } from '@/components/synapse/FeaturesGrid';
import { FeatureHighlights } from '@/components/synapse/FeatureHighlights';
import { CTASection } from '@/components/synapse/CTASection';
import { Footer } from '@/components/synapse/Footer';

export const dynamic = 'force-dynamic'

export default function Index() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <FeaturesGrid />
        <FeatureHighlights />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
import { Navbar } from "@/components/shared/navbar";
import { Hero } from "@/components/landing/hero";
import { SandboxChat } from "@/components/landing/sandbox-chat";
import { Features } from "@/components/landing/Features";
import { CTASection } from "@/components/landing/cta-section";
import { Footer } from "@/components/landing/footer";
export default function Page() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background text-foreground">

      {/* BACKGROUND GLOW LAYERS */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/20 blur-[140px] rounded-full" />
        <div className="absolute bottom-[-200px] right-[-100px] w-[500px] h-[500px] bg-orange-300/10 blur-[140px] rounded-full" />
      </div>

      {/* CONTENT */}
      <Navbar />
      <Hero />
      <SandboxChat />
      <Features></Features>
      <CTASection></CTASection>
      <Footer></Footer>
    </main>
  );
}
//import Header from "@/app/(site)/Header"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import '@/app/global.css'
import "@/app/background.css";
import { SectionIndicator } from "@/components/SectionIndicator"
import FloatingConsultButton from "@/components/FloatingConsultButton"

export default function SiteLayout({ children }) {
  return (
    <>
      <Header />
          {children}
          <FloatingConsultButton href="/contact" />
    
      <Footer />
    </>
   
  );
}

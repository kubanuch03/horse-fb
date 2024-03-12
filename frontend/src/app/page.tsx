import {
  PromoHome,
  FeedbackForm,
  Gallery,
  MapsSection,
  ReviewsSection,
  FooterSection,
} from "@/components";
export default function Home() {
  return (
    <main>
      <PromoHome />
      <FeedbackForm />
      <Gallery />
      <ReviewsSection />
      <MapsSection />
      <FooterSection />
    </main>
  );
}

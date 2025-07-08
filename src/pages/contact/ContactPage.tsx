import ContactForm from "./screens/ContactForm";
import ContactHeader from "./screens/ContactHeader";
import ContactSocials from "./screens/ContactInfo";

export default function ContactPage() {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-20 space-y-16">
      <ContactHeader />

      <div className="flex justify-center">
        <div className="w-full max-w-2xl">
          <ContactSocials />
        </div>
      </div>

      <div className="flex justify-center">
        <div className="w-full max-w-2xl">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

import ContactPage from "./contact/ContactPage";
import HomePage from "./home/HomePage";
import WorkPage from "./work/WorkPage";

export default function MainPage() {
  return (
    <main className="flex flex-col w-full">
      <div>
        <HomePage />
      </div>

      <div>
        <WorkPage />
      </div>

      <div>
        <ContactPage />
      </div>
    </main>
  );
}

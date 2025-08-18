import { DefaultLayout } from "@/components/DefaultLayout";
import { ContactContent } from "@/components/ContactForm";
import { Button } from "@/components/ui/Button";
import { Title } from "@/components/ui/Title";

export const metadata = {
  title: "Contact - Yoko's Portfolio",
  description: "Get in touch with me.",
};

export default function ContactPage() {
  return (
    <DefaultLayout isContact>
      <section className="max-w-2xl">
        <Title>
          Let&apos;s Get in Touch!
        </Title>
        <h2 className="my-2">Connect on Social</h2>
        <p>Whether you&apos;re curious about my work or interested in collaboration, I&apos;d be delighted to hear from you.</p>
        <p> Feel free to connect via LinkedIn or GitHub.</p>
        <div className="flex flex-row gap-4 my-4">
          <Button
            href="https://github.com/kizuyoko"
            ariaLabel="Go to GitHub"
            isExternal
          >
            GitHub
          </Button>
          <Button
            href="https://www.linkedin.com/in/kizuyoko/"
            ariaLabel="Go to GitHub"
            isExternal
          >
            LinkedIn
          </Button>
        </div>
        <hr />
        <ContactContent />
      </section> 
    </DefaultLayout>
  );
}

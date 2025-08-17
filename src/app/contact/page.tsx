import { Button } from "@/components/ui/Button";
import { DefaultLayout } from "@/components/DefaultLayout";
import { Title } from "@/components/ui/Title";

export const metadata = {
  title: "Contact - Yoko's Portfolio",
  description: "Get in touch with me.",
};

export default function Home() {
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
        <h2 className="mt-8 mb-2">Send a Message</h2>
        <p>Otherwise, you can send me a message with this form.</p>
        <form action="" className="w-full">
          <div className="form-container">
            <label htmlFor="yourName">Your Name *</label>
            <input 
              name="yourName"
              type="text"
            />
          </div>
          <div className="form-container">
            <label htmlFor="yourEmail">Your Email *</label>
            <input 
              name="yourEmail"
              type="text" 
            />
          </div>
          <div className="form-container">
            <label htmlFor="yourMessage">Your Message *</label>
            <textarea 
              name="yourMessage"
              className="h-20 border" 
            ></textarea>
          </div>
          <div className="flex flex-row justify-end w-full gap-4 mt-4 mb-8">
            <Button>Clear</Button>
            <Button>Submit</Button>
          </div>
        </form>
      </section>
    </DefaultLayout>
  );
}

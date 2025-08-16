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
      <section className="max-w-3xl">
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
        <h2 className="my-2">Send a Message</h2>
        <p>Otherwise, you can send me a message with this form.</p>
        <form action="" className="w-full sm:w-auto">
          <div className="grid grid-cols-1 my-2 className sm:grid-cols-2">
            <label htmlFor="name">Your Name</label>
            <input 
              name="name"
              type="text"
              className="border" 
            />
          </div>
          <div className="grid grid-cols-1 my-2 className sm:grid-cols-2">
            <label htmlFor="email">Your Email</label>
            <input 
              name="email"
              type="text" 
              className="border" 
            />
          </div>
          <div className="grid grid-cols-1 my-2 className sm:grid-cols-2 ">
            <label htmlFor="message">Your Message</label>
            <input 
              name="message"
              type="textarea" 
              className="h-10 border" 
            />
          </div>
          <div className="flex flex-row gap-4 mb-8">
            <Button>Clear</Button>
            <Button>Submit</Button>
          </div>
        </form>
      </section>
    </DefaultLayout>
  );
}

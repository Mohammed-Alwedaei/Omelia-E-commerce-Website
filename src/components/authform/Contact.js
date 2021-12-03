import "./styles/contact.css";
import TextField from "../forms/text-field/TextField";
import SectionDescription from "../typography/SectionDescription";
import ButtonPrimary from "../buttons/ButtonPrimary";
import GapMd from "../gaps/GapMd";
import TextareaField from "../forms/textarea-field/TextareaField";

export default function Contact() {
  return (
    <section>
      <SectionDescription heading="Reach Us Easily" description="We typically reply in 2 days" />
      <GapMd />
      <form className="contact-form">
        <TextField labelText="Full Name" labelFor="name" inputType="text" placeholder="Full name" />
        <TextField labelText="E-mail" labelFor="email" inputType="email" placeholder="email@domain.com" />
        <TextareaField labelText="Message" labelFor="Message" placeholder="Type your message here..." />
        <ButtonPrimary text="Send form" />
      </form>
    </section>
  );
}

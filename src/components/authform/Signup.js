import TextField from "../forms/text-field/TextField";
import SectionDesctription from "../typography/SectionDescription";
import ButtonPrimary from "../buttons/ButtonPrimary";
import AnchorSecondary from "../buttons/AnchorSecondary";
import GapSm from "../gaps/GapSm";
import "./styles/auth.css";

export default function Signup() {
  return (
    <section>
      <div className="auth-container">
        <SectionDesctription heading="Create Account" description="Create account if you haven't yet and start shopping." />
        <GapSm />
        <form>
          <TextField labelText="Username" labelFor="username" inputType="text" placeholder="David Jas" />
          <TextField labelText="Email" labelFor="email" inputType="email" placeholder="email@domain.com" />
          <TextField labelText="Password" labelFor="password" inputType="password" placeholder="password" />
          <TextField labelText="Repeat Password" labelFor="repeat-password" inputType="password" placeholder="repeat password" />
          <ButtonPrimary text="Signup" />
          <p>Already Have an account?</p>
          <br />
          <AnchorSecondary to="/login" text="Create Account" />
        </form>
      </div>
    </section>
  );
}

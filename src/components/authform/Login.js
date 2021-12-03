import TextField from "../forms/text-field/TextField";

import SectionDesctription from "../typography/SectionDescription";

import GapSm from "../gaps/GapSm";
import ButtonPrimary from "../Buttons/ButtonPrimary";
import AnchorSecondary from "../Buttons/AnchorSecondary";

import "./styles/auth.css";

export default function Login() {
  return (
    <section>
      <div className="auth-container">
        <SectionDesctription heading="Create Account" description="Create account if you haven't yet and start shopping." />
        <GapSm />
        <form>
          <TextField labelText="Email" labelFor="email" inputType="email" placeholder="email@domain.com" />
          <TextField labelText="Pssword" labelFor="password" inputType="password" placeholder="password" />
          <ButtonPrimary text="Login" />
          <AnchorSecondary to="/signup" text="Create Account" />
        </form>
      </div>
    </section>
  );
}

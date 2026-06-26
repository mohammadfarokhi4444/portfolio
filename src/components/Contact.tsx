
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import "../assets/styles/Contact.scss";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faLinkedin, faTelegram } from "@fortawesome/free-brands-svg-icons";

function Contact({ parentToChild }: any) {
  const { t } = useTranslation();
  const { mode } = parentToChild;

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>{t("contact.contact_me")}</h1>
          <p>{t("contact.des")}</p>

          <div style={{ display: "flex", gap: "4px", marginBottom: "20px" }}>
            <FontAwesomeIcon
              icon={faPhone}
              size="xl"
              style={{ color: mode === "dark" ? "#afef63" : "#01574a" }}
            />
            <a href="tel:+989191668249">09191668249</a>
          </div>
          <div style={{ display: "flex", gap: "4px", marginBottom: "20px" }}>
            <FontAwesomeIcon
              icon={faEnvelope}
              size="xl"
              style={{ color: mode === "dark" ? "#afef63" : "#01574a" }}
            />
            <a
              href="mailto:mohammadfarokhi4444@gmail.com"
              // style={{ marginBlock: "16px" }}
            >
              mohammadfarokhi4444@gmail.com
            </a>
          </div>
          <div style={{ display: "flex", gap: "4px" }}>
            <a href="https://www.linkedin.com/in/mohammad-farokhi-2813a019a/">
              <FontAwesomeIcon
                icon={faLinkedin}
                size="xl"
                style={{ color: mode === "dark" ? "#afef63" : "#01574a" }}
              />
            </a>
            <a href="https://t.me/@Supernatural4444">
              <FontAwesomeIcon
                icon={faTelegram}
                size="xl"
              style={{ color: mode === "dark" ? "#afef63" : "#01574a" }}
              />
            </a>
          </div>
          {/* <Box
            ref={form}
            component="form"
            noValidate
            autoComplete="off"
            className="contact-form"
          >
            <div className="form-flex">
              <TextField
                required
                id="outlined-required"
                label="Your Name"
                placeholder="What's your name?"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                error={nameError}
                helperText={nameError ? "Please enter your name" : ""}
              />
              <TextField
                required
                id="outlined-required"
                label="Email / Phone"
                placeholder="How can I reach you?"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                error={emailError}
                helperText={
                  emailError ? "Please enter your email or phone number" : ""
                }
              />
            </div>
            <TextField
              required
              id="outlined-multiline-static"
              label="Message"
              placeholder="Send me any inquiries or questions"
              multiline
              rows={10}
              className="body-form"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              error={messageError}
              helperText={messageError ? "Please enter the message" : ""}
            />
            <Button
              variant="contained"
              endIcon={<SendIcon />}
              onClick={sendEmail}
            >
              Send
            </Button>
          </Box> */}
        </div>
      </div>
    </div>
  );
}

export default Contact;

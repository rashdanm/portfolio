import React, { useState } from "react";
import Label from "./Label";
import Input from "./Input";
import TextArea from "./TextArea";
import ButtonSend from "./ButtonSend";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [buttonText, setButtonText] = useState("Send");

  const [errors, setErrors] = useState({});

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailureMessage, setShowFailureMessage] = useState(false);

  const handleValidation = () => {
    let tempErrors = {};
    let isValid = true;

    if (name.length <= 0) {
      tempErrors["name"] = true;
      isValid = false;
    }
    if (email.length <= 0) {
      tempErrors["email"] = true;
      isValid = false;
    }
    if (subject.length <= 0) {
      tempErrors["subject"] = true;
      isValid = false;
    }
    if (message.length <= 50) {
      tempErrors["message"] = true;
      isValid = false;
    }

    setErrors({ ...tempErrors });
    console.log("errors", errors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let isValidForm = handleValidation();

    if (isValidForm) {
      setButtonText("Sending");
      const res = await fetch("/api/sendgrid", {
        body: JSON.stringify({
          email: email,
          name: name,
          subject: subject,
          message: message,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });

      const { error } = await res.json();
      if (error) {
        console.log(error);
        setShowSuccessMessage(false);
        setShowFailureMessage(true);
        setButtonText("Send");

        setName("");
        setEmail("");
        setMessage("");
        setSubject("");
        return;
      }
      setShowSuccessMessage(true);
      setShowFailureMessage(false);
      setButtonText("Send");

      // Reset
      setName("");
      setEmail("");
      setMessage("");
      setSubject("");
    }
    console.log(name, email, subject, message);
  };
  return (
    <form
      className="flex flex-col w-full px-1 py-8 bg-white rounded-lg lg:w-full"
      onSubmit={handleSubmit}
    >
      <Label labelFor="name" value="Name" />
      <Input
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
        name="name"
      />
      {errors?.name && (
        <p className="text-red-600">Sorry, didn't catch your name</p>
      )}

      <Label labelFor="email" value="Email" />
      <Input
        type="email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        name="email"
      />
      {errors?.email && (
        <p className="text-red-600">Please enter your email address</p>
      )}

      <Label labelFor="subject" value="Subject" />
      <Input
        type="subject"
        value={subject}
        onChange={(e) => {
          setSubject(e.target.value);
        }}
        name="subject"
      />
      {errors?.subject && (
        <p className="text-red-600">Please enter a subject</p>
      )}

      <Label labelFor="message" value="Message" />
      <TextArea
        value={message}
        onChange={(e) => {
          setMessage(e.target.value);
        }}
        name="message"
      />
      {errors?.message && (
        <p className="text-red-600">Message requires at least 50 characters.</p>
      )}
      <div className="flex flex-row items-center justify-start">
        <ButtonSend buttonText={buttonText} />
      </div>
      <div className="text-left">
        {showSuccessMessage && (
          <p className="my-2 text-sm font-semibold text-green-500">
            Thankyou! Your Message has been delivered.
          </p>
        )}
        {showFailureMessage && (
          <p className="text-red-500">
            Oops! Something went wrong, please try again.
          </p>
        )}
      </div>
    </form>
  );
};

export default Form;

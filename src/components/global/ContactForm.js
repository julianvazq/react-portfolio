import React, { useState, useEffect, useCallback } from 'react';
import styled, { css } from 'styled-components';
import { SecondaryButton } from '../styled-components/StyledComponents';

const inputStyles = css`
  padding: 10px;
  border: 1px solid #adadad;
  border-radius: 0.3rem;
  width: 100%;
  font-size: 16px;
  color: #333333;
  outline: none;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  grid-column: -1/1;
  width: 100%;
  max-width: 500px;
  margin: 0 auto 4rem auto;

  @media (min-width: 800px) {
    grid-column: 1/2;
    margin: 0;
  }
`;

const InputGroup = styled.div`
  display: block;
  margin-bottom: 1rem;
  position: relative;
`;

const Label = styled.label`
  position: absolute;
  top: 50%;
  left: 10px;
  font-size: ${(props) => props.hasText && '14px'};
  transform: ${(props) =>
    props.hasText ? 'translateY(-100%)' : 'translateY(-50%)'};
  transition: transform 200ms ease-out;
`;

const Input = styled.input`
  ${inputStyles}
  border: ${(props) => props.error && '1px solid #ff8787'};
  height: 60px;
  padding-top: ${(props) => props.hasText && '2rem'};

  &:focus {
    padding-top: 2rem;
  }

  &:focus + label {
    font-size: 14px;
    transform: translateY(-100%);
    transition: all 200ms ease-out;
  }
`;

const TextAreaLabel = styled.label`
  position: absolute;
  top: 0;
  left: 10px;
  transform: translateY(50%);
  font-size: ${(props) => (props.hasText ? '14px' : '16px')};
`;

const TextArea = styled.textarea`
  ${inputStyles}
  border: ${(props) => props.error && '1px solid #ff4646'};
  resize: none;
  font-family: 'Open Sans', 'Helvetica', 'sans-serif';
  position: relative;
  padding-top: 2rem;
  height: 150px;

  &:focus + label {
    font-size: 14px;
    transition: all 200ms ease-out;
  }
`;

const SubmitButton = styled(SecondaryButton)`
  width: 100%;
  font-size: 1rem;
  margin-bottom: 1rem;
  border: none;
`;

const feedbackStyles = css`
  text-align: left;
  padding: 0.5rem 1rem;
  border-radius: 0.3rem;

  span {
    font-weight: 600;
  }
`;

const Failure = styled.p`
  ${feedbackStyles};
  background: #faddb4;
  color: hsl(35deg 88% 25%);
  line-height: 1.5;
`;

const Success = styled.p`
  ${feedbackStyles};
  background: #c5fbc5;
  color: hsl(120deg 87% 25%);
`;

const ErrorMessage = styled.p`
  ${feedbackStyles};
  margin-bottom: 1rem;
  background: #ebc1c1;
  color: hsl(0deg 51% 30%);
`;

const ContactForm = () => {
  const [status, setStatus] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({
    name: false,
    email: false,
    message: false,
  });

  const validateForm = useCallback(() => {
    setStatus(null);

    const errors = {
      name: false,
      email: false,
      message: false,
    };

    if (!name) {
      errors.name = true;
    }
    if (!email) {
      errors.email = true;
    }
    if (!message) {
      errors.message = true;
    }

    setErrors(errors);
  }, [name, email, message]);

  const submitForm = (ev) => {
    ev.preventDefault();

    setIsSubmitted(true);

    if (Object.values(errors).some((err) => err)) {
      return;
    }

    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        setStatus('SUCCESS');
      } else {
        setStatus('ERROR');
      }
    };
    xhr.send(data);
  };

  useEffect(() => {
    validateForm();
  }, [name, email, message, validateForm]);

  return (
    <Form
      onSubmit={submitForm}
      action='https://formspree.io/mnqglpkp'
      method='POST'
    >
      <input type='text' name='_gotcha' style={{ display: 'none' }} />
      <InputGroup>
        <Input
          error={isSubmitted && errors.name}
          disabled={status === 'SUCCESS'}
          type='text'
          name='name'
          id='name'
          value={name}
          onChange={(e) => setName(e.target.value)}
          hasText={name.length > 0}
        />
        <Label hasText={name.length > 0} htmlFor='name'>
          Name
        </Label>
      </InputGroup>
      {isSubmitted && errors.name && (
        <ErrorMessage>
          <span>Name</span> is a required field.
        </ErrorMessage>
      )}
      <InputGroup>
        <Input
          error={isSubmitted && errors.email}
          disabled={status === 'SUCCESS'}
          type='email'
          name='email'
          id='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          hasText={email.length > 0}
        />
        <Label hasText={email.length > 0} htmlFor='email'>
          Email
        </Label>
      </InputGroup>
      {isSubmitted && errors.email && (
        <ErrorMessage>
          <span>Email</span> is a required field.
        </ErrorMessage>
      )}
      <InputGroup>
        <TextArea
          error={isSubmitted && errors.message}
          disabled={status === 'SUCCESS'}
          type='body'
          name='message'
          id='message'
          onChange={(e) => setMessage(e.target.value)}
          hasText={message.length > 0}
        />
        <TextAreaLabel hasText={message.length > 0} htmlFor='message'>
          Message
        </TextAreaLabel>
      </InputGroup>
      {isSubmitted && errors.message && (
        <ErrorMessage>
          <span>Message</span> is a required field.
        </ErrorMessage>
      )}
      {status === 'SUCCESS' ? (
        <Success>
          <span>Thank you</span> for your message. I'll be in touch soon.
        </Success>
      ) : (
        <SubmitButton as='button'>Submit</SubmitButton>
      )}
      {status === 'ERROR' && (
        <Failure>
          Looks like there was an <span>error</span>.
          <br />
          Try again and if the issue persists, please contact me through one of
          my social media accounts below.
        </Failure>
      )}
    </Form>
  );
};

export default ContactForm;

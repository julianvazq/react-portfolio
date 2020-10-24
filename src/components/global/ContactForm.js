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
  border: ${(props) => props.error && '1px solid #ff4646'};
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
  font-size: 1rem;
  border: none;
  margin: 0;
`;

const Failed = styled.p`
  margin-top: 1rem;
`;

const ErrorMessage = styled.p`
  text-align: left;
  margin-bottom: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 0.3rem;
  background: #ebc1c1;
  color: hsl(0deg 51% 30%);

  span {
    font-weight: 600;
  }
`;

const ContactForm = () => {
  const [status, setStatus] = useState('');
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

    if (!isSubmitted || Object.values(errors).some((err) => err)) {
      return;
    }

    console.log('yeah');
    return;

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
    if (isSubmitted) {
      validateForm();
    }
  }, [name, email, message, isSubmitted, validateForm]);

  return (
    <Form
      onSubmit={submitForm}
      action='https://formspree.io/mnqglpkp'
      method='POST'
    >
      <input type='text' name='_gotcha' style={{ display: 'none' }} />
      <InputGroup errors={errors}>
        <Input
          error={errors.name}
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
      {errors.name && (
        <ErrorMessage>
          <span>Name</span> is a required field.
        </ErrorMessage>
      )}
      <InputGroup>
        <Input
          error={errors.email}
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
      {errors.email && (
        <ErrorMessage>
          <span>Email</span> is a required field.
        </ErrorMessage>
      )}
      <InputGroup>
        <TextArea
          error={errors.message}
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
      {errors.message && (
        <ErrorMessage>
          A <span>message</span> would be appreciated.
        </ErrorMessage>
      )}
      {status === 'SUCCESS' ? (
        <p>Thanks!</p>
      ) : (
        <SubmitButton as='button'>Submit</SubmitButton>
      )}
      {status === 'ERROR' && <Failed>Ooops! There was an error.</Failed>}
    </Form>
  );
};

export default ContactForm;

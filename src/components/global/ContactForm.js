import React, { useState } from 'react';
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

const ErrorMessage = styled.p`
  margin-top: 1rem;
`;

const ContactForm = () => {
  const [status, setStatus] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const submitForm = (ev) => {
    ev.preventDefault();
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

  return (
    <Form
      onSubmit={submitForm}
      action='https://formspree.io/mnqglpkp'
      method='POST'
    >
      <input type='text' name='_gotcha' style={{ display: 'none' }} />
      <InputGroup>
        <Input
          type='text'
          name='name'
          id='name'
          value={name}
          onChange={(e) => setName(e.target.value)}
          hasText={name.length > 0}
        />
        <Label hasText={name.length > 0}>Name</Label>
      </InputGroup>
      <InputGroup>
        <Input
          type='email'
          name='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          hasText={email.length > 0}
        />
        <Label hasText={email.length > 0}>Email</Label>
      </InputGroup>
      <InputGroup>
        <TextArea
          type='body'
          name='message'
          onChange={(e) => setMessage(e.target.value)}
          hasText={message.length > 0}
        />
        <TextAreaLabel hasText={message.length > 0}>Message</TextAreaLabel>
      </InputGroup>
      {status === 'SUCCESS' ? (
        <p>Thanks!</p>
      ) : (
        <SubmitButton as='button'>Submit</SubmitButton>
      )}
      {status === 'ERROR' && (
        <ErrorMessage>Ooops! There was an error.</ErrorMessage>
      )}
    </Form>
  );
};

export default ContactForm;

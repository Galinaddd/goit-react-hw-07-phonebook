import styled from '@emotion/styled';
import { Form, Field } from 'formik';
export const AddContactForm = styled(Form)`
  width: 200px;
  text-align: left;
  background-color: #f0e2f4;
  padding: 25px;
  margin: 0 auto;
`;

export const Label = styled.label`
  font-style: obliqu;
  display: block;
  margin-bottom: 5px;
`;

export const Input = styled(Field)`
  display: block;
`;

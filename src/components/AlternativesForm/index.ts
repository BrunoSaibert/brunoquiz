import styled from 'styled-components';

const AlternativesForm = styled.form`
  label {
    &[data-selected='true'] {
      background-color: ${({ theme }) => theme.color.primary};

      &[data-status='SUCCESS'] {
        background-color: ${({ theme }) => theme.color.success};
      }
      &[data-status='ERROR'] {
        background-color: ${({ theme }) => theme.color.wrong};
      }
    }
    &:focus {
      opacity: 1;
    }
  }
  button {
    margin-top: 24px;
  }
`;

export default AlternativesForm;

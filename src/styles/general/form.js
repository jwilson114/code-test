// import {theme} from 'styles/theme';

export const Form = `
  input,
  textarea,
  select {
    width: 100%;
    border: 1px solid #D0D1D0;
    padding: 0.5em 0.7em;
    background-color: #fff;
    border-radius: 4px;
    font-size: 1rem;
    font-family: arial;
  }

  input,
  textarea{
    &:read-only{
      background-color: #F3F2F2

      &:focus{
        outline: 0;
      }
    }
  }

  textarea{
    min-width: 280px;
    min-height: 70px;
  }

  select{
    max-width: 150px;
    font-size: 0.8em;
    background-color: #fff;
  }

  input[type="checkbox"],
  input[type="radio"]
  {
    width: auto;

    &:disabled{
      opacity: 0.9;
    }
  }
`;

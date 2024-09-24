import * as yup from 'yup';

export const useValidation = () => {
  const pokemonSchema = yup.object().shape({
    name: yup.string().required(),
    height: yup.number().positive().required(),
    weight: yup.number().positive().required(),
  });

  return pokemonSchema;
};

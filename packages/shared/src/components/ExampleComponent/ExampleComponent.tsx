import { exampleFunction } from '../../functions/exampleFunction';

export const ExampleComponent: React.FC = () => {
  const exampleText = exampleFunction();

  return <div>{exampleText}</div>;
};

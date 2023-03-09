export const Animal = ({ type, name, age }) => {
  return (
    <li>
      <strong>{type}</strong> {name} ({age} year old)
    </li>
  );
};

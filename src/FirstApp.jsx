// This is a functional component
// Fragment: group of HTML elements == <></>
// Buenas practicas: declarar variables fuera del funtional component
// para que React no se esfuerce en renderizarlo de nuevo
// Una promesa es un objeto y lo intenta imprimir en tipo funcion
// const getMessage = (a, b) => {
//   return 'Hi Alex';
// };
// const newMessage = {
// 	message: "Hello world",
// 	title: "Alex",
// };
import PropTypes from 'prop-types';
export const FirstApp = ({ title, subTitle, name }) => {
  return (
    <>
      {/* <h1>{getMessage(1, 2)}</h1> */}
      {/* <code>{JSON.stringify(newMessage)}</code> */}
      <h1>{title}</h1>
      <p>{subTitle}</p>
      <p>{name}</p>
    </>
  );
};

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.number
}

FirstApp.defaultProps = {
  title: 'Title doesnt exist',
  subTitle: 123,
  name: 'Alex'
}

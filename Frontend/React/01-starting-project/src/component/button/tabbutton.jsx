// function handleClick(){
//   console.log("Hello World");
// }

// function TabButton(props) {
//   return (
//     <>
//       <li>
//         <button onClick={handleClick}>
//             {props.children}
//         </button>
//       </li>
//     </>
//   );
// }

function TabButton({ children, onSelect, isSelected }) {
  return (
    <li>
      <button className={isSelected ? "active" : undefined} onClick={onSelect}>{children}</button>
    </li>
  );
}

export default TabButton;

const List = ({tech, food, yaho}) => {
 return (
   <li style={{listStyle: 'none'}}>
     {tech}입니다. 좋아하는 음식 : {food}. 인사말: {yaho}
   </li>
 )
}

export default List
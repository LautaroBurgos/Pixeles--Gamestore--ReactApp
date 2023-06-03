const containerStyle={
    marginLeft:'40px',
    display:'grid',
    justifyItems:'center',
    alignItems:'center',
    gridTemplateColumns:'repeat(4,auto)',
    gridGap:'10px'
} 
const cardStyle={
    justifySelf:'center',
    alignSelf:'center',
    color: 'white',
    fontSize: '18px',
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 'bold',
    textAlign: 'center',
    margin: '10px',
    padding: '5px',
    border: '1px solid black',
    borderRadius:'10px',
    width: '400px',
    height: '520px',
    backgroundColor: 'rgb(47, 44, 72) '
}
const imgStyle={
    width:'250px',
    height:'300px'
}
const titleStyle={
    fontSize: '30px',
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 'bold',
    textAlign: 'center',
}
const buttonStyle={
    padding :'15px',
    listStyle: 'none',
    backgroundColor:'white',
    cursor:'pointer',
    borderRadius:'10px'
  }
  const linkStyle={
    listStyle: 'none',
    color:'white',
  }
  export {containerStyle,imgStyle,titleStyle,linkStyle,buttonStyle,cardStyle};
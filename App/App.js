import React, {useState, useEffect} from 'react';
//import { View, Text} from 'react-native';
import { Container, Text} from './styles';
import axios from 'axios';

export default () =>{
  const [message, setMessage] = useState()
  const [message2, setMessage2] = useState()
  useEffect(() => {
    axios.get("http://200.133.13.75:8080/ReinsertecRESTJSON/webresources/cadastro_usuario/fabio.botelho@embrapa.br/Fabio/88868766/51020280/Produtor")
    .then((response) => {
      //
      setMessage(response.data.message);
    });

    axios.get("https://viacep.com.br/ws/01001000/json/")
    .then((response) => {
      //
      setMessage2(response.data.cep);
    });
    
  }, []);

  console.log(message);
  return (
    <Container>
      <Text>
        {message}
      </Text>
      <Text>
        Ola Mundo 
      </Text>

      <Text>
        {message2}
      </Text>
    </Container>
  )
}
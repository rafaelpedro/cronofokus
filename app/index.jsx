import { useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

const pomodoro = [
  {
    id: 'focus',
    initialValue : 25,
    image : require('./foco.png'),
    display : 'Foco',
  },
  {
    id: 'short',
    initialValue : 5,
    image : require('./focomedio.png'),
    display : 'Pausa Curta',
  },
  {
    id: 'long',
    initialValue : 15,
    image : require('./focolongo.png'),
    display : 'Pausa Longa',
  }
]

export default function Index() {

  const [timerType, setTimerType] = useState(pomodoro[0])

  return (
    <View style={styles.container}>
      <Image source={timerType.image} />
      <View style={styles.actions}>
        <View style={styles.context}> 
          {pomodoro.map(p => (
          <Pressable 
          key={p.id}
          style={ timerType.id === p.id ? styles.contextButtonTextActive : null}
          onPress={() => setTimerType(p)}
          >
            <Text style={styles.contextButtonText}>
              {p.display}
            </Text>
          </Pressable>
          ))}
        </View>
        <Text style={styles.timer}>
          {new Date(timerType.initialValue * 1000).toLocaleTimeString('pt-br', {minute : '2-digit', second : '2-digit' })}
        </Text>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Começar
          </Text>
        </Pressable>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Desenvolvido por Rafael Alencar Pedro.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#021123',
    gap: 40,
  },
  actions: {
    padding: 24, 
    backgroundColor : '#14448080',
    width: '80%',
    borderRadius: 32,
    borderWidth: 2,
    borderColor: '#144480',
    gap : 32
  },
  timer: {
    fontSize: 54,
    color: '#fff',
    fontWeight : 'bold',
    textAlign : 'center'
  },
  button : {
    backgroundColor : '#B872FF',
    borderRadius: 32,
    padding : 8,
  },
  buttonText : {
    textAlign : 'center',
    color : '#021123',
    fontSize : 18,
  },
  footer : {
    width : '80%'
  }, 
  footerText : {
    textAlign : 'center',
    color : '#98a0a8',
    fontSize : 12.5
  },
  context : {
    flexDirection : 'row',
    justifyContent : 'space-around',
    alignItems : 'center'
  },
  contextButtonText : {
    fontSize : 12.5,
    color : '#FFF',
    padding : 8
  },
  contextButtonTextActive : {
    backgroundColor : '#144480',
    borderRadius : 8
  }


})

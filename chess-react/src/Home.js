export default function() {
  return (
    <div className='view row'>
      <div className='column column-50 column-offset-25' style={{ textAlign: 'center' }}>
        <h3>Create a New Game</h3>
        <button onClick={ createGame }>Create a New Game</button>
      </div>
    </div>
  )
}

const newGame = {

  p1_token: Utils.token(),
  p2_token: Utils.token()

}

const game = firebase.database().ref("games").push()

game.set(newGame).then(() => {
  window.location = `/${ newGame.p1_token }`
}, (err) => {
  throw err
})

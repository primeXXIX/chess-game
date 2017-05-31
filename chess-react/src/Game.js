


export default class Game extends React.Component {

constructor( {match: { params: { token } } } ) {
  super()
  this.state = { token }
  this.engine = new Chess()
}
  render() {
    return (
      <div className='view row'>
        <div className='column column-50'>
          <div id='game-board'></div>
      </div>
      <div className='column column-50'>
        <div className="links">
          <div>Player 1: <a href={ domain() + "/" + this.state.p1_token }>{ domain() }/{ this.state.p1_token }</a></div>
          <div>Player 2: <a href={ domain() + "/" + this.state.p2_token }>{ domain() }/{ this.state.p2_token }</a></div>
      </div>
      <blockquote>
        <h5 className='turn'>{ this.state.turnText }</h5>
        <h5 className='status'>{ this.state.statusText }</h5>
      </blockquote>
      <p className='history'>{ history(this.state.moves) }</p>
      </div>
    </div>
    )
  }
}

listenForUpdates(this.state.token, (id, game) => {
  this._updateBoard(id, game)
  this._updateInfo(game)
})

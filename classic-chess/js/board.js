var gameBoard = {}

// Set up board spaces
gameBoard.pieces = new Array(BRD_SQ_NUM)
gameBoard.side = COLOR.WHITE
// If a spawn or piece isn't captured, game draws
gameBoard.fiftyMove = 0
// Each move is counted as a half move
gameBoard.partialMove = 0
// Records the moves in the search tree
gameBoard.play = 0

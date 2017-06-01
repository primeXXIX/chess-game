$(function() {
  init()
  console.log("Main init call");
})

function InitFilesRankBrd() {

  var index = 0
  var file = FILES.FILE_A
  var rank = RANKS.RANK_1
  var sq = SQUARES.A1

  for(index = 0; index < BRD_SQ_NUM; ++index) {
      FilesBrd[index] = SQUARES.OFFBOARD
      RanksBrd[index] = SQUARES.OFFBOARD
  }

  for(rank = RANKS.RANK_1; rank <= RANKS.RANK_8; ++rank) {
      for(file = FILES.FILE_A; file <= FILES.FILE_H; ++file){
          sq = FR25Q(file, rank)
          FilesBrd[sq] = file
          RanksBrd[sq] = rank
      }
  }

  console.log("FilesBrd[0]:" + FilesBrd[0]);

}

function init() {
  console.log("init called");
  InitFilesRankBrd() 
}
var season ="";
function createSeason(){
    var results = [[6,3,1,1],
                   [5,1,2,3],
                   [3,2,8,5],
                   [4,7,3,7],
                   ['-','-',5,8]];
    const player1 = new Player('현계윤',results[0]);
    const player2 = new Player('유철환',results[1]);
    const player3 = new Player('박청원',results[2]);
    const player4 = new Player('박덕수',results[3]);
    const player5 = new Player('김태호',results[4]);

    var players = [player1,player2,player3,player4,player5];
    const temp_season = new Season("1st",results[0].length,players,players.length);
    season = temp_season;   
}

function drawResult(){
    var contents = "";
    contents+="<div class =\"round small\"></div>"+"<div class =\"round\">라운드</div>";
    for(let i = 0;i<season.round;i++){
        contents+="<div class =\"round\">"+(i+1)+"</div>";
    }
    contents+="<div class =\"round\">평균</div>"+
    "<div class =\"round\">포인트</div>";
    $('#rounds').html(contents);

    contents ="";
    for(let i = 0;i<season.num_of_player;i++){
        contents+="<div class =\"player\" id = \"player\">"+
        "<div class =\"info small\">"+(i+1)+"</div>"+
        "<div class =\"info\">"+season.players[i].name+"</div>";
        for(let j =0;j<season.round;j++){
            contents+="<div class =\"info\">"+season.players[i].results[j]+"</div>";
        }
        contents+="<div class =\"info\">"+season.players[i].avgRank+"</div>"+
        "<div class =\"info\">"+season.players[i].point+"</div>"+
        "</div>";
    }
    $('#players').html(contents);
    $('#num_of_season').html(season.number);
}
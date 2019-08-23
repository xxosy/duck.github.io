var season ="";
function createSeason(){
    var results = [[6,3,1,1],
                   [5,1,2,3],
                   [3,2,8,5],
                   [4,7,3,7],
                   ['-','-',5,8]];
    var player1 = new Player('현계윤',results[0]);
    var player2 = new Player('유철환',results[1]);
    var player3 = new Player('박청원',results[2]);
    var player4 = new Player('박덕수',results[3]);
    var player5 = new Player('김태호',results[4]);

    var players = [player1,player2,player3,player4,player5];
    var temp_season1 = new Season("1st",results[0].length,players,players.length);

    var results = [[3,5,4,3,6],
                   [4,1,6,8,3],
                   [8,2,2,5,5],
                   [6,3,4,2,8],
                   [7,7,8,4,2]];
    player1 = new Player('현계윤',results[0]);
    player2 = new Player('박덕수',results[1]);
    player3 = new Player('유철환',results[2]);
    player4 = new Player('박청원',results[3]);
    player5 = new Player('김태호',results[4]);

    players = [player1,player2,player3,player4,player5];
    var temp_season2 = new Season("2nd",results[0].length,players,players.length);

    var results = [[3,3,7,2,2],
                   [6,7,1,5,1],
                   [1,5,6,3,6],
                   [4,4,5,8,3]];
    player1 = new Player('박청원',results[0]);
    player2 = new Player('박덕수',results[1]);
    player3 = new Player('유철환',results[2]);
    player4 = new Player('강주원',results[3]);

    players = [player1,player2,player3,player4];
    var temp_season3 = new Season("3th",results[0].length,players,players.length);

    season = [temp_season1,temp_season2,temp_season3];


    var results = [[5,1,3,1],
                   [1,8,1,2],
                   [3,4,5,4],
                   [2,6,4,5],
                   [8,7,6,7]];
    player1 = new Player('현계윤',results[0]);
    player2 = new Player('박덕수',results[1]);
    player3 = new Player('유철환',results[2]);
    player4 = new Player('박청원',results[3]);
    player5 = new Player('강주원',results[4]);

    players = [player1,player2,player3,player4,player5];
    var temp_season4 = new Season("4th",results[0].length,players,players.length);

    season = [temp_season1,temp_season2,temp_season3,temp_season4];

    var results = [[1,3,2,4,2,2],
                   [4,1,1,3,5,8],
                   [5,2,4,2,6,5],
                   [7,5,5,1,5,3],
                   [2,8,3,7,7,4],
                   [8,6,6,7,3,6]];
    player1 = new Player('박덕수',results[0]);
    player2 = new Player('유철환',results[1]);
    player3 = new Player('박청원',results[2]);
    player4 = new Player('현계윤',results[3]);
    player5 = new Player('김태호',results[4]);
    player6 = new Player('강주원',results[5]);

    players = [player1,player2,player3,player4,player5,player6];
    var temp_season5 = new Season("5th",results[0].length,players,players.length);

    season = [temp_season1,temp_season2,temp_season3,temp_season4,temp_season5];
}

function drawResult(num_of_season){
    var contents = "";
    contents+="<div class =\"round small\"></div>"+"<div class =\"round\">라운드</div>";
    for(let i = 0;i<season[num_of_season].round;i++){
        contents+="<div class =\"round mobile\">"+(i+1)+"</div>";
    }
    contents+="<div class =\"round\">평균</div>"+
    "<div class =\"round\">포인트</div>";
    $('#rounds').html(contents);

    contents ="";
    for(let i = 0;i<season[num_of_season].num_of_player;i++){
        contents+="<div class =\"player\" id = \"player\">";
        if(i==0){
            if(num_of_season==0 || num_of_season==2 || num_of_season==4){
                contents+="<div style=\"padding-top:2px;height:42px\" class =\"info small\"><img style =\"width:38.8px\" src=\"assets/img/img_champion.png\"></div>";
            }
            else if(num_of_season==1){
                contents+="<div style=\"padding-top:2px;height:42px\" class =\"info small\"><img style =\"width:38.8px\" src=\"assets/img/img_champion_bronze.png\"></div>";
            }else if(num_of_season==3){
                contents+="<div style=\"padding-top:2px;height:42px\" class =\"info small\"><img style =\"width:38.8px\" src=\"assets/img/img_champion_silver.png\"></div>";
            }
        }else{
            contents +="<div class =\"info small\">"+(i+1)+"</div>";
        }
        contents+="<div class =\"info\">"+season[num_of_season].players[i].name+"</div>";
        for(let j =0;j<season[num_of_season].round;j++){
            contents+="<div class =\"info mobile\">"+season[num_of_season].players[i].results[j]+"</div>";
        }
        contents+="<div class =\"info\">"+season[num_of_season].players[i].avgRank+"</div>"+
        "<div class =\"info\">"+season[num_of_season].players[i].point+"</div>"+
        "</div>";
    }
    $('#players').html(contents);
    $('#num_of_season').html(season[num_of_season].number);
}
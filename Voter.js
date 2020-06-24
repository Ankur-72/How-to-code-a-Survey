class Voter{

    constructor(){}


    getCount(){
      var voterCountref = database.ref('voteCount');
        voterCountref.on("value", function(data){
            voterCountref = data.val();
        });
    }

    updateCount(count){
        database.ref('/').set({
        voterCount: count
})
    }

    update(name,email,ans1input,ans2input,ans3input,ans4input,ans5input){
        var VoterIndex = "voter"+voterCount;
        database.ref('/').update({
            name: name,
            email: email,
            answer1: ans1input,
            answer2: ans2input,
            answer3: ans3input,
            answer4: ans4input,
            answer5: ans5input
        });
    }
}
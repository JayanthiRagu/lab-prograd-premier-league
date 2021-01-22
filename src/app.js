//Progression 1 - create a Manager array and return it
let managerName = "Alex Ferguson";
let managerAge = 78;
let currentTeam = "Manchester FC";
let trophiesWon = 27;

//Write your function here
function createManager(managerName, managerAge, currentTeam, trophiesWon)
{
  var managerDetails = [managerName,managerAge,currentTeam,trophiesWon];
  return managerDetails;
}
// Don't edit the following code
try {
  var manager = createManager(
    managerName,
    managerAge,
    currentTeam,
    trophiesWon
  );
} catch (e) {
  // do nothing - expected error
}

//Progression 2 - create a formation object and return it
var formation = [4, 4, 3];

//write your function here
function createFormation(plan)
{
  if(plan.length == 0)
  return null;
  var formation = {
    defender: plan[0],
    midfield: plan[1],
    forward : plan[2]
  };
  return formation;
}
// Dont edit the following code

try {
  var formationObject = createFormation(formation);
} catch (e) {
  //do nothing
}

//Progression 3 - Filter players that debuted in ___ year
function filterByDebut(year)
{
  var playerDetails = [];
  players.forEach(function filter(curVal,index,players1){
    if(curVal.debut == year)
      playerDetails.push(curVal);
  });
  return playerDetails;
}

//Progression 4 - Filter players that play at the position _______
function filterByPosition(position)
{
  var playerDetails = [];
  players.forEach(function filter(curVal,index,players1){
    if(curVal.position == position)
      playerDetails.push(curVal);
  });
  return playerDetails;
}


//Progression 5 - Filter players that have won ______ award
function filterByAward(awardName)
{
  var playerDetails = [];
  players.forEach(function filter(curVal,index,players1){
    var length = curVal.awards.length;
    for (let i=0;i<length;i++)
    {
      if(curVal.awards[i].name == awardName)
      {
        playerDetails.push(curVal);
        break;
      } 
    } 
  });
  return playerDetails;
}

//Progression 6 - Filter players that won ______ award ____ times
function filterByAwardxTimes(awardName, noOfTimes)
{
  var playerDetails = [];
  players.forEach(function filter(curVal,index,players1){
    var length = curVal.awards.length;
    var count=0;
    for (let i=0;i<length;i++)
    {
      if(curVal.awards[i].name == awardName)
      {
        count++;
      } 
    } 
    if(count == noOfTimes)
    playerDetails.push(curVal);
  });
  return playerDetails;
}

//Progression 7 - Filter players that won ______ award and belong to ______ country
function filterByAwardxCountry(awardName, country)
{
  var playerDetails = [];
  players.forEach(function filter(curVal,index,players1){
    var length = curVal.awards.length;
    for (let i=0;i<length;i++)
    {
      if(curVal.awards[i].name == awardName &&curVal.country == country)
      {
        playerDetails.push(curVal);
        break;
      } 
    } 
  });
  return playerDetails;
}

//Progression 8 - Filter players that won atleast ______ awards, belong to ______ team and are younger than ____
function filterByNoOfAwardsxTeamxAge(noOfAwards, team, age)
{
  var playerDetails = [];
  players.forEach(function filter(curVal,index,players1){
    var length = curVal.awards.length;
    if(length>=noOfAwards&&curVal.team==team&&curVal.age<age)
      playerDetails.push(curVal);
  });
  return playerDetails;
}

//Progression 9 - Sort players in descending order of their age
function SortByAge()
{
  var t;
  var players1=players;
  for(let i=0;i<25;i++)
  {
    for(let j=0;j<25;j++)
    {
      if(players1[i].age<players1[j].age)
      {
        t=players1[i];
        players1[i]=players1[j];
        players1[j]=t;
      }
    }
  }
  return players1;
}

//Progression 10 - Sort players beloging to _____ team in descending order of awards won
function FilterByTeamxSortByNoOfAwards(team)
{
  var playerDetails = [];
  var awardsCount=[];
  players.forEach(function filter(curVal,index,players1){
    if(curVal.team==team)
    {
      playerDetails.push(curVal);
      awardsCount.push(curVal.awards.length);
    } 
  });
  var players1=playerDetails;
  let temp;
  for(let i=0;i<25;i++)
  {
    for(let j=0;j<25;j++)
    {
      if(awardsCount[i]>awardsCount[j])
      {
        t=players1[i];
        players1[i]=players1[j];
        players1[j]=t;
        temp=awardsCount[i];
        awardsCount[i]=awardsCount[j];
        awardsCount[j]=temp;
      }
    }
  }
  return players1
}

//Challenge 1 - Sort players that have won _______ award _____ times and belong to _______ country in alphabetical order of their names

//Challenge 2 - Sort players that are older than _____ years in alphabetical order
//Sort the awards won by them in reverse chronological order

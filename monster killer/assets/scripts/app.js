const ATTACK_VALUE = 10;
const STRONG_ATTACK_VALUE = 17;
const MONSTER_ATTACK_VALUE = 14;
const HEAL_VALUE = 20;

const MODE_ATTACK = 'ATTACK'; //MODE_ATTACK = 0 ;
const MODE_STRONG_ATTACK = 'STRONG_ATTACK';//MODE_STRONG_ATTACK = 1
const LOG_EVENT_PLAYER_ATTACK = 'PLAYER_ATTACK';
const LOG_EVENT_PLAYER_STRONG_ATTACK = 'PLAYER_STRONG_ATTACK';
const LOG_EVENT_MONSTER_ATTACK = 'MONSTER_ATTACK';
const LOG_EVENT_PLAYER_HEAL = 'PLAYER_HEAL';
const LOG_EVENT_GAME_OVER = 'GAME_OVER';





let battleLog = [];
let lastLoggedEntry ;



function getMaxLifeValues(){
    const enteredValue = prompt('Maximum life for you and the monster .', '100');
const parsedValue = parseInt(enteredValue);
if (isNaN(parsedValue) || parsedValue <= 0) {

    throw {message : 'invalid user input , not a number '}

}
return parsedValue ; 
}
let chosenMaxLife ; 

try{
    chosenMaxLife = getMaxLifeValues(); 

}
catch(error){
console.log(error);
chosenMaxLife = 100 ;
alert('you enterd something wrong bro , we made default life value of monster and player 100 ')

// throw error ; rethrow of error 

}


let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;
let hasBonusLife = true;

adjustHealthBars(chosenMaxLife);

function writeToLog(ev, val, monsterHealth, playerHealth) {
    let logEntry = {
        event: ev,
        value: val,
        finalMonsterHealth: monsterHealth,
        finalPlayerHealth: playerHealth
    };
    switch (ev) {
        case LOG_EVENT_PLAYER_ATTACK:
            logEntry.taregt = 'MONSTER';
            break;
        case LOG_EVENT_PLAYER_STRONG_ATTACK:
            logEntry = {
                event: ev,
                value: val,
                taregt: 'MONSTER',
                finalMonsterHealth: monsterHealth,
                finalPlayerHealth: playerHealth
            };
            break;
        case LOG_EVENT_MONSTER_ATTACK:
            logEntry = {
                event: ev,
                value: val,
                taregt: 'PLAYER',
                finalMonsterHealth: monsterHealth,
                finalPlayerHealth: playerHealth
            };
            break;
        case LOG_EVENT_PLAYER_HEAL:
            logEntry = {
                event: ev,
                value: val,
                taregt: 'PLAYER',
                finalMonsterHealth: monsterHealth,
                finalPlayerHealth: playerHealth
            };
            break;
        case LOG_EVENT_GAME_OVER:
            logEntry = {
                event: ev,
                value: val,
                finalMonsterHealth: monsterHealth,
                finalPlayerHealth: playerHealth
            };
            break;
        default:
            logEntry = {};

    }
    // if (ev === LOG_EVENT_PLAYER_ATTACK) {
    //     logEntry.taregt = 'MONSTER'; //WE can do like this also but below we won't do beacouse of readability
    // }
    // else if (ev === LOG_EVENT_PLAYER_STRONG_ATTACK) {
    //     logEntry = {
    //         event: ev,
    //         value: val,
    //         taregt: 'MONSTER',
    //         finalMonsterHealth: monsterHealth,
    //         finalPlayerHealth: playerHealth
    //     };
    // }
    // else if (ev === LOG_EVENT_MONSTER_ATTACK) {
    //     logEntry = {
    //         event: ev,
    //         value: val,
    //         taregt: 'PLAYER',
    //         finalMonsterHealth: monsterHealth,
    //         finalPlayerHealth: playerHealth
    //     };
    // }
    // else if (ev === LOG_EVENT_PLAYER_HEAL) {
    //     logEntry = {
    //         event: ev,
    //         value: val,
    //         taregt: 'PLAYER',
    //         finalMonsterHealth: monsterHealth,
    //         finalPlayerHealth: playerHealth
    //     };
    // } else if (ev === LOG_EVENT_GAME_OVER) {
    //     logEntry = {
    //         event: ev,
    //         value: val,
    //         finalMonsterHealth: monsterHealth,
    //         finalPlayerHealth: playerHealth
    //     };
    // }
    // if(ev !== LOG_EVENT_GAME_OVER ||
    //     ev !== LOG_EVENT_PLAYER_HEAL||
    //     ev !== LOG_EVENT_MONSTER_ATTACK ||
    //     ev !== LOG_EVENT_PLAYER_STRONG_ATTACK||
    //     ev !== LOG_EVENT_PLAYER_ATTACK )
    //     {
    //         return ;
    //     }
    battleLog.push(logEntry);
}



function reset() {
    currentMonsterHealth = chosenMaxLife;
    currentPlayerHealth = chosenMaxLife;
    resetGame(chosenMaxLife);
}




function endRound() {
    const initialPlayerHealth = currentPlayerHealth;
    const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
    currentPlayerHealth -= playerDamage;
    writeToLog(
        LOG_EVENT_MONSTER_ATTACK,
        playerDamage,
        currentMonsterHealth,
        currentPlayerHealth
    );

    if (currentPlayerHealth <= 0 && hasBonusLife) {
        hasBonusLife = false;
        removeBonusLife();
        currentPlayerHealth = initialPlayerHealth;
        alert('you would be dead but the bonus life saved you')
        setPlayerHealth(initialPlayerHealth);
    }


    if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
        alert('You won  ! 🏆');
        writeToLog(
            LOG_EVENT_GAME_OVER,
            'PLAYER_WON',
            currentMonsterHealth,
            currentPlayerHealth
        );
    }
    else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
        alert('you lost ! 😅');
        writeToLog(
            LOG_EVENT_GAME_OVER,
            'MONSTER_WON',
            currentMonsterHealth,
            currentPlayerHealth
        );
    }
    else if (currentPlayerHealth <= 0 && currentMonsterHealth <= 0) {
        alert('You have a draw 🧛');
        writeToLog(
            LOG_EVENT_GAME_OVER,
            ' A DRAW',
            currentMonsterHealth,
            currentPlayerHealth);
    }
    if (currentMonsterHealth <= 0 || currentPlayerHealth <= 0) {
        reset();
    }

}

function attackMonster(mode) {
    let logEvent = mode === MODE_ATTACK ? LOG_EVENT_PLAYER_ATTACK : LOG_EVENT_PLAYER_STRONG_ATTACK;
    const maxDamage = mode === MODE_ATTACK ? ATTACK_VALUE : STRONG_ATTACK_VALUE;
    // if (mode === MODE_ATTACK) {
    //     maxDamage = ATTACK_VALUE;
    //     logEvent = LOG_EVENT_PLAYER_ATTACK;
    // } else if (mode === MODE_STRONG_ATTACK) {
    //     maxDamage = STRONG_ATTACK_VALUE;
    //     logEvent = LOG_EVENT_PLAYER_STRONG_ATTACK;

    // }
    const damage = dealMonsterDamage(maxDamage);
    currentMonsterHealth -= damage;
    writeToLog(
        logEvent,
        damage,
        currentMonsterHealth,
        currentPlayerHealth
    );
    endRound();

}

function attackHandler() {
    attackMonster('ATTACK');

}

function strongAttackHandler() {
    attackMonster('STRONG_ATTACK');

}
function healPlayerHandler() {
    let healValue;
    if (currentPlayerHealth >= chosenMaxLife - HEAL_VALUE) {
        alert("you can't heal to more than your max intial health ");
        healValue = chosenMaxLife - currentPlayerHealth;
        console.log(currentPlayerHealth, healValue);
    }
    else {
        healValue = HEAL_VALUE;
    }
    increasePlayerHealth(healValue);
    currentPlayerHealth += healValue;
    writeToLog(
        LOG_EVENT_PLAYER_HEAL,
        healValue,
        currentMonsterHealth,
        currentPlayerHealth
    );

    endRound();
}
function printLogHandler() {
    console.log('total events =>', battleLog.length);//find array length

    // for(let i = 0 ; i < 3 ; i++)
    // {
    //     console.log("---------------")
    // }
    // let j = 0;
    // while (j < 3) {
    //     console.log("---------------");
    //     j++;

    // }
    let j = 0 ;
    outerWhile : do{  //label 
        console.log('outer' ,j);
      innerFor:  for(let k = 0 ; k < 5 ; k++)
        {
            if(k == 3){
                break outerWhile;//label call
            }
            console.log('inner' ,k);
        }
        j++ ;
    }while(j < 3)
    
    let i = 0;
    for (const logEntry of battleLog) {
        
        if(!lastLoggedEntry && lastLoggedEntry!==0  || lastLoggedEntry < i){
        console.log(`#${i}`);
        for (const key in logEntry) {
            console.log(`${key} => ${logEntry[key]}`);
            // console.log(logEntry[key])
        }
        lastLoggedEntry = i ;
        break ;
    }      
        i++;
    

}

}

attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);
healBtn.addEventListener('click', healPlayerHandler)
logBtn.addEventListener('click', printLogHandler);


//E:\myLearning\[FreeCourseSite.com] Udemy - JavaScript - The Complete Guide 2022 (Beginner + Advanced)\04 - Working with Control Structures (if Statements, Loops, Error Handling)\control-03-monster-killer-starting-project\assets\scripts\app.js
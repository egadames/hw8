const axios = require("axios");

// let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
let answers = "egadames8751654"
// let matches_array = answers.match(str);
// console.log(matches_array)

// let shit;
// const queryUrl = `https://api.github.com/users/${answers}/events`;
// axios.get(queryUrl).then((response) => {
//   // console.log(response)
//   shit = 'true';
//     console.log(shit);
//   }, (error) => {
//     shit = 'false';
//     console.log(shit);
// });



const confirmUserName = async () => {
let shit;
    console.log(shit)
    const queryUrl = `https://api.github.com/users/egadames8751654/events`;
    await axios.get(queryUrl).then((response) => {
      // console.log(response)
      shit = true;
        return shit;
      }, (error) => {
        shit = false;
        return shit;
    });
  
    console.log(shit)
    return shit;
    // if(shit){
    //   return true;
    // }else {
    //   return false
    // }
  
    }


    confirmUserName();

    console.log(shit)

// }else {
//   return false
// }

// const confirmUserName = (answers) => {
   
//     }





    // const queryUrl = `https://api.github.com/users/${answers}/events`;
    // axios.get(queryUrl).then((response) => {
    //     console.log("true");
    //   }, (error) => {
    //     console.log("false");
    //   });
    



// let str2 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

// let regexp = /[A-Za-z]/g;


// console.log(regexp)
// let matches_array = answers.match(regexp);
// console.log(matches_array);

// if(matches_array.length < answers.length){
//     console.log(matches_array.length)
//     console.log(answers.length)
//     console.log('work bitch')
// }else{
//     console.log('No Errors')
// }


// let characters = /[A-Za-z0-9]/g;
// let special = /[@]/g;

// let matches_array = answers[0].match(characters);
// let matches_array1 = answers.match(special);

//   if(matches_array == null || matches_array1 == null ||matches_array < 1 || matches_array1.length <1) {
//     console.log('Please enter a valid Email.');
//     return 'Please enter a valid Email.';
//   }


const  messyStrings =  [
    100,
    "iSMael",
    55,
    45,
    "sANyiA",
    66,
    "JaMEs",
    "eLAmIn",
    23,
    "IsMael",
    67,
    19,
    "ElaMIN",
  ];

  

  function stringcleaner1 (messyStrings) {
      const cleanstrings = [];
      for (let index = 0; index < messyStrings.length; index++) {
          let cleanstrings = messyStrings[index];
          if (typeof cleanstrings === "string") {
              cleanstrings.push(cleanstrings.toUpperCase() + "!")
          }
          
          
      }
      return cleanstrings
  }


  function stringcleaner2 (messyStrings) {
      return messyStrings.filter((messyStrings => typeof messyStrings   === "string"))
  }


  console.log(stringcleaner2(messyStrings))
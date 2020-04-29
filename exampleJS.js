function flatten(arr) {
    return arr.reduce(function (flat, toFlatten) {
      return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
    }, []);
  }
  
  function steamrollArray(arr) {
      var myar = flatten(arr);
  
      console.log(myar);
      
    return myar;
  }
  


var myar = arr;
let x=0;
var tempar = [];
while (!func(myar[x]) && x<arr.length)
{
  console.log(x+"  "+myar[x]);
x++;
}

for (let y =0;y<x;y++)
{
  myar.shift();
}
console.log(myar);

return myar;

function isThisPrime(value)
{
	var isPrime = true;
	for (x=2;x<value;x++)
  {
  	if (value % x===0)
    {
    	isPrime = false;
    }
  }
  
  return isPrime;
}

function sumPrimes(num) {
	var total =0;
  
  for (let x=0;x<=num;x++)
  {
 			if (isThisPrime(x))
      {
      	total+=x;
      }
 
  }
  
  console.log(total);
  
  return total;
}




function convertHTML(str) {
    // replace all instances of a character in the string
    str = str.replace(/&/g,"&amp;");
    str = str.replace(/</g,"&lt;");
    str = str.replace(/>/g,"&gt;");
    str = str.replace(/"/g,"&quot;");
    str = str.replace(/'/g,"&apos;");
  
  
      console.log(str);
      return str;
  }
  

function uniteUnique(arr) {
    // takes a unknown number of arrays and builds 1 array with all unique values
	var myuniqueAry =[] ;
  
  
  for (let x=0;x<arguments.length;x++)
  {
  	myuniqueAry = myuniqueAry.concat(arguments[x].filter(item=>myuniqueAry.indexOf(item)===-1));
  }
  
  console.log(myuniqueAry);
  
  return myuniqueAry;
}


function fearNotLetter(str) {
    // find the missing letter in string
    var returnstr = undefined;
  
  for (let x=0;x<str.length;x++)
  {
      	//console.log("A match "+str[x]+ "  "+str.charCodeAt(x)+"   "+str.charCodeAt(x+1));
  	if (x+1==str.length || str.charCodeAt(x)+1==str.charCodeAt(x+1))
    {

    }
    else
    {
    	if (x+1!=str.length && str.charCodeAt(x)+1!=str.charCodeAt(x+1))
      {
      	returnstr = String.fromCharCode(str.charCodeAt(x)+1);
        //console.log("boo "+String.fromCharCode(str.charCodeAt(x)+1));
        
      }
    }
  }
  
  console.log(returnstr);
  
  return returnstr;
  
}



function pairElement(str) {
	var dnaary = [];
  
  for (let x=0;x<str.length;x++)
  {
  	switch(str[x].toUpperCase())
    {
			case "G":
      	dnaary.push(["G","C"]);
      	break;
			case "C":
      	dnaary.push(["C","G"]);
      	break;
			case "A":
      	dnaary.push(["A","T"]);
      	break;
			case "T":
      	dnaary.push(["T","A"]);
      	break;
    }

}


function myReplace(str, before, after) {
    var regsw = /^[A-Z].*/ ;  // does it start with a cap letter
  
    if (before.match(regsw))
    {
      after = after.charAt(0).toUpperCase() + after.slice(1); // change case of 1st letter
  
    }
     
      var newstr = str.replace(before,after);
    console.log(newstr);
   
      
    return str;
  }
  
function translatePigLatin(str) {
	var regsw = /^[aieouAIEOU].*/i  // reg exp to see if a string starts with a vowel
	var regConstants = /^[^aieouAIEOU]+/i  // reg exp to see if a string starts with a constant
  
  if (regsw.test(str))
  {
  	// add way to end of work since we are starting with a vowel
    str +="way";
    console.log(str);
  }
  else 
  {
  	// take the constants from the start aand move to back
    var vidx = str.indexOf(str.match(/[aieouAIEOU]/i));
    if (vidx>=0)
    {
    	var conststr = str.substring(0,vidx);
      var reststr = str.substring(vidx);
      
      str= reststr+conststr+"ay";
    }
    else 
    {
    	str+="ay";
    }
   // str = str.split('').reverse().join('')+"ay";
    console.log(str);
    console.log("artzschway");
  }
  return str;
}

function spinalCase(str) {
    /*  this goes through and repleces all spaces and _ with a - and also turns everything to lower case
    */
	var regex = /\s+|_+/g;
  var lcUc = /([a-z])([A-Z])/g;  // reg ex to find a Mix patter ie MaxKel
  
  var newstr = str.replace(lcUc,"$1 $2");
  
 	newstr = newstr.toLowerCase();
  
  newstr = newstr.replace(regex,"-");
  
  console.log(newstr);
  return str;
}


function whatIsInAName(collection, source) {
    /* this takes 2 objects, who might or might not have matching properties, and returns only the items from the 1st that match the property/value in the 2nd
    */
    var arr = [];


    var srckeys = Object.keys(source);
    
      arr = collection.filter(  obj=>srckeys.map(key=>obj.hasOwnProperty(key) && obj[key]==source[key]  ).reduce( function(a,b){ return a && b;} )  );  
    console.log(arr);

    return arr;
  }
  
  

function diffArray(arr1, arr2) {
    /* take array1, array 2,  return a array that is the items that don't exist either
    */
    var newArr =  arr1.filter(item=>arr2.indexOf(item)===-1);
    newArr = newArr.concat(arr2.filter(item=>arr1.indexOf(item)===-1));
    
    
    console.log(newArr);
    
    return newArr;
  }


  function destroyer(arr) {
    /* remove items from a array */
	var badarray = arr;

    for (let x=1;x<arguments.length;x++)
    {
            badarray = badarray.filter(item=>item!==arguments[x]);
    }
        
    console.log(badarray);
    return badarray;
}

  
  
function truthCheck(collection, pre) {
	let cnt =0;
	for (let x=-0;x<collection.length;x++)
  {
  	if (collection[x].hasOwnProperty(pre) && Boolean(collection[x][pre]) )
    {
    	cnt++;
    }
  }
  
  console.log(cnt+"  "+collection.length);
  
  return cnt==collection.length;
}


function addTogether() {
	
	var sum =0;
	if (arguments.length===2)
  {
  		if (typeof arguments[0]==="number" && typeof arguments[1]==="number")
      {
  			sum = arguments[0]+arguments[1];
	      console.log(sum);
      
  			return sum;
  		}
      else
      {
      	return undefined;
      }
  }
  else 
  {
  	var thenum = arguments[0];
    if (typeof thenum==="number")
    {
  	return function(secnum) 
    				{
            		var thesum =0;
            		if (typeof thenum==="number" && typeof secnum==="number")
                {
                  thesum  = secnum+thenum;
                  console.log(thesum);

                  return thesum;
                }
                else
                {
                	console.log("doing the undefined");
                  return undefined;
                }
    				};
    
    }
    else
    {
    	console.log("returning the undefined");
      return undefined;
    }
  }
  
  return false;
  
}

var Person = function(firstAndLast) {
    // Complete the method below and implement the others similarly
    var _fullname = firstAndLast;
    var _firstname = " ";
    var _lastname = " ";
    
    this.getFullName = function() {
      return _fullname;
    };
    
      this.getFirstName = function()
    {
        return _fullname.split(" ")[0];
    }
    
    this.getLastName = function()
    {
            return _fullname.split(" ")[1];
    }
  
      this.setFirstName = function(first)
    {
        _firstname = first;
      var tmpar = _fullname.split(" ");
      tmpar[0] =_firstname;
      _fullname = tmpar[0]+" "+tmpar[1];
    }
    
      this.setLastName = function(last)
    {
        _lastname = last;
      var tmpar = _fullname.split(" ");
      tmpar[1] =_lastname;
      _fullname = tmpar[0]+" "+tmpar[1];
  
    }
    
      this.setFullName = function(firstAndLast)
    {
        _fullname = firstAndLast;
    }
  
    return firstAndLast;
  };
  
  

  function orbitalPeriod(arr) {
    var GM = 398600.4418;
    var earthRadius = 6367.4447;
    var myar = [];
    
    for (let x=0;x<arr.length;x++)
    {
      var t = (2*Math.PI)*Math.sqrt(Math.pow((earthRadius+arr[x]["avgAlt"]),3)/GM);
  
      t= Math.round(t);
  
      delete arr[x].avgAlt; 
      arr[x].orbitalPeriod = t;
    }
    
    console.log(arr );
    
    return arr;
  }
  
  orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
  
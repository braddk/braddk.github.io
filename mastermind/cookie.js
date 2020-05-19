// Dave Reed           cookie.js            1/10/01
// 
// This library contains functions for storing and accessing data
// via cookies.
/////////////////////////////////////////////////////////////////////      


function getCookie(Attribute)
// Assumes: Attribute is a string
// Results: gets the value stored under the Attribute
{
    if (document.cookie.indexOf(Attribute+"=") == -1) { 
      return "";
    }
    else {          
        var begin = document.cookie.indexOf(Attribute+"=") + Attribute.length+1;       
        var end = document.cookie.indexOf(";", begin);
        if (end == -1) end = document.cookie.length;
        return document.cookie.substring(begin, end);
    }
}

function setCookie(Attribute, Value)
// Assumes: Attribute is a string
// Results: stores Value under the name Attribute, expires in 30 days
{
  //  alert("calling setCookie: " + Attribute + " " + Value);

    document.cookie = Attribute+"="+Value;
 //   alert("changed cookie: " + document.cookie);
 
    var ExpireDate = new Date();
    ExpireDate.setTime(ExpireDate.getTime() + (30*24*3600*1000));
    document.cookie = "expires=" + ExpireDate.toGMTString();
}

function delCookie (Attribute) 
// Assumes: Attribute is a string
// Results: removes the cookie value under the name Attribute
{
  if (getCookie(Attribute) != "") {
    setCookie(Attribute, "");
  }
}
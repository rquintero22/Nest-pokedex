(() => {
 
});

let text = "<p>Browser CodeName: " + navigator.appCodeName + "</p>" +
"<p>Browser Name: " + navigator.appName + "</p>" +
"<p>Browser Version: " + navigator.appVersion + "</p>" +
"<p>Cookies Enabled: " + navigator.cookieEnabled + "</p>" +
"<p>Browser Language: " + navigator.language + "</p>" +
"<p>Browser Online: " + navigator.onLine + "</p>" +
"<p>Platform: " + navigator.platform + "</p>" +
"<p>User-agent header: " + navigator.userAgent + "</p>";

// var ip = HttpContext.Current.Request.ServerVariables["REMOTE_ADDR"];
// var ip = Request.UserHostAddress.ToString();

const lblNavigator = document.querySelector("#lblNavigator");
lblNavigator.innerHTML = text;

// console.log(ip);
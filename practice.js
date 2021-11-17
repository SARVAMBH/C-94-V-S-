var firebaseConfig = {
    apiKey: "AIzaSyDuhODyGt8PWgBSrwFolxT7Fmiw9ByFTSI",
    authDomain: "kwitter-social-website-ea3cc.firebaseapp.com",
    databaseURL: "https://kwitter-social-website-ea3cc-default-rtdb.firebaseio.com",
    projectId: "kwitter-social-website-ea3cc",
    storageBucket: "kwitter-social-website-ea3cc.appspot.com",
    messagingSenderId: "499736750283",
    appId: "1:499736750283:web:9fd1e2634e10e71c40934e"
  };
  
  firebase.initializeApp(firebaseConfig);

  function addUser()
  {
      user_name = document.getElementById("user_name").value;
      firebase.database().ref("/").child(user_name).update({
          purpose : "adding user"   
      });
  }
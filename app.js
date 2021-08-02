var firebaseConfig = {
  apiKey: 'AIzaSyCI0RWe8UzbHko9-8FXe8JkaPils5mPZ9A',
  authDomain: 'software-company-6f9e8.firebaseapp.com',
  projectId: 'software-company-6f9e8',
  storageBucket: 'software-company-6f9e8.appspot.com',
  messagingSenderId: '522301310668',
  appId: '1:522301310668:web:0bb91513a17c24d027a469',
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

var messagesRef = firebase.database().ref('messages')

document.getElementById('ContactForm').addEventListener('submit', submitForm)

function submitForm(e) {
  e.preventDefault()

  // Get values
  var FirstName = getInputVal('FirstName')
  var LastName = getInputVal('LastName')
  var Email = getInputVal('Email')
  var Subject = getInputVal('Subject')
  var Message = getInputVal('Message')

  saveMessage(FirstName, LastName, Email, Subject, Message)

  document.querySelector('.alert').style.display = 'block'

  setTimeout(function () {
    document.querySelector('.alert').style.display = 'none'
  }, 3000)

  document.getElementById('ContactForm').reset()
}

// function to get value

function getInputVal(id) {
  return document.getElementById(id).value
}

//save message to firebase

function saveMessage(FirstName, LastName, Email, Subject, Message) {
  var newMessagesRef = messagesRef.push()
  newMessagesRef.set({
    FirstName: FirstName,
    LastName: LastName,
    Email: Email,
    Subject: Subject,
    Message: Message,
  })
}

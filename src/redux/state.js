import myRender from "../myRender";

let myRender = () => {
  console.log(`State change`)
}

let state = {
  dialogPage: {
    dialogData: [
      { id: 1, name: "Sasha" },
      { id: 2, name: "Valera" },
      { id: 3, name: "Masha" },
      { id: 4, name: "Denis" },
      { id: 5, name: "Ira" },
    ],
    messagesData: [
      { id: 1, message: "Hello" },
      { id: 2, message: "Hi" },
      { id: 3, message: "Yo" },
    ],
  },
  profilePage: {
    postData: [
      { id: 1, text: "Hi,world", likesCount: 5 },
      { id: 2, text: "How are you", likesCount: 7 },
      { id: 3, text: "Good night", likesCount: 8 },
    ],
    newPostText: ''
  },
};

export const addPost = (newPostText) =>{
  let post = {
    id: 4,
    text: newPostText,
    likesCount: 0
  }
  state.profilePage.postData.unshift(post)
  myRender()
}

export const addNewPostText = (newText) =>{
  let newPostText = state.profilePage.newPostText
  newPostText = newText
}
export const subscribe = (observer) => {
  myRender = observer;
}

export default state
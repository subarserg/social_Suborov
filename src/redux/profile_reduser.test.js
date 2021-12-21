import profileReduser, {
  setAddPostSuccess,
  setChangeNewTextSuccess,
  setProfileSuccess,
  setStatusSuccess
} from "./profile_reduser";

const defaultState = {
  postData: [
    { id: 1, text: "Hi,world", likesCount: 5 },
    { id: 2, text: "How are you", likesCount: 7 },
    { id: 3, text: "Good night", likesCount: 8 },
  ],
  newPostText: "",
  profile: null,
  status: ``
};

it("test add post", () => {
  let state = profileReduser(defaultState, setAddPostSuccess())
  expect(state.postData.length).toBe(4)

})

it("test update new post text", () => {
  let state = profileReduser(defaultState, setChangeNewTextSuccess(`hello`))
  expect(state.newPostText).toBe(`hello`)
})

it("get profile", () => {
  let profile1 = {
    userId: 1,
    lookingForAJob: true,
    lookingForAJobDescription: `required(string)`,
    fullName: `SERG`,
    contacts: {
      github: `required`,
      vk: `required(string)`,
      facebook: `required(string)`,
      instagram: `required(string)`,
      twitter: `required(string)`,
      website: `required(string)`,
      youtube: `required(string)`,
      mainLink: `required(string)`
    },
    photos: {
      small: `(string)`,
      large: `photo`
    }
  }
  let state = profileReduser(defaultState, setProfileSuccess(profile1))
  expect(state.profile.fullName).toBe(`SERG`)
})


it("set ststus", () => {
  let state = profileReduser(defaultState, setStatusSuccess(`Yo`))
  expect(state.status).toBe(`Yo`)
})

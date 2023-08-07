const initialState = {
  posts: [
    { id: 1, title: "post title", description: "sample description" },
    { id: 2, title: "post title 2", description: "sample description 2" },
  ],
};

const postReducer = (state=initialState,action) => {
    return state;
};

export default postReducer;

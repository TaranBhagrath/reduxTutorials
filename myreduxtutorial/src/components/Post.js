import { connect } from "react-redux";

const Post =(props)=>{

    const getState=props.post;
    console.log(getState);

    return(<div>Post List
        <div>
        {getState.map((data)=>{
            return(<div>
                
                <div>{data.id}</div>
                <div>{data.title}</div>
                <div>{data.description}</div>
                </div>
                )
        })}
        </div>
    </div>
    )
}


const mapStateToProps=(state)=>{
  // console.log('state is ', state.posts);
return{
    post: state.posts,
}
};



export default connect(mapStateToProps) (Post);
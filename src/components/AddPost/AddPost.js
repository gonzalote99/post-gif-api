import React from 'react';
import './AddPost';
import './AddPost.css';
import GifIcon from '@mui/icons-material/Gif';
import {Paper, Avatar, Button} from '@mui/material';
import GifDropDown from './GifDropDown'


const emptyPost = {
  displayName: "Codemancer",
  username: "tester",
  verified: false,
  avatar: "https://e7.pngegg.com/pngimages/348/800/png-clipart-man-wearing-blue-shirt-illustration-computer-icons-avatar-user-login-avatar-blue-child.png",
  image: '',
  text: ''
}

const AddPost = (props) => {
  const [selector, setSelector] = React.useState('')
  const [realPost, setRealPost] = React.useState(emptyPost)
  
  const selectGif = (url) => {
      setSelector(url);
      setRealPost({...realPost, image: url})
  }
  
  const postClick = () => {
      if(realPost.text == '' || realPost.image == ''){
          alert("Empty message or Gif input");
      }
      else{
      props.enterPost(realPost)
      setRealPost(emptyPost)
      setSelector("")}
  }

return(
<Paper className="AddPost" elevation={3}>
<Avatar className='Avatar' src="https://e7.pngegg.com/pngimages/348/800/png-clipart-man-wearing-blue-shirt-illustration-computer-icons-avatar-user-login-avatar-blue-child.png" sx={{width: 46, height: 46}} />
<input type="text" className="message" placeholer='write message' value={realPost.text} onChange = {(e) => setRealPost({...realPost, text: e.target.value})} />
<img src={selector} className='hidden-img' />
<GifDropDown selectGif={selectGif} />
<Button variant="contained" onClick={postClick} style={{maxWidth: '50px', maxHeight: '30px', minWidth: '30px', maxHeight: '30px', fontSize: '10px'}} className="post-btn">post</Button>
  </Paper>
)

}

export default AddPost;


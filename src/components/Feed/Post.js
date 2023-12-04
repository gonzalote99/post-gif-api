import React, {forwardRef} from 'react';
import {Avatar, Paper} from '@mui/material';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PublishIcon from '@mui/icons-material/Publish';

const Post = forwardRef(
  ({displayName, username, verified, text, image, avatar}, ref) => {
    return (
      <Paper className='post' ref={ref} elevation={3}>
         <div className='post__avatar'>
           <Avatar 
              src={avatar}
              sx={{width: 56, height: 56 }} />
           
           </div>
           <div className='post__body'>
               <div className='post__header'>
                  <div className='post__headerText'>
                   <h3>
                    {displayName}{' '}
                    <span className='post__headerSpecial'>
                        {verified && <VerifiedUserIcon className='post__badge' />} @
                        {username}
                      </span>
                     </h3>
                    </div>
                    <div className='post__headerDescription'>
                      <p>{text}</p>
                      </div>
                 </div>
                 <img src={image} alt='' />
                 <div className='post__footer'>
                    <ChatBubbleOutlineIcon fontSize='small' />
                    <RepeatIcon fontSize='small' />
                    <FavoriteBorderIcon fontSize='small' />
                    <PublishIcon fontSize='small' />

                   </div>
             </div>
       
        </Paper>
    );
  }
);

export default Post;
import React from 'react';
import useFetchGiffy from './useFetchGiffy';
import {Button, ImageList, ImageListItem} from '@mui/material';

const GifDropDown = (properties) => {
const [search, setSearch] = React.useState('');
const [gifs, loading] = useFetchGiffy(search);

const RenderGrid = () => {
  if(loading) {return <h3>loading...</h3>}

  return (
    <ImageList sx={{width: 500, height: 500 }} cols={2} rowHeight={164}>
       {gifs.data?.map((item) => {
         return (
           <ImageListItem key={item.id}>
             <img 
               src={item.images.downsized.url}
               srcSet={item.images.downsized.url}
               loading="lazy"
               onClick={() => properties.selectGif(item.images.downsized.url)}
             />
             </ImageListItem>

         )
       })}
   
      </ImageList>
  )
}

return (
  <div className="dropdown">
      <Button variant="outlined" className="gif-btn" style={{maxWidth: '50px', maxHeight: '30px', minWidth: '30px', minHeight: '30px', fontSize: '10px' }}>GIF</Button>
      <div className="dropdown-menu">
          <input value={search} placeholder="search gifs" onChange={(e) => setSearch(e.target.value)} className="searchGif" />
           <div className="gif-grid">
               <RenderGrid />
             </div>
        </div>
    </div>
)

}

export default GifDropDown
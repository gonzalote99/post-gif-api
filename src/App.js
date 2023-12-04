import React from 'react';
import './style.css';
import Header from './components/Header/Header.jsx';
import AddPost from './components/AddPost/AddPost';
import Feed from './components/Feed/Feed';
import feedHistory from './components/Feed/feedHistory';


 function App() {
const [posts, setPosts] = React.useState(feedHistory);
const enterPost = (post) => {
  setPosts([post,...posts])
}

  return (
    <div className="app">
     <header>
      <Header />
       </header>
       <main>
         <AddPost enterPost={enterPost} />
         </main>
         <Feed allPosts={posts} />
    </div>
  );
}

export default App;

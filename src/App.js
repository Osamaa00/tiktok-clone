import React, { useEffect, useState } from 'react';
import './App.css';
import Video from './Video/Video';
import db from './firebase/firebase'

function App() {

  const [videos, setVideos] = useState([]);

  useEffect(() => {
    db.collection('videos').onSnapshot(snapshot => 
      setVideos(snapshot.docs.map(doc => doc.data()))
      
    );
  }, [videos])

  return (
    <div className="app">
      <div className="app__videos">
        {
          videos.map(({ url, channel, description, song, likes, messages, shares }) => (
            <Video 
              url={ url }
              channel={ channel }
              description={ description }
              song={ song }
              likes={ likes }
              messages={ messages }
              shares={ shares }
            />
          ))
        }
      </div>
        {/* video components here */}
        {/* <Video 
          url="https://v39-as.tiktokcdn.com/63678b66603d6aa72bb8ca7b18627fb7/61487e81/video/tos/alisg/tos-alisg-pve-0037/236a57d6705646f5b91797c7e6ac7e5a/?a=1180&br=2598&bt=1299&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=3&ds=3&er=&ft=98ZmAekh4kag3&l=2021092006284001024501512612323FC7&lr=tiktok&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M3lqazU6ZjVoNjMzODgzNEApNzQ2OjQ7aWU6N2Q3NTk2ZmcyLnNvcjRvZWlgLS1kLy1zczAzYDIuYzM0YTEtMjJgMzI6Yw%3D%3D&vl=&vr="
          channel="devsDen"
          description="hahah it works"
          song="sunny song"
          likes={123}
          messages={12333}
          shares={200}
         />
        <Video />
        <Video />
        <Video /> */}
    </div>
  );
}

export default App;

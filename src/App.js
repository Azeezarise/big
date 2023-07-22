
import './App.css';
import Banner from './component/Banner';
import Header from './component/header';
import Thumb from './component/Thumb';
import { GlobalStyle } from './GlobalStyle';
import Grid from './Grid/Grid';

function App() {
  return (
    <>
      <Header />
      <Banner image={"https://cdn.vox-cdn.com/thumbor/DjZeeL2WELkl_OuCiou2AOG-XUY=/133x0:2775x1321/fit-in/1200x600/cdn.vox-cdn.com/uploads/chorus_asset/file/24725191/trotbfp132k2.jpg"}
        title={"Transformer:Rise of the Beasts"}
        text={"Lorem ipsum dolor sit amet consecteturnim quisquam! Consectetur tenetur totam rerum?"} />
      <Grid header={"popular movie"} >
        <Thumb image={"https://cdn.vox-cdn.com/thumbor/DjZeeL2WELkl_OuCiou2AOG-XUY=/133x0:2775x1321/fit-in/1200x600/cdn.vox-cdn.com/uploads/chorus_asset/file/24725191/trotbfp132k2.jpg"} movieId={1} clickable={true} />
        <Thumb image={"https://cdn.vox-cdn.com/thumbor/DjZeeL2WELkl_OuCiou2AOG-XUY=/133x0:2775x1321/fit-in/1200x600/cdn.vox-cdn.com/uploads/chorus_asset/file/24725191/trotbfp132k2.jpg"} movieId={1} clickable={true} />
        <Thumb image={"https://cdn.vox-cdn.com/thumbor/DjZeeL2WELkl_OuCiou2AOG-XUY=/133x0:2775x1321/fit-in/1200x600/cdn.vox-cdn.com/uploads/chorus_asset/file/24725191/trotbfp132k2.jpg"} movieId={1} clickable={true} />
        <Thumb image={"https://cdn.vox-cdn.com/thumbor/DjZeeL2WELkl_OuCiou2AOG-XUY=/133x0:2775x1321/fit-in/1200x600/cdn.vox-cdn.com/uploads/chorus_asset/file/24725191/trotbfp132k2.jpg"} movieId={1} clickable={true} />
        <Thumb image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU_3H3FTGmIDIU9oW4n1lJIxKCBOxMzDG2HQ&usqp=CAU"} movieId={1} clickable={true} />

      </Grid>
      <GlobalStyle />

    </>
  );
}

export default App;

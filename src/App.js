
import './App.css';
import Banner from './component/Banner';
import Header from './component/header';
import Thumb from './component/Thumb';
import { GlobalStyle } from './GlobalStyle';
import Grid from './Grid/Grid';
import SearchBar from './SearchBar'


function App() {
  return (
    <>
      <Header />
      <Banner image={"https://cdn.vox-cdn.com/thumbor/DjZeeL2WELkl_OuCiou2AOG-XUY=/133x0:2775x1321/fit-in/1200x600/cdn.vox-cdn.com/uploads/chorus_asset/file/24725191/trotbfp132k2.jpg"}
        title={"Transformer:Rise of the Beasts"}
        text={"Lorem ipsum dolor sit amet consecteturnim quisquam! Consectetur tenetur totam rerum?"} />


      <SearchBar searchIcon={<svg width="66" height="68" viewBox="0 0 66 68" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M45.9281 28C45.9281 37.9014 37.9014 45.9281 28 45.9281C18.0986 45.9281 10.0719 37.9014 10.0719 28C10.0719 18.0986 18.0986 10.0719 28 10.0719C37.9014 10.0719 45.9281 18.0986 45.9281 28ZM42.2002 52.1372C38.0368 54.5918 33.1829 56 28 56C12.536 56 0 43.464 0 28C0 12.536 12.536 0 28 0C43.464 0 56 12.536 56 28C56 34.1992 53.9854 39.928 50.5751 44.5671L64.0492 58.0413C66.2508 60.2428 66.2508 63.8122 64.0492 66.0137C61.8477 68.2153 58.2783 68.2153 56.0767 66.0137L42.2002 52.1372Z" fill="white" />
      </svg>}  />


      <Grid header={"popular movie"} >
        <Thumb image={"https://cdn.vox-cdn.com/thumbor/DjZeeL2WELkl_OuCiou2AOG-XUY=/133x0:2775x1321/fit-in/1200x600/cdn.vox-cdn.com/uploads/chorus_asset/file/24725191/trotbfp132k2.jpg"} movieId={1} clickable={true} />
        <Thumb image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX8kGfnVqA6EYkVzE6iBIdH_BR0gAWef5NCA&usqp=CAU"} movieId={1} clickable={true} />
        <Thumb image={"https://www.syfy.com/sites/syfy/files/2021/07/transformers_pic1.jpeg"} movieId={1} clickable={true} />
        <Thumb image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaNVLwnfE5mQwZ7ERzK34NXhQP3ETa6skpSg&usqp=CAU"} movieId={1} clickable={true} />
        <Thumb image={"https://variety.com/wp-content/uploads/2023/06/t5.jpg?w=1000"} movieId={1} clickable={true} />

      </Grid>
      <GlobalStyle />

    </>
  );
}

export default App;

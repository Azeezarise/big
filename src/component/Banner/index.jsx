import { Content, Wrapper,Text} from "./Banner.styles";


const Banner = ({image,title,text})=>(
    <Wrapper image={image}>
        <Content>
            <Text>
                <h1>{title}</h1>
                <p>{text}</p>
               
            </Text>
        </Content>
    </Wrapper>
);
export default Banner;





import React from 'react';
import styled from "@emotion/styled";
// import LanguageSwitcher from '../LanguageSwitcher';

const HeroContainer = styled("div")`
  margin: 0px auto;
  display: flex;
  align-items: center;
  flex-direction: column;
`

const Image = styled("img")`
    width: 223px;
    opacity: 1;
    transform: none;
`

const H1 = styled("h1")`
    transform: none;
    opacity: 1;
    font-family: Overpass;
    font-weight: 800;
    font-size: 18px;
    text-transform: uppercase;
    color: #4258D3;
    letter-spacing: 1.8px;
    line-height: 24px;
    margin-top: 10px;
    margin-bottom: 50px;
    text-align: center;
`

const Form = styled("form")`
    min-width: auto;
    display: flex;
    position: relative;
    input {
        padding: 20px 0px 20px 55px;
        border: none;
        border-radius: 6px 0px 0px 6px;
        font-family: Overpass;
        font-size: 28px;
        font-weight: 100;
        width: 100%;
        outline: none;
    }
`
// ::before {
//     content: "";
//     position: absolute;
//     left: 20px;
//     top: 50%;
//     transform: translate(0px, -50%);
//     display: block;
//     width: 27px;
//     height: 27px;
//     background: url('/search.svg') no-repeat;
// }

const Button = styled("button")`
    display: block;
    border-radius: 0px 6px 6px 0px;
    background: #B7C3D3;
    color: white;
    font-size: 30px;
    font-family: Overpass;
    letter-spacing: 3px;
    padding: 20px 0px;
    height: 90px;
    width: 100vh;
    border: none;
`

export default function SearchButton(props) {
    return (
        <HeroContainer>
            <Image src='/ensLogo.svg'/>
            <H1></H1>
            <Form>
                {/* <input placeholder="Comming soon"/>
                <LanguageSwitcher style={{background: 'white'}} /> */}
                <Button>Comming Soon</Button>
            </Form>
        </HeroContainer>
    )
  }
import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'

const Activities = (props) => (
  <ActivitiesDiv>
    <Title>ACTIVITIES</Title>
    <ActivitiesUl>
      {props.listItems.map((category) => (
        <ActivitiesLi key={category}>{category}</ActivitiesLi>
      ))}
    </ActivitiesUl>
  </ActivitiesDiv>
)
const Miscellaneous = (props) => (
  <MiscellaneousUl>
    {props.listItems.map((type) => (
      <MiscellaneousLi key={type}>{type}</MiscellaneousLi>
    ))}
  </MiscellaneousUl>
)
const Subheaders = (props) => (
  <SubheadersUl>
    {props.subHeaders.map((subHeader) => (
      <li key={subHeader.title}>
        <SubheaderUl>
          <SubheaderLi style={{ fontWeight: '400', letterSpacing: '1px' }}>{subHeader.title}</SubheaderLi>
          {subHeader.related.map((type) => (
            <SubheaderLi key={type}>{type}</SubheaderLi>
          ))}
        </SubheaderUl>
      </li>
    ))}
  </SubheadersUl>
)
class DropdownContent extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return(
      <Div onMouseLeave={this.props.handleMouseLeave}>
        {this.props.dropdownItems.categories && <Activities listItems={this.props.dropdownItems.categories} />}
        {this.props.dropdownItems.misc && <Miscellaneous listItems={this.props.dropdownItems.misc} />}
        <Subheaders subHeaders={this.props.dropdownItems.subHeaders}/>
      </Div>
    )
  }
}

const ActivitiesUl = styled.ul`
  display: flex;
  list-style-type: none;
  font-size: 11.5pt;
  font-weight 400;
`

const ActivitiesLi = styled.li`
  padding: 10px 25px;
`

const SubheadersUl = styled.ul`
  list-style-type: none;
`

const SubheaderUl = styled.ul`
  display: flex;
  flex-direction: column;
  float: left;
  font-weight: 300;
  list-style-type: none;
  font-size: 11pt;
  font-weight 300;
  margin: 30px 0;
`

const SubheaderLi = styled.li`
  padding: 10px 25px;
`

const MiscellaneousUl = styled.ul`
  display: flex;
  flex-direction: column;
  border-right: 1px solid #d5d5d5;
  width: 180px;
  font-weight: 300;
  list-style-type: none;
  font-size: 11pt;
  font-weight 300;
  margin: 30px 0;
  margin-left: 50px;
  float: left;
`

const MiscellaneousLi = styled.li`
  padding: 10px 25px;
`

const ActivitiesDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  padding-left: 80px;
  align-items: center;
  background-color: white;
`

const Title = styled.div`
  width: 110px;
  padding: 10px 40px;
  font-size: 11.5pt;
  font-weight: 400;
  letter-spacing: 1px;
  border-right: 1px solid #d5d5d5;
  margin: 8px 0;
  transform: scale(1, 0.9);
`

const Div = styled.div`
  position: fixed;
  width: 100%;
  background-color: #fafafa;
  z-index: 7;
  top: 70px;
  left: 0;
  height: auto;
`

const Ul = styled.ul`
  display: flex;
  width: 50%;
  justify-content: space-around;
  align-items: flex-start;
  list-style-type: none;
  max-height: 70px;
  font-family: 'Josefin Sans';
  font-weight: 600;
  font-size: 10.5pt;
  padding: 25px;
  box-sizing: border-box;
  margin: 0;
  position: relative;
`

const Li = styled.li`
  display: block;
  transform: scale(1, 1.02);
  padding-top: 8px;
  letter-spacing: 1px;
`

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: auto;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #fafafa;
  z-index: 8;
`

const Section = styled.section`
  display: flex;
  width: 180px;
  justify-content: space-between;
  margin-top: 10px;
`

const Button1 = styled.button`
  border: none;
  width: 85px;
  height: 24px;
  margin: 3px 0;
  margin-right: 10px;
  border-right: 1px solid #d5d5d5;
  font-family: 'Josefin Sans';
  font-weight: 300;
  font-size: 11pt;
  background-color: #fafafa;
  padding: 0;
  padding-right: 15px;
`
const Button2 = styled.button`
  border: none;
  width: 30px;
  height: 30px;
  background-color: #fafafa;
  padding: 0;
  margin: 0 10px;
`
const Button3 = styled.button`
  border: none;
  width: 30px;
  height: 30px;
  background-color: #fafafa;
  padding: 0;
  margin: 0 10px;
  transform: scale(1, 1.1);
  margin-top: -3px;
`

const Header = styled.div`
  position relative;
`

const DivBorder = styled.div`
  color: #d22030;
  height: 4px;
  width: inherit;
  background-color: #d22030;
  transition: 0.5s;
  top: inherit;
  left: inherit;
`

class Nav extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      'women': false,
      'men': false,
      'girls': false,
      'shoes': false,
      'collections': false,
      'community': false,
    }
    this.handleMouseOver = this.handleMouseOver.bind(this)
    this.handleMouseLeave = this.handleMouseLeave.bind(this)
  }
  handleMouseOver(e) {
    const target = e.target.innerHTML.toLowerCase()
    this.setState({ [target]: true })
    for (let property in this.state) {
      if (this.state[property] && property !== target) this.setState({ [property]: false })
    }
  }
  handleMouseLeave() {
    for (let property in this.state) {
      if (this.state[property]) this.setState({ [property]: false })
    }
  }
  render() {
    return(
      <Container>
        <Ul>
          <li>
            <svg style={{ fill: '#d22030' }} width='35px' height='35px' viewBox='0 0 35 35'>
            <path d="M17 .5c9.4 0 17 7.6 17 17s-7.6 17-17 17-17-7.6-17-17S7.6.5 17 .5zM28.9 25c-.7.4-1.9.9-3 .9-.5 0-1-.1-1.5-.5-2.8-1.8-1.8-4 0-7.4.8-1.4 1.7-2.9 2-4.5.4-1.6.8-4-.7-5.8-.6-.9-1.7-1.6-3-2-1.4-.5-3.2-.7-5.4-.7h-.6c-2.2 0-4 .2-5.4.7-1.3.4-2.4 1.1-3 2-1.5 1.8-1.1 4.2-.7 5.8.3 1.6 1.2 3.1 2 4.5 1.8 3.4 2.8 5.6 0 7.4-.5.4-1 .5-1.5.5-1.1 0-2.3-.5-3-.9l.2.3c1.3 2.1 3.1 3.2 5 3.2.9 0 1.8-.3 2.7-.7 1-.4 1.8-1.2 2.4-2.2.6-1 .8-2.1.7-3-.2-.9-.7-2.1-1.2-3.4-1.4-3.5-3.2-8.3-1.6-10.6.7-1 1.9-1.5 3.7-1.5 1.8 0 3 .5 3.7 1.5 1.6 2.3-.2 7.1-1.6 10.6-.5 1.3-1 2.5-1.2 3.4-.1.9.1 2 .7 3s1.4 1.8 2.4 2.2c.9.4 1.8.7 2.7.7 1.9 0 3.7-1.1 5-3.2l.2-.3z"></path>
            </svg>
          </li>
        {this.props.menuItems.map((item, index) => (
          <Header key={item.title}>
            <Li onMouseOver={this.handleMouseOver}>{item.title}</Li>
            {this.state[item.title.toLowerCase()] &&
              <div>
                <DivBorder />
                <DropdownContent handleMouseLeave={this.handleMouseLeave} dropdownItems={{ subHeaders: item.subHeaders, misc: item.misc, categories: item.categories }} />
              </div>
            }
          </Header>
        ))}
        </Ul>
        <Section>
          <Button1>SIGN IN</Button1>
          <Button2><img src="https://www.dropbox.com/s/pfg479t5qk1gwbp/searchicon.svg?raw=1" width="24px" height="24px" /></Button2>
          <Button3><img src="https://www.dropbox.com/s/9x1thy0qyk9dudw/carticon.svg?raw=1" width="30px" height="30px" /></Button3>
        </Section>
      </Container>
    )
  }
}

const headerItems = [
  {
    title: 'WOMEN',
    subHeaders: [
      {
        title: 'TOPS',
        related: ['Bras', 'Tanks', 'Dresses + Onesies', 'Short Sleeves', 'Long Sleeves', 'Sweaters', 'Hoodies + Vests', 'Jackets + Outerwear', 'Swim']
      },
      {
        title: 'BOTTOMS',
        related: ['Pants', 'Crops', 'Shorts', 'Skirts', 'Swim']
      },
      {
        title: 'ACCESSORIES',
        related: ['Bags', 'Yoga Mats + Props', 'Hats + Hair Accessories', 'Scarves + Wraps + Gloves', 'Socks + Underwear', 'Water Bottles', 'Shoes']
      },
    ],
    misc: [
      'What\'s New', 'What We Love', '7Mesh Cycling', 'Bestsellers', 'Summer Edit', 'Love Shop', 'Wunder Under Shop', 'We Made Too Much', 'View All'
    ],
    categories: ['Yoga', 'Run', 'Train', 'Swim', 'Office Travel Commute']
  },
  {
    title: 'MEN',
    subHeaders: [
      {
        title: 'CLOTHING',
        related: ['Pants', 'Joggers', 'Shorts', 'Tanks', 'Tights', 'Polos', 'Long Sleeves', 'Jackets + Hoodies']
      },
      {
        title: 'ACCESSORIES',
        related: ['Bags', 'Yoga Mats + Props', 'Hats', 'Socks + Underwear', 'Water Bottles', 'Shoes']
      }
    ],
    misc: [
      'What\'s New', 'Gifts For Him', '7Mesh Cycling', 'Bestsellers', 'We Made Too Much', 'ABC Shop', 'Golf Shop', 'View All'
    ],
    categories: ['Train', 'Run', 'Yoga', 'Swim', 'Office Travel Commute', 'Golf']
  },
  {
    title: 'GIRLS',
    subHeaders: [
      {
        title: 'TOPS',
        related: ['Bras', 'Tanks', 'Bodysuits + Leotards', 'Short Sleeves', 'Long Sleeves', 'Sweaters + Wraps', 'Hoodies + Vests', 'Jackets + Outerwear', 'Swim']
      },
      {
        title: 'BOTTOMS',
        related: ['Pants', 'Crops', 'Shorts', 'Skirts + Dresses', 'Swim']
      },
      {
        title: 'ACCESSORIES',
        related: ['Bags', 'Headbands + Hats', 'Scarves + Gloves', 'Socks + Underwear', 'PBteen Bedding']
      }
    ],
    misc: [
      'What\'s New', 'Bestsellers', 'Swim', 'Camp Shop', 'Rhythmic Shop', 'We Made Too Much', 'View All'
    ],
    categories: ['Dance', 'Gymnastics', 'Train', 'Swim', 'To + From']
  },
  {
    title: 'SHOES',
    subHeaders: [
      {
        title: 'ALL SHOES',
        related: ['Women\'s Shoes', 'Men\'s Shoes']
      }
    ],
  },
  {
    title: 'COLLECTIONS',
    subHeaders: [
      {
        title: 'WOMEN\'S',
        related: ['Run', 'Align Collection', 'Gifts For Her', 'APL Shoes']
      },
      {
        title: 'MEN\'S',
        related: ['Gifts For Him', 'Run', 'Up Your Shorts Game', 'Travel Essentials', 'Metal Vent Tech', 'APL Shoes']
      },
      {
        title: 'GIRLS\'',
        related: ['Bestsellers', 'Swim', 'Gifts For Girls', 'PBteen Bedding']
      },
      {
        title: 'THE SWEATLIFE',
        related: ['Yoga Classes', 'Run Training Guides']
      }
    ],
  },
  {
    title: 'COMMUNITY',
    subHeaders: [
      {
        title: 'STORIES',
        related: ['Up-Close + Personal', 'Our Gear', 'This Just In', 'The SweatLife']
      },
      {
        title: 'AMBASSADORS',
        related: ['Elite', 'Store', 'Global Yoga']
      },
      {
        title: 'EVENTS',
        related: ['Festivals + Retreats', 'Sweat With Us']
      }
    ],
  },
]

ReactDOM.render(<Nav menuItems={headerItems}/>, document.getElementById('nav'))

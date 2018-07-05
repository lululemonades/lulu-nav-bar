import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'

const Activities = (props) => (
  <div className="activities-wrapper">
    <div className="title">ACTIVITIES</div>
    <ul className="activities-ul">
      {props.listItems.map((category) => (
        <li className="activities-li" key={category}>{category}</li>
      ))}
    </ul>
  </div>
)
const Miscellaneous = (props) => (
  <ul className="miscellaneous-ul">
    {props.listItems.map((type) => (
      <li className="miscellaneous-li" key={type}>{type}</li>
    ))}
  </ul>
)
const Subheaders = (props) => (
  <ul className="subheaders-ul">
    {props.subHeaders.map((subHeader) => (
      <li key={subHeader.title}>
        <ul className="subheader-ul">
          <li className="subheader-li" style={{ fontWeight: '400', letterSpacing: '1px' }}>{subHeader.title}</li>
          {subHeader.related.map((type) => (
            <li className="subheader-li" key={type}>{type}</li>
          ))}
        </ul>
      </li>
    ))}
  </ul>
)
class DropdownContent extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return(
      <div className="wrapper" onMouseLeave={this.props.handleMouseLeave}>
        {this.props.dropdownItems.categories && <Activities listItems={this.props.dropdownItems.categories} />}
        {this.props.dropdownItems.misc && <Miscellaneous listItems={this.props.dropdownItems.misc} />}
        <Subheaders subHeaders={this.props.dropdownItems.subHeaders}/>
      </div>
    )
  }
}

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
      <div className="container">
        <ul className="nav">
          <li className="nav-item">
            <svg style={{ fill: '#d22030', marginRight: '50px' }} width='33px' height='33px' viewBox='0 0 35 35'>
            <path d="M17 .5c9.4 0 17 7.6 17 17s-7.6 17-17 17-17-7.6-17-17S7.6.5 17 .5zM28.9 25c-.7.4-1.9.9-3 .9-.5 0-1-.1-1.5-.5-2.8-1.8-1.8-4 0-7.4.8-1.4 1.7-2.9 2-4.5.4-1.6.8-4-.7-5.8-.6-.9-1.7-1.6-3-2-1.4-.5-3.2-.7-5.4-.7h-.6c-2.2 0-4 .2-5.4.7-1.3.4-2.4 1.1-3 2-1.5 1.8-1.1 4.2-.7 5.8.3 1.6 1.2 3.1 2 4.5 1.8 3.4 2.8 5.6 0 7.4-.5.4-1 .5-1.5.5-1.1 0-2.3-.5-3-.9l.2.3c1.3 2.1 3.1 3.2 5 3.2.9 0 1.8-.3 2.7-.7 1-.4 1.8-1.2 2.4-2.2.6-1 .8-2.1.7-3-.2-.9-.7-2.1-1.2-3.4-1.4-3.5-3.2-8.3-1.6-10.6.7-1 1.9-1.5 3.7-1.5 1.8 0 3 .5 3.7 1.5 1.6 2.3-.2 7.1-1.6 10.6-.5 1.3-1 2.5-1.2 3.4-.1.9.1 2 .7 3s1.4 1.8 2.4 2.2c.9.4 1.8.7 2.7.7 1.9 0 3.7-1.1 5-3.2l.2-.3z"></path>
            </svg>
          </li>
        {this.props.menuItems.map((item, index) => (
          <div key={item.title}>
            <li className="nav-item" onMouseOver={this.handleMouseOver}>{item.title}</li>
            {this.state[item.title.toLowerCase()] &&
              <div>
                <div className="border"></div>
                <DropdownContent handleMouseLeave={this.handleMouseLeave} dropdownItems={{ subHeaders: item.subHeaders, misc: item.misc, categories: item.categories }} />
              </div>
            }
          </div>
        ))}
        </ul>
        <div className="account">
          <button className="button1">SIGN IN</button>
          <button className="button2"><img src="https://www.dropbox.com/s/pfg479t5qk1gwbp/searchicon.svg?raw=1" width="24px" height="24px" /></button>
          <button className="button3"><img src="https://www.dropbox.com/s/9x1thy0qyk9dudw/carticon.svg?raw=1" width="30px" height="30px" /></button>
        </div>
      </div>
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

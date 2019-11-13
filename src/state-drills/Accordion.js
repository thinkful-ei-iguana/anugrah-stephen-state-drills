import React from 'react';


export default class Accordion extends React.Component {

static defaultProps = {
    sections: [ 
    {
      title: 'Section 1',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
    {
      title: 'Section 2',
      content: 'Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!',
    },
    {
      title: 'Section 3',
      content: 'Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?',
    },
  ]
}

state = {
    clicked: null,
}

handleButtonClick = (sectionIndex) => {
    this.setState({
        clicked: sectionIndex,
    })
}

buttonCreator(sections, index, clicked) {
        return (
            <li key={index}>
            <button onClick={() => this.handleButtonClick(index)}>{sections.title}</button>
                {(clicked === index) && <p>{sections.content}</p>}
            </li>
        )
    }



render () {
const {clicked} = this.state;
const {sections} = this.props;
    return (
        <ul>
            {sections.map((section, index) => 
                this.buttonCreator(section, index, clicked)
            )}
        </ul>
    )
}
}

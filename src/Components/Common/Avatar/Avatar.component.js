import React, {PureComponent} from 'react'

import {getInitials} from '../../../Helpers/InitialsHelper';
import './Avatar.scss'

class Avatar extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      initials: '',
    }
  }

  componentDidMount() {
    const {name} = this.props
    if (name) {
      this.setState({
        initials: getInitials(name),
      })
    }
  }

  render() {
    const {picture} = this.props
    const {initials} = this.state
    return (
      picture ? (
        <div className='avatar'>
          <img src={picture} alt='avatar' />
        </div>
      ) : (
        <div className='avatar'>
          <span>
            {initials}
          </span>
        </div>
      )
    )
  }
}


export default Avatar

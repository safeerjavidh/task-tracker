import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title, onToggle, toggleAdd}) => {
    return (
        <header className='header'>
           <h1>{title} </h1> 
            <Button  color='green' text={ toggleAdd ? 'Close' : 'Add'} onClick={onToggle}/>
        </header>
    )
}

Header.defaultProps = {
    title: 'Default title'
}

Header.propTypes = {
    title : PropTypes.string
    // title : PropTypes.string.isRequired
}

// CSS in JS
// const headingStyle = {
//     color: 'red', 
//     backgroundColor: 'black'
// }
export default Header

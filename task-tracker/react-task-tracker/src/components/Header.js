import PropTypes from 'prop-types'
import Button from './Button';


const Header = ({title, footer}) => {
    const print = () => {
        console.log('Click')
    }
  return (
    <header className='header'>
        <h1 style={headingStyle}>{title} Task Tracker {footer}</h1>
        <Button color='green' text='Add' onClick={print}></Button>
    </header>
  )
}

Header.defaultProps = {
    title: 'Default Title',
};

Header.propTypes = {
    title: PropTypes.string.isRequired,
};

const headingStyle = {
    color: 'green'

}


export default Header
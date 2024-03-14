
import PropTypes from 'prop-types'

const Bokmark = ({bookmark}) => {

    const {title} = bookmark;
  return (

    <div className=' bg-slate-200 rounded-lg m-2 p-2'>
        <h3>{title}</h3>
    </div>
  )
}

Bokmark.propTypes = {

    bookmark: PropTypes.object

}

export default Bokmark

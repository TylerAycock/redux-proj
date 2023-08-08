import { useSelector } from 'react-redux'
import { selectDisplay } from '../redux/slices/displayCountrySlice'


const Symbols = () => {
    const currentDisplay = useSelector(selectDisplay)

    return (
        <div className='symbols' >
            <div className='stack'>
                {currentDisplay.flags ? <img src={currentDisplay.flags.png} alt="" /> : 'This country has no flag...weird'}
            </div>
            <div className='stack'>
                {currentDisplay.coatOfArms ? <img src={currentDisplay.coatOfArms.png} alt="" /> : 'This country has no coat of arms'}
            </div>
        </div>
    )
}

export default Symbols
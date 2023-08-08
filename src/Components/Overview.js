import { useSelector } from "react-redux"
import { selectDisplay } from "../redux/slices/displayCountrySlice"

const Overview = () => {
    const currentDisplay = useSelector(selectDisplay)

    return (
        <div className="stack">
            <h1>{currentDisplay.name.official}</h1>
            <h2>"{currentDisplay.name.common}"</h2>
            <table className="overview-table">
                <tbody>
                    <tr>
                        <td>Borders: </td>
                        <td>
                            {currentDisplay.borders ?
                                currentDisplay.borders.map((e, i, arr) => {
                                    if (i + 1 === arr.length) {
                                        return `${e}`
                                    } else {
                                        return `${e}, `
                                    }
                                })
                                : 'N/A'}
                        </td>
                    </tr>
                    <tr>
                        <td>Capitol:</td>
                        {currentDisplay.capital.map(e => {
                            return <td>{e}</td>
                        })}
                        <td></td>
                    </tr>
                    <tr>
                        <td>Population:</td>
                        <td>{currentDisplay.population}</td>
                    </tr>
                    <tr>
                        <td>Continents:</td>
                        {currentDisplay.continents.map(e => {
                            return <td>{e}</td>
                        })}
                    </tr>
                    <tr>
                        <td>Independent:</td>
                        <td>{currentDisplay.independent ? 'True' : 'False'}</td>
                    </tr>
                    <tr>
                        <td>Landlocked: </td>
                        <td>{currentDisplay.landlocked ? 'True' : 'False'}</td>
                    </tr>
                    <tr>
                        <td>Member of UN: </td>
                        <td>{currentDisplay.unMember ? 'True' : 'False'}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Overview
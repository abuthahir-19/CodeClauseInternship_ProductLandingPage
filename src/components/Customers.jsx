import swan from '../icons/swanlogo.svg';
import nodalview from '../icons/nodalview.svg';
import june from '../icons/junelogo.svg';
import mokacare from '../icons/mokacare.svg';
import dopt from '../icons/dopt.svg'
import figures from '../icons/figures.svg';
import fabric from '../icons/fabric-logo.svg';
import multis from '../icons/multis-logo.svg';
import contrast from '../icons/contrast-logo.svg';
import dreem from '../icons/dreem-logo.svg';
import lazy from '../icons/lazy-logo.svg';
import founders from '../icons/founders-logo.svg';

const Customers = () => {
    return (
        <div className="my-20">
            <p className="text-slate-600 text-lg text-center mt-0">Loved by product folk at</p>
            <div className="flex flex-wrap justify-evenly w-4/5 mx-auto gap-12 mt-16">
                <img src={swan} alt="SwanLogo" />
                <img src={nodalview} alt="nodalviewlog" />
                <img src={june} alt="juneLog" />
                <img src={mokacare} alt="mokacareLog" />
                <img src={dopt} alt="dopt" />
                <img src={figures} alt="figuresLogo" />
                <img src={fabric} alt="fabricLogo" />
                <img src={multis} alt="multis" />
                <img src={contrast} alt="contrastLogo" />
                <img src={dreem} alt="dreemLogo" />
                <img src={lazy} alt="LazyLogo" />
                <img src={founders} alt="founderLogo" />
            </div>
        </div>
    );
};

export default Customers;
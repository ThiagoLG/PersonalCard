import { UserNetworks, UserNetworksItem } from '../../models/user-networks-item';
import './NetworkButton.scss';

const NetworkButton = (network: UserNetworksItem) => {


    return (
        <div className='NetworkItem'>
            <a href={network.link} target="_blank">
                <img className="NetworkIcon" src={`./social-media-icons/pack1/${network.title}.svg`} alt={network.title} />
            </a>
        </div>
    )
}

export default NetworkButton;
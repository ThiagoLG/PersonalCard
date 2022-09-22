import { UserInfoItem } from '../../models/user-info-item';
import { UserNetworks } from '../../models/user-networks-item';
import NetworkButton from '../NetworkButton/NetworkButton';
import './Card.scss'

const Card = (user: UserInfoItem) => {

  /*--- Functions ---*/
  const getUserNetowrks = () => {
    if (user.networks)
      return Object.keys(user.networks)
        .map(key => ({ title: key, link: user.networks[key as keyof UserNetworks] }));

    else return [];
  }
  /*-----------------*/


  return (
    <article className='CardItem'>
      <img className='UserPhoto' src={user.userPhoto} alt="Profile user photo" />

      <section className='PrincipalInfos'>
        <h3>{user.name}</h3>
        <span>{user.biography}</span>
      </section>

      <section className='UserNetworks'>
        {getUserNetowrks().map(network => network.link || true ? <NetworkButton key={network.title} {...network} /> : null)}
      </section>

      <section className='UserAdditionalDescription'>{user.description}</section>
    </article>
  )
}

export default Card;
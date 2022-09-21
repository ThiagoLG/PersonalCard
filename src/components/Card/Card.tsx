import { UserInfoItem } from '../../models/user-info-item';
import './Card.scss'

const Card = (user: UserInfoItem) => {

    /*- Functions -*/
    const getUserNetowrks = () => {
        if(user.networks)
            return Object.keys(user.networks)
            //.reduce((curr, networks) => {
            //        if(user.networks[curr])
            //}, []);
        else return [];
    }
    /*-------------*/


    return (
        <article className='UserPhoto'>
            <img src={user.userPhoto} alt="Profile user photo"/>

            <section className='PrincipalInfos'>
                <h3>{user.name}</h3>
                <span>{user.biography}</span>
            </section>

            <section className='UserNetworks'>
                
            </section>
        </article>
    )
}

export default Card;
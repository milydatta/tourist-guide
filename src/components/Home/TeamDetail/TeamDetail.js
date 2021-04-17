import React from 'react';
import tina from '../../../images/tina.jpg';
import mike from '../../../images/mike.jpg';
import lisa from '../../../images/lisa.jpg';
import Team from '../Team/Team';


const teamData = [
    {
        img: tina,
        name:'Tina willy',
        post:'CEO & Founder',
        quote:'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet'
    },
    {
        img: mike,
        name:'Mike sandy',
        post:'CEO & Founder',
        quote:'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet'
    },
    {
        img: lisa,
        name:'Lisa linda',
        post:'CEO & Founder',
        quote:'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet'
    }
]

const TeamDetail = () => {
    return (
       <section className="teams my-5 py-5">
           <div className="container">
               <div className="section-header">
                  <h1 style={{textAlign:'center'}} className="mt-5">OUR <span className="text-success">TEAM</span> MEMBERS</h1>
               </div>
               <div className="container row mt-5">
                 {
                     teamData.map(team => <Team team={team} key={team.name}></Team>)
                 }
               </div>
           </div>
       </section>
    );
};

export default TeamDetail;

// .testimonials .card{
//     border-color: transparent;
// }

// .testimonials .card .card-footer{
//     background: transparent;
//     border: 0;
// }
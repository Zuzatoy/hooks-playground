
import React, { useState, useEffect } from 'react';


export default function MapCompany () {

    const [companies, setCompanies] = useState({
        organizations: [],
    });
    const [user, updateUser] = useState({});

    useEffect(() => {
        fetch('http://localhost:3000/data.json')
        .then(response => response.json())
        .then(({ companies, user }) => {
            setCompanies(companies);
            updateUser(user);
        })
    }, [])

        // componentDidMount() {
    //     fetch('http://localhost:3000/data.json')
    //       .then(response => response.json())
    //       .then(({ user, farms }) => this.setState(() => ({
    //         user,
    //         farmData: farms[0],
    //       }
    //         ))
    //       )
    //   }

    console.log('Im first one', companies[0], 'Im user', user);

    const organizations = companies.organizations;
  
      return (
        <div>
            <div>{user.name}</div>
                <div>  
                    {organizations.map(({ id, name, address }) => (
                    <div key={id}>
                <div>
                    <span>{name}</span>
                    <span>{address}</span>
              </div>
            </div>
                ))}
            </div>
        </div>
      )
    }
  
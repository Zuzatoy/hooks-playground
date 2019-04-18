/* eslint-disable no-lone-blocks */
import React, { useContext } from 'react';
import styled from 'styled-components';
import { ApplicationContext } from '../App';

export function Form () {
    // eslint-disable-next-line no-unused-expressions
    const { name, checked, onClick, onChange } = useContext(ApplicationContext);
    console.log(name);
    return (
        <div>
            <div>
                <input
                value={name}
                onChange={onChange}
                />
                <input
                type="checkbox"
                value={checked}
                onClick={onClick}
                />
            </div>
        </div>
            )
}

{/* <NewCustomerPageContext.Consumer>
        {({ additionalSiteServices, ...value }) => (
                <NewSiteDetailsWrapper>
                        Row>
                        <Item>Feature</Item>
                <Item>Name</Item>
</NewCustomerPageContext.Consumer> */}
                        


